import { isDemoMode, loadAppData, loadQuestionData } from "./data-service.js?gsi3";
import { initRouter, resolveRoute, syncRouter } from "./router.js?gsi5";
import { loadTopicContentIndex } from "./topic-content-service.js?gsi2";
import { initSyllabusView } from "./syllabus-view.js?gsi6";
import { initStudyPlan } from "./study-plan.js?gsi2";
import { initStudyProgress } from "./study-progress.js?gsi3";
import { configurePersistenceV2 } from "./persistence-v2.js?gsi2";
import { migrateV1ToV2 } from "./persistence-migration-v2.js?gsi2";
import { initWrittenPractice } from "./written-practice.js?gsi2";
import { initProgressBackup } from "./progress-backup.js?gsi4";
import { initStatistics } from "./statistics.js?gsi4";
import { renderHome } from "./home.js?gsi4";
import { clearStatus, setStatus } from "./ui.js?gsi2";

const QUESTION_ROUTES = new Set(["entrenamiento", "examen", "refuerzo", "estadisticas"]);
// Formularios que inician una sesión. Su manejador se registra al terminar de
// cargar los bancos de preguntas.
const SESSION_FORM_IDS = new Set(["training-form", "exam-config-form", "reinforcement-session-form"]);
let coreData = null;
let fullDataPromise = null;
let questionFeaturesPromise = null;
let questionFeaturesReady = false;
let pendingSessionSubmit = null;

// Un envío anterior a la carga sería nativo: recargaría la página con los
// campos en la URL y perdería la vista. Se retiene y se repite al terminar.
function holdEarlySessionSubmit(event) {
  if (questionFeaturesReady || !SESSION_FORM_IDS.has(event.target.id)) return;
  event.preventDefault();
  pendingSessionSubmit = { form: event.target, submitter: event.submitter ?? null };
  setStatus("Cargando las preguntas… La sesión empezará en cuanto estén listas.");
}

function replayPendingSessionSubmit() {
  const pending = pendingSessionSubmit;
  pendingSessionSubmit = null;
  // Si la persona ya ha cambiado de vista, no se inicia nada a sus espaldas.
  if (!pending || pending.form.closest("[data-view]")?.hidden) return;
  if (pending.submitter) pending.form.requestSubmit(pending.submitter);
  else pending.form.requestSubmit();
}

function getFullData() {
  if (!fullDataPromise) {
    fullDataPromise = loadQuestionData(coreData).catch((error) => {
      fullDataPromise = null;
      throw error;
    });
  }
  return fullDataPromise;
}

async function initQuestionFeatures() {
  if (questionFeaturesPromise) return questionFeaturesPromise;
  setStatus("Cargando y validando los bancos de preguntas…");
  questionFeaturesPromise = (async () => {
    const [data, trainingModule, examModule, reinforcementMigrationModule, reinforcementModule, analyticsMigrationModule] = await Promise.all([
      getFullData(),
      import("./training.js?gsi8"),
      import("./exam.js?gsi6"),
      import("./reinforcement-migration.js?gsi2"),
      import("./reinforcement.js?gsi6"),
      import("./analytics-migration.js?gsi2"),
    ]);
    const realMigration = reinforcementMigrationModule.migratePhase3Training(data, false);
    const demoMigration = data.demoEnabled ? reinforcementMigrationModule.migratePhase3Training(data, true) : null;
    const realAnalyticsMigration = analyticsMigrationModule.migrateAnalytics(data, false);
    const demoAnalyticsMigration = data.demoEnabled ? analyticsMigrationModule.migrateAnalytics(data, true) : null;
    if (realMigration.error || demoMigration?.error || realAnalyticsMigration.error || demoAnalyticsMigration?.error) {
      throw new Error(realMigration.error || demoMigration?.error || realAnalyticsMigration.error || demoAnalyticsMigration?.error || "No se pudo migrar el historial local.");
    }
    trainingModule.initTraining(data);
    examModule.initExam(data);
    reinforcementModule.initReinforcement(data);
    initStatistics(data);
    questionFeaturesReady = true;
    clearStatus();
    replayPendingSessionSubmit();
    return data;
  })().catch((error) => {
    questionFeaturesPromise = null;
    pendingSessionSubmit = null;
    setStatus(error instanceof Error ? error.message : "No se pudieron cargar los bancos de preguntas.", "error");
    throw error;
  });
  return questionFeaturesPromise;
}

function loadQuestionsForRoute(route) {
  if (QUESTION_ROUTES.has(route)) void initQuestionFeatures().catch(() => {});
}

async function start() {
  // En fase de captura: se ejecuta antes que el manejador propio del formulario.
  document.addEventListener("submit", holdEarlySessionSubmit, true);
  initRouter();
  const demoEnabled = isDemoMode();
  if (demoEnabled) {
    document.querySelector("#demo-banner").hidden = false;
  }
  if (window.location.protocol === "file:") {
    setStatus("Abre esta aplicación con un servidor HTTP, por ejemplo: python -m http.server 8000.", "error");
    return;
  }
  setStatus("Cargando temario, fuentes y actualizaciones…");
  try {
    const [data, topicContentIndex] = await Promise.all([loadAppData(), loadTopicContentIndex()]);
    coreData = data;
    configurePersistenceV2(data.runtimeContext, window.localStorage);
    const persistenceMigration = migrateV1ToV2(data.runtimeContext, window.localStorage);
    if (!persistenceMigration.ok) {
      setStatus(persistenceMigration.error || "No se pudo migrar el historial local a persistencia v2.", "error");
      return;
    }
    initSyllabusView(data, topicContentIndex);
    await initWrittenPractice(data);
    initStudyPlan(data);
    initStudyProgress(data);
    initProgressBackup(data, getFullData);
    renderHome(data);
    window.addEventListener("gsi:routechange", (event) => {
      // La portada resume datos que cambian en otras vistas: se recalcula al volver.
      if (event.detail?.route === "inicio") renderHome(coreData);
      loadQuestionsForRoute(event.detail?.route);
    });
    // Las vistas se resuelven exclusivamente desde el hash. Esta segunda
    // sincronización mantiene la ruta inicial si cualquier módulo de carga
    // ha actualizado el DOM durante la inicialización asíncrona.
    syncRouter(false);
    if (data.demoEnabled) {
      setStatus("Datos cargados en modo demostración. Las preguntas demo son ficticias y no oficiales.", "success");
    } else {
      clearStatus();
    }
    loadQuestionsForRoute(resolveRoute());
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "No se pudieron cargar los datos de la aplicación.", "error");
  }
}

start();
