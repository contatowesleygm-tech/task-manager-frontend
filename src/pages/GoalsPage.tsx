import { useMemo, useState, type FormEvent } from 'react';
import {
  CalendarDays,
  Check,
  CheckCircle2,
  Circle,
  Flag,
  LoaderCircle,
  Pencil,
  Plus,
  Save,
  Target,
  Trash2,
  X,
} from 'lucide-react';
import styled from 'styled-components';
import {
  Button,
  EmptyState,
  Field,
  ItemEditor,
  ItemInput,
  ItemRow,
  Muted,
  NumberBubble,
  PageTitle,
  Panel,
  PanelTitle,
  Status,
} from '../components/ui';
import type {
  CreateGoalPayload,
  GoalStep,
  LifeGoal,
  ObjectiveStatus,
  TaskId,
  UpdateGoalPayload,
} from '../types';

const Intro = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 18px;
  margin-bottom: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 13px;
  line-height: 1.55;
  svg {
    flex: 0 0 auto;
    color: var(--primary);
  }
  strong {
    color: var(--text);
  }
`;

const GoalFormPanel = styled(Panel)`
  margin-bottom: 20px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 0.45fr);
  gap: 16px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const GoalList = styled.div`
  display: grid;
  gap: 15px;
`;

const GoalCard = styled.article`
  display: grid;
  gap: 16px;
  padding: 22px;
  border: 1px solid #e5ebf3;
  border-left: 3px solid var(--primary);
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 14px rgba(23, 38, 61, 0.025);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
  &:hover {
    border-color: #cbd9ed;
    box-shadow: 0 10px 26px rgba(23, 38, 61, 0.07);
    transform: translateY(-1px);
  }
  @media (max-width: 520px) {
    padding: 17px;
  }
`;

const GoalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const GoalIdentity = styled.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  gap: 11px;
  > svg {
    flex: 0 0 auto;
    margin-top: 1px;
    color: #3477e2;
  }
  h2 {
    margin: 0;
    color: #1d2b40;
    font-size: 17px;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }
  p {
    margin: 5px 0 0;
    color: #71819a;
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`;

const GoalActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  @media (max-width: 560px) {
    width: 100%;
  }
`;

const SmallButton = styled(Button)`
  min-height: 34px;
  padding: 7px 10px;
  gap: 6px;
  font-size: 11px;
  svg {
    width: 15px;
    height: 15px;
  }
`;

const GoalMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 14px;
  color: #63738b;
  font-size: 11px;
  svg {
    width: 14px;
    height: 14px;
    color: #91a0b4;
  }
  border-top: 1px solid var(--border);
  padding-top: 14px;
`;

const GoalStatusSelect = styled.select`
  min-height: 32px;
  padding: 5px 9px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  background: var(--surface-raised);
  font: inherit;
  &:focus-visible {
    outline: 3px solid #b8d0fb;
    outline-offset: 1px;
  }
`;

const ProgressBlock = styled.div`
  display: grid;
  gap: 7px;
  padding: 13px 14px;
  border-radius: 10px;
  background: var(--surface-raised);
`;

const ProgressCaption = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong {
    color: var(--text);
  }
`;

const ProgressTrack = styled.div`
  height: 7px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div {
    height: 100%;
    border-radius: inherit;
    background: var(--primary);
    transition: width 0.2s ease;
  }
`;

const StepsList = styled.div`
  display: grid;
  gap: 8px;
`;

const StepsHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--text);
  font-size: 13px;
  font-weight: 800;
  small {
    color: #71819a;
    font-size: 11px;
    font-weight: 500;
  }
`;

const GoalCardFooter = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 4px;
  border-top: 1px solid var(--border);
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const StepRow = styled.div<{ $completed: boolean }>`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
  padding: 10px 11px;
  border: 1px solid ${({ $completed }) => ($completed ? '#d8eee2' : 'var(--border)')};
  border-radius: 9px;
  color: ${({ $completed }) => ($completed ? 'var(--muted)' : 'var(--text)')};
  background: ${({ $completed }) => ($completed ? '#f5fbf7' : 'var(--surface-raised)')};
  font-size: 12px;
  span {
    min-width: 0;
    flex: 1;
    overflow-wrap: anywhere;
    text-decoration: ${({ $completed }) =>
      $completed ? 'line-through' : 'none'};
  }
  > svg {
    flex: 0 0 auto;
    color: ${({ $completed }) => ($completed ? '#21875c' : '#a4afbd')};
  }
`;

const StepControls = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 5px;
`;

const IconButton = styled.button`
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 7px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  &:hover:not(:disabled) {
    color: var(--primary);
    background: var(--surface-raised);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  svg {
    width: 15px;
    height: 15px;
  }
`;

const AddStepForm = styled.form`
  display: flex;
  flex: 1;
  gap: 8px;
  input {
    min-width: 0;
    flex: 1;
  }
`;

const EmptyGoals = styled(Panel)`
  margin-top: 18px;
`;

interface GoalsPageProps {
  goals: LifeGoal[];
  loading: boolean;
  saving: boolean;
  onCreate: (payload: CreateGoalPayload) => Promise<boolean>;
  onUpdate: (goalId: TaskId, payload: UpdateGoalPayload) => Promise<boolean>;
  onDelete: (goal: LifeGoal) => Promise<boolean>;
  onAddStep: (goalId: TaskId, title: string) => Promise<boolean>;
  onToggleStep: (
    goalId: TaskId,
    step: GoalStep,
    isCompleted: boolean
  ) => Promise<boolean>;
  onDeleteStep: (goalId: TaskId, step: GoalStep) => Promise<boolean>;
}

function getDefaultTargetDate(): string {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
}

function getDateKey(value: string): string {
  return value.slice(0, 10);
}

function displayDate(value: string): string {
  return new Date(`${getDateKey(value)}T12:00:00`).toLocaleDateString('pt-BR');
}

function daysUntil(value: string): number {
  const target = new Date(`${getDateKey(value)}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - today.getTime()) / 86_400_000);
}

function dueLabel(days: number): string {
  if (days < 0)
    return `Atrasado há ${Math.abs(days)} ${Math.abs(days) === 1 ? 'dia' : 'dias'}`;
  if (days === 0) return 'Prazo hoje';
  if (days === 1) return 'Falta 1 dia';
  return `Faltam ${days} dias`;
}

export default function GoalsPage({
  goals,
  loading,
  saving,
  onCreate,
  onUpdate,
  onDelete,
  onAddStep,
  onToggleStep,
  onDeleteStep,
}: GoalsPageProps) {
  const [editingGoal, setEditingGoal] = useState<LifeGoal | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState(getDefaultTargetDate);
  const [status, setStatus] = useState<ObjectiveStatus>('pendente');
  const [steps, setSteps] = useState(['']);
  const [newStepTitles, setNewStepTitles] = useState<Record<string, string>>(
    {}
  );
  const [busyStepIds, setBusyStepIds] = useState<string[]>([]);

  const orderedGoals = useMemo(
    () =>
      [...goals].sort((a, b) =>
        getDateKey(a.target_date).localeCompare(getDateKey(b.target_date))
      ),
    [goals]
  );
  const completedGoals = goals.filter(
    (goal) => goal.status === 'concluido'
  ).length;
  const inProgressGoals = goals.filter(
    (goal) => goal.status === 'em_andamento'
  ).length;

  function resetForm() {
    setEditingGoal(null);
    setShowForm(false);
    setTitle('');
    setDescription('');
    setTargetDate(getDefaultTargetDate());
    setStatus('pendente');
    setSteps(['']);
  }

  function startCreate() {
    resetForm();
    setShowForm(true);
  }

  function startEdit(goal: LifeGoal) {
    setEditingGoal(goal);
    setShowForm(true);
    setTitle(goal.title);
    setDescription(goal.description ?? '');
    setTargetDate(getDateKey(goal.target_date));
    setStatus(goal.status);
    setSteps([]);
  }

  function updateStep(index: number, value: string) {
    setSteps((current) =>
      current.map((step, stepIndex) => (stepIndex === index ? value : step))
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanSteps = steps.map((step) => step.trim()).filter(Boolean);
    if (!title.trim()) return;
    if (!editingGoal && !cleanSteps.length) return;

    const saved = editingGoal
      ? await onUpdate(editingGoal.id, {
          title: title.trim(),
          description: description.trim() || null,
          target_date: targetDate,
          status,
        })
      : await onCreate({
          title: title.trim(),
          description: description.trim() || null,
          target_date: targetDate,
          status,
          steps: cleanSteps.map((step, index) => ({
            title: step,
            status: 'pendente',
            step_order: index + 1,
          })),
        });
    if (saved) resetForm();
  }

  async function handleAddStep(
    event: FormEvent<HTMLFormElement>,
    goal: LifeGoal
  ) {
    event.preventDefault();
    const key = String(goal.id);
    const stepTitle = (newStepTitles[key] ?? '').trim();
    if (!stepTitle) return;
    if (await onAddStep(goal.id, stepTitle)) {
      setNewStepTitles((current) => ({ ...current, [key]: '' }));
    }
  }

  async function toggleStep(goal: LifeGoal, step: GoalStep) {
    const key = String(step.id);
    setBusyStepIds((current) => [...current, key]);
    try {
      await onToggleStep(goal.id, step, step.status !== 'concluido');
    } finally {
      setBusyStepIds((current) => current.filter((id) => id !== key));
    }
  }

  async function removeStep(goal: LifeGoal, step: GoalStep) {
    if (goal.steps.length <= 1) return;
    if (!window.confirm(`Remover a etapa “${step.title}” deste objetivo?`))
      return;
    const key = String(step.id);
    setBusyStepIds((current) => [...current, key]);
    try {
      await onDeleteStep(goal.id, step);
    } finally {
      setBusyStepIds((current) => current.filter((id) => id !== key));
    }
  }

  return (
    <>
      <PageTitle>
        <div>
          <h1>Objetivos de vida</h1>
          <p>
            Transforme seus planos em etapas claras e acompanhe seu progresso.
          </p>
        </div>
        <Button $variant="primary" onClick={showForm ? resetForm : startCreate}>
          {showForm ? <X /> : <Plus />}
          {showForm ? 'Fechar formulário' : 'Novo objetivo'}
        </Button>
      </PageTitle>

      <Intro>
        <Target size={20} />
        <span>
          <strong>Comece pelo resultado que deseja alcançar.</strong> Defina uma
          data realista e divida o caminho em pequenas ações que você possa
          acompanhar.
        </span>
      </Intro>

      {showForm && (
        <GoalFormPanel>
          <PanelTitle>
            <Flag size={19} color="#2164dc" />
            {editingGoal ? 'Editar objetivo' : 'Planejar um objetivo'}
          </PanelTitle>
          <form
            onSubmit={(event) => {
              void handleSubmit(event);
            }}
          >
            <FormGrid>
              <Field>
                Qual objetivo você quer alcançar? *
                <input
                  autoFocus
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  maxLength={200}
                  placeholder="Ex.: Comprar minha casa"
                  required
                />
              </Field>
              <Field>
                Data prevista *
                <input
                  type="date"
                  value={targetDate}
                  onChange={(event) => setTargetDate(event.target.value)}
                  required
                />
              </Field>
              <Field>
                Status
                <GoalStatusSelect
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value as ObjectiveStatus)
                  }
                >
                  <option value="pendente">Pendente</option>
                  <option value="em_andamento">Em andamento</option>
                  <option value="concluido">Concluído</option>
                </GoalStatusSelect>
              </Field>
            </FormGrid>
            <Field>
              Por que esse objetivo é importante? <small>(opcional)</small>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                maxLength={5000}
                placeholder="Descreva o que esse objetivo significa para você e como pretende chegar lá."
              />
            </Field>
            {!editingGoal && (
              <>
                <PanelTitle style={{ marginTop: 8, marginBottom: 6 }}>
                  Etapas para chegar lá *
                </PanelTitle>
                <Muted>
                  Escreva ações pequenas, concretas e que você possa concluir
                  uma de cada vez.
                </Muted>
                <ItemEditor style={{ marginTop: 12 }}>
                  {steps.map((step, index) => (
                    <ItemRow key={index}>
                      <NumberBubble>{index + 1}</NumberBubble>
                      <ItemInput
                        aria-label={`Etapa ${index + 1}`}
                        value={step}
                        maxLength={200}
                        onChange={(event) =>
                          updateStep(index, event.target.value)
                        }
                        placeholder={
                          index === 0
                            ? 'Ex.: Pesquisar o valor de entrada e os custos'
                            : 'Próxima ação'
                        }
                        required={index === 0}
                      />
                      <SmallButton
                        type="button"
                        $variant="danger"
                        aria-label={`Remover etapa ${index + 1}`}
                        disabled={steps.length <= 1}
                        onClick={() =>
                          setSteps((current) =>
                            current.filter(
                              (_, stepIndex) => stepIndex !== index
                            )
                          )
                        }
                      >
                        <Trash2 />
                      </SmallButton>
                    </ItemRow>
                  ))}
                  <div>
                    <Button
                      type="button"
                      onClick={() =>
                        setSteps((current) =>
                          current.length < 50 ? [...current, ''] : current
                        )
                      }
                      disabled={steps.length >= 50}
                    >
                      <Plus />
                      Adicionar etapa
                    </Button>
                  </div>
                </ItemEditor>
              </>
            )}
            {editingGoal && (
              <Muted>
                As etapas existentes continuam no objetivo. Você pode adicionar,
                concluir ou remover etapas na lista abaixo.
              </Muted>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 9,
                flexWrap: 'wrap',
                marginTop: 16,
              }}
            >
              <Button type="button" onClick={resetForm}>
                Cancelar
              </Button>
              <Button type="submit" $variant="primary" disabled={saving}>
                {saving ? <LoaderCircle className="spin" /> : <Save />}
                {saving
                  ? 'Salvando...'
                  : editingGoal
                    ? 'Salvar alterações'
                    : 'Salvar objetivo'}
              </Button>
            </div>
          </form>
        </GoalFormPanel>
      )}

      <SummaryGrid aria-label="Resumo dos objetivos">
        <SummaryCard>
          <SummaryIcon $tone="blue">
            <Target />
          </SummaryIcon>
          <div>
            <span>Objetivos ativos</span>
            <strong>{goals.length - completedGoals}</strong>
          </div>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon $tone="green">
            <CheckCircle2 />
          </SummaryIcon>
          <div>
            <span>Objetivos alcançados</span>
            <strong>{completedGoals}</strong>
          </div>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon $tone="blue">
            <Flag />
          </SummaryIcon>
          <div>
            <span>Em andamento</span>
            <strong>{inProgressGoals}</strong>
          </div>
        </SummaryCard>
      </SummaryGrid>

      {loading ? (
        <EmptyState>
          <LoaderCircle />
          <p>Carregando objetivos...</p>
        </EmptyState>
      ) : orderedGoals.length === 0 ? (
        <EmptyGoals>
          <EmptyState>
            <Target size={34} />
            <h3>Seus objetivos começam aqui</h3>
            <p>
              Registre um objetivo, escolha uma data prevista e monte um plano
              de ação para alcançá-lo.
            </p>
            <div style={{ marginTop: 16 }}>
              <Button $variant="primary" onClick={startCreate}>
                <Plus />
                Planejar meu primeiro objetivo
              </Button>
            </div>
          </EmptyState>
        </EmptyGoals>
      ) : (
        <GoalList>
          {orderedGoals.map((goal) => {
            const orderedSteps = [...goal.steps].sort(
              (a, b) => a.step_order - b.step_order
            );
            const finishedSteps = orderedSteps.filter(
              (step) => step.status === 'concluido'
            ).length;
            const progress = orderedSteps.length
              ? Math.round((finishedSteps / orderedSteps.length) * 100)
              : 0;
            const complete = goal.status === 'concluido';
            const remainingDays = daysUntil(goal.target_date);
            const stepKey = String(goal.id);

            return (
              <GoalCard key={goal.id}>
                <GoalHeader>
                  <GoalIdentity>
                    <Target size={20} />
                    <div>
                      <h2>{goal.title}</h2>
                      {goal.description && <p>{goal.description}</p>}
                    </div>
                  </GoalIdentity>
                  <GoalActions>
                    <SmallButton onClick={() => startEdit(goal)}>
                      <Pencil />
                      Editar
                    </SmallButton>
                    <SmallButton
                      $variant="danger"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Excluir o objetivo “${goal.title}” e todas as etapas?`
                          )
                        ) {
                          void onDelete(goal);
                        }
                      }}
                    >
                      <Trash2 />
                      Excluir
                    </SmallButton>
                  </GoalActions>
                </GoalHeader>

                <GoalMeta>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <CalendarDays />
                    Previsto para {displayDate(goal.target_date)}
                  </span>
                  <GoalStatusSelect
                    aria-label={`Status do objetivo ${goal.title}`}
                    value={goal.status}
                    onChange={(event) => {
                      void onUpdate(goal.id, {
                        status: event.target.value as ObjectiveStatus,
                      });
                    }}
                  >
                    <option value="pendente">Pendente</option>
                    <option value="em_andamento">Em andamento</option>
                    <option value="concluido">Concluído</option>
                  </GoalStatusSelect>
                  {!complete && remainingDays < 0 && (
                    <Status $done={false}>Prazo vencido</Status>
                  )}
                  {!complete && remainingDays >= 0 && (
                    <span>{dueLabel(remainingDays)}</span>
                  )}
                </GoalMeta>

                <ProgressBlock>
                  <ProgressCaption>
                    <span>Progresso do plano</span>
                    <strong>
                      {finishedSteps} de {orderedSteps.length} etapas ·{' '}
                      {progress}%
                    </strong>
                  </ProgressCaption>
                  <ProgressTrack aria-label={`${progress}% concluído`}>
                    <div style={{ width: `${progress}%` }} />
                  </ProgressTrack>
                </ProgressBlock>
                <StepsHeading>
                  <span>Plano de ação</span>
                  <small>
                    {orderedSteps.length}{' '}
                    {orderedSteps.length === 1 ? 'etapa' : 'etapas'}
                  </small>
                </StepsHeading>

                <StepsList aria-label={`Etapas para alcançar ${goal.title}`}>
                  {orderedSteps.map((step) => {
                    const busy = busyStepIds.includes(String(step.id));
                    const stepCompleted = step.status === 'concluido';
                    return (
                      <StepRow key={step.id} $completed={stepCompleted}>
                        {stepCompleted ? (
                          <CheckCircle2 size={17} />
                        ) : (
                          <Circle size={17} />
                        )}
                        <span>{step.title}</span>
                        <StepControls>
                          <IconButton
                            type="button"
                            aria-label={
                              stepCompleted
                                ? `Reabrir etapa ${step.title}`
                                : `Concluir etapa ${step.title}`
                            }
                            title={
                              stepCompleted
                                ? 'Reabrir etapa'
                                : 'Marcar como concluída'
                            }
                            disabled={busy}
                            onClick={() => {
                              void toggleStep(goal, step);
                            }}
                          >
                            {busy ? (
                              <LoaderCircle className="spin" />
                            ) : (
                              <Check />
                            )}
                          </IconButton>
                          <IconButton
                            type="button"
                            aria-label={`Remover etapa ${step.title}`}
                            title="Remover etapa"
                            disabled={busy || orderedSteps.length <= 1}
                            onClick={() => {
                              void removeStep(goal, step);
                            }}
                          >
                            <X />
                          </IconButton>
                        </StepControls>
                      </StepRow>
                    );
                  })}
                </StepsList>

                <GoalCardFooter>
                  <AddStepForm
                    onSubmit={(event) => {
                      void handleAddStep(event, goal);
                    }}
                  >
                    <ItemInput
                      aria-label={`Nova etapa para ${goal.title}`}
                      value={newStepTitles[stepKey] ?? ''}
                      maxLength={200}
                      placeholder="Adicionar uma próxima ação..."
                      onChange={(event) =>
                        setNewStepTitles((current) => ({
                          ...current,
                          [stepKey]: event.target.value,
                        }))
                      }
                    />
                    <SmallButton type="submit" $variant="primary">
                      <Plus />
                      Adicionar etapa
                    </SmallButton>
                  </AddStepForm>
                </GoalCardFooter>
              </GoalCard>
            );
          })}
        </GoalList>
      )}
    </>
  );
}

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const SummaryCard = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 15px 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 4px 14px rgba(23, 38, 61, 0.03);
  > div > span {
    display: block;
    color: var(--muted);
    font-size: 12px;
  }
  > div > strong {
    display: block;
    margin-top: 3px;
    color: var(--text);
    font-size: 24px;
  }
`;

const SummaryIcon = styled.span<{ $tone: 'blue' | 'green' }>`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({ $tone }) => ($tone === 'green' ? '#15815d' : '#2164dc')};
  background: ${({ $tone }) => ($tone === 'green' ? '#e6f7ef' : '#e9f1ff')};
  svg {
    width: 19px;
    height: 19px;
  }
`;
