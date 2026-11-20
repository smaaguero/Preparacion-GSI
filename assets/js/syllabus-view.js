import { loadTopicFragment } from "./topic-content-service.js?gsi2";
import { resolveTopicReference } from "./catalog-service.js?gsi2";
import { parseRoute } from "./router.js?gsi5";
import { STUDY_STATUSES, topicNeedsReview, topicProgress } from "./study-progress-engine.js?gsi2";
import { loadStudyProgress } from "./study-progress-storage.js?gsi2";
import { describeTopicWeight, loadInapWeights, topicWeight } from "./inap-weight.js?gsi3";

let viewState = null;
let requestVersion = 0;

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function sourceLink(source, label = "Fuente oficial") {
  if (!source?.url) return null;
  const link = element("a", "button button--secondary syllabus-source-link", label);
  link.href = source.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${label}: ${source.title}. Se abre en una nueva pestaña.`);
  return link;
}

function statusLabel(status) {
  return ({ pending: "Cobertura pendiente", partial: "Cobertura parcial", complete: "Cobertura completa" })[status] || "Cobertura sin clasificar";
}

function reviewLabel(status) {
  return ({ "not-reviewed": "Sin revisión", "needs-review": "Pendiente de revisión", reviewed: "Revisado" })[status] || "Revisión sin clasificar";
}

function formatDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
  return match ? `${match[3]}/${match[2]}/${match[1]}` : value;
}

function validityPresentation(status) {
  return ({
    current: { className: "pill--review-reviewed", label: "Vigente" },
    legacy: { className: "pill--count", label: "Histórico / legacy" },
    transitional: { className: "pill--coverage-partial", label: "Aplicación escalonada" },
    "review-needed": { className: "pill--review-needs-review", label: "Revisión pendiente" },
  })[status] || { className: "pill--count", label: "Vigencia sin clasificar" };
}

function getEntry(topicId) {
  return viewState.index.byTopicId.get(topicId);
}

function getOfficialSource(topic) {
  return topic.source_ids
    .map((sourceId) => viewState.data.indexes.sourcesById.get(sourceId))
    .find((source) => source?.url && source.official_status === "official") || null;
}

function createPill(className, text) {
  return element("span", `pill ${className}`, text);
}

// El seguimiento manual de «Mi progreso de estudio» usa códigos como «II.02».
function loadStudyStore() {
  const loaded = loadStudyProgress([...viewState.studyCodes.values()]);
  return loaded.error ? null : loaded.store;
}

function studyRecord(store, topicId) {
  const code = viewState.studyCodes.get(topicId);
  return store && code ? topicProgress(store, code) : null;
}

function studyPill(record) {
  if (!record) return null;
  const due = topicNeedsReview(record);
  if (record.status === "pending" && !due) return null;
  const label = STUDY_STATUSES.find((item) => item.value === record.status)?.label ?? record.status;
  return createPill("pill--study", due && record.status !== "needs-reinforcement" ? `${label} · repaso pendiente` : label);
}

function bankLabel(topicId) {
  const active = viewState.bankByTopic.get(topicId) ?? 0;
  return `${active} ${active === 1 ? "pregunta" : "preguntas"} en el banco`;
}

function inapLabel(topicId) {
  const total = topicWeight(viewState.weights, topicId).total;
  return `${total} ${total === 1 ? "pregunta" : "preguntas"} en exámenes INAP`;
}

// Las etiquetas editoriales solo se muestran cuando el tema se sale de lo normal.
function editorialPills(entry) {
  const pills = [];
  if (entry.status !== "complete") pills.push(createPill(`pill--coverage-${entry.status}`, statusLabel(entry.status)));
  if (entry.reviewStatus !== "reviewed") pills.push(createPill(`pill--review-${entry.reviewStatus}`, reviewLabel(entry.reviewStatus)));
  return pills;
}

function matchesFilters(topic, entry, store) {
  const block = document.querySelector("#syllabus-filter-block")?.value || "";
  const study = document.querySelector("#syllabus-filter-study")?.value || "";
  const coverage = document.querySelector("#syllabus-filter-coverage")?.value || "";
  const review = document.querySelector("#syllabus-filter-review")?.value || "";
  const search = (document.querySelector("#syllabus-search")?.value || "").trim().toLocaleLowerCase("es");
  if (block && topic.blockId !== block) return false;
  if (study) {
    const record = studyRecord(store, topic.id);
    if (study === "due" ? !(record && topicNeedsReview(record)) : (record?.status ?? "pending") !== study) return false;
  }
  if (coverage && entry.status !== coverage) return false;
  if (review && entry.reviewStatus !== review) return false;
  if (!search) return true;
  const searchable = [topic.title, ...entry.sections.map((section) => section.title)].join(" ").toLocaleLowerCase("es");
  return searchable.includes(search);
}

function createTopicItem(topic, store, showBlock) {
  const entry = getEntry(topic.id);
  const item = element("li", "topic-list__item");
  item.dataset.topicId = topic.id;
  const title = element("p", "topic-title", `${showBlock ? `${topic.blockId} · ` : ""}Tema ${topic.number}. ${topic.title}`);
  const meta = element("div", "topic-meta");
  const studyBadge = studyPill(studyRecord(store, topic.id));
  if (studyBadge) meta.append(studyBadge);
  if (viewState.weights) meta.append(createPill("pill--inap", inapLabel(topic.id)));
  meta.append(createPill("pill--count", bankLabel(topic.id)), ...editorialPills(entry), createPill("pill--count", `${entry.sections.length} secciones`));
  const actions = element("div", "action-row topic-actions");
  const study = element("a", "button", "Estudiar tema");
  study.href = `#temario/${topic.id}`;
  const practice = element("a", "button button--secondary", "Practicar");
  practice.href = `#entrenamiento/${topic.id}`;
  practice.setAttribute("aria-label", `Practicar el tema ${topic.number} de ${topic.blockId} en Entrenamiento`);
  actions.append(study, practice);
  const source = sourceLink(getOfficialSource(topic));
  if (source) actions.append(source);
  item.append(title, meta, actions);
  return item;
}

function renderList() {
  const summary = document.querySelector("#syllabus-summary");
  const container = document.querySelector("#syllabus-blocks");
  if (!summary || !container || !viewState) return;
  const store = loadStudyStore();
  const topics = [...viewState.data.indexes.topicsById.values()];
  const visible = topics.filter((topic) => matchesFilters(topic, getEntry(topic.id), store));
  summary.textContent = `${visible.length} de ${topics.length} temas oficiales.`;
  container.replaceChildren();

  const byInap = document.querySelector("#syllabus-sort")?.value === "inap" && viewState.weights;
  if (byInap && visible.length) {
    const ranked = [...visible].sort((left, right) => topicWeight(viewState.weights, right.id).total - topicWeight(viewState.weights, left.id).total
      || left.blockId.localeCompare(right.blockId) || left.number - right.number);
    const card = element("details", "block-card");
    card.open = true;
    const list = element("ol", "topic-list");
    for (const topic of ranked) list.append(createTopicItem(topic, store, true));
    card.append(element("summary", "", `Temas de más a menos preguntados en INAP (${ranked.length} visibles)`), list);
    container.append(card);
  }

  for (const block of byInap ? [] : viewState.data.syllabus.blocks) {
    const blockTopics = block.topics
      .map((topic) => viewState.data.indexes.topicsById.get(topic.id))
      .filter((topic) => matchesFilters(topic, getEntry(topic.id), store));
    if (!blockTopics.length) continue;
    const card = element("details", "block-card");
    card.open = Boolean(visible.length !== topics.length);
    const summaryNode = element("summary", "", `${block.id} · ${block.title} (${blockTopics.length} temas visibles)`);
    const list = element("ol", "topic-list");
    list.start = 1;
    for (const topic of blockTopics) list.append(createTopicItem(topic, store, false));
    card.append(summaryNode, list);
    container.append(card);
  }
  if (!container.childElementCount) {
    container.append(element("p", "notice", "No hay temas que coincidan con los filtros seleccionados."));
  }
}

function renderWeights() {
  const root = document.querySelector("#syllabus-weights");
  const status = document.querySelector("#syllabus-weights-status");
  if (!root || !status || !viewState) return;
  root.querySelector(".syllabus-weights__scroll")?.remove();
  if (viewState.weightsError) {
    status.textContent = `No se pudo calcular qué cae en el examen: ${viewState.weightsError}`;
    return;
  }
  const { weights } = viewState;
  if (!weights) return;
  status.textContent = `Preguntas evaluables de las convocatorias INAP ${weights.years.join(", ")}: ${weights.total} en total, 100 por convocatoria e incluidas las reservas que sustituyeron a las anuladas. El tema de cada pregunta es una clasificación editorial, no oficial del INAP.`;
  const table = element("table", "syllabus-weights__table");
  const head = element("thead");
  const headRow = element("tr");
  // En pantallas estrechas se muestran las etiquetas cortas (CSS).
  const headers = [["Bloque", "Bloque"], ["Temas", "Temas"], ["Preguntas INAP", "INAP"], ["Peso en el examen", "Peso"], ["Preguntas en el banco", "Banco"]];
  for (const [long, short] of headers) {
    const cell = element("th");
    cell.append(element("span", "label-long", long), element("span", "label-short", short));
    cell.scope = "col";
    headRow.append(cell);
  }
  head.append(headRow);
  const body = element("tbody");
  let bankTotal = 0;
  for (const block of viewState.data.syllabus.blocks) {
    const inap = block.topics.reduce((sum, topic) => sum + topicWeight(weights, topic.id).total, 0);
    const bank = block.topics.reduce((sum, topic) => sum + (viewState.bankByTopic.get(topic.id) ?? 0), 0);
    bankTotal += bank;
    const row = element("tr");
    const name = element("th", "", block.id);
    name.append(element("span", "label-long", ` · ${block.title}`));
    name.scope = "row";
    row.append(name, element("td", "", String(block.topics.length)), element("td", "", String(inap)),
      element("td", "", weights.total ? `${Math.round((inap / weights.total) * 100)} %` : "—"), element("td", "", String(bank)));
    body.append(row);
  }
  const foot = element("tfoot");
  const totalRow = element("tr");
  const totalName = element("th", "", "Total");
  totalName.scope = "row";
  const topicCount = viewState.data.syllabus.blocks.reduce((sum, block) => sum + block.topics.length, 0);
  totalRow.append(totalName, element("td", "", String(topicCount)), element("td", "", String(weights.total)), element("td", "", "100 %"), element("td", "", String(bankTotal)));
  foot.append(totalRow);
  table.append(head, body, foot);
  const scroll = element("div", "syllabus-weights__scroll");
  scroll.append(table);
  root.append(scroll);
}

function createBreadcrumbs(topic) {
  const nav = element("nav", "breadcrumbs");
  nav.setAttribute("aria-label", "Migas de navegación");
  const list = element("ol");
  const home = element("a", "", "Temario");
  home.href = "#temario";
  const homeItem = element("li");
  homeItem.append(home);
  const current = element("li", "", `${topic.blockId} · Tema ${topic.number}`);
  current.setAttribute("aria-current", "page");
  list.append(homeItem, current);
  nav.append(list);
  return nav;
}

function showList() {
  const eyebrow = document.querySelector("#syllabus-eyebrow");
  const heading = document.querySelector("#syllabus-title");
  if (eyebrow) eyebrow.textContent = "Programa catalogado";
  if (heading) {
    heading.textContent = "Temario";
    heading.classList.remove("is-topic-title");
  }
  document.querySelector("#syllabus-list")?.removeAttribute("hidden");
  document.querySelector("#topic-detail")?.setAttribute("hidden", "");
  renderList();
}

function showDetailError(message) {
  const list = document.querySelector("#syllabus-list");
  const detail = document.querySelector("#topic-detail");
  if (!list || !detail) return;
  list.setAttribute("hidden", "");
  detail.removeAttribute("hidden");
  detail.replaceChildren();
  const back = element("a", "button button--secondary", "Volver al listado");
  back.href = "#temario";
  const eyebrow = document.querySelector("#syllabus-eyebrow");
  const heading = document.querySelector("#syllabus-title");
  if (eyebrow) eyebrow.textContent = "Temario";
  if (heading) {
    heading.textContent = "Contenido de temario no disponible";
    heading.classList.remove("is-topic-title");
    heading.tabIndex = -1;
  }
  detail.append(back, element("p", "notice", message));
  heading?.focus({ preventScroll: true });
}

function focusTarget(detail, routeState, topic) {
  const message = detail.querySelector("#topic-detail-message");
  if (!routeState.sectionId) {
    const heading = document.querySelector("#syllabus-title");
    heading?.focus({ preventScroll: true });
    return;
  }
  const target = detail.querySelector(`#${routeState.sectionId}`);
  if (!target) {
    message.textContent = `La sección “${routeState.sectionId}” no existe en ${topic.id}.`;
    message.hidden = false;
    return;
  }
  target.setAttribute("tabindex", "-1");
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: "auto", block: "start" });
  target.focus({ preventScroll: true });
  for (const link of detail.querySelectorAll(".topic-content__toc a")) {
    link.toggleAttribute("aria-current", link.getAttribute("href") === `#temario/${topic.id}/${routeState.sectionId}`);
  }
}

async function renderDetail(routeState) {
  const operationalTopicId = resolveTopicReference(viewState.data.runtimeContext, routeState.topicId);
  const topic = operationalTopicId ? viewState.data.indexes.topicsById.get(operationalTopicId) : null;
  const entry = operationalTopicId ? getEntry(operationalTopicId) : null;
  if (!topic || !entry) {
    showDetailError("El tema solicitado no existe en el temario oficial catalogado.");
    return;
  }
  const list = document.querySelector("#syllabus-list");
  const detail = document.querySelector("#topic-detail");
  if (!list || !detail) return;
  const version = ++requestVersion;
  list.setAttribute("hidden", "");
  detail.removeAttribute("hidden");
  detail.replaceChildren();
  const back = element("a", "button button--secondary topic-back", "Volver al listado");
  back.href = "#temario";
  const eyebrow = document.querySelector("#syllabus-eyebrow");
  const heading = document.querySelector("#syllabus-title");
  if (eyebrow) eyebrow.textContent = `${topic.blockId} · Tema ${topic.number}`;
  if (heading) {
    // El H1 ya es el título oficial del programa: no se repite en un párrafo aparte.
    heading.textContent = `Tema ${topic.number}. ${topic.title}`;
    heading.classList.add("is-topic-title");
    heading.tabIndex = -1;
  }
  const meta = element("div", "topic-meta");
  const topicUpdates = viewState.data.updates.updates.filter((update) => update.topic_ids.includes(operationalTopicId));
  const studyBadge = studyPill(studyRecord(loadStudyStore(), operationalTopicId));
  if (studyBadge) meta.append(studyBadge);
  // El peso INAP llega con su propia carga: se reserva su sitio y se rellena después.
  const inapPill = createPill("pill--inap", "");
  inapPill.hidden = true;
  meta.append(
    inapPill,
    createPill("pill--count", bankLabel(operationalTopicId)),
    ...editorialPills(entry),
    createPill("pill--count", `Revisado: ${formatDate(entry.updatedAt)}`)
  );
  viewState.weightsPromise.then(() => {
    if (version !== requestVersion || !viewState.weights) return;
    inapPill.textContent = describeTopicWeight(viewState.weights, operationalTopicId);
    inapPill.hidden = false;
  });
  for (const update of topicUpdates) {
    const presentation = validityPresentation(update.validity_status);
    meta.append(createPill(presentation.className, presentation.label));
  }
  const message = element("p", "notice");
  message.id = "topic-detail-message";
  message.hidden = true;
  const content = element("div", "topic-detail__content");
  content.setAttribute("aria-live", "polite");
  content.append(element("p", "muted", "Cargando contenido editorial…"));
  const officialSource = sourceLink(getOfficialSource(topic), "Fuente oficial");
  const actions = element("div", "action-row topic-actions");
  const practice = element("a", "button", "Practicar este tema");
  practice.href = `#entrenamiento/${operationalTopicId}`;
  actions.append(back, practice);
  if (officialSource) actions.append(officialSource);
  detail.append(createBreadcrumbs(topic), actions, meta, message, content);
  document.title = `Tema ${topic.number} · Preparación GSI`;
  try {
    const fragment = await loadTopicFragment(viewState.index, operationalTopicId);
    if (version !== requestVersion) return;
    content.replaceChildren(fragment);
    for (const update of topicUpdates) {
      const notice = element("aside", "notice");
      const presentation = validityPresentation(update.validity_status);
      notice.append(element("strong", "", `${update.title} · ${presentation.label} · control ${formatDate(update.reviewed_at)}`), element("p", "", update.summary));
      const link = sourceLink(viewState.data.indexes.sourcesById.get(update.source_id), "Comprobación de vigencia en la fuente oficial");
      if (link) notice.append(link);
      content.prepend(notice);
    }
    focusTarget(detail, routeState, topic);
  } catch (error) {
    if (version !== requestVersion) return;
    content.replaceChildren();
    message.textContent = error instanceof Error ? error.message : "No se pudo cargar el contenido editorial.";
    message.hidden = false;
    heading?.focus({ preventScroll: true });
  }
}

function renderRouteState(routeState) {
  if (!viewState || routeState.route !== "temario") return;
  if (routeState.error) {
    showDetailError(routeState.error);
  } else if (!routeState.topicId) {
    showList();
  } else {
    renderDetail(routeState);
  }
}

function setupFilters() {
  const studyFilter = document.querySelector("#syllabus-filter-study");
  for (const status of STUDY_STATUSES) studyFilter?.add(new Option(status.label, status.value));
  studyFilter?.add(new Option("Con repaso pendiente", "due"));
  const topicIds = [...viewState.data.indexes.topicsById.keys()];
  const standard = topicIds.filter((topicId) => getEntry(topicId)?.status === "complete" && getEntry(topicId)?.reviewStatus === "reviewed").length;
  const help = document.querySelector("#syllabus-editorial-help");
  if (help) help.textContent = `Describen el material, no tu estudio. Ahora ${standard} de ${topicIds.length} temas tienen cobertura completa y están revisados.`;
  document.querySelector("#syllabus-filters")?.addEventListener("submit", (event) => event.preventDefault());
  for (const control of document.querySelectorAll("#syllabus-filters select, #syllabus-search")) {
    control.addEventListener(control.matches("input") ? "input" : "change", renderList);
  }
}

export function initSyllabusView(data, index) {
  viewState = {
    data,
    index,
    studyCodes: new Map(data.studyTrackerPlan.topics.map((topic) => [topic.topic_id, topic.code])),
    bankByTopic: new Map(data.coverage.topics.map((topic) => [topic.topic_id, topic.active])),
    weights: null,
    weightsError: null,
    weightsPromise: null,
  };
  // Dos ficheros ligeros (unos 32 KB); no descarga los bancos de preguntas.
  viewState.weightsPromise = loadInapWeights(new Set(data.indexes.topicsById.keys()))
    .then((weights) => { viewState.weights = weights; })
    .catch((error) => { viewState.weightsError = error instanceof Error ? error.message : String(error); })
    .finally(() => { renderWeights(); renderList(); });
  setupFilters();
  window.addEventListener("gsi:routechange", (event) => renderRouteState(event.detail));
  renderList();
  renderRouteState(parseRoute());
}
