# Diagnóstico del tema B2-T10

**Tema:** Análisis y gestión de riesgos de los sistemas de información. Herramientas.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T10.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 047 y material ENS/MAGERIT».
- Resumen PreparaTIC 047 · Seguridad de sistemas (1). Análisis y gestión de riesgos. Herramientas (edición 29, actualizado a 28/04/2023).
- Real Decreto 311/2022 (ENS), texto consolidado en el BOE: artículos 7 y 14, anexo I y medida op.pl.1 del anexo II.
- Las 5 preguntas oficiales INAP clasificadas en B2-T10 (2019, 2022, 2024 y 2025), las 6 relacionadas que el INAP clasificó en B1-T09, B2-T13, B3-T01 y B4-T06, y las preguntas IA del banco del tema.

**No revisado a fondo:** la carpeta «Doc adicional» del tema 047 y su resumen *express*.

## 1. Conclusión

El tema actual es correcto y bien orientado: separa metodología (MAGERIT) de herramienta (PILAR), riesgo potencial de residual y amenaza de vulnerabilidad. Pero es **un esquema** de unos 8 KB, y lo central del enunciado, el **método de análisis**, no se explica:

- No hay **tipos de activos**, **escalas de valoración**, **catálogo de amenazas**, **degradación** ni **frecuencia** de MAGERIT, ni cómo se calculan el **impacto** y el **riesgo** (acumulado y repercutido).
- No hay **tipos de salvaguardas** ni el modelo de **madurez**.
- No hay **fórmulas** del análisis cuantitativo (pérdida esperada anual).
- Las **otras metodologías** (ISO/IEC 27005, NIST SP 800-30, OCTAVE, EBIOS, FAIR…) se citan sin explicar.
- Las **herramientas** se reducen a PILAR.
- El ENS se menciona, pero no cómo gradúa el análisis de riesgos según la categoría del sistema (medida op.pl.1).

Las 5 preguntas INAP del tema se pueden responder, aunque la de 2025 sobre el mapa de calor solo con una frase dentro de un párrafo en negrita, y la de 2025 sobre metodologías exige saber que **UNE-EN 12464-1** es una norma de **iluminación** de lugares de trabajo.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 32 | Dimensión de MAGERIT relativa a la completitud y corrección de los datos: integridad | Cubierta en una frase. |
| 2022 · 28 | Estrategia que no es de tratamiento del riesgo en MAGERIT: todas lo son (mitigar, asumir, compartir o transferir) | Cubierta en parte; no dice que «asumir» equivale a aceptar. |
| 2024 · 35 | Dimensión de la seguridad de la información: disponibilidad | No enumera las dimensiones. |
| 2025 · 37 | Función del mapa de calor: cruzar probabilidad e impacto para priorizar | Una frase en un párrafo en negrita. |
| 2025 · 38 | Lo que no es metodología de riesgos: UNE-EN 12464-1:2022 | No explica qué es esa norma. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 72 | B1-T09 | Según CCN-STIC-803, un RTO de más de 5 días: no aplicable |
| 2019 · 73 | B4-T06 | Tiempo máximo para recuperar un nivel mínimo de servicio: RTO |
| 2022 · 41 | B3-T01 | Fases del modelo en espiral, con su análisis de riesgos |
| 2022 · 74 | B4-T06 | Nivel mínimo de recuperación aceptable: ROL |
| 2024 · 36 | B2-T13 | Amenaza que afecta a la integridad: el *ransomware* |
| 2024 · 87 | B2-T13 | Qué es Nessus: escáner de vulnerabilidades |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Dimensiones de la seguridad con su definición (ENS y MAGERIT) | 047 | Preguntas 2019 · 32 y 2024 · 35. |
| Definiciones normalizadas (ISO 31000, ISO/IEC 27000, MAGERIT) | 047 (con errores) | Base del vocabulario. |
| Estructura de MAGERIT v3 (tres libros), objetivos y proceso | 047 (parcial) | Metodología de referencia de la Administración. |
| Tipos de activos, dependencias y valoración en escala 0–10 | 047 (parcial) | Primer paso del método. |
| Catálogo de amenazas (N, I, E, A), degradación y frecuencia | 047 (parcial) | Cálculo del impacto y del riesgo. |
| Impacto y riesgo acumulados y repercutidos | — | Clásico de MAGERIT. |
| Tipos de salvaguardas y modelo de madurez L0–L5 | 047 (parcial) | Riesgo residual. |
| Informes de MAGERIT | 047 | Productos del análisis. |
| Análisis cuantitativo: SLE, ARO y ALE | — | Diferencia con el cualitativo. |
| Mapa de calor y matrices de riesgo | — | Pregunta 2025 · 37. |
| Otras metodologías y normas: ISO/IEC 27005:2022, ISO 31000, IEC 31010, NIST SP 800-30, OCTAVE, EBIOS RM, MEHARI, FAIR, COSO ERM, CRAMM | 047 (parcial) | Pregunta 2025 · 38. |
| Graduación del análisis en el ENS (op.pl.1: informal, semiformal y formal) | 047 (con un error) | Relación con el ENS. |
| Herramientas EAR (PILAR, PILAR Basic, µPILAR, RMAT), herramientas GRC y de análisis de vulnerabilidades | 047 (parcial) | «Herramientas» del enunciado. |
| Riesgos en protección de datos (EIPD) y NIS2 | 047 (mínimo) | Otros marcos que exigen análisis de riesgos. |

## 4. Explicaciones confusas o mal formateadas

1. **Negrita accidental.** La definición de impacto (apartado 2) y el apartado de análisis cualitativo y cuantitativo (4) están enteros en negrita.
2. **Respuestas de examen sueltas.** La definición de integridad de MAGERIT y la función del mapa de calor aparecen como frases añadidas a otros párrafos.
3. **Referencias internas.** «A1 047 y material ENS/MAGERIT» no dice nada a quien estudia.
4. **Resúmenes repetidos.** «Resumen II.10», «Test» y «Resumen de repaso» repiten lo mismo con otras palabras.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 047 | Cita el artículo 7 del «Esquema Nacional de Seguridad RD 311/2010» | El ENS vigente es el **Real Decreto 311/2022**, que derogó el **Real Decreto 3/2010**. El texto que se cita es el del antiguo; el actual dice que el análisis y la gestión de los riesgos es parte esencial del proceso de seguridad y debe ser una actividad **continua** y permanentemente actualizada. |
| 047 | op.pl.1, categoría ALTA: «Refuerzo R1» | En el RD 311/2022 la categoría **MEDIA** añade el refuerzo **R1** (análisis **semiformal**) y la **ALTA**, el **R2** (análisis **formal**, con fundamento matemático reconocido internacionalmente). |
| 047 | «ISO/IEC 27001:2018» | No existe. Las versiones son la de 2013 y la vigente, **ISO/IEC 27001:2022** (con la modificación 1 de 2024). |
| 047 | «ISO/IEC 27005:2018» como norma vigente | La vigente es **ISO/IEC 27005:2022**, alineada con la 27001:2022. |
| 047 | Riesgo: «Probabilidad de que se materialice una vulnerabilidad» | Las vulnerabilidades no se «materializan»: se **explotan**. Lo que se materializa es una **amenaza**. El riesgo combina la **probabilidad** de que una amenaza se materialice y el **impacto** que causaría. |
| 047 | Vulnerabilidad: «Posibilidad de materialización de una amenaza sobre un activo» | Esa frase mezcla vulnerabilidad y probabilidad. Una vulnerabilidad es una **debilidad** de un activo o de un control que una amenaza puede **explotar** (ISO/IEC 27000). |
| 047 | MAGERIT, «promovida por el CSAE (Comisión Sectorial de Administración Electrónica)» | MAGERIT v3 (2012) la elaboró el **Consejo Superior de Administración Electrónica**, entonces CSAE. La Comisión Sectorial de Administración Electrónica es un órgano posterior (2015) y distinto. |
| 047 | «El coste de las contramedidas no puede ser mayor que el posible coste de la materialización de las amenazas» | Es el principio general de **proporcionalidad**, pero no es absoluto. Hay salvaguardas **obligatorias por ley** (ENS, RGPD) con independencia de su coste, y daños, como los a la reputación o a los derechos de las personas, que no se miden solo en dinero. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Seguridad de la información y sus dimensiones.
  2. Conceptos del riesgo.
  3. Proceso de gestión de riesgos (ISO 31000 e ISO/IEC 27005).
  4. Análisis: cualitativo, cuantitativo y semicuantitativo.
  5. Tratamiento.
  6. MAGERIT v3 en detalle.
  7. Otras metodologías y normas.
  8. El riesgo en el ENS, el RGPD y NIS2.
  9. Herramientas.
- **Remitir a otros temas en vez de duplicarlos:**
  - Medidas de seguridad, ENS en detalle y gestión de incidentes: B2-T13.
  - Auditoría: B2-T11.
  - Continuidad y alta disponibilidad: B4-T06.
  - Riesgos del proyecto: B2-T15.
  - Protección de datos: bloque 1.
- **Explicar antes de resumir**, con un ejemplo de cálculo con MAGERIT y otro cuantitativo.
- **Cubrir las 5 preguntas INAP** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 6 relacionadas.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T10.md`](../../content/fork-topics/B2-T10.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama del ciclo del riesgo del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.10) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
