import { useEffect, useState, type FormEvent } from 'react';
import axios from 'axios';
import { Fuel, LoaderCircle, Receipt } from 'lucide-react';
import styled from 'styled-components';
import { Button, Field, Panel, PanelTitle, PageHero } from '../components/ui';
import { calculateFuelCost } from '../api';
import type {
  FuelCalculatorPayload, FuelCalculatorResult, FuelType, VehicleType,
} from '../types';

const Page = styled.div`
  display: grid;
  gap: 20px;
`;

const CalculatorPanel = styled(Panel)`
  padding: 20px;
`;

const FuelForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: end;
  gap: 12px;
  ${Field} { margin: 0; }
  @media (max-width: 760px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const FuelFormActions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  padding-top: 3px;
`;

const FuelResults = styled.div`
  display: grid;
  gap: 13px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
`;

const FuelResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  h3 { margin: 0; color: var(--text); font-size: 16px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
`;

const FuelMethod = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 9px;
  border-radius: 999px;
  color: var(--primary-strong);
  background: var(--primary-soft);
  font-size: 11px;
  font-weight: 700;
`;

const FuelRecommendation = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 760px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const FuelMetric = styled.div<{ $highlight?: boolean }>`
  min-width: 0;
  padding: 13px;
  border: 1px solid ${({ $highlight }) => $highlight ? 'var(--primary)' : 'var(--border)'};
  border-radius: 12px;
  background: ${({ $highlight }) => $highlight ? 'var(--primary-soft)' : 'var(--surface-raised)'};
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 5px; color: ${({ $highlight }) => $highlight ? 'var(--primary-strong)' : 'var(--text)'}; font-size: 17px; overflow-wrap: anywhere; }
`;

const FuelEstimateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

const FuelEstimate = styled.div`
  padding: 13px;
  border: 1px solid var(--border);
  border-radius: 12px;
  h4 { margin: 0 0 9px; color: var(--text); font-size: 13px; }
  p { display: flex; justify-content: space-between; gap: 10px; margin: 6px 0 0; color: var(--muted); font-size: 12px; }
  strong { color: var(--text); text-align: right; }
`;

const FuelNotes = styled.ul`
  margin: 0;
  padding-left: 19px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
`;

interface FuelFormState {
  vehicle_model: string;
  vehicle_type: VehicleType;
  fuel_type: FuelType;
  gasoline_price: string;
  alcohol_price: string;
  gasoline_consumption: string;
  alcohol_consumption: string;
  distance_km: string;
}

interface FuelRequestError {
  message: string;
  details: string[];
}

type VehiclePreset = 'hb20-2016' | 'cg-160' | 'bros-150-2012' | 'custom';

const fuelLabels: Record<FuelType, string> = { gasolina: 'Gasolina', alcool: 'Álcool' };
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const fuelFormStorageKey = 'task-manager-fuel-calculator-form-v1';

function money(value: number): string {
  return currency.format(value);
}

function formatFuelNumber(value: number, maximumFractionDigits = 2): string {
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits }).format(value);
}

function fuelErrorDetails(value: unknown): string[] {
  if (typeof value === 'string') return value ? [value] : [];
  if (Array.isArray(value)) return value.map(item => typeof item === 'string' ? item : JSON.stringify(item) ?? String(item));
  if (value && typeof value === 'object') return [JSON.stringify(value) ?? String(value)];
  return [];
}

function getFuelError(error: unknown): FuelRequestError {
  if (axios.isAxiosError<{ error?: unknown; details?: unknown }>(error)) {
    const data = error.response?.data;
    return {
      message: typeof data?.error === 'string' ? data.error : 'Não foi possível calcular os custos de combustível.',
      details: fuelErrorDetails(data?.details),
    };
  }
  return {
    message: error instanceof Error ? error.message : 'Não foi possível calcular os custos de combustível.',
    details: [],
  };
}

function emptyFuelForm(): FuelFormState {
  return {
    vehicle_model: 'Hyundai HB20 2016 1.0',
    vehicle_type: 'carro',
    fuel_type: 'gasolina',
    gasoline_price: '6.19',
    alcohol_price: '4.29',
    gasoline_consumption: '',
    alcohol_consumption: '',
    distance_km: '1000',
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function readSavedFuelForm(): { form: FuelFormState; warning: string | null } {
  const defaults = emptyFuelForm();
  try {
    const stored = localStorage.getItem(fuelFormStorageKey);
    if (!stored) return { form: defaults, warning: null };
    const value: unknown = JSON.parse(stored);
    if (!isRecord(value)) return { form: defaults, warning: null };
    const isPreviousMotorcycleExample = value.vehicle_model === 'Honda CG 160' && value.vehicle_type === 'moto';

    return {
      form: {
        vehicle_model: isPreviousMotorcycleExample
          ? defaults.vehicle_model
          : typeof value.vehicle_model === 'string' ? value.vehicle_model : defaults.vehicle_model,
        vehicle_type: isPreviousMotorcycleExample
          ? defaults.vehicle_type
          : value.vehicle_type === 'carro' || value.vehicle_type === 'moto' ? value.vehicle_type : defaults.vehicle_type,
        fuel_type: value.fuel_type === 'gasolina' || value.fuel_type === 'alcool' ? value.fuel_type : defaults.fuel_type,
        gasoline_price: typeof value.gasoline_price === 'string' ? value.gasoline_price : defaults.gasoline_price,
        alcohol_price: typeof value.alcohol_price === 'string' ? value.alcohol_price : defaults.alcohol_price,
        gasoline_consumption: isPreviousMotorcycleExample && value.gasoline_consumption === '40'
          ? defaults.gasoline_consumption
          : typeof value.gasoline_consumption === 'string' ? value.gasoline_consumption : defaults.gasoline_consumption,
        alcohol_consumption: isPreviousMotorcycleExample && value.alcohol_consumption === '30'
          ? defaults.alcohol_consumption
          : typeof value.alcohol_consumption === 'string' ? value.alcohol_consumption : defaults.alcohol_consumption,
        distance_km: typeof value.distance_km === 'string' && value.distance_km.trim()
          ? value.distance_km
          : defaults.distance_km,
      },
      warning: null,
    };
  } catch {
    return { form: defaults, warning: 'Não foi possível acessar os dados salvos neste navegador.' };
  }
}

function positiveNumber(value: string, label: string, optional = false): number | undefined {
  if (!value.trim() && optional) return undefined;
  const parsed = Number(value.replace(',', '.'));
  if (!Number.isFinite(parsed) || parsed <= 0) throw new Error(`${label} deve ser maior que zero.`);
  return parsed;
}

function requiredPositiveNumber(value: string, label: string): number {
  const parsed = positiveNumber(value, label);
  if (parsed === undefined) throw new Error(`${label} deve ser maior que zero.`);
  return parsed;
}

function getVehiclePreset(model: string): VehiclePreset {
  if (model === 'Hyundai HB20 2016 1.0') return 'hb20-2016';
  if (model === 'Honda CG 160') return 'cg-160';
  if (model === 'Honda NXR 150 Bros 2012') return 'bros-150-2012';
  return 'custom';
}

export default function FuelCalculatorPage() {
  const [initialFuelState] = useState(readSavedFuelForm);
  const [fuelForm, setFuelForm] = useState<FuelFormState>(initialFuelState.form);
  const [storageWarning, setStorageWarning] = useState<string | null>(initialFuelState.warning);
  const [submittedFuelRequest, setSubmittedFuelRequest] = useState<FuelCalculatorPayload | null>(null);
  const [fuelResult, setFuelResult] = useState<FuelCalculatorResult | null>(null);
  const [fuelError, setFuelError] = useState<FuelRequestError | null>(null);
  const [calculatingFuel, setCalculatingFuel] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(fuelFormStorageKey, JSON.stringify(fuelForm));
      setStorageWarning(null);
    } catch {
      setStorageWarning('Não foi possível salvar os dados do veículo neste navegador.');
    }
  }, [fuelForm]);

  function selectVehiclePreset(preset: VehiclePreset) {
    if (preset === 'hb20-2016') {
      setFuelForm(current => ({
        ...current,
        vehicle_model: 'Hyundai HB20 2016 1.0',
        vehicle_type: 'carro',
        gasoline_consumption: '',
        alcohol_consumption: '',
      }));
      return;
    }

    if (preset === 'cg-160') {
      setFuelForm(current => ({
        ...current,
        vehicle_model: 'Honda CG 160',
        vehicle_type: 'moto',
        gasoline_consumption: '40',
        alcohol_consumption: '30',
      }));
      return;
    }

    if (preset === 'bros-150-2012') {
      setFuelForm(current => ({
        ...current,
        vehicle_model: 'Honda NXR 150 Bros 2012',
        vehicle_type: 'moto',
        gasoline_consumption: '30',
        alcohol_consumption: '25',
      }));
      return;
    }

    setFuelForm(current => ({
      ...current,
      vehicle_model: '',
      gasoline_consumption: '',
      alcohol_consumption: '',
    }));
  }

  async function submitFuelCalculator(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFuelError(null);
    setFuelResult(null);
    setCalculatingFuel(true);
    try {
      const model = fuelForm.vehicle_model.trim();
      if (model.length < 1 || model.length > 100) {
        throw new Error('O modelo do veículo deve ter entre 1 e 100 caracteres.');
      }

      const gasolineConsumption = positiveNumber(fuelForm.gasoline_consumption, 'Consumo com gasolina', true);
      const alcoholConsumption = positiveNumber(fuelForm.alcohol_consumption, 'Consumo com álcool', true);
      const distance = positiveNumber(fuelForm.distance_km, 'Distância', true);
      const payload: FuelCalculatorPayload = {
        vehicle_model: model,
        vehicle_type: fuelForm.vehicle_type,
        fuel_type: fuelForm.fuel_type,
        fuel_prices: {
          gasolina: requiredPositiveNumber(fuelForm.gasoline_price, 'Preço da gasolina'),
          alcool: requiredPositiveNumber(fuelForm.alcohol_price, 'Preço do álcool'),
        },
        consumption_km_per_l: {
          ...(gasolineConsumption === undefined ? {} : { gasolina: gasolineConsumption }),
          ...(alcoholConsumption === undefined ? {} : { alcool: alcoholConsumption }),
        },
        ...(distance === undefined ? {} : { distance_km: distance }),
      };
      setSubmittedFuelRequest(payload);
      setFuelResult(await calculateFuelCost(payload));
    } catch (calculationError) {
      setFuelError(getFuelError(calculationError));
    } finally {
      setCalculatingFuel(false);
    }
  }

  const selectedFuelConsumption = fuelResult && submittedFuelRequest
    ? submittedFuelRequest.consumption_km_per_l[fuelResult.selected_fuel]
    : undefined;
  const weeklyDistance = fuelResult?.estimates.distance_km ?? submittedFuelRequest?.distance_km;
  const weeklySelectedFuelCost = fuelResult && submittedFuelRequest
    ? fuelResult.estimates.selected_fuel_cost.cost
      ?? (weeklyDistance !== undefined && selectedFuelConsumption !== undefined
        ? (weeklyDistance / selectedFuelConsumption) * fuelResult.fuel_prices[fuelResult.selected_fuel]
        : null)
    : null;

  return (
    <Page>
      <PageHero>
        <div>
          <span><Receipt size={14} /> Despesas e transporte</span>
          <h1>Calculadora de combustível.</h1>
          <p>Compare o custo por combustível e descubra qual compensa para o seu veículo.</p>
        </div>
      </PageHero>

      <CalculatorPanel>
        <PanelTitle><Fuel size={19} />Comparar custos de combustível</PanelTitle>
        <p style={{ margin: '-6px 0 16px', color: 'var(--muted)', fontSize: 12 }}>
          Os dados do veículo ficam salvos neste navegador. Ajuste os valores para o seu veículo e informe quantos quilômetros roda por semana para estimar o gasto semanal.
        </p>
        {storageWarning && <p role="status" style={{ margin: '-8px 0 14px', color: 'var(--error)', fontSize: 12 }}>{storageWarning}</p>}
        <FuelForm onSubmit={event => { void submitFuelCalculator(event); }}>
          <Field htmlFor="fuel-vehicle-preset">Veículo cadastrado
            <select id="fuel-vehicle-preset" value={getVehiclePreset(fuelForm.vehicle_model)} onChange={event => selectVehiclePreset(event.target.value as VehiclePreset)}>
              <option value="hb20-2016">Hyundai HB20 2016 1.0</option>
              <option value="cg-160">Honda CG 160</option>
              <option value="bros-150-2012">Honda NXR 150 Bros 2012</option>
              <option value="custom">Outro veículo</option>
            </select>
          </Field>
          {getVehiclePreset(fuelForm.vehicle_model) === 'bros-150-2012' && (
            <p style={{ gridColumn: '1 / -1', margin: '-8px 0 2px', color: 'var(--muted)', fontSize: 12, lineHeight: 1.5 }}>
              Consumos iniciais aproximados para a Bros 150: 30 km/L na gasolina e 25 km/L no álcool. Ajuste para a média real da sua moto.
            </p>
          )}
          {getVehiclePreset(fuelForm.vehicle_model) === 'custom' && (
            <Field htmlFor="fuel-vehicle-model">Modelo do veículo *
              <input id="fuel-vehicle-model" maxLength={100} value={fuelForm.vehicle_model} onChange={event => setFuelForm(current => ({ ...current, vehicle_model: event.target.value }))} placeholder="Digite o modelo" required />
            </Field>
          )}
          <Field htmlFor="fuel-vehicle-type">Tipo de veículo *
            <select id="fuel-vehicle-type" value={fuelForm.vehicle_type} onChange={event => setFuelForm(current => ({ ...current, vehicle_type: event.target.value as VehicleType }))}>
              <option value="carro">Carro</option>
              <option value="moto">Moto</option>
            </select>
          </Field>
          <Field htmlFor="fuel-selected-type">Combustível usado atualmente *
            <select id="fuel-selected-type" value={fuelForm.fuel_type} onChange={event => setFuelForm(current => ({ ...current, fuel_type: event.target.value as FuelType }))}>
              <option value="gasolina">Gasolina</option>
              <option value="alcool">Álcool</option>
            </select>
          </Field>
          <Field htmlFor="fuel-gasoline-price">Preço da gasolina (R$/L) *
            <input id="fuel-gasoline-price" type="number" min="0.01" step="any" value={fuelForm.gasoline_price} onChange={event => setFuelForm(current => ({ ...current, gasoline_price: event.target.value }))} placeholder="6,19" required />
          </Field>
          <Field htmlFor="fuel-alcohol-price">Preço do álcool (R$/L) *
            <input id="fuel-alcohol-price" type="number" min="0.01" step="any" value={fuelForm.alcohol_price} onChange={event => setFuelForm(current => ({ ...current, alcohol_price: event.target.value }))} placeholder="4,29" required />
          </Field>
          <Field htmlFor="fuel-distance">Quantos quilômetros roda por semana? (km) *
            <input id="fuel-distance" type="number" min="0.01" step="any" value={fuelForm.distance_km} onChange={event => setFuelForm(current => ({ ...current, distance_km: event.target.value }))} placeholder="Ex.: 250" required />
          </Field>
          <Field htmlFor="fuel-gasoline-consumption">Consumo com gasolina (km/L)
            <input id="fuel-gasoline-consumption" type="number" min="0.01" step="any" value={fuelForm.gasoline_consumption} onChange={event => setFuelForm(current => ({ ...current, gasoline_consumption: event.target.value }))} placeholder="Opcional" />
          </Field>
          <Field htmlFor="fuel-alcohol-consumption">Consumo com álcool (km/L)
            <input id="fuel-alcohol-consumption" type="number" min="0.01" step="any" value={fuelForm.alcohol_consumption} onChange={event => setFuelForm(current => ({ ...current, alcohol_consumption: event.target.value }))} placeholder="Opcional" />
          </Field>
          <FuelFormActions>
            <Button type="submit" $variant="primary" disabled={calculatingFuel}>
              {calculatingFuel ? <LoaderCircle /> : <Fuel />}
              {calculatingFuel ? 'Calculando...' : 'Comparar combustíveis'}
            </Button>
          </FuelFormActions>
        </FuelForm>

        {fuelError && (
          <Panel role="alert" style={{ marginTop: 16, padding: 14, color: 'var(--error)' }}>
            <strong>{fuelError.message}</strong>
            {fuelError.details.length > 0 && (
              <ul style={{ margin: '6px 0 0', paddingLeft: 19 }}>
                {fuelError.details.map((detail, index) => <li key={`${index}-${detail}`}>{detail}</li>)}
              </ul>
            )}
          </Panel>
        )}

        {fuelResult && (
          <FuelResults aria-live="polite">
            <FuelResultHeader>
              <div>
                <h3>Resultado para {fuelResult.vehicle.model}</h3>
                <p>
                  {fuelResult.vehicle.type === 'moto' ? 'Moto' : 'Carro'}
                  {fuelResult.estimates.distance_km === null ? '' : ` · ${formatFuelNumber(fuelResult.estimates.distance_km)} km por semana`}
                </p>
              </div>
              <FuelMethod>
                {fuelResult.analysis_method === 'regra_dos_70_por_cento' ? 'Regra aproximada dos 70%' : 'Consumo informado'}
              </FuelMethod>
            </FuelResultHeader>

            <FuelRecommendation>
              <FuelMetric>
                <small>Combustível recomendado</small>
                <strong>{fuelLabels[fuelResult.comparison.recommended_fuel]}</strong>
              </FuelMetric>
              <FuelMetric>
                <small>Preço de equilíbrio do álcool</small>
                <strong>{fuelResult.comparison.ethanol_break_even_price === null ? 'Não disponível' : money(fuelResult.comparison.ethanol_break_even_price)}</strong>
              </FuelMetric>
              <FuelMetric>
                <small>Álcool em relação à gasolina</small>
                <strong>{fuelResult.comparison.ethanol_price_as_percentage_of_gasoline === null ? 'Não disponível' : `${formatFuelNumber(fuelResult.comparison.ethanol_price_as_percentage_of_gasoline)}%`}</strong>
              </FuelMetric>
              <FuelMetric>
                <small>Economia estimada na semana</small>
                <strong>{fuelResult.comparison.estimated_savings_for_distance === null ? 'Informe consumos e distância' : money(fuelResult.comparison.estimated_savings_for_distance)}</strong>
              </FuelMetric>
              <FuelMetric $highlight>
                <small>Você gastaria por semana com {fuelLabels[fuelResult.selected_fuel].toLowerCase()}</small>
                <strong>{weeklySelectedFuelCost === null ? 'Informe o consumo do combustível atual' : money(weeklySelectedFuelCost)}</strong>
              </FuelMetric>
            </FuelRecommendation>

            <p style={{ margin: 0, color: fuelResult.comparison.selected_fuel_is_cheaper ? 'var(--primary-strong)' : 'var(--muted)', fontSize: 12 }}>
              O combustível atual ({fuelLabels[fuelResult.selected_fuel]}) {fuelResult.comparison.selected_fuel_is_cheaper ? 'é o mais econômico.' : 'não é o mais econômico nesta comparação.'}
            </p>

            <FuelEstimateGrid>
              {(['gasolina', 'alcool'] as const).map(fuel => {
                const estimate = fuelResult.estimates[fuel];
                return (
                  <FuelEstimate key={fuel}>
                    <h4>{fuelLabels[fuel]} · {money(fuelResult.fuel_prices[fuel])}/L</h4>
                    <p><span>Litros estimados</span><strong>{estimate.liters === null ? 'Não disponível' : `${formatFuelNumber(estimate.liters, 3)} L`}</strong></p>
                    <p><span>Gasto por semana</span><strong>{estimate.cost === null ? 'Informe o consumo para estimar' : money(estimate.cost)}</strong></p>
                    <p><span>Custo por km</span><strong>{estimate.cost_per_km === null ? 'Não disponível' : `${money(estimate.cost_per_km)}/km`}</strong></p>
                  </FuelEstimate>
                );
              })}
            </FuelEstimateGrid>

            {fuelResult.notes.length > 0 && <FuelNotes>{fuelResult.notes.map((note, index) => <li key={`${index}-${note}`}>{note}</li>)}</FuelNotes>}
          </FuelResults>
        )}
      </CalculatorPanel>
    </Page>
  );
}
