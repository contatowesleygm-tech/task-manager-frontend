import { useMemo, useState, type FormEvent } from 'react';
import { BookOpen, ExternalLink, Eye, FileText, Filter as FilterIcon, Link as LinkIcon, LoaderCircle, Pencil, Plus, Search, Trash2, Video, X } from 'lucide-react';
import styled from 'styled-components';
import RichTextEditor from '../components/RichTextEditor';
import { Button, EmptyState, Field, Filter, Modal, PageTitle, Panel, PanelTitle, Status } from '../components/ui';
import type { StudyResource, StudyResourceArea, StudyResourcePayload, StudyResourceType } from '../types';
import { isHtmlEmpty, sanitizeHtml } from '../utils/html';

const ResourceLayout = styled.div`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
const AreaList = styled.div`
  display: grid; gap: 7px;
  button { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; padding: 10px 11px; border: 1px solid var(--border); border-radius: 9px; color: var(--muted); background: var(--surface); text-align: left; font-size: 12px; cursor: pointer; &:hover { border-color: var(--primary); background: var(--surface-raised); } }
  button[data-active='true'] { border-color: var(--primary); color: var(--primary-strong); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); font-weight: 700; }
  span { min-width: 22px; padding: 3px 6px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); text-align: center; font-size: 10px; }
`;
const ResourceGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 290px), 1fr)); gap: 13px;
`;
const ResourceCard = styled.article`
  display: grid; gap: 13px; padding: 17px; border: 1px solid var(--border); border-radius: 14px; background: var(--surface); box-shadow: 0 4px 14px var(--shadow); transition: .15s ease;
  &:hover { transform: translateY(-2px); border-color: var(--primary); box-shadow: 0 10px 24px var(--shadow); }
`;
const ResourceHeader = styled.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;
  h3 { margin: 0; color: var(--text); font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
`;
const ResourceIcon = styled.span`
  display: grid; width: 36px; height: 36px; flex: 0 0 auto; place-items: center; border-radius: 10px; color: var(--primary); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); svg { width: 18px; height: 18px; }
`;
const ResourceContent = styled.div`
  display: -webkit-box; max-height: 82px; margin: 0; overflow: hidden; color: var(--muted); font-size: 12px; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 4;
  & > :first-child { margin-top: 0; }
  p, h1, h2, h3, blockquote { margin: 0 0 5px; font-size: inherit; line-height: inherit; }
  ul, ol { margin: 3px 0; padding-left: 18px; }
  strong, b { color: var(--text); }
  a { color: var(--primary-strong); }
`;
const ResourceDetailsContent = styled.div`
  color: var(--text); font-size: 14px; line-height: 1.75; overflow-wrap: anywhere;
  p, h1, h2, h3, blockquote { margin: 0 0 12px; }
  h1, h2, h3, strong, b { color: var(--text); }
  ul, ol { padding-left: 22px; }
  blockquote { padding: 8px 12px; border-left: 3px solid var(--primary); color: var(--muted); background: var(--surface-raised); }
  a { color: var(--primary-strong); }
`;
const ResourceDetailMeta = styled.p`
  display: flex; flex-wrap: wrap; gap: 7px; margin: 0 0 14px; color: var(--muted); font-size: 12px;
`;
const Tags = styled.div`
  display: flex; flex-wrap: wrap; gap: 5px; span { padding: 4px 7px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); font-size: 10px; }
`;
const ResourceActions = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 7px; padding-top: 10px; border-top: 1px solid var(--border);
`;
const ResourceActionGroup = styled.div`
  display: flex; gap: 7px;
`;
const IconButton = styled.button`
  display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid var(--border); border-radius: 8px; color: var(--muted); background: var(--surface-raised); cursor: pointer; &:hover { color: var(--primary); background: var(--surface); } &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); } svg { width: 15px; height: 15px; }
`;
const FormPanel = styled(Panel)`
  margin-bottom: 18px;
`;
const FormGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 0 15px; @media (max-width: 620px) { grid-template-columns: 1fr; }
`;
const FormActions = styled.div`
  display: flex; justify-content: flex-end; gap: 8px; margin-top: 8px; flex-wrap: wrap;
`;
const Toolbar = styled.div`
  display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; margin-bottom: 18px; padding: 14px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-raised);
  ${Field} { min-width: 170px; flex: 1; margin: 0; }
`;
const Pagination = styled.div`
  display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-top: 18px; color: var(--muted); font-size: 11px;
`;

const typeLabels: Record<StudyResourceType, string> = { link: 'Link', texto: 'Texto', documento: 'Documento', video: 'Vídeo', curso: 'Curso', livro: 'Livro', artigo: 'Artigo', outro: 'Outro' };

interface Props {
  resources: StudyResource[];
  areas: StudyResourceArea[];
  loading: boolean;
  saving: boolean;
  pagination: { page: number; total: number; totalPages: number; hasNextPage: boolean; hasPreviousPage: boolean };
  filters: { area: string; type: string; search: string };
  onFiltersChange: (filters: { area: string; type: string; search: string }) => void;
  onPageChange: (page: number) => void;
  onCreate: (payload: StudyResourcePayload) => Promise<boolean>;
  onDelete: (resource: StudyResource) => Promise<boolean>;
  onEdit: (resource: StudyResource) => void;
}

function iconFor(type: StudyResourceType) {
  if (type === 'link') return <LinkIcon />;
  if (type === 'video') return <Video />;
  if (type === 'documento' || type === 'artigo') return <FileText />;
  return <BookOpen />;
}

export default function StudyResourcesPage({ resources, areas, loading, saving, pagination, filters, onFiltersChange, onPageChange, onCreate, onDelete, onEdit }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [selectedResource, setSelectedResource] = useState<StudyResource | null>(null);
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [type, setType] = useState<StudyResourceType>('texto');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');
  const totalMaterials = useMemo(() => areas.reduce((sum, item) => sum + item.count, 0), [areas]);

  function resetForm() { setShowForm(false); setTitle(''); setArea(''); setType('texto'); setUrl(''); setContent(''); setTags(''); setFormError(''); }
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
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };
    const ok = await onCreate(payload);
    if (ok) resetForm();
  }

  return <>
    <PageTitle><div><h1>Biblioteca de estudos</h1><p>Guarde links, resumos e materiais para revisar quando precisar.</p></div><Button $variant="primary" onClick={showForm ? resetForm : () => setShowForm(true)}>{showForm ? <X /> : <Plus />}{showForm ? 'Fechar' : 'Novo material'}</Button></PageTitle>
    {showForm && (
      <FormPanel>
        <PanelTitle><BookOpen size={19} color="var(--primary)" />Adicionar material</PanelTitle>
        <form onSubmit={event => { void submit(event); }}>
          <FormGrid>
            <Field>Título *<input value={title} onChange={event => setTitle(event.target.value)} maxLength={200} required placeholder="Ex.: Anotações de álgebra" /></Field>
            <Field>Área *<input value={area} onChange={event => setArea(event.target.value)} maxLength={100} required placeholder="Ex.: Matemática" /></Field>
            <Field>Tipo *<Filter value={type} onChange={event => setType(event.target.value as StudyResourceType)}>{Object.entries(typeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</Filter></Field>
            <Field>Tags <small>(separadas por vírgula)</small><input value={tags} onChange={event => setTags(event.target.value)} placeholder="álgebra, revisão" /></Field>
          </FormGrid>
          <Field>URL <small>(opcional se houver conteúdo)</small><input type="url" value={url} onChange={event => setUrl(event.target.value)} placeholder="https://..." /></Field>
          <Field as="div">Conteúdo <small>(opcional se houver URL)</small>
            <RichTextEditor
              value={content}
              onChange={setContent}
              minHeight={280}
              placeholder="Resumo, anotações ou pontos importantes..."
              ariaLabel="Conteúdo do material"
            />
          </Field>
          {formError && <p role="alert" style={{ color: 'var(--error)', fontSize: 12 }}>{formError}</p>}
          <FormActions>
            <Button type="button" onClick={resetForm}>Cancelar</Button>
            <Button type="submit" $variant="primary" disabled={saving}>{saving ? <LoaderCircle className="spin" /> : <Plus />}Adicionar material</Button>
          </FormActions>
        </form>
      </FormPanel>
    )}
    <Toolbar><Field><Search size={14} />Buscar material<input value={filters.search} onChange={event => onFiltersChange({ ...filters, search: event.target.value })} placeholder="Título, conteúdo ou tag" /></Field><Field>Área<Filter value={filters.area} onChange={event => onFiltersChange({ ...filters, area: event.target.value })}><option value="">Todas as áreas</option>{areas.map(item => <option key={item.area} value={item.area}>{item.area}</option>)}</Filter></Field><Field>Tipo<Filter value={filters.type} onChange={event => onFiltersChange({ ...filters, type: event.target.value })}><option value="">Todos os tipos</option>{Object.entries(typeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</Filter></Field><Button type="button" onClick={() => onFiltersChange({ area: '', type: '', search: '' })}><FilterIcon />Limpar</Button></Toolbar>
    <ResourceLayout><Panel><PanelTitle><BookOpen size={18} color="var(--primary)" />Áreas</PanelTitle><AreaList><button type="button" data-active={!filters.area} onClick={() => onFiltersChange({ ...filters, area: '' })}><span>Todas as áreas</span><span>{totalMaterials}</span></button>{areas.map(item => <button key={item.area} type="button" data-active={filters.area === item.area} onClick={() => onFiltersChange({ ...filters, area: item.area })}><span>{item.area}</span><span>{item.count}</span></button>)}</AreaList></Panel><Panel><PanelTitle><BookOpen size={18} color="var(--primary)" />Materiais <Status>{pagination.total}</Status></PanelTitle>{loading ? <EmptyState><LoaderCircle /><p>Carregando materiais...</p></EmptyState> : resources.length === 0 ? <EmptyState><BookOpen size={32} /><h3>Nenhum material encontrado</h3><p>Adicione um resumo, link ou conteúdo para começar sua biblioteca.</p></EmptyState> : <><ResourceGrid>{resources.map(resource => {
      const formattedContent = resource.content && !isHtmlEmpty(resource.content) ? sanitizeHtml(resource.content) : '';
      return <ResourceCard key={resource.id}><ResourceHeader><div style={{ display: 'flex', gap: 10, minWidth: 0 }}><ResourceIcon>{iconFor(resource.type)}</ResourceIcon><div><h3>{resource.title}</h3><p>{resource.area} · {typeLabels[resource.type]}</p></div></div></ResourceHeader>{formattedContent && <ResourceContent dangerouslySetInnerHTML={{ __html: formattedContent }} />}{resource.url && <a href={resource.url} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontSize: 12, overflowWrap: 'anywhere' }}><ExternalLink size={13} style={{ verticalAlign: 'middle', marginRight: 5 }} />Abrir material</a>}{resource.tags.length > 0 && <Tags>{resource.tags.map(tag => <span key={tag}>#{tag}</span>)}</Tags>}<ResourceActions><Button type="button" onClick={() => setSelectedResource(resource)}><Eye />Detalhes</Button><ResourceActionGroup><IconButton type="button" title="Editar material" aria-label={`Editar ${resource.title}`} onClick={() => onEdit(resource)}><Pencil /></IconButton><IconButton type="button" title="Excluir material" aria-label={`Excluir ${resource.title}`} data-danger="true" onClick={() => { if (window.confirm(`Excluir o material “${resource.title}”?`)) void onDelete(resource); }}><Trash2 /></IconButton></ResourceActionGroup></ResourceActions></ResourceCard>;
    })}</ResourceGrid><Pagination><span>{pagination.total} materiais · Página {pagination.page} de {pagination.totalPages || 1}</span><div style={{ display: 'flex', gap: 7 }}><Button type="button" disabled={!pagination.hasPreviousPage || loading} onClick={() => onPageChange(pagination.page - 1)}>Anterior</Button><Button type="button" disabled={!pagination.hasNextPage || loading} onClick={() => onPageChange(pagination.page + 1)}>Próxima</Button></div></Pagination></>}</Panel></ResourceLayout>
    <Modal
      open={selectedResource !== null}
      title={selectedResource?.title ?? 'Detalhes do material'}
      icon={<BookOpen size={18} />}
      onClose={() => setSelectedResource(null)}
    >
      {selectedResource && <>
        <ResourceDetailMeta>
          <span>{selectedResource.area}</span>
          <span>·</span>
          <span>{typeLabels[selectedResource.type]}</span>
        </ResourceDetailMeta>
        {selectedResource.tags.length > 0 && <Tags style={{ marginBottom: 16 }}>{selectedResource.tags.map(tag => <span key={tag}>#{tag}</span>)}</Tags>}
        {selectedResource.url && <a href={selectedResource.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16, color: 'var(--primary-strong)', fontSize: 13, overflowWrap: 'anywhere' }}><ExternalLink size={14} />Abrir material</a>}
        {selectedResource.content && !isHtmlEmpty(selectedResource.content)
          ? <ResourceDetailsContent dangerouslySetInnerHTML={{ __html: sanitizeHtml(selectedResource.content) }} />
          : <p style={{ color: 'var(--muted)', fontSize: 13 }}>Este material não tem conteúdo adicional.</p>}
      </>}
    </Modal>
  </>;
}
