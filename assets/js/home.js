// Portada «Tu estudio de hoy». Solo usa el catálogo ligero y el almacenamiento
// local: la portada no debe descargar los bancos de preguntas.
import { STUDY_STATUSES, buildStudyRecommendations, topicProgress } from "./study-progress-engine.js?gsi2";
import { loadStudyProgress } from "./study-progress-storage.js?gsi2";
import { planWithOfficialTitles } from "./study-progress.js?gsi3";
import { loadActiveExamState } from "./exam-storage.js?gsi2";
import { getReinforcementSummary } from "./reinforcement-storage.js?gsi2";
import { renderAnalyticsHome } from "./statistics.js?gsi4";
import { setText } from "./ui.js?gsi2";

function element(id) {
  return document.getElementById(id);
}

function plural(count, singular, pluralForm) {
  return count === 1 ? singular : pluralForm;
}

function setLink(id, href, text) {
  const link = element(id);
  if (!link) return;
  link.href = href;
  link.textContent = text;
}

function renderCatalog(data) {
  const topicCount = data.syllabus.blocks.reduce((total, block) => total + block.topics.length, 0);
  setText("#home-topic-count", topicCount);
  setText("#home-block-count", data.syllabus.blocks.length);
  setText("#home-question-count", data.coverage.question_totals.active);
}

// Devuelve los temas con repaso pendiente según el seguimiento manual.
function renderCurrentTopic(plan) {
  const loaded = loadStudyProgress(plan.topics.map((topic) => topic.code));
  if (loaded.error) {
    setText("#home-current-topic", "Seguimiento no disponible");
    setText("#home-current-detail", loaded.error);
    setLink("home-current-link", "#temario", "Abrir temario");
    return [];
  }
  const { current, reviews } = buildStudyRecommendations(plan, loaded.store);
  if (!current) {
    setText("#home-current-topic", "Temario consolidado");
    setText("#home-current-detail", `Has marcado los ${plan.topics.length} temas como consolidados. Mantén los repasos.`);
    setLink("home-current-link", "#temario", "Abrir temario");
    return reviews;
  }
  const status = topicProgress(loaded.store, current.code).status;
  const statusLabel = STUDY_STATUSES.find((item) => item.value === status)?.label ?? status;
  setText("#home-current-topic", `${current.code} · ${current.title}`);
  setText("#home-current-detail", status === "pending"
    ? "Sugerencia del plan: todavía no lo has marcado en tu seguimiento."
    : `Según tu seguimiento: ${statusLabel}.`);
  setLink("home-current-link", `#temario/${current.topic_id}`, "Abrir apuntes");
  return reviews;
}

function renderReviews(isDemo, topicReviews) {
  const summary = getReinforcementSummary(isDemo);
  setText("#home-due-count", summary.due);
  setText("#home-due-unit", plural(summary.due, "pregunta de refuerzo", "preguntas de refuerzo"));
  const parts = [];
  if (summary.overdue) parts.push(`Incluye ${summary.overdue} ${plural(summary.overdue, "atrasada", "atrasadas")}.`);
  if (topicReviews.length) {
    parts.push(`${topicReviews.length} ${plural(topicReviews.length, "tema tiene", "temas tienen")} repaso pendiente en tu seguimiento.`);
  }
  if (!parts.length) {
    parts.push(summary.total ? "Nada pendiente para hoy." : "Aquí aparecerán las preguntas que falles o marques como duda.");
  }
  setText("#home-reviews-detail", parts.join(" "));
}

function renderActivity(data) {
  const metric = renderAnalyticsHome(data);
  setText("#home-answered-unit", plural(metric.answered, "respondida", "respondidas"));
  if (metric.answered > 0) setLink("home-activity-link", "#estadisticas", "Ver estadísticas");
  else setLink("home-activity-link", "#entrenamiento", "Hacer un test");
}

function renderPendingExam(isDemo, now = Date.now()) {
  const box = element("home-exam-pending");
  if (!box) return;
  const loaded = loadActiveExamState(isDemo);
  box.hidden = !loaded.valid;
  if (!loaded.valid) return;
  const { state } = loaded;
  const answered = Object.keys(state.answersByQuestionId).length;
  const remainingMinutes = Math.ceil((Date.parse(state.deadlineAt) - now) / 60_000);
  const time = remainingMinutes > 0
    ? `Quedan ${remainingMinutes} ${plural(remainingMinutes, "minuto", "minutos")}.`
    : "El tiempo ha terminado: al reanudarlo verás la corrección.";
  setText("#home-exam-pending-detail", `Respondidas ${answered} de ${state.questionRefs.length}. ${time}`);
}

export function renderHome(data) {
  const isDemo = Boolean(data.demoEnabled);
  renderCatalog(data);
  const topicReviews = renderCurrentTopic(planWithOfficialTitles(data));
  renderReviews(isDemo, topicReviews);
  renderActivity(data);
  renderPendingExam(isDemo);
}
