import { useEffect, useRef, useState } from 'react';
import { CalendarDays, Clock3, Fuel, LoaderCircle, MapPinned, Plus, Route as RouteIcon, Save, Trash2 } from 'lucide-react';
import styled from 'styled-components';
import { Button, Field, Panel, PanelTitle, PageHero } from '../components/ui';
import { getDailyRouteDays, saveDailyRouteDay } from '../api';
import type { FuelType, SavedDailyRouteDay, VehicleType } from '../types';

interface RouteLeg {
  id: number;
  origin: string;
  destination: string;
  distanceKm: string;
  fuelType?: FuelType;
  routeDescription?: string;
  routeOptions?: RouteOption[];
  selectedRouteIndex?: number;
  originPlace?: PlaceOption;
  destinationPlace?: PlaceOption;
  manualDistance?: boolean;
}

interface RouteOption {
  distanceKm: number;
  durationSeconds: number;
}

type RouteDays = Record<string, RouteLeg[]>;

interface PlaceOption {
  label: string;
  coordinates: Coordinates;
}

interface FuelSettings {
  model: string;
  vehicleType: VehicleType;
  fuelType: FuelType;
  prices: Record<FuelType, number | null>;
  consumptions: Record<FuelType, number | null>;
}

const routeStorageKey = 'task-manager-daily-routes-v1';
const fuelFormStorageKey = 'task-manager-fuel-calculator-form-v1';
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const numberFormat = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
const fuelLabels: Record<FuelType, string> = { gasolina: 'Gasolina', alcool: 'Álcool' };

const Page = styled.div`
  display: grid;
  gap: 18px;
`;

const RoutePanel = styled(Panel)`
  padding: 20px;
`;

const Intro = styled.p`
  margin: -7px 0 17px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
  ${Field} { min-width: 190px; margin: 0; }
`;

const VehicleNote = styled.div`
  display: grid;
  gap: 4px;
  padding: 11px 13px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-raised);
  color: var(--muted);
  font-size: 12px;
  strong { color: var(--text); }
  a { color: var(--primary-strong); font-weight: 700; }
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 11px;
  margin-bottom: 18px;
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`;

const SummaryCard = styled.div`
  min-width: 0;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 5px; color: var(--text); font-size: 20px; overflow-wrap: anywhere; }
`;

const RouteList = styled.div`
  display: grid;
  gap: 10px;
`;

const LegCard = styled.article`
  display: grid;
  grid-template-columns: 30px minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(110px, .75fr) minmax(105px, .7fr) minmax(95px, auto) auto 36px;
  align-items: end;
  gap: 10px;
  padding: 13px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface);
  ${Field} { min-width: 0; margin: 0; }
  > div { min-width: 0; }
  @media (max-width: 1050px) { grid-template-columns: 30px 1fr 1fr 1fr; }
  @media (max-width: 580px) { grid-template-columns: 1fr 1fr; }
`;

const AddressField = styled.div`
  position: relative;
  min-width: 0;
`;

const AddressSuggestions = styled.div`
  position: absolute;
  z-index: 20;
  top: calc(100% + 4px);
  right: 0;
  left: 0;
  display: grid;
  max-height: 220px;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  box-shadow: var(--shadow-raised);
`;

const AddressSuggestion = styled.button`
  padding: 9px 10px;
  border: 0;
  border-radius: 7px;
  color: var(--text);
  background: transparent;
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  &:hover, &:focus-visible { background: var(--primary-soft); outline: none; }
`;

const AddressLookupStatus = styled.div`
  padding: 8px 10px;
  color: var(--muted);
  font-size: 11px;
`;

const LegNumber = styled.span`
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  align-self: center;
  border-radius: 9px;
  color: var(--primary-strong);
  background: var(--primary-soft);
  font-size: 12px;
  font-weight: 800;
  @media (max-width: 580px) { display: none; }
`;

const LegCost = styled.div`
  min-width: 0;
  padding-bottom: 8px;
  color: var(--muted);
  font-size: 11px;
  strong { display: block; margin-top: 4px; color: var(--text); font-size: 13px; }
  @media (max-width: 1050px) { grid-column: 2; }
  @media (max-width: 580px) { grid-column: 1; }
`;

const RouteButton = styled(Button)`
  min-height: 38px;
  white-space: nowrap;
  @media (max-width: 1050px) { grid-column: 3 / span 2; }
  @media (max-width: 580px) { grid-column: 1 / -1; justify-self: start; }
`;

const RemoveButton = styled.button`
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
  background: var(--surface-raised);
  cursor: pointer;
  &:hover { color: var(--error); border-color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
  @media (max-width: 1050px) { grid-column: 4; grid-row: 3; }
  @media (max-width: 580px) { grid-column: 2; grid-row: 3; justify-self: end; }
`;

const RouteHint = styled.p`
  grid-column: 2 / -1;
  margin: -2px 0 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.45;
  @media (max-width: 580px) { grid-column: 1 / -1; }
`;

const RouteOptions = styled.fieldset`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 8px;
  min-width: 0;
  margin: 0;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 10px;
  legend { padding: 0 5px; color: var(--muted); font-size: 11px; font-weight: 700; }
  @media (max-width: 580px) { grid-column: 1 / -1; }
`;

const RouteOptionLabel = styled.label<{ $selected: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
  padding: 9px;
  border: 1px solid ${({ $selected }) => $selected ? 'var(--primary)' : 'var(--border)'};
  border-radius: 9px;
  color: var(--text);
  background: ${({ $selected }) => $selected ? 'var(--primary-soft)' : 'var(--surface)'};
  cursor: pointer;
  input { margin-top: 2px; accent-color: var(--primary); }
  span { display: grid; gap: 3px; min-width: 0; font-size: 11px; }
  strong { font-size: 12px; }
`;

const MapAttribution = styled.p`
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 11px;
  a { color: var(--primary-strong); }
`;

const AddActions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 13px;
`;

const HistoryPanel = styled(RoutePanel)`
  display: grid;
  gap: 14px;
`;

const HistoryList = styled.div`
  display: grid;
  gap: 8px;
`;

const HistoryItem = styled.button`
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(2, minmax(110px, auto)) auto;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 11px;
  color: var(--text);
  background: var(--surface);
  text-align: left;
  cursor: pointer;
  &:hover { border-color: var(--primary); background: var(--primary-soft); }
  strong { display: block; font-size: 13px; }
  small { display: block; margin-top: 3px; color: var(--muted); font-size: 11px; }
  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    > span:first-child { grid-column: 1 / -1; }
  }
`;

const HistoryPagination = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3px;
`;

const EmptyMessage = styled.p`
  margin: 0;
  padding: 20px;
  border: 1px dashed var(--border);
  border-radius: 12px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
`;

function localDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function readRouteDays(): { days: RouteDays; warning: string | null } {
  try {
    const stored = localStorage.getItem(routeStorageKey);
    if (!stored) return { days: {}, warning: null };
    const parsed: unknown = JSON.parse(stored);
    if (!isRecord(parsed)) throw new Error('Formato inválido');

    const days: RouteDays = {};
    for (const [date, legs] of Object.entries(parsed)) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Array.isArray(legs)) throw new Error('Formato inválido');
      if (!legs.every(leg => isRecord(leg)
        && typeof leg.id === 'number'
        && typeof leg.origin === 'string'
        && typeof leg.destination === 'string'
        && typeof leg.distanceKm === 'string'
        && (leg.fuelType === undefined || leg.fuelType === 'gasolina' || leg.fuelType === 'alcool')
        && (leg.routeDescription === undefined || typeof leg.routeDescription === 'string')
        && (leg.routeOptions === undefined || (Array.isArray(leg.routeOptions) && leg.routeOptions.every(isRouteOption)))
        && (leg.selectedRouteIndex === undefined || (typeof leg.selectedRouteIndex === 'number' && Number.isInteger(leg.selectedRouteIndex) && leg.selectedRouteIndex >= 0))
        && (leg.manualDistance === undefined || typeof leg.manualDistance === 'boolean')
        && (leg.originPlace === undefined || isPlaceOption(leg.originPlace))
        && (leg.destinationPlace === undefined || isPlaceOption(leg.destinationPlace)))) {
        throw new Error('Formato inválido');
      }
      days[date] = legs as RouteLeg[];
    }
    return { days, warning: null };
  } catch {
    return { days: {}, warning: 'Não foi possível ler os percursos salvos. Os dados não serão substituídos automaticamente.' };
  }
}

function positiveNumber(value: unknown): number | null {
  if (typeof value !== 'string' && typeof value !== 'number') return null;
  if (typeof value === 'string' && !value.trim()) return null;
  const parsed = Number(String(value).replace(',', '.'));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function readFuelSettings(): FuelSettings {
  const fallback: FuelSettings = {
    model: 'Veículo não configurado',
    vehicleType: 'carro',
    fuelType: 'gasolina',
    prices: { gasolina: null, alcool: null },
    consumptions: { gasolina: null, alcool: null },
  };
  try {
    const stored = localStorage.getItem(fuelFormStorageKey);
    if (!stored) return fallback;
    const value: unknown = JSON.parse(stored);
    if (!isRecord(value)) return fallback;
    const fuelType: FuelType = value.fuel_type === 'alcool' ? 'alcool' : 'gasolina';
    return {
      model: typeof value.vehicle_model === 'string' && value.vehicle_model.trim() ? value.vehicle_model : fallback.model,
      vehicleType: value.vehicle_type === 'moto' ? 'moto' : 'carro',
      fuelType,
      prices: {
        gasolina: positiveNumber(value.gasoline_price),
        alcool: positiveNumber(value.alcohol_price),
      },
      consumptions: {
        gasolina: positiveNumber(value.gasoline_consumption),
        alcool: positiveNumber(value.alcohol_consumption),
      },
    };
  } catch {
    return fallback;
  }
}

function formatRouteDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number);
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(year, month - 1, day));
}

function routeLegsFromSavedDay(day: SavedDailyRouteDay): RouteLeg[] {
  return day.legs.map(leg => ({
    id: leg.id,
    origin: leg.origin,
    destination: leg.destination,
    distanceKm: String(leg.distance_km),
    fuelType: leg.fuel_type,
    routeDescription: leg.route_description ?? undefined,
    routeOptions: leg.route_options?.map(option => ({
      distanceKm: option.distance_km,
      durationSeconds: option.duration_seconds,
    })),
    selectedRouteIndex: leg.selected_route_index ?? undefined,
  }));
}

function parseDistance(value: string): number {
  const distance = Number(value.replace(',', '.'));
  return Number.isFinite(distance) && distance > 0 ? distance : 0;
}

interface Coordinates {
  longitude: number;
  latitude: number;
}

function isRouteOption(value: unknown): value is RouteOption {
  return isRecord(value)
    && typeof value.distanceKm === 'number'
    && Number.isFinite(value.distanceKm)
    && value.distanceKm > 0
    && typeof value.durationSeconds === 'number'
    && Number.isFinite(value.durationSeconds)
    && value.durationSeconds >= 0;
}

function isPlaceOption(value: unknown): value is PlaceOption {
  return isRecord(value)
    && typeof value.label === 'string'
    && isRecord(value.coordinates)
    && typeof value.coordinates.longitude === 'number'
    && Number.isFinite(value.coordinates.longitude)
    && typeof value.coordinates.latitude === 'number'
    && Number.isFinite(value.coordinates.latitude);
}

function isCoordinates(value: unknown): value is [number, number] {
  return Array.isArray(value)
    && typeof value[0] === 'number'
    && Number.isFinite(value[0])
    && typeof value[1] === 'number'
    && Number.isFinite(value[1]);
}

function locationLabel(properties: Record<string, unknown>, fallback: string): string {
  const name = typeof properties.name === 'string' ? properties.name : '';
  const detail = ['street', 'city', 'state', 'country']
    .map(key => properties[key])
    .filter((part): part is string => typeof part === 'string' && Boolean(part.trim()))
    .filter(part => part !== name);
  return [name || fallback, ...detail].join(', ');
}

function placeFromFeature(value: unknown, fallback: string): PlaceOption | null {
  if (!isRecord(value) || !isRecord(value.geometry) || !isRecord(value.properties)
    || !isCoordinates(value.geometry.coordinates)) return null;
  const [longitude, latitude] = value.geometry.coordinates;
  return {
    label: locationLabel(value.properties, fallback),
    coordinates: { longitude, latitude },
  };
}

async function fetchMapJson(url: string): Promise<unknown> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`O serviço de mapas respondeu com erro (${response.status}).`);
    return await response.json() as unknown;
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('A consulta ao serviço de mapas demorou demais. Tente novamente.');
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function searchLocations(query: string): Promise<PlaceOption[]> {
  const params = new URLSearchParams({ q: query, limit: '5' });
  const result: unknown = await fetchMapJson(`https://photon.komoot.io/api/?${params.toString()}`);
  if (!isRecord(result) || !Array.isArray(result.features)) {
    throw new Error('A busca de endereços retornou uma resposta inválida.');
  }
  return result.features
    .map(feature => placeFromFeature(feature, query))
    .filter((place): place is PlaceOption => place !== null);
}

async function geocodeLocation(query: string): Promise<PlaceOption> {
  const matches = await searchLocations(query);
  if (matches.length === 0) {
    throw new Error(`Não encontrei o local "${query}". Inclua cidade e estado e tente novamente.`);
  }
  return matches[0];
}

async function calculateRoadDistance(
  origin: string,
  destination: string,
  originPlace?: PlaceOption,
  destinationPlace?: PlaceOption
): Promise<{ options: RouteOption[]; description: string }> {
  const start = originPlace ?? await geocodeLocation(origin);
  const end = destinationPlace ?? await geocodeLocation(destination);
  const coordinates = [
    `${start.coordinates.longitude},${start.coordinates.latitude}`,
    `${end.coordinates.longitude},${end.coordinates.latitude}`,
  ].join(';');
  const result: unknown = await fetchMapJson(`https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=false&alternatives=true`);
  if (!isRecord(result) || result.code !== 'Ok' || !Array.isArray(result.routes)) {
    throw new Error('Não foi possível calcular a rota de carro entre esses locais.');
  }
  const options = result.routes
    .map(route => {
      if (!isRecord(route) || typeof route.distance !== 'number' || !Number.isFinite(route.distance)
        || route.distance <= 0 || typeof route.duration !== 'number' || !Number.isFinite(route.duration)) return null;
      return { distanceKm: route.distance / 1000, durationSeconds: route.duration };
    })
    .filter((option): option is RouteOption => option !== null);
  if (options.length === 0) {
    throw new Error('O serviço de mapas não retornou uma distância válida para essa rota.');
  }
  return {
    options,
    description: `${start.label} → ${end.label}`,
  };
}

function formatDuration(seconds: number): string {
  const totalMinutes = Math.round(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes} min`;
  return minutes === 0 ? `${hours} h` : `${hours} h ${minutes} min`;
}

interface AddressAutocompleteProps {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  selectedPlace?: PlaceOption;
  onChange: (value: string) => void;
  onSelect: (place: PlaceOption) => void;
}

function AddressAutocomplete({
  id, label, value, placeholder, selectedPlace, onChange, onSelect,
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<PlaceOption[]>([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect(() => {
    const query = value.trim();
    if (query.length < 3 || selectedPlace?.label === value) {
      setSuggestions([]);
      setSearching(false);
      setSearchError(null);
      return;
    }

    let active = true;
    const timerId = window.setTimeout(() => {
      setSearching(true);
      setSearchError(null);
      void searchLocations(query).then(results => {
        if (!active) return;
        setSuggestions(results);
        setSearchError(results.length ? null : 'Nenhum endereço encontrado. Tente incluir cidade e estado.');
      }).catch(error => {
        if (!active) return;
        setSuggestions([]);
        setSearchError(error instanceof Error ? error.message : 'Não foi possível buscar endereços.');
      }).finally(() => {
        if (active) setSearching(false);
      });
    }, 350);

    return () => {
      active = false;
      window.clearTimeout(timerId);
    };
  }, [selectedPlace, value]);

  const showSuggestions = searching || suggestions.length > 0 || searchError !== null;

  return (
    <AddressField>
      <Field htmlFor={id}>{label}
        <input
          id={id}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={suggestions.length > 0}
          aria-controls={`${id}-suggestions`}
          autoComplete="off"
          value={value}
          onChange={event => onChange(event.target.value)}
          placeholder={placeholder}
        />
      </Field>
      {showSuggestions && (
        <AddressSuggestions id={`${id}-suggestions`} role="listbox">
          {searching && <AddressLookupStatus role="status">Buscando endereços...</AddressLookupStatus>}
          {!searching && searchError && <AddressLookupStatus role="status">{searchError}</AddressLookupStatus>}
          {!searching && suggestions.map((place, index) => (
            <AddressSuggestion
              key={`${place.label}-${place.coordinates.longitude}-${place.coordinates.latitude}`}
              type="button"
              role="option"
              aria-selected="false"
              onClick={() => {
                onSelect(place);
                setSuggestions([]);
                setSearchError(null);
              }}
            >
              {place.label || `Resultado ${index + 1}`}
            </AddressSuggestion>
          ))}
        </AddressSuggestions>
      )}
    </AddressField>
  );
}

export default function DailyRoutesPage() {
  const [initialRoutes] = useState(readRouteDays);
  const [routeDays, setRouteDays] = useState<RouteDays>(initialRoutes.days);
  const [selectedDate, setSelectedDate] = useState(localDateString);
  const [fuelSettings] = useState(readFuelSettings);
  const [storageWarning, setStorageWarning] = useState(initialRoutes.warning);
  const [routeError, setRouteError] = useState<string | null>(null);
  const [historyError, setHistoryError] = useState<string | null>(null);
  const [historyNotice, setHistoryNotice] = useState<string | null>(null);
  const [historyDays, setHistoryDays] = useState<SavedDailyRouteDay[]>([]);
  const [historyPage, setHistoryPage] = useState(1);
  const [historyHasMore, setHistoryHasMore] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [savingDay, setSavingDay] = useState(false);
  const [calculatingLegId, setCalculatingLegId] = useState<number | null>(null);
  const skipInitialSave = useRef(Boolean(initialRoutes.warning));
  const savedSelectedDay = historyDays.find(day => day.route_date === selectedDate);
  const activeFuelSettings: FuelSettings = savedSelectedDay ? {
    model: savedSelectedDay.vehicle_model,
    vehicleType: savedSelectedDay.vehicle_type,
    fuelType: savedSelectedDay.selected_fuel,
    prices: savedSelectedDay.fuel_prices,
    consumptions: savedSelectedDay.consumption_km_per_l,
  } : fuelSettings;
  const legs = routeDays[selectedDate] ?? [];
  const totals = legs.reduce((total, leg) => {
    const distance = parseDistance(leg.distanceKm);
    const fuelType = leg.fuelType ?? activeFuelSettings.fuelType;
    const consumption = activeFuelSettings.consumptions[fuelType];
    const price = activeFuelSettings.prices[fuelType];
    return {
      distance: total.distance + distance,
      liters: total.liters + (consumption ? distance / consumption : 0),
      cost: total.cost + (consumption && price ? (distance / consumption) * price : 0),
      hasDistance: total.hasDistance || distance > 0,
      missingConsumption: total.missingConsumption || (distance > 0 && !consumption),
      missingPriceOrConsumption: total.missingPriceOrConsumption || (distance > 0 && (!consumption || !price)),
    };
  }, { distance: 0, liters: 0, cost: 0, hasDistance: false, missingConsumption: false, missingPriceOrConsumption: false });
  const totalLiters = totals.hasDistance && !totals.missingConsumption ? totals.liters : null;
  const totalCost = totals.hasDistance && !totals.missingPriceOrConsumption ? totals.cost : null;

  useEffect(() => {
    if (skipInitialSave.current) {
      skipInitialSave.current = false;
      return;
    }
    try {
      localStorage.setItem(routeStorageKey, JSON.stringify(routeDays));
      setStorageWarning(null);
    } catch {
      setStorageWarning('Não foi possível salvar os percursos neste navegador.');
    }
  }, [initialRoutes.warning, routeDays]);

  async function loadHistory(page: number, append = false) {
    setLoadingHistory(true);
    setHistoryError(null);
    try {
      const response = await getDailyRouteDays(page, 10);
      setHistoryDays(current => {
        const days = append ? [...current, ...response.data] : response.data;
        const uniqueDays = new Map(days.map(day => [day.route_date, day]));
        return [...uniqueDays.values()].sort((a, b) => b.route_date.localeCompare(a.route_date));
      });
      setHistoryPage(response.pagination.page);
      setHistoryHasMore(response.pagination.hasNextPage);
    } catch (error) {
      setHistoryError(error instanceof Error
        ? `Não foi possível carregar o histórico: ${error.message}`
        : 'Não foi possível carregar o histórico do banco de dados.');
    } finally {
      setLoadingHistory(false);
    }
  }

  useEffect(() => {
    void loadHistory(1);
  }, []);

  function updateLegs(update: (current: RouteLeg[]) => RouteLeg[]) {
    setRouteDays(current => ({ ...current, [selectedDate]: update(current[selectedDate] ?? []) }));
  }

  function addLeg() {
    updateLegs(current => {
      const lastLeg = current[current.length - 1];
      const nextId = current.reduce((max, leg) => Math.max(max, leg.id), 0) + 1;
      return [...current, {
        id: nextId,
        origin: lastLeg?.destination ?? '',
        destination: '',
        distanceKm: '',
        fuelType: activeFuelSettings.fuelType,
      }];
    });
  }

  function editLeg(id: number, field: keyof Omit<RouteLeg, 'id'>, value: string) {
    updateLegs(current => current.map(leg => {
      if (leg.id !== id) return leg;
      if (field === 'origin') return { ...leg, origin: value, originPlace: undefined, distanceKm: '', routeDescription: undefined, routeOptions: undefined, selectedRouteIndex: undefined, manualDistance: false };
      if (field === 'destination') return { ...leg, destination: value, destinationPlace: undefined, distanceKm: '', routeDescription: undefined, routeOptions: undefined, selectedRouteIndex: undefined, manualDistance: false };
      if (field === 'distanceKm') return { ...leg, distanceKm: value, routeDescription: undefined, routeOptions: undefined, selectedRouteIndex: undefined, manualDistance: Boolean(value.trim()) };
      if (field === 'fuelType') return { ...leg, fuelType: value === 'alcool' ? 'alcool' : 'gasolina' };
      return leg;
    }));
  }

  function selectLegPlace(id: number, side: 'origin' | 'destination', place: PlaceOption) {
    updateLegs(current => current.map(leg => leg.id === id
      ? {
        ...leg,
        [side]: place.label,
        [side === 'origin' ? 'originPlace' : 'destinationPlace']: place,
        distanceKm: '',
        routeDescription: undefined,
        routeOptions: undefined,
        selectedRouteIndex: undefined,
        manualDistance: false,
      }
      : leg));
  }

  function selectRouteOption(legId: number, routeIndex: number) {
    updateLegs(current => current.map(leg => {
      if (leg.id !== legId || !leg.routeOptions || !leg.routeOptions[routeIndex]) return leg;
      return {
        ...leg,
        selectedRouteIndex: routeIndex,
        distanceKm: leg.routeOptions[routeIndex].distanceKm.toFixed(2),
        manualDistance: false,
      };
    }));
  }

  function removeLeg(id: number) {
    updateLegs(current => current.filter(leg => leg.id !== id));
  }

  async function saveSelectedDay() {
    setHistoryError(null);
    setHistoryNotice(null);
    if (legs.length === 0) {
      setHistoryError('Adicione ao menos um trecho antes de salvar o dia.');
      return;
    }
    if (legs.some(leg => !leg.origin.trim() || !leg.destination.trim() || parseDistance(leg.distanceKm) <= 0)) {
      setHistoryError('Preencha origem, destino e uma distância válida em todos os trechos antes de salvar.');
      return;
    }

    setSavingDay(true);
    try {
      const saved = await saveDailyRouteDay(selectedDate, {
        vehicle_model: activeFuelSettings.model,
        vehicle_type: activeFuelSettings.vehicleType,
        selected_fuel: activeFuelSettings.fuelType,
        fuel_prices: activeFuelSettings.prices,
        consumption_km_per_l: activeFuelSettings.consumptions,
        legs: legs.map(leg => ({
          id: leg.id,
          origin: leg.origin.trim(),
          destination: leg.destination.trim(),
          distance_km: parseDistance(leg.distanceKm),
          fuel_type: leg.fuelType ?? fuelSettings.fuelType,
          ...(leg.routeDescription ? { route_description: leg.routeDescription } : {}),
          ...(leg.routeOptions ? {
            route_options: leg.routeOptions.map(option => ({
              distance_km: option.distanceKm,
              duration_seconds: option.durationSeconds,
            })),
          } : {}),
          ...(leg.selectedRouteIndex === undefined ? {} : { selected_route_index: leg.selectedRouteIndex }),
        })),
      });
      setHistoryDays(current => [
        saved,
        ...current.filter(day => day.route_date !== saved.route_date),
      ].sort((a, b) => b.route_date.localeCompare(a.route_date)));
      setHistoryNotice(`Percurso de ${formatRouteDate(saved.route_date)} salvo no histórico.`);
    } catch (error) {
      setHistoryError(error instanceof Error
        ? `Não foi possível salvar o percurso: ${error.message}`
        : 'Não foi possível salvar o percurso no banco de dados.');
    } finally {
      setSavingDay(false);
    }
  }

  function openSavedDay(day: SavedDailyRouteDay) {
    setSelectedDate(day.route_date);
    setRouteDays(current => ({ ...current, [day.route_date]: routeLegsFromSavedDay(day) }));
    setHistoryNotice(`Exibindo o percurso salvo de ${formatRouteDate(day.route_date)}.`);
    setHistoryError(null);
  }

  async function calculateLegRoute(leg: RouteLeg) {
    if (!leg.origin.trim() || !leg.destination.trim()) {
      setRouteError('Informe a origem e o destino antes de calcular a rota.');
      return;
    }
    setRouteError(null);
    setCalculatingLegId(leg.id);
    const calculationDate = selectedDate;
    try {
      const result = await calculateRoadDistance(
        leg.origin.trim(),
        leg.destination.trim(),
        leg.originPlace,
        leg.destinationPlace
      );
      setRouteDays(current => ({
        ...current,
        [calculationDate]: (current[calculationDate] ?? []).map(item => item.id === leg.id
          ? {
            ...item,
            distanceKm: result.options[0].distanceKm.toFixed(2),
            routeDescription: result.description,
            routeOptions: result.options,
            selectedRouteIndex: 0,
            manualDistance: false,
          }
          : item),
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      setRouteError(message === 'Failed to fetch'
        ? 'Não foi possível acessar o serviço de mapas. Confira sua conexão e tente novamente.'
        : message || 'Não foi possível calcular a rota. Confira os locais e tente novamente.');
    } finally {
      setCalculatingLegId(null);
    }
  }

  const pendingAutoLeg = legs.find(leg => leg.originPlace && leg.destinationPlace
    && !leg.routeOptions && !leg.manualDistance);
  const autoCalculationKey = pendingAutoLeg
    ? `${selectedDate}:${pendingAutoLeg.id}:${pendingAutoLeg.originPlace?.coordinates.longitude},${pendingAutoLeg.originPlace?.coordinates.latitude}:${pendingAutoLeg.destinationPlace?.coordinates.longitude},${pendingAutoLeg.destinationPlace?.coordinates.latitude}`
    : null;
  const lastAutoCalculationKey = useRef<string | null>(null);

  useEffect(() => {
    if (!pendingAutoLeg || !autoCalculationKey || calculatingLegId !== null
      || lastAutoCalculationKey.current === autoCalculationKey) return;
    lastAutoCalculationKey.current = autoCalculationKey;
    void calculateLegRoute(pendingAutoLeg);
  }, [autoCalculationKey, calculatingLegId, pendingAutoLeg]);

  return (
    <Page>
      <PageHero>
        <div>
          <span><MapPinned size={14} /> Despesas e transporte</span>
          <h1>Percursos do dia.</h1>
          <p>Calcule automaticamente os quilômetros entre paradas e acompanhe o gasto com combustível.</p>
        </div>
      </PageHero>

      <RoutePanel>
        <PanelTitle><CalendarDays size={19} /> Registro de deslocamentos</PanelTitle>
        <Intro>Escolha uma sugestão para a origem e o destino: as opções de rota serão calculadas automaticamente. Você também pode calcular novamente ou corrigir a distância manualmente. Os registros ficam salvos neste navegador por data.</Intro>
        {storageWarning && <p role="status" style={{ margin: '-8px 0 14px', color: 'var(--error)', fontSize: 12 }}>{storageWarning}</p>}
        {routeError && <p role="alert" style={{ margin: '-8px 0 14px', color: 'var(--error)', fontSize: 12 }}>{routeError}</p>}

        <Toolbar>
          <Field htmlFor="daily-route-date">Data do percurso
            <input id="daily-route-date" type="date" value={selectedDate} onChange={event => setSelectedDate(event.target.value)} />
          </Field>
          <VehicleNote>
            <strong><Fuel size={14} style={{ verticalAlign: 'text-bottom' }} /> {activeFuelSettings.model}</strong>
            <span>Combustível padrão: {fuelLabels[activeFuelSettings.fuelType]}. Preços e consumos vêm da calculadora.</span>
            {(!activeFuelSettings.prices.gasolina || !activeFuelSettings.prices.alcool
              || !activeFuelSettings.consumptions.gasolina || !activeFuelSettings.consumptions.alcool)
              && <a href="/fuel-calculator">Configure preços e consumos dos combustíveis</a>}
          </VehicleNote>
        </Toolbar>

        <SummaryGrid aria-live="polite">
          <SummaryCard><small>Distância total</small><strong>{numberFormat.format(totals.distance)} km</strong></SummaryCard>
          <SummaryCard><small>Combustível estimado</small><strong>{totalLiters === null ? '—' : `${numberFormat.format(totalLiters)} L`}</strong></SummaryCard>
          <SummaryCard><small>Gasto estimado</small><strong>{totalCost === null ? '—' : currency.format(totalCost)}</strong></SummaryCard>
        </SummaryGrid>

        {legs.length === 0 ? (
          <EmptyMessage>Nenhum trecho registrado para esta data. Adicione a primeira parada para começar.</EmptyMessage>
        ) : (
          <RouteList>
            {legs.map((leg, index) => {
              const distance = parseDistance(leg.distanceKm);
              const fuelType = leg.fuelType ?? activeFuelSettings.fuelType;
              const consumption = activeFuelSettings.consumptions[fuelType];
              const price = activeFuelSettings.prices[fuelType];
              const cost = consumption && price && distance
                ? (distance / consumption) * price
                : null;
              return (
                <LegCard key={leg.id}>
                  <LegNumber aria-label={`Trecho ${index + 1}`}>{index + 1}</LegNumber>
                  <AddressAutocomplete
                    id={`route-origin-${leg.id}`}
                    label="Origem"
                    value={leg.origin}
                    placeholder="Ex.: Mata Escura, Salvador - BA"
                    selectedPlace={leg.originPlace}
                    onChange={value => editLeg(leg.id, 'origin', value)}
                    onSelect={place => selectLegPlace(leg.id, 'origin', place)}
                  />
                  <AddressAutocomplete
                    id={`route-destination-${leg.id}`}
                    label="Destino"
                    value={leg.destination}
                    placeholder="Ex.: Shopping Salvador, Salvador - BA"
                    selectedPlace={leg.destinationPlace}
                    onChange={value => editLeg(leg.id, 'destination', value)}
                    onSelect={place => selectLegPlace(leg.id, 'destination', place)}
                  />
                  <Field htmlFor={`route-fuel-${leg.id}`}>Combustível usado
                    <select id={`route-fuel-${leg.id}`} value={fuelType} onChange={event => editLeg(leg.id, 'fuelType', event.target.value)}>
                      <option value="gasolina">Gasolina</option>
                      <option value="alcool">Álcool</option>
                    </select>
                  </Field>
                  <Field htmlFor={`route-distance-${leg.id}`}>Distância (km)
                    <input id={`route-distance-${leg.id}`} type="number" min="0" step="any" value={leg.distanceKm} onChange={event => editLeg(leg.id, 'distanceKm', event.target.value)} placeholder="Ex.: 12,5" />
                  </Field>
                  <LegCost>Gasto do trecho<strong>{cost === null ? '—' : currency.format(cost)}</strong></LegCost>
                  <RouteButton type="button" disabled={calculatingLegId !== null} onClick={() => { void calculateLegRoute(leg); }}>
                    {calculatingLegId === leg.id ? <LoaderCircle size={15} /> : <RouteIcon size={15} />}
                    {calculatingLegId === leg.id ? 'Calculando...' : 'Calcular opções de rota'}
                  </RouteButton>
                  <RemoveButton type="button" aria-label={`Remover trecho ${index + 1}`} title="Remover trecho" onClick={() => removeLeg(leg.id)}><Trash2 /></RemoveButton>
                  {leg.routeDescription && <RouteHint>Rota calculada: {leg.routeDescription}</RouteHint>}
                  {leg.routeOptions && leg.routeOptions.length > 0 && (
                    <RouteOptions>
                      <legend>{leg.routeOptions.length > 1 ? 'Escolha uma opção de rota' : 'Rota encontrada'}</legend>
                      {leg.routeOptions.map((option, routeIndex) => (
                        <RouteOptionLabel key={`${option.distanceKm}-${option.durationSeconds}`} $selected={(leg.selectedRouteIndex ?? 0) === routeIndex}>
                          <input
                            type="radio"
                            name={`route-option-${leg.id}`}
                            checked={(leg.selectedRouteIndex ?? 0) === routeIndex}
                            onChange={() => selectRouteOption(leg.id, routeIndex)}
                          />
                          <span>
                            <strong>Opção {routeIndex + 1} · {numberFormat.format(option.distanceKm)} km</strong>
                            <span>Duração estimada: {formatDuration(option.durationSeconds)}</span>
                          </span>
                        </RouteOptionLabel>
                      ))}
                    </RouteOptions>
                  )}
                </LegCard>
              );
            })}
          </RouteList>
        )}

        <MapAttribution>
          Cálculo de rotas de carro via Photon e OSRM, com dados do <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>. Os locais informados são enviados a esses serviços para buscar a rota.
        </MapAttribution>

        <AddActions>
          <Button type="button" onClick={addLeg}><Plus size={16} /> Adicionar trecho</Button>
          <Button type="button" $variant="primary" onClick={() => { void saveSelectedDay(); }} disabled={savingDay || legs.length === 0}>
            {savingDay ? <LoaderCircle size={16} /> : <Save size={16} />}
            {savingDay ? 'Salvando...' : 'Salvar dia no histórico'}
          </Button>
        </AddActions>
      </RoutePanel>

      <HistoryPanel>
        <PanelTitle><Clock3 size={19} /> Histórico de percursos</PanelTitle>
        <Intro>Compare os quilômetros e o gasto por dia. Salvar novamente uma data atualiza o registro daquele dia.</Intro>
        {historyNotice && <p role="status" style={{ margin: 0, color: 'var(--primary-strong)', fontSize: 12 }}>{historyNotice}</p>}
        {historyError && <p role="alert" style={{ margin: 0, color: 'var(--error)', fontSize: 12 }}>{historyError}</p>}
        {loadingHistory && historyDays.length === 0 ? (
          <AddressLookupStatus role="status">Carregando histórico do banco de dados...</AddressLookupStatus>
        ) : historyDays.length === 0 ? (
          <EmptyMessage>Nenhum dia salvo ainda. Registre um percurso e escolha “Salvar dia no histórico”.</EmptyMessage>
        ) : (
          <HistoryList>
            {historyDays.map(day => (
              <HistoryItem key={day.route_date} type="button" onClick={() => openSavedDay(day)}>
                <span>
                  <strong>{formatRouteDate(day.route_date)}</strong>
                  <small>{day.vehicle_model} · {day.legs.length} {day.legs.length === 1 ? 'trecho' : 'trechos'} · {fuelLabels[day.selected_fuel]}</small>
                </span>
                <span>
                  <strong>{numberFormat.format(day.total_distance_km)} km</strong>
                  <small>Distância total</small>
                </span>
                <span>
                  <strong>{day.total_fuel_cost === null ? 'Não calculado' : currency.format(day.total_fuel_cost)}</strong>
                  <small>Gasto estimado</small>
                </span>
                <span aria-hidden="true">Abrir</span>
              </HistoryItem>
            ))}
          </HistoryList>
        )}
        {historyHasMore && (
          <HistoryPagination>
            <Button type="button" onClick={() => { void loadHistory(historyPage + 1, true); }} disabled={loadingHistory}>
              {loadingHistory ? 'Carregando...' : 'Carregar mais dias'}
            </Button>
          </HistoryPagination>
        )}
      </HistoryPanel>
    </Page>
  );
}
