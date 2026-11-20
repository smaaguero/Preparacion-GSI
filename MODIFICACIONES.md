# Modificaciones de este fork

Este repositorio, [smaaguero/Preparacion-GSI](https://github.com/smaaguero/Preparacion-GSI), es una **versión modificada** de Preparación GSI. El proyecto original es [AngeldelaCalleFernandez/Preparacion-GSI](https://github.com/AngeldelaCalleFernandez/Preparacion-GSI).

> Preparación GSI — creado por AngeldelaCalleFernandez.
> https://github.com/AngeldelaCalleFernandez/Preparacion-GSI
> Uso gratuito y no comercial, con atribución.

El fork se usa para estudio personal y se publica gratis y sin fines comerciales, con la misma [licencia](LICENSE). No es el proyecto original y no está aprobado ni respaldado por su creador. Los cambios se enumeran a continuación para que puedan distinguirse del trabajo original, como exige la licencia.

Base: commit `6535ee6` de la rama `gsi-only-final` del proyecto original (9 de noviembre de 2026).

## 20 de noviembre de 2026

### 1. Examen oficial INAP 2025 con plantilla definitiva

El original incluía la convocatoria 2025 solo para lectura, porque entonces únicamente existía la plantilla provisional. En septiembre de 2026 el INAP publicó la [plantilla definitiva](https://sede.inap.gob.es/sites/sede/files/public/2026-09/Plantilla%20DEFINITIVA%20respuestas%20GSI-L%20OEP2025.pdf), y este fork la incorpora:

- Las 105 preguntas del primer ejercicio (100 ordinarias y 5 de reserva) se extrajeron por posiciones con pdfplumber, el mismo método que usa el original. Se partió del mismo PDF del cuestionario registrado por el proyecto: el SHA-256 coincide.
- La clave se obtuvo dos veces de forma independiente, una por transcripción y otra por lectura automática del PDF, y ambas coinciden en las 105 posiciones. Las preguntas anuladas son la 32, la 33 y la 89, y se sustituyen por las reservas 1, 2 y 3.
- El mapa pregunta → tema de 2025 sigue el criterio editorial que el original aplicó en 2022 y 2024. Es una clasificación editorial, no oficial.
- El banco oficial pasa de 202 a 304 preguntas, y el total activo, de 1.964 a 2.066. Las 202 preguntas de 2022 y 2024 no cambian.
- Ficheros afectados: `documents/sources/gsi-official/extracted.json`, `data/gsi-official-topic-map.json`, `data/questions-official.json`, `data/gsi-official-exams.json`, `data/sources.json`, `data/gsi-coverage-report.json`, la conversión MarkItDown de la plantilla definitiva y su registro en `logs/gsi-official-conversions.json`.
- `scripts/import_gsi_official.py` ahora calcula el recuento esperado en lugar de fijar 202, conserva las fechas de los registros que no cambian y cataloga la plantilla provisional como documento sustituido.
- `content/question-reviews/baseline.json` actualiza el hash del banco oficial auditado y deja constancia del motivo en `official_rebaselines`. Las colas editoriales manual e IA no cambian.
- Se actualizaron las pruebas (`tests/gsi-unit.mjs`, `tests/gsi-smoke.mjs`), el README, `docs/GSI_EXAMENES_OFICIALES.md` y los informes derivados.

### 2. Suplementos normativos: NIS2 y Reglamento de IA

El original no mencionaba la Directiva NIS2 ni el Reglamento europeo de IA. Se añaden dos suplementos editoriales con el mismo mecanismo que usa el proyecto (`content/enhancements/*.json`, insertados con las funciones de `scripts/build_gsi_content.py`):

- **B2-T13 · Directiva NIS2 y su transposición en España.** Recoge el calendario, las entidades esenciales e importantes, las medidas del art. 21, los plazos de notificación del art. 23, las sanciones, el RDL 12/2018 vigente y el anteproyecto de Ley de Coordinación y Gobernanza de la Ciberseguridad de 14/01/2025.
- **B3-T05 · Reglamento (UE) 2024/1689 de Inteligencia Artificial.** Recoge los niveles de riesgo, los modelos de uso general, las obligaciones del sector público, la AESIA, las sanciones y el calendario modificado por el Reglamento (UE) 2026/1744 (Ómnibus Digital sobre IA): el alto riesgo del anexo III pasa al 02/12/2027 y el del anexo I, al 02/08/2028.

Los suplementos se redactaron con ayuda de IA y se cotejaron con los textos oficiales: DOUE/EUR-Lex, BOE y la referencia del Consejo de Ministros. Cada uno indica dentro del propio texto que es una ampliación del fork y cita sus fuentes. Los apuntes originales no se modifican y los validadores de integridad del proyecto siguen comprobándolos. **Situación de la tramitación española a 20/11/2026:** según la información pública consultada, ni la ley de transposición de NIS2 ni la ley española de IA se habían publicado en el BOE. Compruébalo antes del examen.

Ficheros afectados: `content/enhancements/b2-visuals.json`, `content/enhancements/b3-visuals.json`, `content/topics/B2-T13.md`, `content/topics/B3-T05.md`, `content/generated/B2-T13.html`, `content/generated/B3-T05.html`, `data/topic-content.json` (checksums) y una regla CSS para que las fechas de las tablas de suplementos no se partan.

### 3. Ajustes de la suite de validación

- `tests/phase7b2-tests.js` espera ahora 38 documentos de fuente: los 37 anteriores más la plantilla provisional 2025, que queda como documento sustituido.
- `scripts/run_gsi_suite.py` acepta `GSI_STAGE_TIMEOUT` para ampliar el límite de cada etapa, que sigue siendo de 240 s por defecto. En WSL, el recorrido de navegador, que ahora también hace el examen de 2025, dura unos 250 s.

### 4. Identificación del fork

Se añaden avisos de versión modificada en el pie de `index.html` y `review.html`, en `licencia.html` y al principio del README. El crédito y los enlaces al creador original se mantienen.

### 5. Explicaciones razonadas de las preguntas oficiales

El INAP solo publica la letra correcta. El fork añade a cada pregunta oficial activa una explicación breve: por qué es correcta la clave, qué hace falsos los distractores más tentadores y una referencia (artículo, norma o documentación).

- Las explicaciones están en `content/official-explanations.json`, separadas de los registros oficiales, que no cambian (enunciado, opciones y clave).
- `scripts/import_gsi_official.py` las añade al feedback con la etiqueta «Explicación del fork (no oficial; referencia: …)».
- Se redactaron con ayuda de IA. Los artículos legales se cotejaron con el código BOE incluido en el repositorio y con los textos oficiales cuando fue posible. Si una clave oficial ha quedado desfasada, por ejemplo por una fecha de soporte ya vencida, se indica.
- Cobertura: las 304 preguntas oficiales activas (2022: 101; 2024: 101; 2025: 102).
- Claves matizadas en la explicación: 2024 Q87 (Nessus ya no es de código abierto), 2024 Q62 (SAR no es formato estándar de Java EE), 2025 Q59 (.NET 8 ya sin soporte), 2022 Q98 (redes 3G en apagado) y 2022 Q99 (H.265 es de la ITU-T, no de la ITU-R).

## Validación

El 20/11/2026 se ejecutó la suite del proyecto (`python scripts/run_gsi_suite.py`) en WSL con Chrome, Playwright, Python 3.11 y Node 20:

- Integridad GSI (20.075 controles), JSON y esquemas, referencias, preguntas, encabezados, documentación, calidad editorial, circuito editorial, pruebas unitarias (104/104) y regresión en navegador: todo correcto.
- El recorrido funcional HTTP, `tests/gsi-smoke.mjs`, pasa completo (83/83) cuando se ejecuta aislado. Dentro de la suite completa, en WSL, falla de forma intermitente una prueba distinta en cada ejecución por tiempos de espera. Lo mismo ocurría con el repositorio original sin modificar.
- Los registros `logs/gsi-suite.json`, `logs/gsi-regression.json` y `logs/gsi-browser-smoke.json` se conservan tal como los dejó el proyecto original. No se sustituyen por ejecuciones con fallos intermitentes del entorno.
