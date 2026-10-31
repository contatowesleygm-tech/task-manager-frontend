import { useState, type DragEvent, type ReactNode } from 'react';
import { Banknote, Bell, BookOpen, CalendarRange, CheckSquare, Flag, Languages, ListChecks, LogOut, PiggyBank, Receipt, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styled from 'styled-components';
import {
  ActionToast, Alert, Brand, CelebrationToast, Content, Layout, Main, Nav, NavButton, Sidebar, Topbar,
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

function loadMenuItems(): MenuItem[] {
  try {
    const saved = JSON.parse(localStorage.getItem(menuStorageKey) ?? '[]') as string[];
    const ordered = saved.map(id => defaultMenuItems.find(item => item.id === id)).filter(Boolean) as MenuItem[];
    return [...ordered, ...defaultMenuItems.filter(item => !saved.includes(item.id))];
  } catch {
    return defaultMenuItems;
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
  const [draggedId, setDraggedId] = useState<string | null>(null);

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
          {menuItems.map(({ id, label, path, page: itemPage, icon: Icon }) => (
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
    </Layout>
  );
}
