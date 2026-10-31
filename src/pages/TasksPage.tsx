import { CalendarDays, ChevronLeft, ChevronRight, Eye, ListChecks, LoaderCircle, Plus, Search, Trash2, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  Button, EmptyState, Filter, Filters, PageTitle, Panel, Status,
} from '../components/ui';
import type { Task, TaskId, TaskPagination, TaskPriority } from '../types';

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`;

const OverviewCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 5px 18px var(--shadow);
  &::after { position: absolute; right: -20px; bottom: -38px; width: 92px; height: 92px; border-radius: 50%; background: color-mix(in srgb, var(--primary) 8%, transparent); content: ''; }
  @media (max-width: 620px) { padding: 13px; grid-template-columns: 36px minmax(0, 1fr); gap: 9px; }
  > div > span { display: block; color: var(--muted); font-size: 12px; }
  > div > strong { display: block; margin-top: 3px; color: var(--text); font-size: 25px; line-height: 1.2; }
`;

const OverviewIcon = styled.span<{ $tone: 'blue' | 'green' | 'gray' }>`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({ $tone }) => $tone === 'green' ? '#15815d' : $tone === 'gray' ? 'var(--muted)' : 'var(--primary)'};
  background: ${({ $tone }) => $tone === 'green' ? '#e6f7ef' : $tone === 'gray' ? 'var(--surface-raised)' : 'color-mix(in srgb, var(--primary) 16%, var(--surface))'};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`;

const FilterBar = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
  box-shadow: 0 4px 14px var(--shadow);
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

const SearchBox = styled.label`
  display: flex;
  min-width: 0;
  height: 42px;
  align-items: center;
  gap: 9px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
  background: var(--surface-raised);
  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
  &:focus-within { border-color: var(--primary); background: var(--surface); box-shadow: 0 0 0 3px var(--focus); }
  > svg { width: 17px; height: 17px; flex: 0 0 auto; }
  input { width: 100%; min-width: 0; padding: 0; border: 0; outline: 0; color: var(--text); background: transparent; font: inherit; font-size: 13px; }
  input::placeholder { color: var(--muted); }
`;

const FilterControls = styled(Filters)`
  display: flex;
  gap: 8px;
  @media (max-width: 760px) { display: grid; grid-template-columns: 1fr 1fr; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
  select { min-width: 170px; height: 42px; }
  @media (max-width: 760px) { select { min-width: 0; width: 100%; } }
`;

const StatusTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 0 14px;
  padding: 4px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 11px;
  background: var(--surface-raised);
`;

const StatusTab = styled.button<{ $active: boolean }>`
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 6px 11px;
  border: 0;
  border-radius: 8px;
  color: ${({ $active }) => $active ? 'var(--primary-strong)' : 'var(--muted)'};
  background: ${({ $active }) => $active ? 'var(--surface)' : 'transparent'};
  box-shadow: ${({ $active }) => $active ? '0 1px 4px var(--shadow)' : 'none'};
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  &:hover { color: var(--primary); }
  &:focus-visible { outline: 3px solid var(--focus); outline-offset: 1px; }
  span { display: inline-grid; min-width: 20px; height: 20px; place-items: center; padding: 0 5px; border-radius: 6px; color: inherit; background: ${({ $active }) => $active ? 'color-mix(in srgb, var(--primary) 16%, var(--surface))' : 'var(--border)'}; font-size: 10px; }
`;

const ListHeading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin: 0 2px 10px;
  h2 { margin: 0; color: var(--text); font-size: 14px; font-weight: 750; }
  span { color: var(--muted); font-size: 11px; }
`;

const PaginationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 14px;
  margin-top: 14px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  @media (max-width: 560px) { align-items: stretch; flex-direction: column; }
`;

const PaginationInfo = styled.span`
  color: var(--muted);
  font-size: 12px;
`;

const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 560px) { justify-content: space-between; }
`;

const PageSizeSelect = styled.select`
  min-height: 36px;
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  background: var(--surface-raised);
  font-size: 12px;
`;

const PageButton = styled(Button)`
  min-height: 36px;
  padding: 7px 10px;
  &:disabled { opacity: .45; cursor: not-allowed; }
`;

const TaskList = styled.div`
  display: grid;
  gap: 11px;
`;

const TaskCard = styled.article<{ $active: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  padding: 18px 19px;
  border: 1px solid var(--border);
  border-left: 3px solid ${({ $active }) => $active ? 'var(--primary)' : 'var(--muted)'};
  border-radius: 13px;
  background: var(--surface);
  box-shadow: 0 4px 14px var(--shadow);
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  &:hover { border-color: var(--primary); border-left-color: ${({ $active }) => $active ? 'var(--primary)' : 'var(--muted)'}; box-shadow: 0 8px 22px var(--shadow); transform: translateY(-1px); }
  @media (max-width: 720px) { grid-template-columns: 1fr; gap: 14px; padding: 16px; }
`;

const TaskMain = styled.div`
  display: grid;
  min-width: 0;
  gap: 13px;
`;

const TaskTop = styled.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const TaskTitleArea = styled.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`;

const Badges = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  @media (max-width: 520px) { justify-content: flex-start; }
`;

const TaskMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 17px;
  color: var(--muted);
  font-size: 11px;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--muted); }
`;

const ItemSummary = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const ItemChip = styled.span`
  display: inline-flex;
  max-width: min(230px, 100%);
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border: 1px solid var(--border);
  border-radius: 7px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 11px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MoreItems = styled.span`
  padding: 5px 7px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
`;

const TaskProgress = styled.div`
  display: grid;
  grid-template-columns: minmax(55px, 100px) auto;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  span { color: var(--muted); font-size: 10px; white-space: nowrap; }
  @media (max-width: 720px) { margin-left: 0; }
`;

const ProgressTrack = styled.div`
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`;

const TaskSide = styled.div`
  display: grid;
  min-width: 178px;
  align-content: space-between;
  justify-items: end;
  gap: 16px;
  padding-left: 17px;
  border-left: 1px solid var(--border);
  @media (max-width: 720px) {
    display: flex;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    padding: 12px 0 0;
    border-top: 1px solid var(--border);
    border-left: 0;
  }
`;

const SideDates = styled.div`
  display: grid;
  justify-items: end;
  gap: 4px;
  color: var(--muted);
  font-size: 10px;
  text-align: right;
  strong { color: var(--text); font-size: 11px; font-weight: 650; }
  @media (max-width: 720px) { justify-items: start; text-align: left; }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 6px;
`;

const ActionButton = styled(Button)`
  min-height: 33px;
  padding: 7px 9px;
  gap: 6px;
  white-space: nowrap;
  font-size: 11px;
  svg { width: 14px; height: 14px; }
`;

const PriorityBadge = styled.span<{ $priority: TaskPriority }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: 7px;
  color: ${({ $priority }) => $priority === 'high' ? '#a52d28' : $priority === 'medium' ? '#9a5b08' : '#176b4d'};
  background: ${({ $priority }) => $priority === 'high' ? '#fff0ef' : $priority === 'medium' ? '#fff5df' : '#eafaf3'};
  html[data-theme='dark'] & {
    color: ${({ $priority }) => $priority === 'high' ? '#ffaaa3' : $priority === 'medium' ? '#f3c477' : '#8de0b8'};
    background: ${({ $priority }) => $priority === 'high' ? '#452a30' : $priority === 'medium' ? '#453821' : '#20382f'};
  }
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
`;

const ListPanel = styled(Panel)`
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  @media (max-width: 520px) { padding: 0; }
`;

type TaskStatusFilter = 'all' | 'active' | 'inactive';
type PriorityFilter = 'all' | TaskPriority | 'none';

interface TasksPageProps {
  tasks: Task[];
  loading: boolean;
  statusFilter: TaskStatusFilter;
  priorityFilter: PriorityFilter;
  pagination: TaskPagination;
  onStatusFilterChange: (filter: TaskStatusFilter) => void;
  onPriorityFilterChange: (filter: PriorityFilter) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (limit: number) => void;
  onNavigate: (path: string) => void;
  onDeactivate: (taskId: TaskId) => void;
  onDelete: (task: Task) => void;
}

const priorityLabel: Record<TaskPriority, string> = {
  low: 'Baixa',
  medium: 'Média',
  high: 'Alta',
};

const displayDate = (value?: string | null) => value
  ? new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR')
  : 'Não definida';

const displayDateTime = (value?: string | null) => value
  ? new Date(value).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
  : 'Não definida';

export default function TasksPage({
  tasks, loading, statusFilter, priorityFilter, pagination, onStatusFilterChange,
  onPriorityFilterChange, onPageChange, onPageSizeChange, onNavigate, onDeactivate, onDelete,
}: TasksPageProps) {
  const [search, setSearch] = useState('');
  const filteredTasks = useMemo(() => tasks.filter(task => {
    const normalizedSearch = search.trim().toLocaleLowerCase('pt-BR');
    const searchableText = [
      task.title,
      task.description ?? '',
      String(task.id),
      ...(task.items ?? []).map(item => item.title),
    ].join(' ').toLocaleLowerCase('pt-BR');
    const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);
    const matchesStatus = statusFilter === 'all'
      || (statusFilter === 'active' && task.is_active)
      || (statusFilter === 'inactive' && !task.is_active);
    const matchesPriority = priorityFilter === 'all'
      || (priorityFilter === 'none' && !task.priority)
      || task.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  }), [tasks, search, statusFilter, priorityFilter]);

  function resetFilters() {
    setSearch('');
    onStatusFilterChange('all');
    onPriorityFilterChange('all');
  }

  return (
    <>
      <PageTitle>
        <div>
          <h1>Minhas tarefas</h1>
          <p>Organize seus compromissos e acompanhe o que precisa ser feito.</p>
        </div>
        <Button $variant="primary" onClick={() => onNavigate('/tasks/new')}><Plus />Nova tarefa</Button>
      </PageTitle>
      <OverviewGrid aria-label="Resumo das tarefas">
        <OverviewCard>
          <OverviewIcon $tone="blue"><ListChecks /></OverviewIcon>
          <div><span>Total de tarefas</span><strong>{pagination.total}</strong></div>
        </OverviewCard>
        <OverviewCard>
          <OverviewIcon $tone="green"><ListChecks /></OverviewIcon>
          <div><span>Tarefas ativas</span><strong>{pagination.activeTotal}</strong></div>
        </OverviewCard>
        <OverviewCard>
          <OverviewIcon $tone="gray"><ListChecks /></OverviewIcon>
          <div><span>Desativadas</span><strong>{pagination.inactiveTotal}</strong></div>
        </OverviewCard>
      </OverviewGrid>
      <FilterBar>
        <SearchBox>
          <Search aria-hidden="true" />
          <input
            type="search"
            aria-label="Buscar tarefas"
            placeholder="Buscar por tarefa, descrição ou item..."
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </SearchBox>
        <FilterControls>
          <Filter
            aria-label="Filtrar por prioridade"
            value={priorityFilter}
            onChange={event => onPriorityFilterChange(event.target.value as PriorityFilter)}
          >
            <option value="all">Todas as prioridades</option>
            <option value="high">Prioridade alta</option>
            <option value="medium">Prioridade média</option>
            <option value="low">Prioridade baixa</option>
            <option value="none">Sem prioridade</option>
          </Filter>
        </FilterControls>
      </FilterBar>
      <StatusTabs aria-label="Filtrar por situação">
        <StatusTab type="button" $active={statusFilter === 'all'} aria-pressed={statusFilter === 'all'} onClick={() => onStatusFilterChange('all')}>
          Todas <span>{pagination.total}</span>
        </StatusTab>
        <StatusTab type="button" $active={statusFilter === 'active'} aria-pressed={statusFilter === 'active'} onClick={() => onStatusFilterChange('active')}>
          Ativas <span>{pagination.activeTotal}</span>
        </StatusTab>
        <StatusTab type="button" $active={statusFilter === 'inactive'} aria-pressed={statusFilter === 'inactive'} onClick={() => onStatusFilterChange('inactive')}>
          Desativadas <span>{pagination.inactiveTotal}</span>
        </StatusTab>
      </StatusTabs>
      <ListHeading>
        <h2>{filteredTasks.length === 1 ? '1 tarefa nesta página' : `${filteredTasks.length} tarefas nesta página`}</h2>
        <span>{search || statusFilter !== 'all' || priorityFilter !== 'all' ? 'Filtros aplicados nesta página' : `Página ${pagination.page} de ${pagination.totalPages}`}</span>
      </ListHeading>
      {loading ? (
        <EmptyState><LoaderCircle /><p>Carregando tarefas...</p></EmptyState>
      ) : filteredTasks.length === 0 ? (
        <Panel>
          <EmptyState>
            <ListChecks size={32} />
            <h3>{tasks.length === 0 ? 'Sua lista está pronta para começar' : 'Nenhuma tarefa encontrada'}</h3>
            <p>{tasks.length === 0
              ? 'Crie sua primeira tarefa e organize seus próximos passos.'
              : 'Tente mudar a busca ou remover alguns filtros.'}</p>
            <div style={{ marginTop: 16 }}>
              {tasks.length === 0
                ? <Button $variant="primary" onClick={() => onNavigate('/tasks/new')}><Plus />Criar primeira tarefa</Button>
                : <Button onClick={resetFilters}><X />Limpar filtros</Button>}
            </div>
          </EmptyState>
        </Panel>
      ) : (
        <TaskList>
          {filteredTasks.map(task => {
            const orderedItems = [...(task.items ?? [])].sort((a, b) => a.sort_order - b.sort_order);
            const completedCount = orderedItems.filter(item => Boolean(item.completed)).length;
            const hasCompletionData = orderedItems.some(item => item.completed !== undefined);
            const progress = orderedItems.length ? Math.round(completedCount / orderedItems.length * 100) : 0;

            return (
              <TaskCard key={task.id} $active={task.is_active}>
                <TaskMain>
                  <TaskTop>
                    <TaskTitleArea>
                      <h3>{task.title}</h3>
                      <p>{task.description || 'Sem descrição'}</p>
                    </TaskTitleArea>
                    <Badges>
                      <Status $done={task.is_active}>{task.is_active ? 'Ativa' : 'Desativada'}</Status>
                      {task.priority && (
                        <PriorityBadge $priority={task.priority}>
                          Prioridade {priorityLabel[task.priority].toLowerCase()}
                        </PriorityBadge>
                      )}
                    </Badges>
                  </TaskTop>

                  <TaskMeta>
                    <MetaItem><CalendarDays />Início {displayDate(task.start_date)}</MetaItem>
                    <MetaItem><CalendarDays />Fim {displayDate(task.end_date)}</MetaItem>
                    <MetaItem><ListChecks />{orderedItems.length} {orderedItems.length === 1 ? 'item' : 'itens'}</MetaItem>
                    <MetaItem>ID {task.id}</MetaItem>
                  </TaskMeta>

                  {orderedItems.length > 0 && (
                    <ItemSummary aria-label="Itens da tarefa">
                      {orderedItems.slice(0, 3).map(item => (
                        <ItemChip key={item.id} title={item.title}>{item.title}</ItemChip>
                      ))}
                      {orderedItems.length > 3 && <MoreItems>+{orderedItems.length - 3} itens</MoreItems>}
                      {hasCompletionData && (
                        <TaskProgress aria-label={`${progress}% concluído`}>
                          <ProgressTrack><div style={{ width: `${progress}%` }} /></ProgressTrack>
                          <span>{completedCount}/{orderedItems.length} concluídos</span>
                        </TaskProgress>
                      )}
                    </ItemSummary>
                  )}
                </TaskMain>

                <TaskSide>
                  <SideDates>
                    <span>Criada <strong>{displayDateTime(task.created_at)}</strong></span>
                    <span>Atualizada <strong>{displayDateTime(task.updated_at)}</strong></span>
                  </SideDates>
                  <Actions>
                    <ActionButton
                      aria-label={`Ver detalhes e editar ${task.title}`}
                      title="Detalhes e edição"
                      onClick={() => onNavigate(`/tasks/${encodeURIComponent(String(task.id))}`)}
                    >
                      <Eye />Editar
                    </ActionButton>
                    {task.is_active && (
                      <ActionButton $variant="danger" onClick={() => onDeactivate(task.id)}>Desativar</ActionButton>
                    )}
                    <ActionButton
                      $variant="danger"
                      aria-label={`Excluir tarefa ${task.title}`}
                      title="Excluir tarefa"
                      onClick={() => onDelete(task)}
                    >
                      <Trash2 />
                    </ActionButton>
                  </Actions>
                </TaskSide>
              </TaskCard>
            );
          })}
        </TaskList>
      )}
      {pagination.total > 0 && (
        <PaginationBar aria-label="Paginação da lista de tarefas">
          <PaginationInfo>
            Exibindo {((pagination.page - 1) * pagination.limit) + 1}–{Math.min(pagination.page * pagination.limit, pagination.total)} de {pagination.total} tarefas
          </PaginationInfo>
          <PaginationControls>
            <label>
              <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Tarefas por página</span>
              <PageSizeSelect
                aria-label="Tarefas por página"
                value={pagination.limit}
                onChange={event => onPageSizeChange(Number(event.target.value))}
              >
                <option value={5}>5 por página</option>
                <option value={10}>10 por página</option>
                <option value={20}>20 por página</option>
                <option value={50}>50 por página</option>
                <option value={100}>100 por página</option>
              </PageSizeSelect>
            </label>
            <PageButton
              aria-label="Página anterior"
              disabled={!pagination.hasPreviousPage || loading}
              onClick={() => onPageChange(pagination.page - 1)}
            >
              <ChevronLeft />Anterior
            </PageButton>
            <PageButton
              aria-label="Próxima página"
              disabled={!pagination.hasNextPage || loading}
              onClick={() => onPageChange(pagination.page + 1)}
            >
              Próxima<ChevronRight />
            </PageButton>
          </PaginationControls>
        </PaginationBar>
      )}
    </>
  );
}
