const ALLOWED_TAGS = new Set([
  'P', 'BR', 'STRONG', 'B', 'EM', 'I', 'U', 'S', 'STRIKE',
  'H1', 'H2', 'H3', 'UL', 'OL', 'LI', 'A', 'BLOCKQUOTE', 'DIV', 'SPAN',
]);

function isProbablyHtml(value: string) {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

function escapeText(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function sanitizeHtml(html: string) {
  if (!html.trim()) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');

  function clean(node: Node) {
    const children = [...node.childNodes];
    for (const child of children) {
      if (child.nodeType === Node.COMMENT_NODE) {
        child.remove();
        continue;
      }
      if (child.nodeType !== Node.ELEMENT_NODE) continue;
      const element = child as HTMLElement;
      const tag = element.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'IFRAME' || tag === 'OBJECT') {
        element.remove();
        continue;
      }
      if (!ALLOWED_TAGS.has(tag)) {
        const parent = element.parentNode;
        if (parent) {
          while (element.firstChild) parent.insertBefore(element.firstChild, element);
          element.remove();
        }
        continue;
      }
      for (const attr of [...element.attributes]) {
        const name = attr.name.toLowerCase();
        const dangerous = name.startsWith('on') || name === 'style' || name === 'srcdoc';
        if (dangerous) element.removeAttribute(attr.name);
      }
      if (tag === 'A') {
        const href = element.getAttribute('href')?.trim() ?? '';
        const safe = /^(https?:|mailto:|#)/i.test(href);
        if (!safe) element.removeAttribute('href');
        else {
          element.setAttribute('target', '_blank');
          element.setAttribute('rel', 'noreferrer noopener');
        }
      }
      clean(element);
    }
  }

  clean(doc.body);
  return doc.body.innerHTML;
}

export function toEditorHtml(value: string) {
  if (!value.trim()) return '';
  if (isProbablyHtml(value)) return sanitizeHtml(value);
  return value
    .split(/\n{2,}/)
    .map(paragraph => `<p>${escapeText(paragraph).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

export function htmlToPlainText(value: string) {
  if (!value) return '';
  const doc = new DOMParser().parseFromString(sanitizeHtml(value), 'text/html');
  return (doc.body.textContent ?? '').replace(/\u00a0/g, ' ').trim();
}

export function isHtmlEmpty(value: string) {
  return !htmlToPlainText(value);
}

export function youtubeVideoId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) return parsed.pathname.slice(1, 12);
    if (parsed.hostname.includes('youtube.com')) {
      return parsed.searchParams.get('v') ?? parsed.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/)?.[1] ?? null;
    }
  } catch {
    return null;
  }
  return null;
}
