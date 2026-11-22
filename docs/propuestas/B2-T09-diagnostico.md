# Diagnóstico del tema B2-T09

**Tema:** Lenguajes de marca o etiqueta. Características y funcionalidades. SGML, HTML, XML y sus derivaciones. Lenguajes de script.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T09.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 077. Correspondencia DIRECTA».
- Resumen PreparaTIC 077 · Lenguajes y herramientas para la utilización de redes globales. HTML, CSS y XML. Navegadores web y compatibilidad de estándares (edición 29, actualizado a 13/04/2023).
- Las 7 preguntas oficiales INAP clasificadas en B2-T09 (2019, 2022, 2024 y 2025), las 7 relacionadas que el INAP clasificó en B2-T16, B3-T05, B3-T12, B3-T14 y B4-T04, y las preguntas IA del banco del tema.

**No revisado a fondo:** la carpeta «Doc adicional» del tema 077 y su resumen *express*.

## 1. Conclusión

El tema actual es correcto en lo esencial y acierta en la idea más importante: **HTML no es XML**. Pero es **un esquema**: unos 8 KB para un enunciado con cinco partes. Dos de ellas casi no se tratan:

- **SGML** se despacha en una frase. No se explica qué es una DTD, ni que HTML hasta la versión 4.01 era una aplicación de SGML.
- **Lenguajes de script**: dos párrafos. No hay características comunes, clasificación ni lenguajes concretos, aunque el INAP preguntó en 2025 cómo cargar un módulo dinámicamente en **Python**.

Tampoco están las **derivaciones** de XML que pide el enunciado: SVG, MathML, RSS y Atom, RDF y OWL, ODF y OOXML, y los formatos de la Administración (Facturae, XAdES, documento y expediente electrónicos). La pregunta de 2022 sobre los lenguajes de la Web Semántica no tiene respuesta en el tema.

Las otras 5 preguntas INAP del tema se pueden responder, aunque la de 2024 (XML Schema fuertemente tipado) solo con un apartado añadido después del resumen.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 31 | Responsable de la especificación XML: el W3C | Cubierta, dentro de un párrafo entero en negrita. |
| 2022 · 26 | XML que cumple la sintaxis sin esquema: bien formado | Cubierta. |
| 2022 · 27 | Definición de XLink | Cubierta en una frase. |
| 2022 · 49 | Lenguaje que no es de la Web Semántica: «OntoFlag» (sí lo son OWL, RDF y XML) | No está. |
| 2024 · 34 | XML Schema es fuertemente tipado | Solo en el apartado añadido al final. |
| 2025 · 35 | Regla obligatoria de un XML bien formado: un único elemento raíz | Cubierta. |
| 2025 · 36 | Cargar en Python un módulo cuyo nombre se conoce en ejecución: `importlib` | No está. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 63 | B3-T12 | Pila MEAN (MongoDB, Express, Angular y Node.js) |
| 2022 · 62 | B3-T12 | Afirmación incorrecta sobre JSON: que use etiquetas y atributos |
| 2024 · 70 | B3-T14 | Qué es WCAG |
| 2025 · 44 | B2-T16 | Función de `<dc:format>` (Dublin Core) en RSS |
| 2025 · 54 | B3-T05 | Lenguaje con escasa relación con la IA: PHP |
| 2025 · 66 | B3-T12 | Lenguaje de descripción de servicios web: WSDL |
| 2025 · 80 | B4-T04 | Fichero YAML de Ansible: *playbook* |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Concepto y tipos de marcado (de presentación, procedimental y descriptivo) | — | «Características y funcionalidades» del enunciado. |
| Origen de SGML (GML de IBM), norma ISO 8879:1986, partes de un documento SGML y DTD | 077 (mínimo) | SGML está en el enunciado. |
| Historia de HTML y el estándar vivo del WHATWG | 077 (desactualizado) | Saber qué versión está vigente. |
| Elementos obsoletos de HTML5 y los que cambiaron de significado (`b`, `i`, `u`) | 077 (con errores) | Clásico de test. |
| Atributos ARIA y accesibilidad | 077 | Relación con B3-T14. |
| Partes de un documento XML (prólogo, CDATA, entidades, instrucciones de procesamiento) | 077 | Base de las preguntas de XML. |
| Comparación DTD frente a XML Schema, RELAX NG y Schematron | 077 (parcial) | Pregunta 2024 · 34. |
| Procesamiento: DOM, SAX y StAX | 077 | Clásico de test. |
| Familia XSL y especificaciones relacionadas (XPath, XSLT, XSL-FO, XQuery, XLink, XPointer, XInclude) | 077 (mezcladas) | Pregunta 2022 · 27 y sus distractores, que son las definiciones de las demás. |
| Derivaciones de XML: XHTML, SVG, MathML, RSS y Atom, RDF y OWL, ODF y OOXML, DocBook | 077 (parcial) | «Sus derivaciones» del enunciado; pregunta 2022 · 49. |
| Formatos XML de la Administración: Facturae, XAdES, XBRL, documento y expediente electrónicos | 077 (parcial) | Aplicación práctica. |
| JSON, YAML y comparación con XML | 077 | Preguntas 2022 · 62 y 2025 · 80. |
| Características y clasificación de los lenguajes de script; JavaScript, Python, PHP, Perl, Ruby, Bash y PowerShell | — | Pregunta 2025 · 36. |
| Seguridad del marcado: XSS, XXE y expansión de entidades | — | Riesgos propios de HTML y XML. |

## 4. Explicaciones confusas o mal formateadas

1. **Negrita accidental.** Los apartados de XML (5) y de XPath, XSLT y XLink (8) están enteros en negrita.
2. **Apartado añadido al final.** «Microdato oficial añadido — XML Schema» pega la respuesta de la 2024 · 34 después del resumen.
3. **Referencias internas.** «A1 077 lo usa para entender la web» y «A1 077. Correspondencia DIRECTA» no dicen nada a quien estudia.
4. **HTTP en un tema de lenguajes.** El apartado 13 explica HTTP/2 y HTTP/3, que corresponden a B2-T08 y B3-T12.
5. **Resúmenes repetidos.** «Resumen II.09», «Test» y «Resumen de repaso» repiten lo mismo con otras palabras.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 077 | «HTML está basado en XML» | **No.** HTML hasta la versión 4.01 era una aplicación de **SGML**; HTML5 tiene su **propia sintaxis**, con un analizador tolerante a errores. Solo XHTML (o la «sintaxis XML de HTML») sigue las reglas de XML. |
| 077 | HTML «estandarizado por el W3C»; «la última versión es HTML5» | Desde el acuerdo de **2019** entre el W3C y el **WHATWG**, HTML es un **estándar vivo** (*HTML Living Standard*) que mantiene el WHATWG, sin números de versión. |
| 077 | «La primera versión de HTML, conocida como HTML 1.0, fue lanzada en 1991» | En 1991 Berners-Lee publicó un documento informal («HTML Tags»). No hubo un HTML 1.0 oficial: la primera norma fue **HTML 2.0** (RFC 1866, 1995). |
| 077 | HTML5 «añade etiquetas para manejar la web semántica» | Añade elementos de **HTML semántico** (`header`, `nav`, `article`…), que indican la función del contenido. La **Web Semántica** es otra cosa: datos enlazados con RDF y ontologías OWL. |
| 077 | `<li>`: «Celda de la tabla» | Es un **elemento de lista**. |
| 077 | `<b>`, `<i>` y `<u>` como elementos «no recomendados» | No están obsoletos: HTML5 les dio un **significado propio** (texto destacado sin importancia especial, voz o término alternativo, anotación no textual). |
| 077 | `<embed>` es obsoleto, «reemplazado por iframe u object» | `<embed>` es un elemento **válido** de HTML5. Los obsoletos son `applet`, `frame`, `frameset`, `noframes`, `font`, `center`, `big`, `strike` y `tt`, entre otros. |
| 077 | XHTML «es un estándar de W3C (abandonado en 2009). Última versión: XHTML 1.1» | En 2009 se abandonó **XHTML 2.0**, nunca terminado. XHTML 1.1 tuvo una segunda edición en 2010, y la sintaxis XML de HTML sigue definida en el estándar vivo. |
| 077 | «La última especificación es CSS3» | No existe un CSS3 único: desde CSS 2.1 la especificación se divide en **módulos con niveles** propios (Selectors Level 4, Grid Level 2…). El W3C publica periódicamente una «instantánea» del estado de CSS. |
| 077 | «Gridbox (grid)» | Es **CSS Grid Layout**. |
| 077 | HTTP/2: «RFC 7540» | El RFC 7540 quedó obsoleto en 2022 por el **RFC 9113**. |
| 077 | XML: «La última versión es XML 1.1» | XML 1.1 existe, pero la versión que se usa y recomienda es **XML 1.0** (quinta edición, 2008). |
| 077 | Bien formado: «debe comenzar con una declaración XML» | En XML 1.0 la declaración `<?xml …?>` es **opcional** (solo es obligatoria en XML 1.1). Las reglas obligatorias son un único elemento raíz, etiquetas cerradas y bien anidadas, atributos entre comillas y nombres que distinguen mayúsculas. |
| 077 | XSL comprende XSLT, XPath, XSL-FO, **XQuery, XLink y XPointer** | La familia **XSL** son tres especificaciones: XSLT, XPath y XSL-FO. XQuery, XLink y XPointer son especificaciones separadas del W3C. |
| 077 | XSLT «transforma un documento XML en otro formato (PDF, HTML…)» | XSLT produce XML, HTML o texto. Para obtener **PDF** se genera **XSL-FO** y un procesador de formato (como Apache FOP) lo convierte. |
| 077 | RDF entre los «lenguajes basados en XML» | RDF es un **modelo de datos** (tripletas). Tiene una serialización en XML (RDF/XML), pero también otras más usadas, como Turtle o JSON-LD. |
| 077 | JSON no admite comentarios porque «los parseadores son más lentos» y «JavaScript por defecto no los admite» | JavaScript sí admite comentarios. Douglas Crockford los eliminó de JSON para evitar que se usaran como **directivas de procesamiento** y perjudicaran la interoperabilidad. |
| 077 | «JPath para realizar consultas internas» | Es **JSONPath**, normalizado como RFC 9535 en 2024. |
| 077 | YAML permite representar «expresiones regulares y referencias a objetos» | YAML admite **anclas y alias** (referencias dentro del documento) y fechas, pero no tiene un tipo nativo de expresión regular. YAML 1.2 es, además, un superconjunto de JSON. |
| 077 | WebKit se usa en «Safari… así como en otros navegadores como Chrome y Opera» | Chrome y Opera usan **Blink** desde 2013, una bifurcación de WebKit. WebKit lo usa Safari (y, en iOS, todos los navegadores hasta 2024). |
| 077 | Nashorn y Rhino «se utilizan en la plataforma Java SE» | Rhino venía con Java 6 y 7; **Nashorn** lo sustituyó en Java 8 y se **eliminó en Java 15** (2020). Ninguno forma parte hoy de Java SE. |
| 077 | Navegación anónima con «servidores http proxy (TOR)» | **Tor** no es un proxy HTTP: es una red superpuesta de **encaminamiento cebolla**, con varios saltos cifrados por capas. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Lenguajes de marcas: concepto, tipos y características.
  2. SGML.
  3. HTML (con CSS como complemento imprescindible).
  4. XML y sus tecnologías.
  5. Derivaciones de XML y formatos alternativos.
  6. Lenguajes de script.
  7. Seguridad.
- **Cubrir lo que el INAP clasifica en B3-T12 y B3-T14 solo en lo que es lenguaje.** El desarrollo de aplicaciones web y la accesibilidad en detalle se remiten a esos temas.
- **Explicar antes de resumir**, con ejemplos breves de marcado.
- **Cubrir las 7 preguntas INAP** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 7 relacionadas.
- **Fechar las normas** (ISO 8879:1986, XML 1.0 quinta edición, XSD 1.1, XSLT 3.0, el estándar vivo de HTML) y distinguir lo vigente de lo histórico.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T09.md`](../../content/fork-topics/B2-T09.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama de la familia de lenguajes de marcas del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.09) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
