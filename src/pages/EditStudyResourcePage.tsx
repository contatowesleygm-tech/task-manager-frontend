import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { ArrowLeft, BookOpen, ExternalLink, LoaderCircle, Save } from 'lucide-react';
import styled from 'styled-components';
import RichTextEditor from '../components/RichTextEditor';
import {
  Button, Columns, Field, Filter, FooterActions, Meta, Muted, PageTitle, Panel, PanelTitle,
  PreviewBox, PreviewHeading,
} from '../components/ui';
import type { StudyResource, StudyResourcePayload, StudyResourceType } from '../types';
import { isHtmlEmpty, sanitizeHtml, toEditorHtml, youtubeVideoId } from '../utils/html';

const FormGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 0 15px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

const Tags = styled.div`
  display: flex; flex-wrap: wrap; gap: 5px;
  span { padding: 4px 7px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); font-size: 10px; }
`;

const PreviewContent = styled.div`
  min-height: 220px; padding: 16px; border: 1px solid var(--border); border-radius: 12px;
  background: var(--surface); color: var(--text); font-size: 14px; line-height: 1.7;
  h1, h2, h3 { margin: 0 0 10px; }
  p { margin: 0 0 10px; }
  ul, ol { margin: 0 0 10px; padding-left: 22px; }
  a { color: var(--primary-strong); }
`;

const MediaFrame = styled.div`
  overflow: hidden; margin-bottom: 12px; border: 1px solid var(--border); border-radius: 12px; background: #000;
  iframe, img { display: block; width: 100%; aspect-ratio: 16 / 9; border: 0; object-fit: cover; }
`;

const typeLabels: Record<StudyResourceType, string> = {
  link: 'Link', texto: 'Texto', documento: 'Documento', video: 'Vídeo',
  curso: 'Curso', livro: 'Livro', artigo: 'Artigo', outro: 'Outro',
};

function looksLikeImage(url: string) {
  return /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(url);
}

interface Props {
  resource?: StudyResource | null;
  loading: boolean;
  saving: boolean;
  onBack: () => void;
  onSave: (payload: StudyResourcePayload) => Promise<boolean>;
}

export default function EditStudyResourcePage({ resource, loading, saving, onBack, onSave }: Props) {
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [type, setType] = useState<StudyResourceType>('texto');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');

  const tagList = useMemo(
    () => tags.split(',').map(tag => tag.trim()).filter(Boolean),
    [tags],
  );
  const previewHtml = useMemo(() => sanitizeHtml(content), [content]);
  const youtubeId = useMemo(() => (url.trim() ? youtubeVideoId(url.trim()) : null), [url]);

  useEffect(() => {
    if (!resource) return;
    setTitle(resource.title);
    setArea(resource.area);
    setType(resource.type);
    setUrl(resource.url ?? '');
    setContent(toEditorHtml(resource.content ?? ''));
    setTags(resource.tags.join(', '));
    setFormError('');
  }, [resource?.id]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError('');
    if (!url.trim() && isHtmlEmpty(content)) {
      setFormError('Informe uma URL ou escreva o conteúdo do material.');
      return;
    }
    const payload: StudyResourcePayload = {
      title: title.trim(),
      area: area.trim(),
      type,
      url: url.trim() || null,
      content: isHtmlEmpty(content) ? null : sanitizeHtml(content).slice(0, 20000),
      tags: tagList,
    };
    await onSave(payload);
  }

  if (loading && !resource) {
    return <Panel><p style={{ margin: 0, color: 'var(--muted)' }}>Carregando material...</p></Panel>;
  }

  if (!resource) {
    return (
      <>
        <PageTitle>
          <div>
            <h1>Material não encontrado</h1>
            <p>Não foi possível localizar esse material na biblioteca.</p>
          </div>
        </PageTitle>
        <Button type="button" onClick={onBack}><ArrowLeft />Voltar para biblioteca</Button>
      </>
    );
  }

  return (
    <>
      <PageTitle>
        <div>
          <h1>Editar material</h1>
          <p>Escreva, formate e visualize o conteúdo em uma página completa.</p>
        </div>
        <Button type="button" onClick={onBack}><ArrowLeft />Voltar</Button>
      </PageTitle>
      <Columns>
        <Panel>
          <PanelTitle><BookOpen size={19} color="var(--primary)" />Dados e conteúdo</PanelTitle>
          <form onSubmit={event => { void submit(event); }}>
            <FormGrid>
              <Field>
                Título *
                <input value={title} onChange={event => setTitle(event.target.value)} maxLength={200} required placeholder="Ex.: Anotações de álgebra" />
              </Field>
              <Field>
                Área *
                <input value={area} onChange={event => setArea(event.target.value)} maxLength={100} required placeholder="Ex.: Matemática" />
              </Field>
              <Field>
                Tipo *
                <Filter value={type} onChange={event => setType(event.target.value as StudyResourceType)}>
                  {Object.entries(typeLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </Filter>
              </Field>
              <Field>
                Tags <small>(separadas por vírgula)</small>
                <input value={tags} onChange={event => setTags(event.target.value)} placeholder="álgebra, revisão" />
              </Field>
            </FormGrid>
            <Field>
              URL <small>(opcional se houver conteúdo)</small>
              <input type="url" value={url} onChange={event => setUrl(event.target.value)} placeholder="https://..." />
            </Field>
            <Field as="div">
              Conteúdo <small>(opcional se houver URL)</small>
              <RichTextEditor
                value={content}
                onChange={setContent}
                minHeight={420}
                placeholder="Resumo, anotações ou pontos importantes..."
                ariaLabel="Conteúdo do material"
              />
            </Field>
            {formError && <p role="alert" style={{ color: 'var(--error)', fontSize: 12 }}>{formError}</p>}
            <FooterActions>
              <Button type="button" onClick={onBack}>Cancelar</Button>
              <Button type="submit" $variant="primary" disabled={saving}>
                {saving ? <LoaderCircle className="spin" /> : <Save />}
                Salvar alterações
              </Button>
            </FooterActions>
          </form>
        </Panel>
        <Panel>
          <PanelTitle>Visualização</PanelTitle>
          <PreviewBox>
            <PreviewHeading><BookOpen size={18} />{title.trim() || 'Título do material'}</PreviewHeading>
            <Meta>
              <span>Área: {area.trim() || 'Sem área'}</span>
              <span>Tipo: {typeLabels[type]}</span>
            </Meta>
            {tagList.length > 0 && <Tags style={{ marginTop: 12 }}>{tagList.map(tag => <span key={tag}>#{tag}</span>)}</Tags>}
          </PreviewBox>
          {url.trim() && (
            <>
              <PanelTitle>Material</PanelTitle>
              {youtubeId ? (
                <MediaFrame>
                  <iframe title="Visualização do vídeo" src={`https://www.youtube.com/embed/${youtubeId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </MediaFrame>
              ) : looksLikeImage(url.trim()) ? (
                <MediaFrame>
                  <img src={url.trim()} alt={title.trim() || 'Material'} />
                </MediaFrame>
              ) : null}
              <a href={url.trim()} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 18, color: 'var(--primary)', fontSize: 13, overflowWrap: 'anywhere' }}>
                <ExternalLink size={14} />Abrir URL
              </a>
            </>
          )}
          <PanelTitle>Conteúdo</PanelTitle>
          {isHtmlEmpty(content)
            ? <Muted>O conteúdo formatado aparecerá aqui enquanto você escreve.</Muted>
            : <PreviewContent dangerouslySetInnerHTML={{ __html: previewHtml }} />}
        </Panel>
      </Columns>
    </>
  );
}
