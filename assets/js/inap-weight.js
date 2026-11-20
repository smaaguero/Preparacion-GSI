// Peso de cada tema en los exámenes INAP. Cuenta las 100 preguntas evaluables
// de cada convocatoria con plantilla definitiva, incluidas las reservas que
// sustituyeron a las anuladas, según el mapa editorial pregunta → tema.
// Es una clasificación editorial, no oficial del INAP.
const QUESTION_ID_RE = /^OFF-GSI-INAP-(\d{4})-(Q|R)(\d{3})$/;
const EXAMS_PATH = "./data/gsi-official-exams.json";
const TOPIC_MAP_PATH = "./data/gsi-official-topic-map.json";

export function computeInapWeights(examsCatalog, topicMap, topicIds) {
  const years = [];
  const byTopic = new Map();
  for (const exam of examsCatalog.exams) {
    if (exam.key_status !== "definitive") continue;
    const year = String(exam.year);
    const positions = topicMap.exams?.[year];
    if (!positions) throw new Error(`El mapa editorial no incluye la convocatoria ${year}.`);
    if (exam.question_ids.length !== exam.question_count) {
      throw new Error(`La convocatoria ${year} no tiene ${exam.question_count} preguntas evaluables.`);
    }
    years.push(year);
    for (const questionId of exam.question_ids) {
      const match = QUESTION_ID_RE.exec(questionId);
      if (!match || match[1] !== year) throw new Error(`Identificador de pregunta oficial no reconocido: ${questionId}.`);
      const position = match[2] === "Q" ? String(Number(match[3])) : `R${Number(match[3])}`;
      const topicId = positions[position];
      if (!topicIds.has(topicId)) throw new Error(`La pregunta ${questionId} no tiene un tema válido en el mapa editorial.`);
      const entry = byTopic.get(topicId) ?? { total: 0, byYear: {} };
      entry.total += 1;
      entry.byYear[year] = (entry.byYear[year] ?? 0) + 1;
      byTopic.set(topicId, entry);
    }
  }
  years.sort();
  const total = [...byTopic.values()].reduce((sum, entry) => sum + entry.total, 0);
  return { years, total, byTopic };
}

export function topicWeight(weights, topicId) {
  return weights?.byTopic.get(topicId) ?? { total: 0, byYear: {} };
}

export function describeTopicWeight(weights, topicId) {
  const entry = topicWeight(weights, topicId);
  const detail = weights.years.map((year) => `${year}: ${entry.byYear[year] ?? 0}`).join(" · ");
  return `Exámenes INAP: ${entry.total} ${entry.total === 1 ? "pregunta" : "preguntas"} (${detail})`;
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store", headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`No se pudo cargar ${path} (HTTP ${response.status}).`);
  return response.json();
}

export async function loadInapWeights(topicIds) {
  const [examsCatalog, topicMap] = await Promise.all([fetchJson(EXAMS_PATH), fetchJson(TOPIC_MAP_PATH)]);
  return computeInapWeights(examsCatalog, topicMap, topicIds);
}
