# Diagnóstico del tema B2-T14

**Tema:** Software libre y software propietario. Características y tipos de licencias. La protección jurídica de los programas de ordenador. Tecnologías de protección de derechos digitales.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T14.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 069 + 043».
- Resúmenes PreparaTIC leídos en la carpeta de Drive:
  - 043 · La protección jurídica de los programas de ordenador. Los medios de comprobación de la legalidad y control del *software* (edición 28, actualizado a 23/01/2022).
  - 069 · *Software* de código abierto. *Software* libre. Conceptos base. Aplicaciones en entorno ofimático y servidores web (edición 29, actualizado a 07/05/2023).
- Textos públicos: texto refundido de la Ley de Propiedad Intelectual (título VII), Directiva 2009/24/CE, Real Decreto 4/2010 (ENI), Ley 40/2015, EUPL 1.2, definiciones de la FSF y de la OSI.
- Las 5 preguntas oficiales INAP clasificadas en B2-T14 (2019, 2022, 2024 y 2025), la relacionada que el INAP clasificó en B2-T02, y las preguntas IA del banco del tema.

**No revisado a fondo:** las carpetas «Doc adicional», los resúmenes *express* y el documento de referencias del tema 069.

## 1. Conclusión

El tema actual es correcto y está bien enfocado (separa libertad, precio, titularidad, licencia y DRM, y recoge bien el artículo 97.4 y el artículo 16 del ENI), pero es **un esquema** de unos 10 KB:

- **Protección jurídica:** dos párrafos genéricos. No explica el objeto protegido (artículo 96), la titularidad salvo el 97.4, los derechos y su duración (98 y 99), los límites del usuario legítimo (100), el registro ni las infracciones (101 y 102), ni la relación con patentes, marcas y secretos.
- **Licencias:** la GPL, LGPL y AGPL en una frase cada una; no hay versiones, obligaciones concretas, compatibilidades ni Creative Commons explicada.
- **EUPL:** recoge la recomendación del ENI, pero no los derechos que concede. La pregunta de 2025 pide justamente esa lista («prestar y alquilar»).
- **DRM:** una frase con las técnicas. Falta su protección jurídica, las marcas de agua y huellas explicadas (pregunta de 2024), los lenguajes de expresión de derechos y el DRM actual.
- **Sector público:** falta la reutilización de la Ley 40/2015, el CTT y la cesión de derechos en los contratos.

Las 5 preguntas del tema se pueden responder, aunque la de la EUPL solo en parte y la del DRM con una mención.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 36 | Licencia que recomienda el ENI: EUPL | Cubierta. |
| 2022 · 33 | Titularidad del programa de un asalariado (artículo 97.4): el empresario, salvo pacto | Cubierta. |
| 2024 · 43 | Técnica de DRM: marcas de agua | Mencionada en una lista. |
| 2024 · 44 | Norma de protección de los programas: TRLPI | Cubierta. |
| 2025 · 41 | Qué permite la EUPL: usar, distribuir, modificar, prestar y alquilar | No lista los derechos. |

Pregunta relacionada que el INAP clasificó en otro tema:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2024 · 22 | B2-T02 | Cómo se llaman las versiones de Linux: distribuciones |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Tabla libre, abierto, propietario, *freeware*, *shareware*, dominio público | 069 (parcial) | Base del enunciado. |
| Modalidades de licencias propietarias | — | «Tipos de licencias». |
| Historia y criterios: GNU y FSF, OSI y los diez criterios de la OSD | 069 (con errores) | Preguntas de concepto. |
| GPL (versiones, obligaciones, tivoización), LGPL, MPL, EPL, AGPL | 069 (con errores) | «Tipos de licencias». |
| EUPL: derechos, obligaciones, compatibilidad, uso por red | 069 | Pregunta 2025 · 41. |
| Tabla de compatibilidades | 069 (parcial) | Supuesto práctico. |
| Creative Commons y CC0; licencias de código disponible | 069 (con errores) | Distinguir licencias de contenidos y de *software*. |
| Ley 40/2015 (157 y 158), CTT, ENI 11 y 17, LCSP 308 | 069 (parcial) | Sector público. |
| TRLPI artículos 96 a 104, explicados | 043 (parcial, con errores) | Preguntas 2022 · 33 y 2024 · 44. |
| Patentes, marcas, secretos empresariales | — | «Protección jurídica». |
| Protección legal del DRM (TRLPI 196 a 198 y 102.c) | 043 (parcial) | «Tecnologías de protección». |
| Técnicas de DRM explicadas, REL (XrML, MPEG-21, ODRL), EME | 043 | Pregunta 2024 · 43. |
| SAM, OpenChain, SPDX, SBOM; CRA y *open-source steward* | 043 (SAM con norma desfasada) | Gestión del *software*. |

## 4. Explicaciones confusas o mal formateadas

1. **Títulos con numeración irregular.** «6.1 EUPL…» aparece como encabezado de primer nivel entre el 6 y el 7.
2. **Frases que hay que interpretar.** «La normativa contempla supuestos limitados…» (descompilación) o «Pueden protegerse código fuente/objeto y documentación preparatoria en términos legales» no dicen cuáles.
3. **Referencias internas.** «A1 069 + 043» no dice nada a quien estudia.
4. **Resúmenes repetidos.** «Resumen II.14», «Test» y «Resumen de repaso».

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 043 | Requisito para proteger una obra: «que esté plasmada en un medio material» | El artículo 10 del TRLPI protege las creaciones «expresadas por cualquier medio o soporte, **tangible o intangible**». No se exige fijación material. |
| 043 | Titularidad: «corresponde a la persona o grupo de personas naturales creadores» | El artículo 97 admite también a la **persona jurídica** en los casos previstos por la ley (obra colectiva) y atribuye al **empresario** los derechos del programa del asalariado (97.4). |
| 043 | «Otros derechos»: derecho de participación y remuneración equitativa por copia privada | El derecho de participación es de las **obras de artes plásticas**. Los programas de ordenador **están excluidos de la copia privada** (artículo 31.3.c) del TRLPI): tienen la copia de seguridad y los usos necesarios del artículo 100. |
| 043 | La Directiva 2009/24/CE: «programa de ordenador incluye tanto el código fuente como la documentación anexa» | La Directiva incluye el **material de diseño preparatorio**. El TRLPI extiende la misma protección a la documentación técnica y los manuales de uso. |
| 043 | SAM «soportado por la norma UNE-ISO/IEC 19770-1:2012» | La edición vigente es **ISO/IEC 19770-1:2017** (sistemas de gestión de activos TI). |
| 043 | Activación de licencias con canal «SSL»; «Windows Media Rights Manager» como ejemplo | SSL está obsoleto (hoy TLS). El sistema de Microsoft es **PlayReady**; el DRM web actual se basa en EME (W3C, 2017) con Widevine, PlayReady o FairPlay. |
| 069 | «En 1998 la FSF se escindió con la creación de la iniciativa OSI» | La OSI la fundaron **Eric Raymond y Bruce Perens** en 1998 como iniciativa distinta; no fue una escisión de la FSF. |
| 069 | «Para la FSF una aplicación solo es libre si se distribuye con GPL» | La FSF considera libres muchas licencias sin *copyleft* (MIT, BSD de 3 cláusulas, Apache 2.0). Prefiere el *copyleft*, pero no lo exige. |
| 069 | La GPL «se creó en 1986» | La **GPLv1 es de 1989** (antes hubo licencias por programa, como la de GNU Emacs); la v2, de 1991; la v3, de 2007. |
| 069 | Para cumplir la GPL «basta con indicar la URL» de la licencia | La GPL exige **entregar una copia de la licencia** junto con el programa. |
| 069 | GPL: «sin poder cobrar por nada más que su coste de entrega» | Se puede cobrar **lo que se quiera** por distribuir copias. El límite del coste de entrega se aplica a la **oferta escrita** de facilitar el código fuente. |
| 069 | EUPL: «Subcontratar los derechos de la obra» | El artículo 2 dice **sublicenciar**. |
| 069 | Licencias compatibles con la EUPL: «CPL v1.0» y «CeCILL v3.0» | El anexo de la EUPL 1.2 no incluye la CPL, y la versión 3.0 de CeCILL no existe: el anexo cita **CeCILL 2.0 y 2.1**. |
| 069 | MIT: «segunda más empleada en GitHub» | La MIT es la licencia **más usada** en GitHub. |
| 069 | AGPL «tampoco es técnicamente compatible con GPLv3» | El artículo 13 de ambas licencias **permite combinar** módulos GPLv3 y AGPLv3 en una misma obra. |
| 069 | «CC BY: Reconocimiento - Sin obra derivada» | **CC BY** es solo reconocimiento. «Sin obra derivada» es la CC BY-ND. |
| 069 | Apache OpenOffice, con Apache 2.0, es «de código abierto, pero no es software libre según la FSF» | La FSF considera **libre** la licencia Apache 2.0 (solo incompatible con la GPLv2). |
| 069 | Google Chrome entre los navegadores libres «aunque tiene componentes propietarios» | Chrome es **propietario**; el proyecto libre es **Chromium**. |
| 069 | «GTK en su versión 44 (marzo de 2023)» | La versión 44 es de **GNOME**; GTK estaba en la serie 4. |
| 069 | OpenSSL y Sleepycat «incluyen cláusulas de copyleft» | La licencia clásica de OpenSSL tenía una cláusula de **publicidad**, no *copyleft*; desde la versión 3.0 (2021) OpenSSL usa **Apache 2.0**. |
| 069 | «BSDv1.0 y BSDv1.1» | Las variantes se conocen por su número de cláusulas: **cuatro** (original, con cláusula de publicidad, incompatible con la GPL), **tres** y **dos** (compatibles). |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Conceptos básicos.
  2. *Software* propietario.
  3. *Software* libre y código abierto.
  4. Tipos de licencias libres, EUPL, compatibilidad, Creative Commons.
  5. *Software* libre en la Administración.
  6. Protección jurídica de los programas.
  7. DRM.
  8. Gestión del *software* en la organización.
- **Remitir a otros temas en vez de duplicarlos:**
  - GNU/Linux: B2-T02.
  - Reutilización de la información y datos abiertos: B1-T09.
  - SBOM y vulnerabilidades de dependencias: B2-T13.
- **Explicar antes de resumir**, con tablas de compatibilidades y de titularidad.
- **Cubrir las 5 preguntas INAP** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con la relacionada.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T14.md`](../../content/fork-topics/B2-T14.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama de licencias del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.14) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Verificado en los textos consolidados del BOE el 22/11/2026: TRLPI, artículos 31.3, 96 a 102 y 196 a 198 (tras la reforma de 2018, las medidas tecnológicas ya no están en los artículos 160 a 162, que regulan las entidades de gestión, y el artículo 196.4 excluye los programas de ese régimen); ENI, artículos 11, 16 y 17; Ley 40/2015, artículos 157 y 158; LCSP, artículo 308.1. No se han cotejado con el texto oficial la EUPL 1.2 ni las sentencias del Tribunal de Justicia citadas.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
