# Exámenes oficiales GSI del INAP

Importación local del 16 de septiembre de 2026 (2022 y 2024). La convocatoria 2025 se incorporó el 20 de noviembre de 2026 y la de 2019 el 21 de noviembre de 2026, ambas en el fork [smaaguero/Preparacion-GSI](https://github.com/smaaguero/Preparacion-GSI); véase [MODIFICACIONES.md](../MODIFICACIONES.md). Son exámenes de **ingreso libre**, separados físicamente del material curado y generado. Los años son los de las convocatorias, no necesariamente los de celebración del examen.

| Convocatoria | Banco activo | Examen interactivo | Anuladas | Reservas usadas |
| --- | ---: | ---: | --- | --- |
| [2022](https://sede.inap.gob.es/gsil-oep-2020-2021-2022) | 101 | 100 preguntas / 90 minutos | 15, 21, 53, 91 | 1, 2, 3, 4 |
| [2024](https://sede.inap.gob.es/gsil-2024) | 101 | 100 preguntas / 90 minutos | 17, 27, 86, 90 | 1, 2, 3, 4 |
| [2025](https://sede.inap.gob.es/es/procedimientos-y-servicios/seleccion/procesos-selectivos-de-cuerpos-y-escalas-generales/cuerpo-de-gestion-de-sistemas-e-informatica-de-la-administracion-del-estado-ingreso-libre-convocatoria-2025) | 102 | 100 preguntas / 90 minutos | 32, 33, 89 | 1, 2, 3 |
| [2019](https://sede.inap.gob.es/es/procedimientos-y-servicios/seleccion/procesos-selectivos-de-cuerpos-y-escalas-generales/cuerpo-de-gestion-de-sistemas-e-informatica-de-la-administracion-del-estado/cgseiae-ingreso-libre-oferta-de-empleo-publico-2019) | 104 | 100 preguntas / 90 minutos | 79 | 1 |

Cada banco histórico conserva sus preguntas ordinarias válidas (96 en 2022 y 2024; 97 en 2025; 99 en 2019) y las cinco reservas. En cada examen interactivo se utilizan, por orden, tantas reservas como preguntas anuladas, insertadas en las posiciones anuladas. Las reservas sobrantes quedan disponibles para entrenamiento. La puntuación es directa: aciertos menos errores divididos entre tres, sin aplicar la transformación ni el corte del tribunal.

## Cómo estudiar

1. Abre **Examen → Exámenes oficiales INAP**.
2. Despliega una convocatoria para consultar sus PDF: cuestionario, plantilla, segundo ejercicio y criterios. En 2019 hay dos documentos de criterios (primer y segundo ejercicio).
3. En 2019, 2022, 2024 o 2025, pulsa **Preparar este examen** y después **Iniciar examen**. El reloj solo empieza con este último botón.
4. Responde, marca las dudas y finaliza para ver la corrección y la procedencia.
5. Para sesiones cortas, selecciona **Solo preguntas oficiales → Mezclar preguntas oficiales**, cantidad y duración.

Los supuestos oficiales del segundo ejercicio se ofrecen en PDF para resolver por escrito. No se han inventado soluciones ni añadido una corrección automática del texto. La sección **Práctica escrita** conserva sus ocho casos y cuatro simulacros del corpus de estudio.

## Fidelidad y límites

- Se conservan enunciados, cuatro alternativas y letras de la plantilla definitiva. Se unen los saltos de línea del PDF para facilitar la lectura. La pregunta 12 de 2024 usa **D**, modificada en la plantilla definitiva.
- El feedback identifica la clave oficial y su documento. El INAP no publica en estas plantillas una justificación razonada de cada respuesta; la aplicación no inventa esa justificación.
- Las preguntas históricas no certifican vigencia actual. La interfaz muestra convocatoria y advertencia antes de responder en entrenamiento, examen y refuerzo. En la pregunta 87 de 2024 se conserva D y se señala expresamente que la descripción de la licencia de Nessus requiere contraste.
- La asignación de bloque/tema es editorial, no oficial; se guarda en `data/gsi-official-topic-map.json`. La dificultad es orientativa y no calibrada.
- Las doce preguntas anuladas se conservan en la extracción y en el catálogo para auditoría, excluidas del banco activo. No tienen una respuesta correcta inventada.
- La convocatoria 2025 usa la [plantilla definitiva](https://sede.inap.gob.es/sites/sede/files/public/2026-09/Plantilla%20DEFINITIVA%20respuestas%20GSI-L%20OEP2025.pdf) publicada por el INAP en septiembre de 2026. Se conservan también el original y la conversión de la plantilla provisional de mayo de 2026 como documentos históricos; no se usan para corregir.
- La convocatoria 2019 corresponde a la OEP 2019; su primer ejercicio se celebró el 12 de febrero de 2022, con 100 preguntas, 5 de reserva y 90 minutos. La plantilla definitiva solo cambia respecto de la provisional en la pregunta 79, que se anula. Su segundo ejercicio duraba 210 minutos (5 preguntas y un supuesto a elegir entre dos), frente a los 180 de las convocatorias posteriores; el catálogo lo refleja. Las preguntas citan normas y planes de entonces (por ejemplo, España Digital 2025 o el IV Plan de Gobierno Abierto); contrasta su vigencia con el temario actual.
- El detector de duplicados exactos compara enunciado y alternativas normalizados. Las preguntas 40 de 2022 y 48 de 2024 comparten enunciado, pero tienen alternativas distintas; se conservan ambas con su procedencia.

## Archivos y reproducción

Los originales (17 documentos enlazados más las plantillas provisionales 2025 y 2019 sustituidas) se conservan localmente en `documents/originals/gsi-official/`, ignorados por Git. Sus enlaces públicos y SHA-256 figuran en `data/gsi-official-exams.json`; la web abre los PDF del INAP. Las 19 conversiones normales de MarkItDown están en `documents/markdown/gsi-official/`, con los nombres y estructura relativa originales. `logs/gsi-official-conversions.json` registra los intentos, incluidos los fallidos; no se utilizó OCR.

La extracción estructurada de los cuestionarios y claves definitivas está en `documents/sources/gsi-official/extracted.json`. Se obtuvo del texto con posiciones del PDF mediante pdfplumber, comprobando 105 preguntas por examen, sus cuatro opciones, todas las claves y las anulaciones. Las respuestas se cotejaron con las plantillas definitivas; no se dedujeron por IA. En 2025 la clave se extrajo dos veces de forma independiente (transcripción y lectura automática del PDF) y ambas coincidieron en las 105 posiciones; el SHA-256 del cuestionario coincide con el registrado en la importación original. En 2019 la clave se leyó por posiciones con pdfplumber y se cotejó con la conversión MarkItDown de la plantilla (105 posiciones, sin discrepancias); el texto de las 105 preguntas se cotejó palabra a palabra con la conversión MarkItDown del cuestionario, sin diferencias salvo pies de página.

Para regenerar el banco desde esa extracción conservada:

```powershell
.\.venv\Scripts\python.exe scripts/import_gsi_official.py
.\.venv\Scripts\python.exe scripts/run_gsi_suite.py
```

El importador produce `data/questions-official.json`, el catálogo y las fuentes. Los validadores contrastan texto, opciones, clave, hashes, procedencia, integridad de conversiones, reservas y exclusión de provisionales. Las pruebas comprueban puntuación, orden de opciones, recuperación y exportación/importación. Una nueva convocatoria requiere extracción y revisión explícitas antes de incorporarla.
