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

### 6. Fichas de datos para el test del Bloque I

Los apuntes del Bloque I son esquemáticos y el INAP pregunta datos concretos: plazos, mayorías, cifras y órganos, con su artículo. Se añade a cada tema del Bloque I (B1-T01 a B1-T10) un suplemento «Ficha de datos (fork)» con una tabla «dato, valor y referencia», 125 datos en total. Usa el mismo mecanismo de suplementos que el proyecto (`content/enhancements/b1-visuals.json`).

- Cada uno de los 120 datos con referencia al BOE se verificó automáticamente con una cita literal en el código BOE consolidado incluido en el repositorio (`documents/markdown/02_NORMATIVA/`, actualizado a 03/06/2026). Además, se comprobó que la cita pertenece a la norma y al artículo indicados.
- Los 5 datos restantes (Agenda 2030, eIDAS art. 25.2, Plan de Digitalización 2021-2025 y Década Digital 2030) citan su documento oficial, que no forma parte de ese código.
- Los apuntes originales no cambian, y los validadores de integridad y de encabezados del proyecto siguen pasando.

### 7. Navegación agrupada y portada «Tu estudio de hoy»

El menú tenía nueve entradas y la portada abría con cifras del catálogo. Se reorganizan sin cambiar las rutas (`#temario`, `#examen`…), así que los enlaces y el progreso guardado siguen funcionando:

- **Menú en dos niveles.** Arriba hay cuatro grupos: Inicio, Estudiar (Temario y Plan de estudio), Practicar (Entrenamiento, Examen, Práctica escrita y Refuerzo) y Progreso (Mi progreso de estudio y Estadísticas). Debajo aparecen como pestañas los apartados del grupo activo. El título de la pestaña del navegador usa el nombre real del apartado (por ejemplo, «Estadísticas» en lugar de «Estadisticas»).
- **Portada «Tu estudio de hoy».** Muestra el tema actual según el seguimiento (o la sugerencia del plan), las preguntas de refuerzo pendientes hoy, la actividad de los últimos 30 días y, si existe, el examen sin terminar con las respuestas dadas y el tiempo restante. Añade el ciclo de estudio (estudia el tema, haz un test, mira dónde fallas y repasa) y un acceso para empezar desde cero. Se recalcula al volver a Inicio y sigue sin descargar los bancos de preguntas. Se retiran las tarjetas «actualizaciones catalogadas» y «tema prioritario»: esta última casi siempre mostraba «Sin datos suficientes», porque su cálculo necesita los bancos. Los temas débiles siguen en Estadísticas.
- **Cada bloque en su sitio.** La copia de seguridad (exportar, importar y reiniciar), que aparecía al pie de todas las vistas, se muestra solo en Mi progreso de estudio y en Estadísticas, con el título «Copia de seguridad del progreso». El aviso de versión provisional se muestra solo en Inicio. El aviso de modo demostración sigue en todas las vistas.
- Ficheros afectados: `index.html`, `assets/css/styles.css`, `assets/js/router.js`, `assets/js/app.js`, `assets/js/home.js` (nuevo), `assets/js/statistics.js` (la portada ya no calcula el tema prioritario), `assets/js/study-progress.js` (exporta `planWithOfficialTitles`) y la guía de estudio (`docs/GUIA_DE_ESTUDIO.md` y `docs/guia-de-estudio.html`).
- Se suben los sufijos de caché (`?gsi3`, `app.js?gsi6`) de los módulos modificados para que el navegador no combine versiones antiguas y nuevas.

### 8. Iniciar una sesión mientras cargan los bancos

En el original, los formularios de Entrenamiento, Examen y la sesión de Refuerzo solo reciben su manejador cuando terminan de cargar y validar los bancos de preguntas (unos 5,5 MB). Si se pulsaba «Iniciar examen» o «Iniciar entrenamiento» antes, el navegador enviaba el formulario de forma nativa: recargaba la página con los campos en la URL (`index.html?mode=gsi&…`), volvía a Inicio y la sesión no empezaba.

- `assets/js/app.js` retiene ese envío (escucha en fase de captura), muestra «Cargando las preguntas… La sesión empezará en cuanto estén listas» y lo repite al terminar la carga. Si mientras tanto se cambia de vista, no inicia nada.
- `tests/gsi-smoke.mjs` añade una prueba determinista: retrasa los bancos, pulsa «Iniciar examen» antes de tiempo y comprueba el aviso, que el examen empieza y que la página no se recarga. Este fallo era también la causa de que «complete GSI exam / correction» fallara de forma intermitente.

### 9. Temario: qué cae en el examen, «Practicar este tema» y filtros de estudio

- **Qué cae en el examen.** El Temario muestra, por bloque, cuántas de las 300 preguntas evaluables de las convocatorias INAP 2022, 2024 y 2025 corresponden a sus temas, su peso en el examen y las preguntas activas del banco. Cada tema indica sus preguntas INAP (en la ficha, con el desglose por año) y las del banco, y la lista se puede ordenar por «Más preguntado en INAP».
  - Se cuentan las 100 preguntas evaluables de cada convocatoria, con las reservas que sustituyeron a las anuladas.
  - El tema de cada pregunta sale del mapa editorial del proyecto original (`data/gsi-official-topic-map.json`). La aplicación lo presenta como clasificación editorial, no oficial del INAP.
  - Solo se cargan `data/gsi-official-exams.json` y ese mapa (unos 32 KB), no los bancos de preguntas.
  - Resultado actual: B1 49 (16 %), B2 85 (28 %), B3 88 (29 %) y B4 78 (26 %). El tema más preguntado es B2-T02 (sistemas operativos), con 11.
- **Practicar este tema.** La ficha de cada tema y la lista tienen un botón que abre Entrenamiento con el bloque y el tema ya elegidos (ruta `#entrenamiento/B2-T02`), sin iniciar la sesión.
- **Filtros pensados para estudiar.** Junto a Bloque y Buscar, el Temario filtra por estado de estudio (el de Mi progreso de estudio, con la opción «Con repaso pendiente») y ordena por programa o por peso INAP. Cobertura y Revisión pasan a «Filtros editoriales», plegados: ahora los 57 temas tienen cobertura completa y están revisados, así que esos filtros no distinguían nada. Sus etiquetas solo aparecen en un tema que se salga de ese estado.
- Ficheros afectados: `assets/js/inap-weight.js` (nuevo), `assets/js/syllabus-view.js`, `assets/js/router.js`, `assets/js/training.js`, `assets/js/app.js`, `index.html`, `assets/css/styles.css`, la guía de estudio, `tests/gsi-unit.mjs` (4 pruebas nuevas) y `tests/gsi-smoke.mjs` (1 prueba nueva).

### 10. Pulido del diseño: lectura, jerarquía y acciones de borrado

- **Lectura.**
  - Los títulos de página son más contenidos: el máximo baja de 2,8 rem a 2,15 rem.
  - En la ficha de un tema, el título oficial, que llegaba a ocupar cinco líneas en escritorio y siete en móvil, usa un tamaño menor. Se quita el párrafo «Texto oficial del programa», que lo repetía palabra por palabra; el enlace «Fuente oficial» se mantiene.
  - El texto de los apuntes se limita a unos 75 caracteres por línea. Diagramas y tablas siguen a ancho completo.
- **Jerarquía.** Las sombras son más suaves. En las tarjetas de Mi progreso, las etiquetas ya no son mayores que las cifras, y los valores «Sin datos suficientes» se muestran en gris y más pequeños.
- **Navegación.**
  - Al cambiar de apartado, la página vuelve arriba. Antes bajaba sola hasta el contenido y tapaba las pestañas.
  - «Preparación GSI» enlaza a Inicio.
  - En móvil se oculta la línea «Gestión de Sistemas e Informática · A2».
- **Estadísticas sin datos.** Si no hay ningún intento guardado, un aviso con «Hacer un test» y «Hacer un simulacro» sustituye a las 13 tarjetas y 8 secciones vacías. El estado de almacenamiento y los controles de mantenimiento quedan plegados en «Detalles técnicos y mantenimiento».
- **Acciones de borrado.** Los botones que borran respuestas, refuerzo o estadísticas, o reinician todo el progreso, pasan a desplegables discretos: «Borrar respuestas», «Borrar datos del refuerzo», «Detalles técnicos y mantenimiento» y «Reiniciar progreso». Su funcionamiento no cambia.
- Ficheros afectados: `index.html`, `assets/css/styles.css`, `assets/js/router.js`, `assets/js/statistics.js`, `assets/js/syllabus-view.js`, los sufijos de caché de `app.js`, `home.js` y `training.js` (la hoja de estilos estrena sufijo, `?gsi8`), la guía de estudio y `tests/gsi-smoke.mjs`, que ahora abre «Reiniciar progreso» antes de pulsar el botón.

## Validación

El 20/11/2026 se ejecutó la suite del proyecto (`python scripts/run_gsi_suite.py`) en WSL con Chrome, Playwright, Python 3.11 y Node 20:

- Integridad GSI (20.075 controles), JSON y esquemas, referencias, preguntas, encabezados, documentación, calidad editorial, circuito editorial, pruebas unitarias (104/104) y regresión en navegador: todo correcto.
- El recorrido funcional HTTP, `tests/gsi-smoke.mjs`, pasa completo (83/83) cuando se ejecuta aislado. Dentro de la suite completa, en WSL, falla de forma intermitente una prueba distinta en cada ejecución por tiempos de espera. Lo mismo ocurría con el repositorio original sin modificar.
- Los registros `logs/gsi-suite.json`, `logs/gsi-regression.json` y `logs/gsi-browser-smoke.json` se conservan tal como los dejó el proyecto original. No se sustituyen por ejecuciones con fallos intermitentes del entorno.
- Tras los cambios 7 y 8 se repitió la suite completa en el mismo entorno. Pasan JSON y esquemas, referencias, preguntas, encabezados, documentación, calidad y circuito editorial, pruebas unitarias (104/104), regresión en navegador y el recorrido funcional HTTP completo (84/84, con la prueba nueva del cambio 8). La etapa de integridad (20.111 controles, 0 errores) se ejecutó aparte con un entorno que incluye `markitdown` y `rg`, porque el Python del sistema no los tiene instalados.
- Antes del cambio 8, «complete GSI exam / correction» fallaba también con el recorrido aislado: es el fallo que corrige ese cambio. Se reprodujo sobre el código anterior a los cambios 7 y 8 (falló 1 de 2 ejecuciones).
- Tras el cambio 9, la suite completa pasa en una sola ejecución (código 0) con un entorno que incluye `markitdown` y `rg`: integridad (20.117 controles), pruebas unitarias (108/108), regresión en navegador y recorrido funcional HTTP (85/85).
- Tras el cambio 10 se repitió la suite completa, con el mismo resultado (código 0). El recorrido HTTP (85/85) incluye la comprobación básica de accesibilidad: un único H1 por vista, sin saltos de encabezado y con nombre accesible en todos los controles.
