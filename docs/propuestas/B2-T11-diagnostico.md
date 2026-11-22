# Diagnóstico del tema B2-T11

**Tema:** Auditoría Informática: objetivos, alcance y metodología. Técnicas y herramientas. Normas y estándares. Auditoría del ENS y de protección de datos. Auditoría de seguridad física.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T11.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 038 + 047 + 048, RGPD/LOPDGDD y ENS».
- Resúmenes PreparaTIC leídos en la carpeta de Drive:
  - 038 · Auditoría informática. Concepto y contenidos. Administración, planeamiento, organización, infraestructura técnica y prácticas operativas (edición 28, actualizado a 20/01/2022).
  - 048 · Seguridad de sistemas (2). El Esquema Nacional de Seguridad (edición 31, actualizado a 05/03/2026). Se usan los apartados de instrucciones técnicas de seguridad y conformidad.
  - 047 · Análisis y gestión de riesgos (ya revisado en B2-T10).
- Real Decreto 311/2022 (ENS), texto consolidado en el BOE: artículos 31, 32 y 38 y anexo III.
- Las 4 preguntas oficiales INAP clasificadas en B2-T11 (2019, 2022 y 2024) y una de reserva de 2025, las 3 relacionadas que el INAP clasificó en B1-T09 y B2-T13, y las preguntas IA del banco del tema.

**No revisado a fondo:** las carpetas «Doc adicional» de los temas 038 y 048 y el texto completo de las instrucciones técnicas de seguridad.

## 1. Conclusión

El tema actual es correcto, actual y bien enfocado: describe la auditoría como un método (alcance, criterio, evidencia, hallazgo, informe y seguimiento), recoge bien la periodicidad del artículo 31 del ENS y la responsabilidad proactiva del RGPD, y separa auditoría de prueba de penetración. Pero es **un esquema** de unos 10 KB para un enunciado con siete partes:

- **Metodología:** no explica las pruebas de cumplimiento y sustantivas, el riesgo de auditoría, el muestreo ni la estructura y los tipos de opinión del informe.
- **Técnicas y herramientas:** enumera técnicas, pero no explica las técnicas de auditoría asistidas por ordenador (CAAT) ni las herramientas del CCN.
- **Normas:** ISO 19011, ISO/IEC 27001 y COBIT aparecen en una línea. Faltan ISO/IEC 27007, 17021 y 17065, ITAF, las normas del IIA y las de auditoría del sector público.
- **ENS:** falta la **certificación de conformidad**: quién certifica (entidades acreditadas por ENAC u órganos de auditoría técnica del sector público), la instrucción técnica de auditoría, las guías CCN-STIC-802 y 809, los distintivos e **INES**.
- **Administración:** no hay órganos de control (Tribunal de Cuentas, IGAE, Inspecciones de los Servicios).

Las 4 preguntas INAP del tema se pueden responder en parte: las dos del artículo 31 sí; la de **INES** (2024) y la de reserva sobre los **órganos de auditoría técnica** (2025) no; y la de 2019 sobre la guía CCN-STIC-802 solo de forma indirecta.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 33 | Según CCN-STIC-802, los sistemas de categoría básica pueden someterse a una auditoría formal de certificación, siempre deseable | Solo dice que la básica se apoya en la autoevaluación. |
| 2022 · 30 | Periodicidad de la auditoría ordinaria del ENS: al menos cada dos años, ampliable tres meses por fuerza mayor | Cubierta. |
| 2024 · 37 | Herramienta del CCN para evaluar regularmente el estado de la seguridad: INES | No está. |
| 2024 · 38 | Periodicidad de la auditoría ordinaria del ENS: al menos cada dos años | Cubierta. |
| 2025 · reserva 2 | Requisito de los órganos de auditoría técnica (OAT) del sector público: imparcialidad e independencia conforme a ISO/IEC 17065 | No está. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2022 · 29 | B1-T09 | Plazo de adecuación al ENS de los sistemas preexistentes: 24 meses |
| 2024 · 87 | B2-T13 | Nessus: herramienta de escaneo de vulnerabilidades |
| 2025 · 16 | B1-T09 | Según CCN-STIC-804, los procedimientos operativos de seguridad deben cubrir el 80 % de las actividades rutinarias |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Definición clásica (Weber) y funciones de la auditoría informática | 038 | Concepto y objetivos. |
| Control interno: tipos de control y el modelo COSO | 038 (parcial) | Lo que se audita. |
| Clasificaciones de la auditoría (por sujeto, amplitud, frecuencia y contenido) | 038 | «Tipos» y «alcance». |
| Órganos de control en la Administración: Tribunal de Cuentas, IGAE, Inspecciones de los Servicios, AEPD, CCN | 038 | Contexto de la Administración. |
| Riesgo de auditoría (inherente, de control y de detección) | — | Planificación basada en riesgos. |
| Pruebas de cumplimiento y sustantivas | 038 (confusas) | Metodología. |
| Calidades de la evidencia y tipos de muestreo | 038 (parcial) | Metodología. |
| Estructura del informe, alegaciones y tipos de opinión | 038 | Comunicación de resultados. |
| CAAT y técnicas de auditoría de programas (datos de prueba, simulación paralela, módulos integrados) | 038 | «Técnicas y herramientas». |
| Herramientas del CCN: INES, AMPARO, CLARA, PILAR | 048 (parcial) | Pregunta 2024 · 37. |
| Normas: ISO 19011:2018 y sus principios, ISO/IEC 27007, 27006, 17021-1 y 17065, ITAF, normas globales del IIA, COSO, Criterios Comunes | 038 (parcial y desactualizado) | «Normas y estándares»; pregunta de reserva 2025 · 2. |
| Certificación de conformidad con el ENS: declaración y certificación, entidades acreditadas por ENAC, OAT, distintivos, instrucciones técnicas, guías CCN-STIC-802, 808 y 809 | 048 | Preguntas 2019 · 33 y de reserva 2025 · 2. |
| Informe del estado de la seguridad (artículo 32) e INES | 048 | Pregunta 2024 · 37. |
| Auditoría de protección de datos: artículos del RGPD que la sustentan, poderes de la AEPD, ISO/IEC 27701 | — | Parte del enunciado. |
| Medidas de protección de las instalaciones del ENS (mp.if) y controles físicos de ISO/IEC 27002 | — | Auditoría de seguridad física. |

## 4. Explicaciones confusas o mal formateadas

1. **Definición metida en una lista.** La definición de trazabilidad se añade al final de una viñeta de objetivos.
2. **Referencias internas.** «A1 038 + 047 + 048» no dice nada a quien estudia.
3. **Resúmenes repetidos.** «Resumen II.11», «Test» y «Resumen de repaso» repiten lo mismo con otras palabras.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 038 | «Real Decreto 4/2010… por el que se regula el ENS» y «Real Decreto 3/2010… por el que se regula el ENI» | Están **intercambiados**: el RD 3/2010 era el ENS y el RD 4/2010 es el ENI. Además, el ENS vigente es el **Real Decreto 311/2022**, que derogó el RD 3/2010. |
| 038 | «Reglamento (UE) 2016/79 General de Protección de Datos» | Es el Reglamento (UE) **2016/679**. |
| 038 | La auditoría «es requerida, de forma ordinaria, cada dos años para los sistemas de categoría media y alta, según el Anexo I del RD 3/2010» | Hoy rige el **artículo 31 del RD 311/2022**: auditoría ordinaria **al menos cada dos años** de todos los sistemas incluidos, ampliable **tres meses** por fuerza mayor, y extraordinaria ante modificaciones sustanciales. En la categoría **básica**, según el anexo III, basta una **autoevaluación**. |
| 038 | «Los sistemas de información de categoría BÁSICA, o inferior» | No hay categoría inferior a la básica: el ENS solo tiene básica, media y alta. |
| 038 | COBIT de «ISACA… institución americana, dependiente del IT Governance Institute que nació a finales de 1995» | Es al revés: el **IT Governance Institute** lo creó **ISACA** en 1998. ISACA nació en 1969. La primera edición de COBIT es de 1996 y la vigente es **COBIT 2019**. |
| 038 | «ISO/IEC 13335 Gestión de la seguridad de las TIC» como norma de referencia | Está **anulada**: sus contenidos pasaron a la familia ISO/IEC 27000, en especial a la **27005**. |
| 038 | CAAT: «Computed Audit Assisted Techniques» | Es ***Computer-Assisted Audit Techniques***: técnicas de auditoría asistidas por ordenador. |
| 038 | Herramientas CAAT: «ACL, Auto Audit, AuditMaster, Delos» | ACL es hoy parte de **Diligent**. Las de uso habitual son ACL/Diligent, **IDEA**, el análisis de datos con Python o R y los paneles de auditoría continua. Las demás están en desuso. |
| 038 | «Pruebas sustantivas: permiten medir el riesgo por deficiencia de los controles» | Las **pruebas de cumplimiento** (o de controles) comprueban que los controles **existen y funcionan**. Las **sustantivas** verifican directamente los **datos y transacciones** (que sean completos, exactos y válidos) para detectar errores importantes. Cuanto peores son los controles, más pruebas sustantivas hacen falta. |
| 038 | Informe ENS «favorable» si las no conformidades se resuelven en un mes y «desfavorable» con seis meses para resolverlas | Esos plazos no están en el ENS. Las condiciones de la certificación las fijan la instrucción técnica de conformidad y la guía CCN-STIC-809, y el proceso de cada entidad de certificación. No se trasladan sin contrastarlos con la versión vigente. |
| 038 | «Inspección General del Ministerio de Hacienda y Administraciones Públicas» | Ese ministerio ya no existe con ese nombre. Cada ministerio tiene su **Inspección General de Servicios**, y la de Hacienda se llama Inspección General del Ministerio de Hacienda. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Concepto, objetivos y alcance, con el control interno.
  2. Tipos de auditoría y el auditor.
  3. Metodología: proceso, evidencias, pruebas, muestreo, hallazgos e informe.
  4. Técnicas y herramientas.
  5. Normas y estándares.
  6. Auditoría del ENS.
  7. Auditoría de protección de datos.
  8. Auditoría de seguridad física.
- **Contrastar el ENS con el texto consolidado del RD 311/2022** (artículos 31, 32 y 38 y anexo III).
- **Remitir a otros temas en vez de duplicarlos:**
  - Análisis de riesgos y herramientas EAR/PILAR: B2-T10.
  - ENS en detalle, medidas, incidentes y herramientas del CCN: B2-T13 y bloque 1.
  - CPD, sus niveles y la alta disponibilidad: B4-T06.
  - Protección de datos: bloque 1.
  - Calidad del *software* y sus auditorías: B3-T13.
- **Explicar antes de resumir**, con ejemplos de hallazgos.
- **Cubrir las 4 preguntas INAP y la de reserva** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 3 relacionadas.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T11.md`](../../content/fork-topics/B2-T11.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama del ciclo de auditoría del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.11) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

**Pendiente de contrastar:** los requisitos concretos de los órganos de auditoría técnica (OAT) del sector público y los plazos para resolver no conformidades en la certificación, con la instrucción técnica de conformidad y la guía CCN-STIC-809 vigentes.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
