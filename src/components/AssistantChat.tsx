import { useState, type FormEvent } from 'react';
import { BookOpen, Bot, Focus, Send, Sparkles, X } from 'lucide-react';
import styled from 'styled-components';
import { sendAssistantMessage } from '../api';
import type { AssistantMessage } from '../types';

const ChatRoot = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 20;
  @media (max-width: 520px) { right: 14px; bottom: 14px; }
`;

const ChatButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 17px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, #286fe5, #6747c7);
  box-shadow: 0 10px 26px rgba(57, 77, 180, .3);
  font-weight: 800;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(57, 77, 180, .38); }
  svg { width: 19px; height: 19px; }
`;

const ChatPanel = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  width: min(390px, calc(100vw - 28px));
  height: min(620px, calc(100vh - 100px));
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 18px;
  color: var(--text);
  background: var(--surface);
  box-shadow: 0 18px 48px var(--shadow);
`;

const ChatHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 17px;
  color: #fff;
  background: linear-gradient(135deg, #1f5dc4, #5b42af);
  h2 { margin: 0; font-size: 15px; }
  p { margin: 3px 0 0; color: #dce8ff; font-size: 11px; }
`;

const HeaderIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > span { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 10px; background: rgba(255,255,255,.16); }
  svg { width: 18px; height: 18px; }
`;

const CloseButton = styled.button`
  display: grid; width: 30px; height: 30px; place-items: center; border: 0; border-radius: 8px; color: #fff; background: rgba(255,255,255,.12); cursor: pointer;
  &:hover { background: rgba(255,255,255,.22); }
  svg { width: 17px; height: 17px; }
`;

const Messages = styled.div`
  display: grid;
  align-content: start;
  gap: 11px;
  overflow-y: auto;
  padding: 16px;
  background: var(--surface-raised);
`;

const MessageBubble = styled.div<{ $role: AssistantMessage['role'] }>`
  max-width: 88%;
  justify-self: ${({ $role }) => $role === 'user' ? 'end' : 'start'};
  padding: 10px 12px;
  border: 1px solid ${({ $role }) => $role === 'user' ? 'color-mix(in srgb, var(--primary) 36%, var(--border))' : 'var(--border)'};
  border-radius: ${({ $role }) => $role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px'};
  color: ${({ $role }) => $role === 'user' ? 'var(--primary-strong)' : 'var(--text)'};
  background: ${({ $role }) => $role === 'user' ? 'color-mix(in srgb, var(--primary) 16%, var(--surface))' : 'var(--surface)'};
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
`;

const Suggestions = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 9px 12px 0;
  button { flex: 0 0 auto; padding: 7px 9px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--surface); font-size: 10px; cursor: pointer; &:hover { color: var(--primary); border-color: var(--primary); background: var(--surface-raised); } }
`;

const Composer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px;
  background: var(--surface);
  textarea { min-height: 42px; max-height: 100px; flex: 1; resize: none; padding: 11px 12px; border: 1px solid var(--border); border-radius: 11px; outline: none; color: var(--text); background: var(--surface-raised); font-size: 12px; &:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); } }
  button { display: grid; width: 42px; height: 42px; flex: 0 0 auto; place-items: center; border: 0; border-radius: 11px; color: #fff; background: var(--primary); cursor: pointer; &:disabled { opacity: .55; cursor: not-allowed; } svg { width: 17px; height: 17px; } }
`;

const EmptyChat = styled.div`
  display: grid; place-items: center; gap: 8px; min-height: 100%; padding: 28px; text-align: center; color: #71819a; font-size: 12px;
  svg { color: var(--primary); }
  strong { color: var(--text); font-size: 14px; }
  html[data-theme='dark'] & { color: var(--muted); }
  p { margin: 0; line-height: 1.5; }
`;

export default function AssistantChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState<AssistantMessage[]>([]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = input.trim();
    if (!content || loading) return;
    const nextMessages = [...messages, { role: 'user' as const, content }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setLoading(true);
    try {
      const answer = await sendAssistantMessage(content, messages);
      setMessages([...nextMessages, { role: 'assistant', content: answer || 'Não consegui gerar uma resposta agora.' }]);
    } catch (requestError: any) {
      setError(requestError?.response?.data?.error || 'O assistente não está disponível no momento.');
    } finally {
      setLoading(false);
    }
  }

  function useSuggestion(value: string) {
    setInput(value);
    setOpen(true);
  }

  return (
    <ChatRoot>
      {open ? (
        <ChatPanel aria-label="Assistente de produtividade e estudos">
          <ChatHeader>
            <HeaderIdentity><span><Bot /></span><div><h2>Assistente inteligente</h2><p>Produtividade e estudos</p></div></HeaderIdentity>
            <CloseButton type="button" aria-label="Fechar assistente" onClick={() => setOpen(false)}><X /></CloseButton>
          </ChatHeader>
          <Messages aria-live="polite">
            {messages.length === 0 ? <EmptyChat><Sparkles size={28} /><strong>Como posso ajudar?</strong><p>Posso montar planos de estudo, organizar prioridades, sugerir rotinas e ajudar você a sair da procrastinação.</p></EmptyChat> : messages.map((message, index) => <MessageBubble key={`${message.role}-${index}`} $role={message.role}>{message.content}</MessageBubble>)}
            {loading && <MessageBubble $role="assistant">Pensando...</MessageBubble>}
            {error && <MessageBubble $role="assistant">{error}</MessageBubble>}
          </Messages>
          <Suggestions>
            <button type="button" onClick={() => useSuggestion('Monte um plano de estudos para esta semana') }><BookOpen size={12} /> Plano de estudos</button>
            <button type="button" onClick={() => useSuggestion('Ajude-me a organizar minhas prioridades de hoje')}><Focus size={12} /> Prioridades de hoje</button>
          </Suggestions>
          <Composer onSubmit={submit}><textarea aria-label="Mensagem para o assistente" placeholder="Pergunte sobre produtividade ou estudos..." value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }} /><button type="submit" aria-label="Enviar mensagem" disabled={!input.trim() || loading}><Send /></button></Composer>
        </ChatPanel>
      ) : <ChatButton type="button" onClick={() => setOpen(true)}><Bot />Assistente IA</ChatButton>}
    </ChatRoot>
  );
}
