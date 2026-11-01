import { useEffect, useState, type DragEvent, type ReactNode } from 'react';
import { Archive, ArchiveRestore, Banknote, Bell, BookOpen, CalendarRange, CheckSquare, Flag, Languages, ListChecks, LogOut, PiggyBank, Receipt, Settings } from 'lucide-react';
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
  { id: 'dividends', label: 'Dividendos', path: '/dividends', page: 'dividends', icon: PiggyBank },
];

const menuStorageKey = 'task-manager-menu-order';

const TopbarLogout = styled.button`
  display: inline-flex; align-items: center; gap: 7px; min-height: 36px; padding: 8px 12px; border: 1px solid #efc7c1; border-radius: 9px;
  color: #a63d47; background: #fff0ed; font-size: 12px; font-weight: 800; cursor: pointer; transition: background .15s ease, border-color .15s ease, transform .15s ease;
  html[data-theme='dark'] & { color: #ffaaa9; background: #39232b; border-color: #5c333b; }
  &:hover { border-color: #e9aaa2; background: #ffe4df; transform: translateY(-1px); }
  html[data-theme='dark'] &:hover { border-color: #75434c; background: #452a30; }
  &:focus-visible { outline: 3px solid #ffc2bd; outline-offset: 2px; }
  svg { width: 16px; height: 16px; }
  @media (max-width: 520px) { padding: 8px 10px; font-size: 0; svg { width: 17px; height: 17px; } }
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
  border-radius: 11px;
  background: var(--surface-raised);
  @media (max-width: 520px) {
    grid-template-columns: 34px minmax(0, 1fr) auto;
    > button { grid-column: 2 / -1; justify-self: end; }
  }
`;

const ArchivePageIcon = styled.span`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 9px;
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
  border-radius: 999px;
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
  border-radius: 8px;
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
  @media (max-width: 520px) { align-items: flex-start; flex-direction: column; }
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
  onSettings: () => void;
  onDismissError: () => void;
  onDismissNotice: () => void;
  onDismissCelebration: () => void;
}

export default function AppLayout({
  page, error, notice, children, onNavigate, onSettings,
  user, onLogout, onDismissError, onDismissNotice, celebration, onDismissCelebration,
}: AppLayoutProps) {
  const [menuItems, setMenuItems] = useState(loadMenuItems);
  const [archivedPageIds, setArchivedPageIds] = useState(() => loadArchivedPages(user.id));
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [managePagesOpen, setManagePagesOpen] = useState(false);
  const visibleMenuItems = menuItems.filter(item => !archivedPageIds.includes(item.id));

  useEffect(() => {
    setArchivedPageIds(loadArchivedPages(user.id));
  }, [user.id]);

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

  return (
    <Layout>
      <Sidebar>
        <Brand><CheckSquare /><span>Task Manager</span></Brand>
        <Nav aria-label="Navegação principal">
          {visibleMenuItems.map(({ id, label, path, page: itemPage, icon: Icon }) => (
            <NavButton
              key={id}
              $active={page === itemPage || (itemPage === 'study-resources' && page === 'study-resource-edit')}
              draggable
              title="Arraste para mudar a posição"
              onDragStart={event => handleDragStart(event, id)}
              onDragOver={event => event.preventDefault()}
              onDrop={event => handleDrop(event, id)}
              onDragEnd={() => setDraggedId(null)}
              style={{ opacity: draggedId === id ? 0.45 : 1 }}
              onClick={() => onNavigate(path)}
            >
              <Icon />{label}
            </NavButton>
          ))}
          <NavButton type="button" $active={managePagesOpen} onClick={() => setManagePagesOpen(true)}>
            <Archive />Gerenciar páginas
            {archivedPageIds.length > 0 && <span style={{ marginLeft: 'auto', fontSize: 11 }}>{archivedPageIds.length}</span>}
          </NavButton>
        </Nav>
        <div style={{ marginTop: 'auto' }}>
          <NavButton onClick={onSettings}><Settings />Configurações</NavButton>
        </div>
      </Sidebar>
      <Main>
        <Topbar>
          <span style={{ color: 'var(--muted)', fontSize: 13 }}>Seu espaço de produtividade</span>
          <strong style={{ fontSize: 13 }}>Olá, {user.name || user.email}</strong>
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
        open={managePagesOpen}
        title="Gerenciar páginas"
        icon={<Archive size={19} />}
        onClose={() => setManagePagesOpen(false)}
      >
        <ArchiveIntro>
          Arquive temporariamente as páginas que não usa. Elas saem do menu, mas podem ser restauradas a qualquer momento; seus dados continuam preservados.
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
