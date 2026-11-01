import styled, { css } from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh; display: flex; background: var(--page-bg); color: var(--text);
  @media (max-width: 760px) { display: block; }
`;
export const Sidebar = styled.aside`
  position: sticky; top: 0; width: 252px; height: 100vh; flex: 0 0 252px;
  background: linear-gradient(180deg, #33294f 0%, #241f36 100%); color: #e8e2f4;
  padding: 24px 14px; display: flex; flex-direction: column; gap: 30px;
  box-shadow: 12px 0 30px var(--shadow);
  html[data-theme='dark'] & { background: linear-gradient(180deg, #1d1b29 0%, #171620 100%); }
  @media (max-width: 760px) { position: static; width: 100%; height: auto; padding: 14px; gap: 12px; }
`;
export const Brand = styled.div`
  display: flex; align-items: center; gap: 11px; padding: 0 12px; color: #fff;
  font-weight: 800; font-size: 20px; letter-spacing: -.4px;
  svg { width: 30px; height: 30px; }
`;
export const Nav = styled.nav`
  display: grid; gap: 7px;
  @media (max-width: 760px) { display: flex; overflow-x: auto; }
`;
export const NavButton = styled.button<{ $active?: boolean }>`
  position: relative; display: flex; align-items: center; gap: 13px; width: 100%; border: 0; border-radius: 11px;
  padding: 12px 15px; color: #c7bddb; background: transparent; text-align: left;
  transition: color .15s ease, background .15s ease, transform .15s ease;
  &:hover { color: white; background: rgba(255,255,255,.08); transform: translateX(2px); }
  ${({ $active }) => $active && css`background: #c7e85b; color: #30274a; box-shadow: 0 7px 18px rgba(0,0,0,.16);`}
  svg { width: 19px; height: 19px; flex-shrink: 0; }
  @media (max-width: 760px) { width: auto; white-space: nowrap; }
`;
export const Main = styled.main`flex: 1; min-width: 0;`;
export const Topbar = styled.header`
  position: sticky; top: 0; z-index: 5; height: 70px; background: color-mix(in srgb, var(--surface) 90%, transparent); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between; padding: 0 30px;
  @media (max-width: 760px) { padding: 0 18px; }
`;
export const Content = styled.div`max-width: 1440px; margin: 0 auto; padding: 32px;
  @media (max-width: 760px) { padding: 18px 14px; }
`;
export const PageTitle = styled.div`
  display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 26px;
  h1 { font-size: clamp(24px, 3vw, 30px); margin: 0 0 7px; letter-spacing: -.8px; color: var(--text); }
  p { color: var(--muted); margin: 0; line-height: 1.6; font-size: 13px; }
  @media (max-width: 520px) { flex-direction: column; }
`;
export const Columns = styled.div`
  display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(300px, .9fr); gap: 20px; align-items: start;
  @media (max-width: 1050px) { grid-template-columns: 1fr; }
`;
export const Panel = styled.section`
  background: var(--surface); border: 1px solid var(--border); border-radius: 18px; padding: 24px;
  box-shadow: 0 8px 24px var(--shadow);
  @media (max-width: 520px) { padding: 17px; }
`;
export const PanelTitle = styled.h2`font-size: 17px; margin: 0 0 20px; display: flex; align-items: center; gap: 10px; color: var(--text); letter-spacing: -.2px;`;
export const Field = styled.label`
  display: grid; gap: 8px; margin-bottom: 18px; font-size: 13px; font-weight: 700; color: var(--text);
  small { color: var(--muted); font-weight: 400; }
  input, textarea, select { width: 100%; border: 1px solid var(--border); border-radius: 10px; padding: 12px 13px; outline: none; color: var(--text); background: var(--surface-raised); font-weight: 400; transition: border-color .15s ease, box-shadow .15s ease; }
  input:focus, textarea:focus, select:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
  textarea { resize: vertical; min-height: 90px; }
`;
export const TwoFields = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 14px; @media (max-width: 520px) { grid-template-columns: 1fr; gap: 0; }`;
export const ItemEditor = styled.div`background: var(--surface-raised); padding: 13px; border-radius: 10px; display: grid; gap: 10px; margin-bottom: 16px;`;
export const ItemRow = styled.div`display: flex; gap: 9px; align-items: center;`;
export const NumberBubble = styled.span`width: 30px; height: 30px; display: grid; place-items: center; flex-shrink: 0; border-radius: 50%; background: var(--border); color: var(--text); font-size: 12px; font-weight: 800;`;
export const ItemInput = styled.input`min-width: 0; flex: 1; border: 1px solid var(--border); border-radius: 7px; color: var(--text); background: var(--surface-raised); padding: 11px 12px;`;
export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 40px; border-radius: 10px; padding: 10px 15px; font-weight: 700; border: 1px solid transparent; transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
  &:hover:not(:disabled) { transform: translateY(-1px); }
  ${({ $variant }) => $variant === 'primary' && css`background: linear-gradient(135deg, #8063e8, #6547ca); color: white; box-shadow: 0 6px 14px rgba(112,84,216,.22); &:hover:not(:disabled) { box-shadow: 0 9px 18px rgba(112,84,216,.3); }`}
  ${({ $variant }) => (!$variant || $variant === 'secondary') && css`background: var(--surface); color: var(--text); border-color: var(--border); &:hover:not(:disabled) { background: var(--surface-raised); }`}
  ${({ $variant }) => $variant === 'danger' && css`background: #fff4f2; color: #c53e38; border-color: #ffdeda; &:hover:not(:disabled) { background: #ffeae7; } html[data-theme='dark'] & { background: #39232b; color: #ffaaa3; border-color: #5c333b; &:hover:not(:disabled) { background: #452a30; } }`}
  svg { width: 17px; height: 17px; }
`;
export const ButtonRow = styled.div`display: flex; gap: 10px; flex-wrap: wrap;`;
export const FooterActions = styled.div`display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--border); padding-top: 18px; margin-top: 22px;`;
export const PreviewBox = styled.div`background: var(--surface-raised); padding: 17px; border-radius: 10px; margin-bottom: 22px;`;
export const PreviewHeading = styled.div`display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 16px; margin-bottom: 14px; svg { color: var(--primary); }`;
export const Meta = styled.div`display: grid; gap: 11px; color: var(--muted); font-size: 13px; margin-top: 15px;`;
export const Status = styled.span<{ $done?: boolean }>`
  display: inline-flex; border-radius: 999px; padding: 5px 9px; font-size: 11px; font-weight: 700;
  color: ${({ $done }) => $done ? 'var(--success)' : 'var(--primary-strong)'};
  background: ${({ $done }) => $done ? 'var(--success-soft)' : 'color-mix(in srgb, var(--primary) 16%, var(--surface))'};
  html[data-theme='dark'] & { color: ${({ $done }) => $done ? 'var(--success)' : 'var(--primary-strong)'}; background: ${({ $done }) => $done ? 'var(--success-soft)' : 'color-mix(in srgb, var(--primary) 20%, var(--surface))'}; }
`;
export const ChecklistRow = styled.div`display: flex; align-items: center; gap: 10px; padding: 13px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; }
  input { width: 17px; height: 17px; accent-color: var(--primary); }
  span { flex: 1; font-size: 13px; }
`;
export const StatsGrid = styled.div`display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; margin-bottom: 20px; @media (max-width: 650px) { grid-template-columns: 1fr; }`;
export const StatCard = styled(Panel)`padding: 19px; p { margin: 0 0 10px; color: var(--muted); font-size: 13px; } strong { font-size: 28px; }`;
export const ProgressTrack = styled.div`height: 7px; background: var(--border); border-radius: 999px; overflow: hidden; margin-top: 13px; div { height: 100%; background: var(--primary); border-radius: inherit; transition: width .2s; }`;
export const TaskCard = styled(Panel)`margin-bottom: 15px;`;
export const TaskHeader = styled.div`display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; h3 { margin: 0 0 6px; font-size: 17px; } p { margin: 0; color: #71819a; font-size: 13px; line-height: 1.5; }`;
export const TaskTableWrap = styled.div`overflow-x: auto;`;
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
export const Filter = styled.select`padding: 10px 12px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface-raised); color: var(--text);`;
export const Filters = styled.div`
  display: flex; flex-wrap: wrap; gap: 10px; align-items: center;
  @media (max-width: 520px) { width: 100%; }
`;
export const PriorityBadge = styled.span<{ $priority: 'low' | 'medium' | 'high' }>`
  display: inline-flex; align-items: center; border-radius: 999px; padding: 5px 9px;
  font-size: 11px; font-weight: 700; white-space: nowrap;
  color: ${({ $priority }) => $priority === 'high' ? '#a52d28' : $priority === 'medium' ? '#9a5b08' : '#176b4d'};
  background: ${({ $priority }) => $priority === 'high' ? '#fff0ef' : $priority === 'medium' ? '#fff5df' : '#eafaf3'};
  html[data-theme='dark'] & {
    color: ${({ $priority }) => $priority === 'high' ? '#ffaaa3' : $priority === 'medium' ? '#f3c477' : '#8de0b8'};
    background: ${({ $priority }) => $priority === 'high' ? '#452a30' : $priority === 'medium' ? '#453821' : '#20382f'};
  }
`;
export const HistoryRow = styled.div`display: grid; grid-template-columns: minmax(0,1fr) auto auto; align-items: center; gap: 14px; padding: 15px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; } @media (max-width: 520px) { grid-template-columns: 1fr auto; }`;
