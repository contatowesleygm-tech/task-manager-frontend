import { useEffect, useRef } from 'react';
import {
  Bold, Heading2, Italic, Link as LinkIcon, List, ListOrdered, Strikethrough, Underline,
} from 'lucide-react';
import styled from 'styled-components';

const Wrap = styled.div`
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-raised);
  &:focus-within { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
`;

const ToolButton = styled.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  color: var(--text);
  background: transparent;
  cursor: pointer;
  &:hover { border-color: var(--border); background: var(--surface-raised); }
  svg { width: 16px; height: 16px; }
`;

const Surface = styled.div<{ $minHeight: number }>`
  min-height: ${({ $minHeight }) => `${$minHeight}px`};
  max-height: ${({ $minHeight }) => `${Math.max(560, $minHeight + 180)}px`};
  overflow: auto;
  padding: 14px 16px;
  color: var(--text);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.65;
  outline: none;
  &:empty::before { color: var(--muted); content: attr(data-placeholder); pointer-events: none; }
  h1, h2, h3 { margin: 0 0 10px; }
  p { margin: 0 0 10px; }
  ul, ol { margin: 0 0 10px; padding-left: 22px; }
  a { color: var(--primary-strong); }
`;

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: number;
  ariaLabel?: string;
}

export default function RichTextEditor({
  value, onChange, placeholder = 'Escreva o conteúdo...', minHeight = 280, ariaLabel = 'Conteúdo',
}: Props) {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const focusedRef = useRef(false);

  useEffect(() => {
    const node = surfaceRef.current;
    if (!node || focusedRef.current) return;
    if (node.innerHTML !== value) node.innerHTML = value;
  }, [value]);

  function emit() {
    onChange(surfaceRef.current?.innerHTML ?? '');
  }

  function run(command: string, argument?: string) {
    surfaceRef.current?.focus();
    document.execCommand(command, false, argument);
    emit();
  }

  function addLink() {
    const href = window.prompt('Informe a URL do link')?.trim();
    if (!href) return;
    run('createLink', href);
  }

  return (
    <Wrap>
      <Toolbar role="toolbar" aria-label="Formatador de texto">
        <ToolButton type="button" title="Negrito" aria-label="Negrito" onMouseDown={event => event.preventDefault()} onClick={() => run('bold')}><Bold /></ToolButton>
        <ToolButton type="button" title="Itálico" aria-label="Itálico" onMouseDown={event => event.preventDefault()} onClick={() => run('italic')}><Italic /></ToolButton>
        <ToolButton type="button" title="Sublinhado" aria-label="Sublinhado" onMouseDown={event => event.preventDefault()} onClick={() => run('underline')}><Underline /></ToolButton>
        <ToolButton type="button" title="Riscado" aria-label="Riscado" onMouseDown={event => event.preventDefault()} onClick={() => run('strikeThrough')}><Strikethrough /></ToolButton>
        <ToolButton type="button" title="Título" aria-label="Título" onMouseDown={event => event.preventDefault()} onClick={() => run('formatBlock', 'h2')}><Heading2 /></ToolButton>
        <ToolButton type="button" title="Lista" aria-label="Lista" onMouseDown={event => event.preventDefault()} onClick={() => run('insertUnorderedList')}><List /></ToolButton>
        <ToolButton type="button" title="Lista numerada" aria-label="Lista numerada" onMouseDown={event => event.preventDefault()} onClick={() => run('insertOrderedList')}><ListOrdered /></ToolButton>
        <ToolButton type="button" title="Inserir link" aria-label="Inserir link" onMouseDown={event => event.preventDefault()} onClick={addLink}><LinkIcon /></ToolButton>
      </Toolbar>
      <Surface
        ref={surfaceRef}
        $minHeight={minHeight}
        role="textbox"
        aria-label={ariaLabel}
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder}
        onFocus={() => { focusedRef.current = true; }}
        onBlur={() => { focusedRef.current = false; emit(); }}
        onInput={emit}
      />
    </Wrap>
  );
}
