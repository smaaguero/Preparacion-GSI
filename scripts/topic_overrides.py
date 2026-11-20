#!/usr/bin/env python3
"""Sustituciones declaradas del fork: temas redactados de nuevo que reemplazan a
los apuntes del corpus en la aplicación.

El texto canónico del corpus no se modifica: sigue en documents/markdown y el
validador comprueba su hash igual que antes. Cada sustitución se registra en
content/topic-overrides.json con la huella exacta del texto del fork, y este
módulo genera a partir de él el Markdown y el HTML del tema.

Uso: python3 scripts/topic_overrides.py   (registra la huella y regenera)
"""
from __future__ import annotations

import hashlib
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = 'content/topic-overrides.json'
REPASO_HEADING = '## Resumen de repaso'
ITEM = re.compile(r'^(\s*)([-*]|\d+\.)\s+(.*)$')


def sha256(text: str) -> str:
    return hashlib.sha256(text.encode('utf-8')).hexdigest()


def load_overrides(root: Path = ROOT) -> dict:
    path = root / MANIFEST
    if not path.exists():
        return {}
    data = json.loads(path.read_text('utf-8'))
    if data.get('version') != 1 or not isinstance(data.get('topics'), dict):
        raise ValueError(f'Manifiesto de sustituciones inválido: {MANIFEST}')
    return data['topics']


# --- Markdown → HTML (subconjunto usado en los temas del fork) --------------

def inline(text: str) -> str:
    """Escapa y aplica código, enlaces HTTPS, negrita y cursiva."""
    codes: list[str] = []

    def keep_code(match: re.Match) -> str:
        codes.append(f'<code>{html.escape(match[1])}</code>')
        return f'\x00{len(codes) - 1}\x00'

    text = re.sub(r'`([^`]+)`', keep_code, text)
    text = html.escape(text, quote=False)
    text = re.sub(r'\[([^\]]+)\]\((https://[^)\s]+)\)',
                  lambda m: f'<a href="{html.escape(m[2], quote=True)}" target="_blank" rel="noopener noreferrer">{m[1]}</a>', text)
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', text)
    return re.sub(r'\x00(\d+)\x00', lambda m: codes[int(m[1])], text)


def indent_of(line: str) -> int:
    return len(line) - len(line.lstrip(' '))


def render_table(rows: list[str]) -> str:
    cells = [[c.strip() for c in row.strip().strip('|').split('|')] for row in rows]
    header, body = cells[0], cells[2:]
    head = ''.join(f'<th scope="col">{inline(c)}</th>' for c in header)
    rows_html = ''.join('<tr>' + ''.join(f'<td>{inline(c)}</td>' for c in row) + '</tr>' for row in body)
    return f'<table><thead><tr>{head}</tr></thead><tbody>{rows_html}</tbody></table>'


def render_list(lines: list[str], start: int) -> tuple[str, int]:
    first = ITEM.match(lines[start])
    ordered = first[2][0].isdigit()
    items: list[str] = []
    i = start
    while i < len(lines):
        match = ITEM.match(lines[i])
        if not match or indent_of(lines[i]) != 0 or match[2][0].isdigit() != ordered:
            break
        content_indent = len(match[2]) + 1
        item_lines = [match[3]]
        i += 1
        while i < len(lines):
            line = lines[i]
            if not line.strip():
                j = i
                while j < len(lines) and not lines[j].strip():
                    j += 1
                if j < len(lines) and indent_of(lines[j]) >= content_indent:
                    item_lines.append('')
                    i += 1
                    continue
                break
            if indent_of(line) >= content_indent:
                item_lines.append(line[content_indent:])
                i += 1
                continue
            break
        # El primer párrafo del elemento va en línea; el resto, como bloques.
        lead: list[str] = []
        k = 0
        while k < len(item_lines) and item_lines[k].strip() and not ITEM.match(item_lines[k]):
            lead.append(item_lines[k].strip())
            k += 1
        rest = render_blocks(item_lines[k:])
        items.append(f'<li>{inline(" ".join(lead))}{rest}</li>')
    tag = 'ol' if ordered else 'ul'
    return f'<{tag}>' + ''.join(items) + f'</{tag}>', i


def render_blocks(lines: list[str]) -> str:
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
        elif line.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'):
                rows.append(lines[i])
                i += 1
            out.append(render_table(rows))
        elif ITEM.match(line) and indent_of(line) == 0:
            markup, i = render_list(lines, i)
            out.append(markup)
        else:
            paragraph = []
            while i < len(lines) and lines[i].strip() and not lines[i].startswith('|') and not ITEM.match(lines[i]):
                paragraph.append(lines[i].strip())
                i += 1
            out.append(f'<p>{inline(" ".join(paragraph))}</p>')
    return '\n'.join(out)


# --- Tema completo -----------------------------------------------------------

def visual_html(topic_id: str, visual: dict, ordinal: int) -> str:
    """Mismo marcado que build_gsi_content.visual_markup."""
    title_id = f'{topic_id.lower()}-visual-{ordinal:02}-title'
    return (
        f'<section class="topic-visual-block" aria-labelledby="{title_id}">'
        f'<h4 id="{title_id}">{html.escape(visual["title"])}</h4>'
        '<figure class="topic-visual">'
        '<p class="topic-visual__mobile-hint" aria-hidden="true">Desliza horizontalmente para explorar el esquema con texto legible.</p>'
        f'<img src="{html.escape(visual["src"], quote=True)}" alt="{html.escape(visual["alt"], quote=True)}" loading="lazy" decoding="async">'
        '<figcaption>'
        f'<span>{html.escape(visual["description"])}</span>'
        f'<strong>Qué debes recordar:</strong> {html.escape(visual["takeaway"])}'
        '</figcaption></figure></section>'
    )


def visual_markdown(visual: dict) -> str:
    """Mismo bloque que build_gsi_content.inject_markdown_enhancements."""
    return (f'\n\n### {visual["title"]}\n\n'
            f'![{visual["alt"]}](../../{visual["src"]})\n\n'
            f'_{visual["description"]}_\n\n'
            f'**Qué debes recordar:** {visual["takeaway"]}\n')


def split_parts(authored: str) -> tuple[str, str, str]:
    """Separa cabecera (título, identificación y fuente), apuntes y repaso."""
    if REPASO_HEADING not in authored:
        raise ValueError('La sustitución necesita la sección «## Resumen de repaso».')
    study_start = authored.index('\n## ')
    study_end = authored.index('\n' + REPASO_HEADING)
    return authored[:study_start], authored[study_start:study_end], authored[study_end + len(REPASO_HEADING) + 1:]


def render_part(markdown: str, prefix: str, label: str, ref: dict, visuals: dict, topic_id: str) -> tuple[list[str], list[dict]]:
    body = [f'<h2 id="{prefix}">{html.escape(label)}</h2>']
    sections = [{'sectionId': prefix, 'title': label, 'level': 2,
                 'sourceRefs': [{'sourceId': ref['sourceId'], 'locator': ref['locator'], 'officialFragmentUrl': None}]}]
    # En los apuntes, «##» es apartado (h3) y «###», subapartado (h4).
    # En el repaso, «###» es apartado (h3).
    section_mark, sub_mark = ('## ', '### ') if prefix == 'estudio' else ('### ', '#### ')
    pending: list[str] = []
    ordinal = sub = 0

    def flush() -> None:
        if pending:
            body.append(render_blocks(pending))
            pending.clear()

    for line in markdown.splitlines():
        if line.startswith(section_mark):
            flush()
            ordinal += 1
            sub = 0
            title = line[len(section_mark):].strip()
            anchor = f'{prefix}-{ordinal:02}'
            sections.append({'sectionId': anchor, 'title': title, 'level': 3,
                             'sourceRefs': [{'sourceId': ref['sourceId'], 'locator': f'{ref["locator"]} / {title}', 'officialFragmentUrl': None}]})
            body.append(f'<h3 id="{anchor}">{inline(title)}</h3>')
            for number, visual in visuals.get(title, []):
                body.append(visual_html(topic_id, visual, number))
        elif line.startswith(sub_mark):
            flush()
            sub += 1
            body.append(f'<h4 id="{prefix}-{ordinal:02}-{sub:02}">{inline(line[len(sub_mark):].strip())}</h4>')
        else:
            pending.append(line)
    flush()
    return body, sections


def render_override(root: Path, topic_id: str, override: dict, official_title: str, sources: dict) -> tuple[str, str, list[dict]]:
    authored = (root / override['markdown']).read_text('utf-8')
    if not authored.startswith(f'# {official_title}\n'):
        raise ValueError(f'{topic_id}: la sustitución debe empezar por el título oficial.')
    _, study, review = split_parts(authored)
    visuals: dict[str, list] = {}
    for number, visual in enumerate(override.get('visuals', []), 1):
        visuals.setdefault(visual['afterHeading'], []).append((number, visual))
        heading = f'## {visual["afterHeading"]}\n'
        if authored.count(heading) != 1:
            raise ValueError(f'{topic_id}: encabezado del diagrama no encontrado: {visual["afterHeading"]}')
    markdown = authored
    for visual in override.get('visuals', []):
        heading = f'## {visual["afterHeading"]}'
        markdown = markdown.replace(heading + '\n', heading + visual_markdown(visual), 1)
    study_body, study_sections = render_part(study, 'estudio', 'Apuntes de estudio', override['studyRef'], visuals, topic_id)
    review_body, review_sections = render_part(review, 'repaso', 'Resumen de repaso', override['reviewRef'], {}, topic_id)
    sections = study_sections + review_sections
    toc = ''.join(f'<li><a href="#temario/{topic_id}/{s["sectionId"]}">{html.escape(s["title"])}</a></li>' for s in sections)
    replaced = sources[override['studyRef']['sourceId']]
    citations = [f'<li>{html.escape(override["notice"])}</li>',
                 f'<li>Sustituye a: <a href="{html.escape(replaced["url"], quote=True)}" target="_blank" rel="noopener noreferrer">{html.escape(replaced["title"])}</a> · {html.escape(override["replacesLocator"])} · {replaced["reviewed_at"]}</li>']
    for basis in override.get('basis', []):
        label = html.escape(basis['title'])
        citations.append(f'<li><a href="{html.escape(basis["url"], quote=True)}" target="_blank" rel="noopener noreferrer">{label}</a></li>' if basis.get('url') else f'<li>{label}</li>')
    markup = (f'<article class="topic-content" data-topic-id="{topic_id}" data-coverage-status="complete">\n'
              f'<p>{html.escape(override["notice"])}</p>\n'
              f'<nav class="topic-content__toc" aria-label="Índice del tema"><h2>Contenido del tema</h2><ol>{toc}</ol></nav>\n'
              + '\n'.join(study_body + review_body)
              + f'\n<section class="topic-content__sources"><h2 id="fuentes">Fuentes y localizadores</h2><ul>{"".join(citations)}</ul></section>\n</article>\n')
    return markdown, markup, sections


def apply_overrides(root: Path = ROOT) -> list[str]:
    path = root / MANIFEST
    if not path.exists():
        return []
    manifest = json.loads(path.read_text('utf-8'))
    overrides = manifest['topics']
    syllabus = json.loads((root / 'data/syllabus.json').read_text('utf-8'))
    titles = {t['id']: t['title'] for b in syllabus['blocks'] for t in b['topics']}
    sources = {s['id']: s for s in json.loads((root / 'data/sources.json').read_text('utf-8'))['sources']}
    index_path = root / 'data/topic-content.json'
    index = json.loads(index_path.read_text('utf-8'))
    entries = {e['topicId']: e for e in index['topics']}
    applied = []
    for topic_id, override in overrides.items():
        override['sha256'] = sha256((root / override['markdown']).read_text('utf-8'))
        markdown, markup, sections = render_override(root, topic_id, override, titles[topic_id], sources)
        (root / f'content/topics/{topic_id}.md').write_text(markdown, encoding='utf-8', newline='\n')
        (root / f'content/generated/{topic_id}.html').write_text(markup, encoding='utf-8', newline='\n')
        entry = entries[topic_id]
        entry.update(checksum=sha256(markup), sections=sections, reviewStatus=override['reviewStatus'], updatedAt=override['updatedAt'])
        applied.append(topic_id)
    index_path.write_text(json.dumps(index, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
    path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
    return applied


if __name__ == '__main__':
    done = apply_overrides()
    print(f'Sustituciones del fork aplicadas: {", ".join(done) if done else "ninguna"}.')
