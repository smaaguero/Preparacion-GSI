# Diagnóstico del tema B2-T12

**Tema:** Gestión de la atención a clientes y usuarios: centros de contacto, CRM. Arquitectura multicanal. Sistemas de respuesta de voz interactiva (IVR). Voice XML.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T12.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 072 + 077 y material de servicios/atención».
- Resumen PreparaTIC 072 · Sistemas CRM y ERP (actualizado a 06/04/2019). El 077 (HTML, CSS y XML) ya se revisó en B2-T09; no aporta nada sobre VoiceXML más allá de citarlo.
- Especificaciones públicas del W3C (VoiceXML 2.0 y 2.1, borrador de VoiceXML 3.0, SRGS, SSML, CCXML).
- Ley 39/2015, Real Decreto 203/2021 y Ley 10/2025, de servicios de atención a la clientela (BOE-A-2025-26698; preámbulo, artículos 1 y 2 y disposiciones finales leídos en el texto consolidado; la regla de los tres minutos, en la nota de prensa del Gobierno).
- Las 5 preguntas oficiales INAP clasificadas en B2-T12 (2019, 2022 y 2024) y una de reserva de 2025, las 2 relacionadas que el INAP clasificó en B4-T14, y las preguntas IA del banco del tema.

**No revisado a fondo:** la carpeta «Doc. adicional» y el resumen *express* del tema 072, y el articulado completo de la Ley 10/2025 (artículos 3 a 23 y disposición transitoria).

## 1. Conclusión

El tema actual es correcto y bien orientado (separa ACD, CTI, IVR y CRM, distingue multicanal de omnicanal y añade privacidad, accesibilidad e indicadores), pero es **un esquema** de unos 9 KB y deja sin explicar justo lo que pregunta el INAP:

- **CRM:** los tipos (operacional, analítico, colaborativo) aparecen en un párrafo añadido al final («Microdatos oficiales»), fuera del apartado de CRM.
- **ERP:** no aparece. Dos preguntas de 2022 piden la sigla y la diferencia con el CRM.
- **VoiceXML:** una frase. No hay versiones (la pregunta de 2019 pide el estado de la 3.0), ni estructura del documento, ni las especificaciones relacionadas (SRGS, SSML, CCXML).
- **IVR:** no explica tipos de diálogo, arquitectura de la plataforma ni reconocimiento de voz; la pregunta de reserva de 2025 sobre TED-LIUM no tiene respuesta.
- **Arquitectura multicanal:** una línea con flechas.
- **Sector público:** no hay marco (canales de asistencia del RD 203/2021, derecho a ser asistido, 060, quejas y sugerencias).

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 34 | Versión de VoiceXML en la que trabajaba el W3C: 3.0, como *Working Draft* | No está. |
| 2022 · 31 | Qué significa ERP: *Enterprise Resource Planning* | No está. |
| 2022 · 32 | Diferencia entre ERP y CRM | No está. |
| 2024 · 39 | Qué es la arquitectura multicanal | Cubierta de forma indirecta. |
| 2024 · 40 | Tipo de CRM centrado en la interacción por múltiples canales: colaborativo | En un párrafo añadido al final. |
| 2025 · reserva 3 | Corpus de audio para reconocimiento de voz: TED-LIUM 3 | No está. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 93 | B4-T14 | Códec de voz de la UIT-T para VoIP: G.729 |
| 2019 · 94 | B4-T14 | Medida de la calidad de la conversación en VoIP: MOS |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Conceptos de atención: *front* y *back office*, entrante y saliente, niveles, autoservicio | 072 (parcial) | Base del enunciado. |
| Marco de la atención ciudadana: Ley 39/2015, RD 203/2021, 060, RD 951/2005 | — | Contexto del sector público. |
| Modelos de despliegue (*on-premise*, alojado, CCaaS) y marcadores salientes | — | Decisiones de un supuesto. |
| Tipos de CRM explicados, funciones, xRM, CRM ciudadano | 072 | Pregunta 2024 · 40. |
| ERP, diferencias con CRM, SCM, BI, BPM | 072 | Preguntas 2022 · 31 y 32. |
| Multicanal, cross-canal y omnicanal; capas de la arquitectura | 072 (parcial) | Pregunta 2024 · 39. |
| IVR: DTMF, ASR, TTS, NLU, diálogo dirigido y de iniciativa mixta, plataforma, MRCP | 072 (con error) | Enunciado. |
| Corpus de voz y WER | — | Pregunta de reserva 2025. |
| VoiceXML: versiones, estructura, elementos, FIA, especificaciones relacionadas | — | Pregunta 2019 · 34. |
| Erlang B frente a Erlang C, nivel de servicio 80/20, contención | — | Dimensionamiento. |
| RIA (artículo 50) para asistentes virtuales; Ley 10/2025; ISO 18295 | — | Regulación vigente. |

## 4. Explicaciones confusas o mal formateadas

1. **Datos fuera de sitio.** Los tipos de CRM, que el INAP pregunta, están en un apartado final llamado «Microdatos oficiales añadidos».
2. **Arquitectura en una línea.** «Canales → gateway/telefonía/chat/email → router/ACD → …» no explica qué hace cada capa.
3. **Referencias internas.** «A1 072 + 077» no dice nada a quien estudia.
4. **Resúmenes repetidos.** «Resumen II.12», «Test» y «Resumen de repaso» repiten lo mismo.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 072 | «IVR (*Interactive Voice Recognition*)» | **Interactive Voice Response**. El reconocimiento de voz (ASR) es una tecnología que el IVR puede usar o no; un IVR puede funcionar solo con tonos DTMF. |
| 072 | *Up-selling*: «se ofrecen opciones complementarias» y va «dirigida a clientes potenciales» | Ofrecer productos complementarios es el **cross-selling**. El **up-selling** consiste en ofrecer una versión superior o ampliada del mismo producto, normalmente a quien ya es cliente o está comprando. |
| 072 | Soluciones CRM: «SPSS Clementine» y «SAS Enterprise Miner» | Son herramientas de **minería de datos** (IBM SPSS Modeler, SAS), no CRM; sirven como apoyo al CRM analítico. |
| 072 | «Jiver Software», «SAP 360 Customers», «Oracle Siebel 8.1.1», «RightNow» como producto | Nombres erróneos o desactualizados: Jive Software; SAP Customer Experience; Siebel sigue como parte de Oracle CX; RightNow lo compró Oracle en 2011 (hoy Oracle Service). |
| 072 | SAP: «actualmente en versión ECC 6.0», interfaz «SAPUI7» | La suite actual es **SAP S/4HANA**; ECC 6.0 está en fin de mantenimiento. La tecnología de interfaz es **SAPUI5** (y SAP Fiori). |
| 072 | «OpenERP» como producto libre | Se renombró **Odoo** en 2014. |
| 072 | Social CRM con «Google +» | Google+ cerró para el público en 2019. |
| 072 | Canales inbound: «servicios 3G»; contexto normativo: «Plan de Transformación Digital AGE (Estrategia TIC)» | Referencias desfasadas (el plan era de 2015-2020). |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. La atención a clientes y usuarios, con el marco del sector público.
  2. Centros de contacto: componentes, enrutamiento, indicadores y dimensionamiento.
  3. CRM y su relación con el ERP.
  4. Arquitectura multicanal.
  5. IVR.
  6. VoiceXML.
  7. Calidad, privacidad, accesibilidad y regulación.
- **Remitir a otros temas en vez de duplicarlos:**
  - VoIP, SIP y códecs: B4-T14.
  - XML en general: B2-T09.
  - Accesibilidad: B3-T14.
  - Protección de datos: bloque 1.
- **Explicar antes de resumir**, con ejemplos (un diálogo VoiceXML descrito en palabras, el cálculo del tráfico en erlangs).
- **Cubrir las 5 preguntas INAP y la de reserva** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 2 relacionadas.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T12.md`](../../content/fork-topics/B2-T12.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama del centro de contacto del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.12) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Verificación pendiente: el articulado de la Ley 10/2025 (plazos de resolución de reclamaciones, plazo de adaptación, obligaciones de grabación) no se ha leído literalmente. El tema solo recoge el ámbito, la entrada en vigor, la regla de los tres minutos y el derecho a atención personalizada.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
