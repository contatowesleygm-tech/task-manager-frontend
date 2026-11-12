import { useEffect, useState, type DragEvent, type ReactNode } from 'react';
import { Archive, ArchiveRestore, Banknote, Bell, BookOpen, CalendarRange, CheckSquare, ChevronDown, ChevronLeft, ChevronRight, Flag, Fuel, Gauge, Languages, ListChecks, LogOut, MapPinned, PiggyBank, Receipt, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styled from 'styled-components';
import {
  ActionToast, Alert, Brand, Button, CelebrationToast, Content, Layout, Main, Modal, Nav, NavButton, Sidebar, Topbar,
} from './ui';
import type { AppPage } from '../routes/paths';
import type { AuthUser } from '../types';
import AssistantChat from './AssistantChat';
import ThemeToggle from './ThemeToggle';

interface MenuItem {
  id: string;
  label: string;
  path: string;
  page: AppPage;
  icon: LucideIcon;
}

const defaultMenuItems: MenuItem[] = [
  { id: 'tasks', label: 'Tarefas', path: '/tasks', page: 'list', icon: ListChecks },
  { id: 'planning', label: 'Planejamento', path: '/planning', page: 'planning', icon: CalendarRange },
  { id: 'goals', label: 'Objetivos', path: '/goals', page: 'goals', icon: Flag },
  { id: 'schedule', label: 'Agenda', path: '/schedule', page: 'schedule', icon: Bell },
  { id: 'study-resources', label: 'Biblioteca', path: '/study-resources', page: 'study-resources', icon: BookOpen },
  { id: 'finances', label: 'Finanças', path: '/finances', page: 'finances', icon: Banknote },
  { id: 'english-study', label: 'Inglês', path: '/english-study', page: 'english-study', icon: Languages },
  { id: 'expenses', label: 'Despesas', path: '/expenses', page: 'expenses', icon: Receipt },
  { id: 'fuel-calculator', label: 'Calculadora de combustível', path: '/fuel-calculator', page: 'fuel-calculator', icon: Fuel },
  { id: 'daily-routes', label: 'Percursos do dia', path: '/daily-routes', page: 'daily-routes', icon: MapPinned },
  { id: 'dividends', label: 'Dividendos', path: '/dividends', page: 'dividends', icon: PiggyBank },
  { id: 'fixed-income', label: 'Renda fixa', path: '/fixed-income', page: 'fixed-income', icon: PiggyBank },
  { id: 'portfolio-analysis', label: 'Análise da carteira', path: '/portfolio-analysis', page: 'portfolio-analysis', icon: Gauge },
  { id: 'opportunities', label: 'Mercado e notícias', path: '/opportunities', page: 'opportunities', icon: Gauge },
];

const menuStorageKey = 'task-manager-menu-order';
const sidebarCollapsedStorageKey = 'task-manager-sidebar-collapsed';
const financeMenuItemIds = new Set(['finances', 'expenses', 'dividends', 'fixed-income', 'portfolio-analysis', 'opportunities']);

const TopbarIntro = styled.span`
  color: var(--muted);
  font-size: 13px;
`;

const UserGreeting = styled.strong`
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
`;

const TopbarLogout = styled.button`
  display: inline-flex; align-items: center; gap: 7px; min-height: 44px; padding: 8px 12px; border: 1px solid var(--error-border); border-radius: var(--radius-md);
  color: var(--error); background: var(--error-soft); font-size: 12px; font-weight: 700; cursor: pointer; transition: background var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
  &:hover { border-color: var(--error); filter: brightness(.97); transform: translateY(-1px); }
  svg { width: 16px; height: 16px; }
  @media (max-width: 639px) { padding: 8px 10px; font-size: 0; svg { width: 17px; height: 17px; } }
`;

const SidebarCollapseButton = styled.button<{ $collapsed?: boolean }>`
  display: inline-flex; align-items: center; justify-content: ${({ $collapsed }) => $collapsed ? 'center' : 'flex-end'};
  align-self: ${({ $collapsed }) => $collapsed ? 'stretch' : 'flex-end'};
  gap: 7px; min-height: 40px; padding: 6px 9px; border: 1px solid var(--border); border-radius: var(--radius-md);
  color: var(--muted); background: var(--surface); font-size: 11px; font-weight: 600;
  transition: color var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  &:hover { color: var(--primary-strong); border-color: var(--primary); background: var(--primary-soft); }
  svg { width: 16px; height: 16px; }
  .collapse-label { display: ${({ $collapsed }) => $collapsed ? 'none' : 'inline'}; }
  @media (max-width: 639px) { display: none; }
`;

const FinanceNavGroup = styled.div`
  display: grid;
  position: relative;
  gap: 5px;
  min-width: 0;
`;

const FinanceNavToggle = styled(NavButton)<{ $collapsed?: boolean }>`
  justify-content: space-between;
  &[aria-expanded='true'] { color: var(--primary-strong); background: var(--primary-soft); }
  .finance-chevron { width: 15px; height: 15px; flex: 0 0 auto; transition: transform .15s ease; }
  ${({ $collapsed }) => $collapsed && 'justify-content: center; .nav-label { display: none; } .finance-chevron { display: none; }'}
  @media (max-width: 639px) { justify-content: space-between; ${({ $collapsed }) => $collapsed && '.nav-label { display: inline-flex; } .finance-chevron { display: block; }'} }
`;

const FinanceSubNav = styled.div<{ $collapsed?: boolean }>`
  display: grid;
  gap: 4px;
  padding-left: 10px;
  margin-left: 14px;
  border-left: 1px solid var(--border);
  ${({ $collapsed }) => $collapsed && 'padding: 0; margin: 0; border: 0;'}
  @media (max-width: 639px) { position: absolute; z-index: 10; top: calc(100% + 6px); left: 14px; min-width: 190px; padding: 8px; margin: 0; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); box-shadow: var(--shadow-raised); }
`;

const FinanceSubNavButton = styled(NavButton)`
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  font-size: 12px;
  svg { width: 16px; height: 16px; }
`;

const ArchiveIntro = styled.p`
  margin: 0 0 15px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
`;

const ArchiveList = styled.div`
  display: grid;
  gap: 8px;
`;

const ArchiveRow = styled.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  @media (max-width: 639px) {
    grid-template-columns: 34px minmax(0, 1fr) auto;
    > button { grid-column: 2 / -1; justify-self: end; }
  }
`;

const ArchivePageIcon = styled.span`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: var(--radius-md);
  color: var(--primary-strong);
  background: color-mix(in srgb, var(--primary) 12%, var(--surface));
  svg { width: 17px; height: 17px; }
`;

const ArchivePageName = styled.strong`
  min-width: 0;
  color: var(--text);
  font-size: 13px;
  overflow-wrap: anywhere;
`;

const PageStateBadge = styled.span<{ $archived: boolean }>`
  padding: 5px 8px;
  border: 1px solid ${({ $archived }) => $archived ? 'var(--border)' : 'var(--success-border)'};
  border-radius: var(--radius-full);
  color: ${({ $archived }) => $archived ? 'var(--muted)' : 'var(--success)'};
  background: ${({ $archived }) => $archived ? 'var(--surface)' : 'var(--success-soft)'};
  font-size: 10px;
  font-weight: 750;
  white-space: nowrap;
`;

const ArchivePageAction = styled.button<{ $restore?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 34px;
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: ${({ $restore }) => $restore ? 'var(--primary-strong)' : 'var(--muted)'};
  background: var(--surface);
  font-size: 11px;
  font-weight: 750;
  cursor: pointer;
  &:hover:not(:disabled) {
    border-color: ${({ $restore }) => $restore ? 'var(--primary)' : 'var(--success)'};
    color: ${({ $restore }) => $restore ? 'var(--primary-strong)' : 'var(--success)'};
    background: ${({ $restore }) => $restore ? 'color-mix(in srgb, var(--primary) 8%, var(--surface))' : 'var(--success-soft)'};
  }
  &:disabled { opacity: .5; cursor: not-allowed; }
  svg { width: 14px; height: 14px; }
`;

const ArchiveFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 11px;
  @media (max-width: 639px) { align-items: flex-start; flex-direction: column; }
`;

function loadMenuItems(): MenuItem[] {
  try {
    const saved = JSON.parse(localStorage.getItem(menuStorageKey) ?? '[]') as string[];
    const ordered = saved.map(id => defaultMenuItems.find(item => item.id === id)).filter(Boolean) as MenuItem[];
    return [...ordered, ...defaultMenuItems.filter(item => !saved.includes(item.id))];
  } catch {
    return defaultMenuItems;
  }
}

function loadSidebarCollapsed(): boolean {
  try {
    return localStorage.getItem(sidebarCollapsedStorageKey) === 'true';
  } catch {
    return false;
  }
}

function archivedStorageKey(userId: AuthUser['id']): string {
  return `task-manager-archived-pages:${String(userId)}`;
}

function loadArchivedPages(userId: AuthUser['id']): string[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(archivedStorageKey(userId)) ?? '[]');
    if (!Array.isArray(stored)) return [];
    return [...new Set(stored.filter((id): id is string =>
      typeof id === 'string' && defaultMenuItems.some(item => item.id === id)
    ))];
  } catch {
    return [];
  }
}

interface AppLayoutProps {
  page: AppPage;
  error: string;
  notice: string;
  celebration: string;
  children: ReactNode;
  onNavigate: (path: string) => void;
  user: AuthUser;
  onLogout: () => void;
  onDismissError: () => void;
  onDismissNotice: () => void;
  onDismissCelebration: () => void;
}

export default function AppLayout({
  page, error, notice, children, onNavigate,
  user, onLogout, onDismissError, onDismissNotice, celebration, onDismissCelebration,
}: AppLayoutProps) {
  const [menuItems, setMenuItems] = useState(loadMenuItems);
  const [archivedPageIds, setArchivedPageIds] = useState(() => loadArchivedPages(user.id));
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(loadSidebarCollapsed);
  const [financeMenuOpen, setFinanceMenuOpen] = useState(() => financeMenuItemIds.has(page));
  const visibleMenuItems = menuItems.filter(item => !archivedPageIds.includes(item.id));
  const visibleFinanceItems = visibleMenuItems.filter(item => financeMenuItemIds.has(item.id));
  const sidebarMenuItems = menuItems.filter(item => {
    if (item.id === 'finances') return visibleFinanceItems.length > 0;
    if (item.id === 'expenses' || item.id === 'dividends' || item.id === 'fixed-income' || item.id === 'portfolio-analysis' || item.id === 'opportunities') return false;
    return !archivedPageIds.includes(item.id);
  });

  useEffect(() => {
    setArchivedPageIds(loadArchivedPages(user.id));
  }, [user.id]);

  useEffect(() => {
    if (financeMenuItemIds.has(page)) setFinanceMenuOpen(true);
  }, [page]);

  function updatePageArchive(item: MenuItem, shouldArchive: boolean) {
    const visibleCount = menuItems.length - archivedPageIds.length;
    if (shouldArchive && visibleCount <= 1) return;

    const nextArchived = shouldArchive
      ? [...new Set([...archivedPageIds, item.id])]
      : archivedPageIds.filter(id => id !== item.id);
    setArchivedPageIds(nextArchived);
    try {
      localStorage.setItem(archivedStorageKey(user.id), JSON.stringify(nextArchived));
    } catch {
      /* The current session can still use the updated menu if storage is unavailable. */
    }

    const isCurrentPage = page === item.page || (item.page === 'study-resources' && page === 'study-resource-edit');
    if (shouldArchive && isCurrentPage) {
      const fallback = menuItems.find(candidate => candidate.id !== item.id && !nextArchived.includes(candidate.id));
      if (fallback) onNavigate(fallback.path);
    }
  }

  function restoreAllPages() {
    setArchivedPageIds([]);
    try {
      localStorage.removeItem(archivedStorageKey(user.id));
    } catch {
      /* The current session can still use the restored menu if storage is unavailable. */
    }
  }

  function toggleSidebar() {
    setSidebarCollapsed(collapsed => {
      const next = !collapsed;
      try {
        localStorage.setItem(sidebarCollapsedStorageKey, String(next));
      } catch {
        /* The current session can still use the selected sidebar width. */
      }
      return next;
    });
  }

  function handleDragStart(event: DragEvent<HTMLButtonElement>, id: string) {
    setDraggedId(id);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', id);
  }

  function handleDrop(event: DragEvent<HTMLButtonElement>, targetId: string) {
    event.preventDefault();
    const sourceId = event.dataTransfer.getData('text/plain') || draggedId;
    if (!sourceId || sourceId === targetId) return;
    setMenuItems(current => {
      const next = [...current];
      const sourceIndex = next.findIndex(item => item.id === sourceId);
      const targetIndex = next.findIndex(item => item.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0) return current;
      const [moved] = next.splice(sourceIndex, 1);
      next.splice(targetIndex, 0, moved);
      localStorage.setItem(menuStorageKey, JSON.stringify(next.map(item => item.id)));
      return next;
    });
    setDraggedId(null);
  }

  function renderMenuItem(item: MenuItem, nested = false) {
    const Icon = item.icon;
    const Link = nested ? FinanceSubNavButton : NavButton;
    const isActive = page === item.page || (item.page === 'study-resources' && page === 'study-resource-edit');
    return (
      <Link
        key={item.id}
        $active={isActive}
        $collapsed={sidebarCollapsed}
        draggable
        title={sidebarCollapsed ? item.label : 'Arraste para mudar a posição'}
        aria-label={nested && item.id === 'finances' ? 'Finanças — visão geral' : item.label}
        onDragStart={event => handleDragStart(event, item.id)}
        onDragOver={event => event.preventDefault()}
        onDrop={event => handleDrop(event, item.id)}
        onDragEnd={() => setDraggedId(null)}
        style={{ opacity: draggedId === item.id ? 0.45 : 1 }}
        aria-current={page === item.page ? 'page' : undefined}
        onClick={() => onNavigate(item.path)}
      >
        <Icon /><span className="nav-label">{nested && item.id === 'finances' ? 'Visão geral' : item.label}</span>
      </Link>
    );
  }

  return (
    <Layout>
      <Sidebar $collapsed={sidebarCollapsed}>
        <Brand $collapsed={sidebarCollapsed}>
          <CheckSquare />
          <span className="brand-copy">
            <strong>Rumo</strong>
            <small>Organize hoje. Avance no seu ritmo.</small>
          </span>
        </Brand>
        <SidebarCollapseButton
          type="button"
          $collapsed={sidebarCollapsed}
          aria-label={sidebarCollapsed ? 'Expandir menu lateral' : 'Recolher menu lateral'}
          aria-expanded={!sidebarCollapsed}
          aria-controls="primary-navigation"
          title={sidebarCollapsed ? 'Expandir menu' : 'Recolher menu'}
          onClick={toggleSidebar}
        >
          {sidebarCollapsed ? <ChevronRight aria-hidden="true" /> : <><ChevronLeft aria-hidden="true" /><span className="collapse-label">Recolher menu</span></>}
        </SidebarCollapseButton>
        <Nav id="primary-navigation" aria-label="Navegação principal">
          {sidebarMenuItems.map(item => item.id !== 'finances' ? renderMenuItem(item) : (
            <FinanceNavGroup key="finance-group">
              <FinanceNavToggle
                type="button"
                $active={false}
                $collapsed={sidebarCollapsed}
                aria-expanded={financeMenuOpen}
                aria-controls="finance-subnav"
                aria-label="Finanças"
                title={sidebarCollapsed ? 'Finanças' : undefined}
                onClick={() => setFinanceMenuOpen(open => !open)}
              >
                <Banknote /><span className="nav-label">Finanças</span>
                <ChevronDown
                  className="finance-chevron"
                  aria-hidden="true"
                  style={{ transform: financeMenuOpen ? 'rotate(180deg)' : undefined }}
                />
              </FinanceNavToggle>
              {financeMenuOpen && (
                <FinanceSubNav id="finance-subnav" $collapsed={sidebarCollapsed}>
                  {visibleFinanceItems.map(financeItem => renderMenuItem(financeItem, true))}
                </FinanceSubNav>
              )}
            </FinanceNavGroup>
          ))}
        </Nav>
        <div style={{ marginTop: 'auto' }}>
          <NavButton type="button" $active={settingsOpen} $collapsed={sidebarCollapsed} aria-label="Configurações" title={sidebarCollapsed ? 'Configurações' : undefined} onClick={() => setSettingsOpen(true)}>
            <Settings /><span className="nav-label">Configurações</span>
            {!sidebarCollapsed && archivedPageIds.length > 0 && <span style={{ marginLeft: 'auto', fontSize: 11 }}>{archivedPageIds.length}</span>}
          </NavButton>
        </div>
      </Sidebar>
      <Main>
        <Topbar>
          <TopbarIntro>Seu espaço de produtividade</TopbarIntro>
          <UserGreeting title={user.name || user.email}>Olá, {user.name || user.email}</UserGreeting>
          <ThemeToggle />
          <TopbarLogout type="button" onClick={onLogout} title="Sair da conta" aria-label="Sair da conta">
            <LogOut />Sair
          </TopbarLogout>
        </Topbar>
        <Content>
          {error && (
            <Alert
              key="error"
              variant="error"
              title="Não foi possível concluir"
              message={error}
              onDismiss={onDismissError}
            />
          )}
          {notice && (
            <ActionToast
              key="success"
              variant="success"
              title="Ação concluída"
              message={notice}
              onDismiss={onDismissNotice}
            />
          )}
          {celebration && <CelebrationToast message={celebration} onDismiss={onDismissCelebration} />}
          {children}
          <AssistantChat />
        </Content>
      </Main>
      <Modal
        open={settingsOpen}
        title="Configurações"
        icon={<Settings size={19} />}
        onClose={() => setSettingsOpen(false)}
      >
        <strong style={{ display: 'block', marginBottom: 8, color: 'var(--text)', fontSize: 14 }}>Páginas do menu</strong>
        <ArchiveIntro>
          Escolha quais páginas aparecem no menu lateral. As páginas arquivadas podem ser restauradas a qualquer momento; seus dados continuam preservados.
        </ArchiveIntro>
        <ArchiveList>
          {menuItems.map(item => {
            const { id, label, icon: Icon } = item;
            const archived = archivedPageIds.includes(id);
            const lastVisiblePage = !archived && visibleMenuItems.length <= 1;
            return (
              <ArchiveRow key={id}>
                <ArchivePageIcon><Icon aria-hidden="true" /></ArchivePageIcon>
                <ArchivePageName>{label}</ArchivePageName>
                <PageStateBadge $archived={archived}>{archived ? 'Arquivada' : 'Visível'}</PageStateBadge>
                <ArchivePageAction
                  type="button"
                  $restore={archived}
                  disabled={lastVisiblePage}
                  title={lastVisiblePage ? 'Mantenha pelo menos uma página no menu' : undefined}
                  onClick={() => updatePageArchive(item, !archived)}
                >
                  {archived ? <ArchiveRestore /> : <Archive />}
                  {archived ? 'Restaurar' : 'Arquivar'}
                </ArchivePageAction>
              </ArchiveRow>
            );
          })}
        </ArchiveList>
        <ArchiveFooter>
          <span>{archivedPageIds.length} {archivedPageIds.length === 1 ? 'página arquivada' : 'páginas arquivadas'}</span>
          {archivedPageIds.length > 0 && (
            <Button type="button" onClick={restoreAllPages}>
              <ArchiveRestore />Restaurar todas
            </Button>
          )}
        </ArchiveFooter>
      </Modal>
    </Layout>
  );
}
