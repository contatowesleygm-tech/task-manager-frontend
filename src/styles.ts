import styled, { css } from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh; min-height: 100dvh; display: flex; background: var(--page-bg); color: var(--text);
  @media (max-width: 639px) { display: block; }
`;
export const Sidebar = styled.aside<{ $collapsed?: boolean }>`
  position: sticky; top: 0;
  width: ${({ $collapsed }) => $collapsed ? '84px' : '252px'};
  height: 100vh; height: 100dvh;
  flex: 0 0 ${({ $collapsed }) => $collapsed ? '84px' : '252px'};
  overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain;
  scrollbar-width: thin; scrollbar-color: var(--scroll-thumb) transparent;
  background: var(--surface); color: var(--text);
  border-right: 1px solid var(--border);
  padding: 24px 14px; display: flex; flex-direction: column; gap: 20px;
  transition: width var(--transition-normal), flex-basis var(--transition-normal), background var(--transition-normal);
  @media (max-width: 639px) { position: static; width: 100%; height: auto; padding: 14px; gap: 12px; }
`;
export const Brand = styled.div<{ $collapsed?: boolean }>`
  display: flex; align-items: center; gap: 11px; padding: 0 12px; color: var(--text);
  font-weight: 800; font-size: 20px; letter-spacing: -.4px;
  > svg { width: 30px; height: 30px; flex: 0 0 auto; color: var(--primary); }
  .brand-copy { display: grid; gap: 2px; min-width: 0; }
  .brand-copy strong { font: inherit; }
  .brand-copy small { color: var(--muted); font-size: 11px; font-weight: 500; letter-spacing: 0; line-height: 1.35; }
  ${({ $collapsed }) => $collapsed && css`justify-content: center; padding: 0; .brand-copy { display: none; }`}
  @media (max-width: 639px) { padding: 0 8px; .brand-copy { display: grid; } }
`;
export const Nav = styled.nav`
  display: grid; gap: 7px;
  @media (max-width: 639px) {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    padding: 2px 14px 7px;
    margin: 0 -14px;
    scrollbar-width: thin;
    scrollbar-color: var(--scroll-thumb) transparent;
    -webkit-overflow-scrolling: touch;
  }
`;
export const NavButton = styled.button<{ $active?: boolean; $collapsed?: boolean }>`
  position: relative; display: flex; align-items: center; gap: 13px; width: 100%; min-height: 44px; border: 0; border-radius: var(--radius-md);
  padding: 11px 14px; color: var(--muted); background: transparent; text-align: left; font-size: 14px; font-weight: 600;
  transition: color .15s ease, background .15s ease, transform .15s ease;
  &::before { position: absolute; top: 10px; bottom: 10px; left: 0; width: 3px; border-radius: 0 3px 3px 0; background: transparent; content: ''; }
  &:hover { color: var(--primary-strong); background: var(--primary-soft); }
  ${({ $active }) => $active && css`background: var(--primary-soft); color: var(--primary-strong); &::before { background: var(--primary); }`}
  svg { width: 20px; height: 20px; flex-shrink: 0; }
  ${({ $collapsed }) => $collapsed && css`justify-content: center; padding: 11px 8px; gap: 0; .nav-label { display: none; }`}
  @media (max-width: 639px) {
    width: auto;
    min-height: 44px;
    flex: 0 0 auto;
    scroll-snap-align: start;
    white-space: nowrap;
    padding: 10px 12px;
    ${({ $collapsed }) => $collapsed && css`justify-content: flex-start; gap: 10px; .nav-label { display: inline; }`}
  }
`;
export const Main = styled.main`flex: 1; min-width: 0; min-height: 100vh;`;
export const Topbar = styled.header`
  position: sticky; top: 0; z-index: 5; height: 70px; background: color-mix(in srgb, var(--surface) 90%, transparent); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border);
  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, auto) auto auto; align-items: center; gap: clamp(10px, 1.5vw, 20px); padding: 0 clamp(18px, 2.4vw, 36px);
  > strong { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 639px) {
    height: auto; min-height: 58px; grid-template-columns: minmax(0, 1fr) auto auto; gap: 8px; padding: 8px 14px;
    > span:first-child { display: none; }
  }
`;
export const Content = styled.div`width: 100%; max-width: 1600px; margin: 0 auto; padding: clamp(20px, 2.4vw, 36px);
  @media (max-width: 1023px) { padding: 24px; }
  @media (max-width: 639px) { padding: 18px 14px 28px; }
`;
export const PageTitle = styled.div`
  display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 26px;
  > div:first-child { min-width: 0; }
  h1 { font-size: clamp(26px, 3vw, 32px); line-height: 1.2; margin: 0 0 7px; letter-spacing: -.8px; color: var(--text); }
  p { color: var(--muted); margin: 0; line-height: 1.6; font-size: 14px; }
  @media (max-width: 639px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 22px;
    > div + div { display: flex; width: 100%; flex-wrap: wrap; gap: 8px; }
    > div + div > button { flex: 1 1 150px; }
  }
`;
export const PageHero = styled.section`
  display: flex; align-items: flex-end; justify-content: space-between; gap: 20px;
  padding: clamp(20px, 4vw, 32px);
  border: 1px solid var(--border); border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--primary) 5%, var(--surface));
  box-shadow: var(--shadow-raised);
  > div:first-child > span { display: inline-flex; align-items: center; gap: 7px; color: var(--primary-strong); font-size: 12px; font-weight: 600; }
  h1 { margin: 12px 0 8px; color: var(--text); font-size: clamp(26px, 3vw, 32px); line-height: 1.2; letter-spacing: -.04em; }
  p { max-width: 560px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.6; }
  @media (max-width: 639px) {
    align-items: stretch; flex-direction: column; gap: 16px;
    > div:last-child { width: 100%; }
    > div:last-child > button { flex: 1 1 150px; }
  }
`;
export const Columns = styled.div`
  display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(300px, .9fr); gap: 20px; align-items: start;
  @media (max-width: 1023px) { grid-template-columns: 1fr; }
`;
export const Panel = styled.section`
  min-width: 0; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px;
  box-shadow: var(--shadow-raised);
  @media (max-width: 639px) { padding: 17px; }
`;
export const PanelTitle = styled.h2`font-size: 18px; line-height: 1.35; margin: 0 0 20px; display: flex; align-items: center; gap: 10px; color: var(--text); letter-spacing: -.2px;`;
export const Field = styled.label`
  display: grid; gap: 8px; margin-bottom: 18px; font-size: 14px; font-weight: 600; color: var(--text);
  small { color: var(--muted); font-weight: 400; }
  input, textarea, select { width: 100%; min-height: 44px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 11px 12px; outline: none; color: var(--text); background: var(--surface); font-size: 14px; font-weight: 400; transition: border-color .15s ease, box-shadow .15s ease; }
  input:focus, textarea:focus, select:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
  textarea { resize: vertical; min-height: 90px; }
`;
export const TwoFields = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 14px; @media (max-width: 639px) { grid-template-columns: 1fr; gap: 0; }`;
export const ItemEditor = styled.div`background: var(--surface-raised); padding: 13px; border-radius: var(--radius-md); display: grid; gap: 10px; margin-bottom: 16px;`;
export const ItemRow = styled.div`display: flex; gap: 9px; align-items: center;`;
export const NumberBubble = styled.span`width: 30px; height: 30px; display: grid; place-items: center; flex-shrink: 0; border-radius: 50%; background: var(--border); color: var(--text); font-size: 12px; font-weight: 800;`;
export const ItemInput = styled.input`min-width: 0; flex: 1; border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text); background: var(--surface-raised); padding: 11px 12px;`;
export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; border-radius: var(--radius-md); padding: 10px 16px; font-size: 14px; line-height: 1.3; font-weight: 600; border: 1px solid transparent; transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  &:hover:not(:disabled) { transform: translateY(-1px); }
  ${({ $variant }) => $variant === 'primary' && css`background: var(--primary); color: var(--primary-contrast); &:hover:not(:disabled) { background: var(--primary-strong); }`}
  ${({ $variant }) => (!$variant || $variant === 'secondary') && css`background: var(--surface); color: var(--text); border-color: var(--border); &:hover:not(:disabled) { background: var(--surface-raised); }`}
  ${({ $variant }) => $variant === 'danger' && css`background: var(--error-soft); color: var(--error); border-color: var(--error-border); &:hover:not(:disabled) { filter: brightness(.97); }`}
  svg { width: 17px; height: 17px; }
`;
export const ButtonRow = styled.div`display: flex; gap: 10px; flex-wrap: wrap;`;
export const FooterActions = styled.div`display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--border); padding-top: 18px; margin-top: 22px;`;
export const PreviewBox = styled.div`background: var(--surface-raised); padding: 17px; border-radius: var(--radius-md); margin-bottom: 22px;`;
export const PreviewHeading = styled.div`display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 16px; margin-bottom: 14px; svg { color: var(--primary); }`;
export const Meta = styled.div`display: grid; gap: 11px; color: var(--muted); font-size: 13px; margin-top: 15px;`;
export const Status = styled.span<{ $done?: boolean }>`
  display: inline-flex; border-radius: var(--radius-full); padding: 5px 9px; font-size: 11px; font-weight: 700;
  color: ${({ $done }) => $done ? 'var(--success)' : 'var(--primary-strong)'};
  background: ${({ $done }) => $done ? 'var(--success-soft)' : 'color-mix(in srgb, var(--primary) 16%, var(--surface))'};
`;
export const ChecklistRow = styled.div`display: flex; align-items: center; gap: 10px; padding: 13px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; }
  input { width: 17px; height: 17px; accent-color: var(--primary); }
  span { flex: 1; font-size: 13px; }
`;
export const StatsGrid = styled.div`display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; margin-bottom: 20px; @media (max-width: 639px) { grid-template-columns: 1fr; }`;
export const StatCard = styled(Panel)`padding: 19px; p { margin: 0 0 10px; color: var(--muted); font-size: 13px; } strong { font-size: 28px; }`;
export const ProgressTrack = styled.div`height: 7px; background: var(--border); border-radius: var(--radius-full); overflow: hidden; margin-top: 13px; div { height: 100%; background: var(--primary); border-radius: inherit; transition: width .2s; }`;
export const TaskCard = styled(Panel)`margin-bottom: 15px;`;
export const TaskHeader = styled.div`display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; h3 { margin: 0 0 6px; font-size: 18px; } p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.5; }`;
export const TaskTableWrap = styled.div`min-width: 0; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: thin;`;
export const TaskTable = styled.table`
  width: 100%; min-width: 1120px; table-layout: fixed; border-collapse: collapse; text-align: left; font-size: 13px;
  thead { border-bottom: 1px solid var(--border); }
  th { padding: 13px 12px; color: var(--muted); background: var(--surface-raised); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .055em; white-space: nowrap; }
  td { padding: 15px 12px; border-bottom: 1px solid var(--border); vertical-align: middle; color: var(--text); }
  tbody tr { transition: background .15s ease; }
  tbody tr:hover { background: var(--surface-raised); }
  tbody tr:last-child td { border-bottom: 0; }
  td strong, td small { display: block; }
  td strong { color: var(--text); }
  td small { margin-top: 5px; color: var(--muted); line-height: 1.45; }
  td > small { margin-top: 0; }
`;
export const Muted = styled.p`color: var(--muted); font-size: 13px;`;
export const EmptyState = styled.div`text-align: center; padding: 38px 18px; color: var(--muted); svg { margin-bottom: 10px; color: var(--primary); } h3 { color: var(--text); margin: 0 0 7px; } p { margin: 0; font-size: 13px; }`;
export const Filter = styled.select`min-height: 42px; padding: 9px 12px; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); color: var(--text);`;
export const Filters = styled.div`
  display: flex; flex-wrap: wrap; gap: 10px; align-items: center;
  @media (max-width: 639px) { width: 100%; }
`;
export const PriorityBadge = styled.span<{ $priority: 'low' | 'medium' | 'high' }>`
  display: inline-flex; align-items: center; border-radius: var(--radius-full); padding: 5px 9px;
  font-size: 11px; font-weight: 700; white-space: nowrap;
  color: ${({ $priority }) => $priority === 'high' ? 'var(--error)' : $priority === 'medium' ? 'var(--warning)' : 'var(--success)'};
  background: ${({ $priority }) => $priority === 'high' ? 'var(--error-soft)' : $priority === 'medium' ? 'var(--warning-soft)' : 'var(--success-soft)'};
`;
export const HistoryRow = styled.div`display: grid; grid-template-columns: minmax(0,1fr) auto auto; align-items: center; gap: 14px; padding: 15px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; } @media (max-width: 639px) { grid-template-columns: 1fr auto; }`;
