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
- Cobertura: las 408 preguntas oficiales activas (2019: 104; 2022: 101; 2024: 101; 2025: 102). Las de 2019 se añadieron el 21/11/2026 con el cambio 15.
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

### 11. Pantallas concretas: Examen, Refuerzo y ficha del tema en móvil

- **Examen.** Las tres convocatorias oficiales pasan de líneas desplegables a tarjetas con el año, el estado de la plantilla, el formato (100 preguntas evaluables, 90 minutos, error −1/3) y el botón «Preparar este examen» a la vista. Los PDF, la nota y las preguntas anuladas quedan en «Documentos oficiales».
- **Refuerzo.**
  - «Nueva sesión de repaso» aparece justo después del resumen; antes estaba debajo de la cola.
  - La cola lleva su título antes de sus filtros («Filtrar la cola»).
  - La leyenda «Iniciar sesión» pasa a «Nueva sesión de repaso», porque se confundía con entrar con una cuenta.
- **Ficha del tema en móvil.** «Volver al listado» se oculta, porque la miga «Temario» que tiene justo encima hace lo mismo. Los botones son más compactos para que «Practicar este tema» y «Fuente oficial» quepan en una fila.
- Ficheros afectados: `assets/js/official-exams.js`, `assets/js/syllabus-view.js`, `index.html`, `assets/css/styles.css`, los sufijos de caché (`app.js?gsi9`, `styles.css?gsi9`, `exam.js`, `training.js`, `reinforcement.js`) y la guía de estudio.

### 12. Modo oscuro automático

- La aplicación sigue la preferencia de color del sistema (`prefers-color-scheme`). No hay selector manual.
- Para hacerlo posible, 86 colores fijos de `assets/css/styles.css` pasan a variables: superficies, tintes, textos, bordes, avisos, éxito, error y morado. Los botones usan una variable de acción propia, para que el texto blanco conserve el contraste en los dos modos. El enlace «Saltar al contenido», el cronómetro del examen y el marcador del tema actual usan colores invertibles.
- En modo claro, las variables reproducen los colores anteriores. Solo unos pocos fondos casi blancos se unifican con tonos prácticamente indistinguibles.
- Se mantienen fijos el blanco del texto de los botones, las parejas de color del mapa de progreso (fondo y texto definidos juntos, legibles en ambos modos) y el fondo blanco de los diagramas de los apuntes, que son imágenes claras.
- Contraste comprobado con la fórmula WCAG en los pares principales: todos superan 4,5:1. Por ejemplo, texto sobre superficie oscura 13,7:1, texto secundario 7,6:1, enlaces 8,5:1 y botón 5,3:1.
- Ficheros afectados: `assets/css/styles.css`, `index.html` (`styles.css?gsi10`) y el README.

La sección 11 incluye además un ajuste de `tests/gsi-smoke.mjs`: la prueba de revisión editorial espera a que haya contenido. Con la cola manual vacía, la espera anterior se cumplía antes de que `review.html` cargara, y la prueba podía fallar por tiempos.

### 13. Tema B2-T01 reescrito por el fork

El tema 1 del Bloque II no era incorrecto, pero explicaba poco y dejaba fuera la mitad del enunciado del BOE: la base tecnológica (componentes, buses, memoria, almacenamiento y aceleradores) y los equipos concretos, del móvil al superordenador. Tampoco explicaba varias preguntas que ya habían caído en el INAP. El diagnóstico completo está en `docs/propuestas/B2-T01-diagnostico.md`: carencias, explicaciones confusas y errores de las fuentes PreparaTIC 052–055 que no se trasladan.

- **Nuevo texto** (`content/fork-topics/B2-T01.md`).
  - Sigue el orden del enunciado: base tecnológica, del móvil al superordenador, arquitecturas paralelas y escalables (Flynn, Tanenbaum, Amdahl, clúster y grid), virtualización y nube (NIST, responsabilidad por capas, FaaS y marco español: ENS op.nub.1, CCN-STIC 823, NubeSARA, RGPD y Reglamento de Datos).
  - Integra donde se explican las seis preguntas INAP del tema y remite a los temas vecinos en vez de duplicarlos.
  - Es redacción propia del fork con ayuda de IA, a partir de los hechos de las fuentes, sin copiar su texto.
  - Se publica con el estado **«pendiente de revisión»** y la etiqueta correspondiente en la aplicación.
- **Mecanismo de sustitución declarada.** El generador del proyecto exige que el texto del corpus siga dentro de cada tema. Para sustituirlo sin tocar las instantáneas del corpus:
  - `content/topic-overrides.json` declara la sustitución, la huella SHA-256 del texto del fork, el estado editorial, los localizadores y el diagrama.
  - `scripts/topic_overrides.py` genera a partir de ahí `content/topics/B2-T01.md`, `content/generated/B2-T01.html` y la entrada de `data/topic-content.json`, con la misma estructura que el resto de temas.
  - `scripts/build_gsi_content.py` aplica las sustituciones al final, para que una regeneración del corpus no las revierta.
  - `scripts/validate_gsi_final.py`, para los temas sustituidos:
    - Sigue exigiendo el hash exacto del texto canónico en el corpus.
    - Comprueba la huella registrada.
    - Regenera el Markdown y el HTML y exige que coincidan.
    - Exige que la sustitución esté etiquetada como redacción asistida por IA.
    - Mantiene, adaptadas, las comprobaciones de B2-T01 sobre los cuatro modelos de despliegue del NIST y multicloud.
- **Ajustes de interfaz.**
  - En la ficha de un tema no revisado, la fecha aparece como «Actualizado» en lugar de «Revisado».
  - Las celdas de las tablas de los apuntes ya no parten palabras por letras en móvil: la tabla se desplaza en horizontal.
- Los apuntes V2.1 originales (II.01) siguen intactos en `documents/markdown/gsi/revised-2026-09-23/B2/` y en la instantánea del corpus. Las preguntas del banco no cambian.
- **Pruebas.**
  - `tests/phase7-tests.js` y `tests/phase7b2-tests.js` exigían que todos los temas estuvieran revisados y fechados el 23/09/2026 (o el 05/10/2026 en tres temas). Ahora aceptan, solo para los temas del manifiesto de sustituciones, el estado y la fecha declarados en él. Para los demás siguen igual de estrictas.
  - En `tests/gsi-smoke.mjs`, la prueba del examen iniciado antes de cargar los bancos ya no lee el mensaje de estado justo después del clic. Era una carrera: el arranque de la aplicación podía limpiarlo. Ahora comprueba lo esencial: que la página no se recarga con los campos en la URL y que el examen arranca.

### 14. Tema B2-T02 reescrito por el fork

El tema 2 del Bloque II era una lista de términos, sin errores graves pero sin explicaciones. Con él no se podían responder 5 de las 11 preguntas que el INAP ha puesto del tema, y una sexta solo a medias: el kernel de Windows sin hilo central de planificación, la planificación no apropiativa, la carga de páginas por demanda, los sistemas distribuidos y el bit de modificado, más Round Robin con HRN como distractor. El diagnóstico completo está en `docs/propuestas/B2-T02-diagnostico.md`, con 32 errores o datos caducados de las fuentes PreparaTIC 059–062 que no se trasladan.

- **Nuevo texto** (`content/fork-topics/B2-T02.md`), con el mismo mecanismo de sustitución declarada que B2-T01 (cambio 13).
  - Sigue el enunciado: fundamentos (procesos, planificación, concurrencia, memoria, E/S, ficheros y protección), Windows, Unix y Linux, otros sistemas (macOS y z/OS), sistemas móviles, administración y supuesto práctico.
  - Explica las 11 preguntas INAP del tema donde corresponde y las resume al final con su respuesta.
  - Conserva el diagrama de proceso e hilos, ahora tras el apartado «2. Procesos e hilos».
  - Es redacción propia del fork con ayuda de IA y se publica con el estado **«pendiente de revisión»**.
- **Validación.** `scripts/validate_gsi_final.py` añade tres comprobaciones del contenido de B2-T02: las 11 preguntas INAP en el apartado 14, POSIX y el origen de Linux sin los errores de la fuente, y Windows como núcleo híbrido sin hilo central de planificación.
- Los apuntes V2.1 originales (II.02) siguen intactos en el corpus. Las preguntas del banco no cambian. El diagnóstico anota cuatro preguntas del banco que convendría reclasificar en otro tema.

## 21 de noviembre de 2026

### 15. Examen oficial INAP 2019 (OEP 2019)

El original empezaba en la convocatoria 2022. Este fork añade la [OEP 2019](https://sede.inap.gob.es/es/procedimientos-y-servicios/seleccion/procesos-selectivos-de-cuerpos-y-escalas-generales/cuerpo-de-gestion-de-sistemas-e-informatica-de-la-administracion-del-estado/cgseiae-ingreso-libre-oferta-de-empleo-publico-2019), cuyo primer ejercicio se celebró el 12 de febrero de 2022 con el mismo formato: 100 preguntas, 5 de reserva, 90 minutos y penalización de un tercio.

- Se extrajeron las 105 preguntas del cuestionario por posiciones (pdfplumber) y se cotejaron palabra a palabra con la conversión MarkItDown, sin diferencias salvo pies de página.
- La clave sale de la plantilla definitiva y se cotejó con su conversión MarkItDown. Solo se anula la 79, que se sustituye por la reserva 1. La plantilla provisional, que solo difería en la 79, se conserva como documento sustituido.
- El mapa pregunta → tema de 2019 sigue el criterio editorial de 2022-2025. No es una clasificación oficial.
- El banco oficial pasa de 304 a 408 preguntas, y el total activo, de 2.066 a 2.170. Las preguntas de 2022, 2024 y 2025 no cambian. `content/question-reviews/baseline.json` registra el nuevo hash del banco oficial en `official_rebaselines`.
- El segundo ejercicio de 2019 duraba 210 minutos y tiene criterios propios en un PDF aparte. El esquema `gsi-official-exams` admite ahora 12.600 s de duración del escrito y un quinto documento `criteria_written`, que la interfaz muestra como «Criterios del segundo ejercicio (PDF)». El importador lee la duración de la extracción.
- `scripts/validate_gsi_final.py` ya no trata como iguales opciones que solo difieren en un operador entre caracteres. Antes daba «N/2» y «N-2» (pregunta 77, RAID 5) por la misma opción.
- «Qué cae en el examen» cuenta ahora 400 preguntas evaluables: B1 69 (17 %), B2 107 (27 %), B3 119 (30 %) y B4 105 (26 %). B2-T02 sigue siendo el tema más preguntado, con 13.
- Las 104 preguntas activas de 2019 tienen explicación razonada del fork, con el mismo formato que el cambio 5. Los artículos legales (CE, Ley 19/2013, LO 3/2007, Ley 39/2015, RD 203/2021, Ley 37/2007, RD 1112/2018, ENI y NTI de expediente) se cotejaron con el código BOE del repositorio, y la lista de aspectos de la pregunta 67, con el fascículo 1 de la Guía de Comunicación Digital. Se matizan claves que el tiempo ha dejado atrás: España Digital 2025 (Q10), ENS vigente (Q33), VoiceXML 3.0 (Q34), Xamarin (Q61), recolector de .NET (Q62), ISO/IEC 25010:2023 (Q65) y Ley 9/2014 (Q92).
- El tema B2-T02 reescrito por el fork (cambio 14) incorpora las dos preguntas INAP 2019 del tema: algoritmos de reemplazo de páginas (Q21, apartado 5.6) y el directorio /etc (Q22, apartado 10.5). La tabla del apartado 14 pasa de 11 a 13 preguntas y el validador comprueba ahora las 13.
- Pruebas: `tests/gsi-unit.mjs` comprueba el recuento, la anulada y su reserva, la pregunta 77 y el examen 2019. `tests/gsi-smoke.mjs` espera cuatro convocatorias y 17 PDF y recorre también el examen 2019. `tests/phase7b2-tests.js` espera 44 documentos de fuente.

### 16. Tema B2-T04 reescrito por el fork

El tema 4 del Bloque II (inteligencia de negocio, CMI, DSS, EIS, almacenes de datos, OLTP y OLAP) era un esquema correcto pero escueto. Permitía responder las 6 preguntas INAP del tema, dos de ellas a duras penas: «satélite» como término ajeno a los cubos OLAP (2019) y «Spiral OLAP» (2024). En cambio, despachaba en una línea tres de los cinco conceptos del enunciado: CMI, DSS y EIS. El diagnóstico completo está en `docs/propuestas/B2-T04-diagnostico.md`, con 21 errores o datos caducados de las fuentes PreparaTIC 072 (2019) y 075 (2023) que no se trasladan. Por ejemplo, KGI como «Key Global Indicator», constelación igual a *starflake*, HBase como base OLAP, IVR como «Interactive Voice Recognition» o el *up-selling* confundido con la venta cruzada.

- **Nuevo texto** (`content/fork-topics/B2-T04.md`), con el mismo mecanismo de sustitución declarada que B2-T01 (cambio 13).
  - Sigue el enunciado:
    - BI.
    - Sistemas para decidir (TPS, MIS, DSS y EIS), con ERP y CRM como fuentes.
    - Indicadores y cuadros de mando (KPI, KGI, SMART y UNE 66175).
    - CMI de Kaplan y Norton, con su adaptación al sector público.
    - Almacén de datos (Inmon, Kimball y Data Vault), ETL y ELT, y modelo dimensional (tipos de hechos y medidas, SCD, estrella, copo, constelación y *starflake*).
    - OLTP y OLAP (reglas de Codd, FASMI, cubo, operaciones, tipos y lenguajes).
  - Como contexto, explica Data Lake, Lakehouse, Data Fabric, Data Mesh, PET y espacios de datos, con el marco europeo vigente.
  - Explica las 6 preguntas INAP del tema y las 5 relacionadas que el INAP clasificó en B2-T12 y B3-T15 (ERP, CRM colaborativo, Data Lake y Lakehouse), y las resume en el apartado 12.
  - Conserva el diagrama de la cadena BI, ahora tras el apartado «1. Inteligencia de negocio».
  - Es redacción propia del fork con ayuda de IA y se publica con el estado **«pendiente de revisión»**.
- **Validación.** `scripts/validate_gsi_final.py` añade cuatro comprobaciones del contenido de B2-T04:
  - Las 6 preguntas INAP en el apartado 12.
  - KGI como *Key Goal Indicator*.
  - SOLAP espacial y el satélite de Data Vault.
  - *Starflake* diferenciado de la constelación.
- **Pruebas.** B2-T04 es uno de los tres temas piloto de `tests/phase7b2-tests.js`, que exigía el estado «revisado» y dos enlaces a las fuentes canónicas de estudio y repaso. Para los temas del manifiesto de sustituciones, la prueba acepta ahora el estado declarado en él y exige el enlace «Sustituye a» a la fuente canónica sustituida. Es la misma excepción que ya tenía la prueba de fechas. Para los demás pilotos sigue igual de estricta.
- Los apuntes V2.1 originales (II.04) siguen intactos en el corpus. Las preguntas del banco no cambian.

### 17. Tema B2-T05 reescrito por el fork

El tema 5 del Bloque II (ANSI/SPARC, SGBD relacionales, SQL e interoperabilidad) era correcto pero escueto. Las 7 preguntas INAP del tema se podían responder, aunque tres solo con frases añadidas al final de una viñeta. Una de ellas en el sitio equivocado: los componentes de proceso del SGBD (compilador y precompilador DML, intérprete DDL y motor de ejecución) figuraban dentro del gestor de almacenamiento, cuando son del procesador de consultas. Las normas de interoperabilidad ocupaban siete viñetas.

El diagnóstico completo está en `docs/propuestas/B2-T05-diagnostico.md`, con 23 errores o datos caducados de las fuentes PreparaTIC 063 (2022) y 064 (2023) que no se trasladan. Por ejemplo:

- Llamar «lógico» al nivel externo.
- Hablar de «12» reglas de Codd, cuando son 13.
- Presentar el 2PL estricto como si fuera el básico.
- Definir el join natural como una theta-combinación.
- Dar SQL2 como versión de la norma.
- Afirmar que TRUNCATE nunca admite ROLLBACK.
- Decir que CONSTRAINT crea índices.
- Dar OLE DB por obsoleto.

- **Nuevo texto** (`content/fork-topics/B2-T05.md`), con el mismo mecanismo de sustitución declarada que B2-T01 (cambio 13).
  - Sigue el enunciado:
    - Bases de datos y SGBD, con diccionario, lenguajes y tipos de SGBD.
    - Arquitectura ANSI/SPARC: niveles, correspondencias, independencia y modelo DAFTG.
    - Modelo relacional: claves, integridad, acciones referenciales, las 13 reglas de Codd y álgebra y cálculo relacional.
    - SQL: tipos, DDL, consultas, combinaciones, agregación, subconsultas, nulos, MERGE, DELETE frente a TRUNCATE frente a DROP, vistas, privilegios, SQL procedimental e inyección SQL.
    - Transacciones, concurrencia y recuperación.
    - Arquitectura interna del SGBD.
    - Normas de interoperabilidad: versiones y partes de ISO/IEC 9075, SQL/CLI, ODBC, JDBC con sus cuatro tipos de driver, OLE DB, ADO.NET, PDO, DB-API, ORM, XA, DRDA, SQL/MED y diferencias de dialecto.
  - Explica las 7 preguntas INAP del tema y las 10 relacionadas que el INAP clasificó en B3-T04 y B3-T15 (ACID, aislamiento, claves, integridad referencial, normalización y BASE), y las resume en el apartado 9.
  - Conserva el diagrama ANSI/SPARC, ahora tras el apartado «2. La arquitectura ANSI/SPARC».
  - Es redacción propia del fork con ayuda de IA y se publica con el estado **«pendiente de revisión»**.
- **Validación.** `scripts/validate_gsi_final.py` añade cuatro comprobaciones del contenido de B2-T05:
  - Las 7 preguntas INAP en el apartado 9.
  - El nivel externo sin la denominación «lógico».
  - Las 13 reglas de Codd con el acceso garantizado.
  - Los componentes del SGBD separados en procesador de consultas y gestor de almacenamiento.
- Los apuntes V2.1 originales (II.05) siguen intactos en el corpus. Las preguntas del banco no cambian.

### 18. Tema B2-T06 reescrito por el fork

El tema 6 del Bloque II (cliente-servidor, multicapa, multidispositivo y servicios web) era correcto pero escueto: unos 10 KB para un enunciado con cinco partes. Las 5 preguntas INAP del tema se podían responder, pero dos (el *middleware* y la ventaja de la multicapa, ambas de 2025) solo con un apartado añadido después del resumen. La tipología y los componentes del cliente-servidor, la interoperabilidad de componentes (RPC, CORBA, RMI, mensajería) y UDDI no aparecían.

El diagnóstico completo está en `docs/propuestas/B2-T06-diagnostico.md`, con 22 errores o datos caducados de las fuentes PreparaTIC 058 (2019 y 2023) y 065 (2023) que no se trasladan. Por ejemplo:

- Definir WSDL como «gramática XML», cuando describe la interfaz del servicio.
- Dar UDDI como organismo propio y no como estándar de OASIS.
- Atribuir a WS-SecureConversation la «compartición de contenidos».
- Llamar «arquitectura monolítica» a la de tres niveles.
- Definir los microservicios como la separación entre *front-end* y *back-end*.
- Desarrollar SOAP como *Simple Object Access Protocol*, nombre abandonado en SOAP 1.2.
- Distinguir «API REST» de «API RESTful» por el uso de los verbos HTTP.
- Citar «JMI» en lugar de JMS como mensajería.

- **Nuevo texto** (`content/fork-topics/B2-T06.md`), con el mismo mecanismo de sustitución declarada que B2-T01 (cambio 13).
  - Sigue el enunciado:
    - Sistemas centralizados y distribuidos: características, transparencias y falacias.
    - Cliente-servidor: componentes, tipos de cliente y de servidor, tipología de Gartner y comparación con P2P.
    - Multicapa: capa lógica frente a nivel físico, una, dos, tres y N capas, MVC y monolito.
    - Multidispositivo: diseño adaptable, apps nativas, híbridas, multiplataforma y PWA, API primero y BFF.
    - *Middleware* e interoperabilidad de componentes: tipos de *middleware*, RPC, CORBA, DCOM, RMI, EJB, gRPC y mensajería.
    - SOA: principios, modelo S3, orquestación y coreografía, y ESB.
    - Arquitectura de servicios web: roles, pila, SOAP, WSDL 1.1 y 2.0, UDDI y WS-*.
    - REST, métodos HTTP, modelo de Richardson, JSON, OpenAPI, GraphQL, gRPC y pasarelas de API.
    - Estado, escalabilidad, resiliencia y observabilidad, y tabla final de ventajas e inconvenientes.
  - Explica las 5 preguntas INAP del tema y las 14 relacionadas que el INAP clasificó en B2-T02, B2-T12, B3-T10, B3-T12 y B4-T06 (UDDI, WSDL, REST, JSON, RMI, capas de Jakarta EE y balanceo), y las resume en el apartado 11.
  - Conserva el diagrama de capas e integración, ahora tras el apartado «3. Arquitecturas multicapa».
  - Es redacción propia del fork con ayuda de IA y se publica con el estado **«pendiente de revisión»**.
- **Validación.** `scripts/validate_gsi_final.py` añade cinco comprobaciones del contenido de B2-T06:
  - Las 5 preguntas INAP en el apartado 11.
  - WSDL como descripción de la interfaz, sin la «gramática XML» de la fuente.
  - SOAP 1.2 sin acrónimo y UDDI explicado.
  - Las seis restricciones REST de Fielding.
  - El *middleware* y los componentes de RMI.
- Los apuntes V2.1 originales (II.06) siguen intactos en el corpus. Las preguntas del banco no cambian.

### 19. Tema B2-T07 reescrito por el fork

El tema 7 del Bloque II (contenedores, microservicios, Kubernetes, despliegue, monitorización y escalado) era correcto y actual, pero casi todo eran enumeraciones sin explicación. Las 3 preguntas INAP del tema se podían responder, aunque la de 2025 (`hostPID`) solo con una frase al final del apartado de seguridad. No se explicaban los mecanismos del núcleo que aíslan los contenedores, los estándares OCI, los patrones de microservicios, los tipos de Service, la seguridad de los Pods, las herramientas de monitorización ni el cálculo del HPA. Tampoco recogía que el controlador Ingress NGINX se retiró en marzo de 2026.

El diagnóstico completo está en `docs/propuestas/B2-T07-diagnostico.md`, con 16 errores o datos caducados de las fuentes PreparaTIC 065 (2023), 097 (2022) y 132 (2024) que no se trasladan. Por ejemplo:

- Afirmar que los contenedores se ejecutan «en cualquier sistema operativo» o que deben usar «el mismo sistema operativo» que el anfitrión, cuando comparten el núcleo.
- Presentar Moby como herramienta de gestión de contenedores.
- Describir como paravirtualización la traducción binaria de la virtualización completa.
- Decir que el Jenkinsfile usa YAML (usa un lenguaje basado en Groovy) o que SonarQube ejecuta las pruebas.
- Atribuir a Red Hat la creación de Ansible.
- Describir SRE como «el desarrollo controla las operaciones».

- **Nuevo texto** (`content/fork-topics/B2-T07.md`), con el mismo mecanismo de sustitución declarada que B2-T01 (cambio 13).
  - Sigue el enunciado:
    - De la virtualización a los contenedores: hipervisores, técnicas y comparación.
    - Contenedores: espacios de nombres y *cgroups*, imágenes, especificaciones OCI, entornos de ejecución, Docker, Dockerfile, volúmenes y registros.
    - Microservicios: características, monolito modular, cuándo usarlos, doce factores, datos y patrones.
    - Kubernetes: plano de control, nodos, interfaces y objetos (Pods, controladores, Service, Gateway API, configuración, almacenamiento, recursos y sondas).
    - Soluciones: Helm, operadores, distribuciones, servicios gestionados y *serverless*.
    - Despliegue: DevOps y SRE, CI/CD, entornos, infraestructura como código, estrategias y GitOps.
    - Monitorización, escalado (con la fórmula del HPA) y seguridad de contenedores.
  - Explica las 3 preguntas INAP del tema y las 10 relacionadas que el INAP clasificó en B3-T06, B3-T08, B4-T04 y B4-T06 (CI/CD, DevOps, Jenkins, Maven, Ansible, ELK, hipervisores y tipos de migración), y las resume en el apartado 11.
  - Conserva el diagrama de Kubernetes, ahora tras el apartado «4. Kubernetes: arquitectura».
  - Es redacción propia del fork con ayuda de IA y se publica con el estado **«pendiente de revisión»**.
- **Validación.** `scripts/validate_gsi_final.py` añade cinco comprobaciones del contenido de B2-T07:
  - Las 3 preguntas INAP en el apartado 11.
  - `hostPID` explicado frente a `privileged`.
  - Las tres especificaciones OCI, sin el error del «mismo sistema operativo».
  - La retirada de Ingress NGINX y Gateway API.
  - La fórmula del HPA.
- Los apuntes V2.1 originales (II.07) siguen intactos en el corpus. Las preguntas del banco no cambian.

## Validación

El 20/11/2026 se ejecutó la suite del proyecto (`python scripts/run_gsi_suite.py`) en WSL con Chrome, Playwright, Python 3.11 y Node 20:

- Integridad GSI (20.075 controles), JSON y esquemas, referencias, preguntas, encabezados, documentación, calidad editorial, circuito editorial, pruebas unitarias (104/104) y regresión en navegador: todo correcto.
- El recorrido funcional HTTP, `tests/gsi-smoke.mjs`, pasa completo (83/83) cuando se ejecuta aislado. Dentro de la suite completa, en WSL, falla de forma intermitente una prueba distinta en cada ejecución por tiempos de espera. Lo mismo ocurría con el repositorio original sin modificar.
- Los registros `logs/gsi-suite.json`, `logs/gsi-regression.json` y `logs/gsi-browser-smoke.json` se conservan tal como los dejó el proyecto original. No se sustituyen por ejecuciones con fallos intermitentes del entorno.
- Tras los cambios 7 y 8 se repitió la suite completa en el mismo entorno. Pasan JSON y esquemas, referencias, preguntas, encabezados, documentación, calidad y circuito editorial, pruebas unitarias (104/104), regresión en navegador y el recorrido funcional HTTP completo (84/84, con la prueba nueva del cambio 8). La etapa de integridad (20.111 controles, 0 errores) se ejecutó aparte con un entorno que incluye `markitdown` y `rg`, porque el Python del sistema no los tiene instalados.
- Antes del cambio 8, «complete GSI exam / correction» fallaba también con el recorrido aislado: es el fallo que corrige ese cambio. Se reprodujo sobre el código anterior a los cambios 7 y 8 (falló 1 de 2 ejecuciones).
- Tras el cambio 9, la suite completa pasa en una sola ejecución (código 0) con un entorno que incluye `markitdown` y `rg`: integridad (20.117 controles), pruebas unitarias (108/108), regresión en navegador y recorrido funcional HTTP (85/85).
- Tras el cambio 13, la suite completa pasa (código 0): integridad (20.116 controles, con las nuevas comprobaciones de la sustitución), pruebas unitarias (108/108), regresión en navegador y recorrido funcional HTTP (85/85). Se comprobó además que el validador detecta un tema sustituido modificado sin registrar.
- Tras los cambios 11 y 12, la suite completa vuelve a pasar (código 0): integridad (20.117 controles), pruebas unitarias (108/108) y recorrido funcional HTTP (85/85), incluida la prueba de revisión editorial ya ajustada.
- Tras el cambio 10 se repitió la suite completa, con el mismo resultado (código 0). El recorrido HTTP (85/85) incluye la comprobación básica de accesibilidad: un único H1 por vista, sin saltos de encabezado y con nombre accesible en todos los controles.
- Tras el cambio 16, la suite completa pasa (código 0) con un entorno que incluye `markitdown` y `rg`: integridad (20.986 controles, con las cuatro comprobaciones nuevas de B2-T04), pruebas unitarias (111/111), regresión en navegador (phase7b2 51/51) y recorrido funcional HTTP (86/86).
- Tras el cambio 17, la suite completa pasa (código 0) en el mismo entorno: integridad (20.987 controles, con las cuatro comprobaciones nuevas de B2-T05), pruebas unitarias (111/111), regresión en navegador (phase7b2 51/51) y recorrido funcional HTTP (86/86), incluida la prueba de diseño móvil, que abre precisamente B2-T05.
- Tras el cambio 18, la suite completa pasa (código 0) en el mismo entorno: integridad (20.998 controles, con las cinco comprobaciones nuevas de B2-T06), pruebas unitarias (111/111), regresión en navegador (phase7b2 51/51) y recorrido funcional HTTP (86/86).
- Tras el cambio 19, la suite completa pasa (código 0) en el mismo entorno: integridad (21.008 controles, con las cinco comprobaciones nuevas de B2-T07), pruebas unitarias (111/111), regresión en navegador (phase7b2 51/51) y recorrido funcional HTTP (86/86).
