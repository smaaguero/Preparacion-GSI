# Diagnóstico del tema B2-T04

**Tema:** Inteligencia de negocios: cuadros de mando integral, sistemas de soporte a las decisiones, sistemas de información ejecutiva y almacenes de datos. OLTP y OLAP.

**Revisado:** 21/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T04.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 072 + 075».
- Resúmenes PreparaTIC leídos en la carpeta de Drive:
  - 072 · Sistemas CRM y ERP (actualizado a 06/04/2019). Incluye el apartado «Generación de informes a la dirección»: cuadro de mando analítico, KPI, KGI y cuadro de mando integral de Kaplan y Norton.
  - 075 · Tecnologías y sistemas de explotación de datos: Data Lake, Data Warehouse, Lakehouse, Data Fabric, Data Mesh, PET y espacios de datos (actualizado a 16/05/2023, edición 29).
- Las 6 preguntas oficiales INAP clasificadas en B2-T04 (2019, 2022, 2024 y 2025), las 5 relacionadas que están clasificadas en otros temas y las 20 preguntas IA del banco del tema.

**No revisado a fondo:** las carpetas «Doc adicional» de los temas 072 y 075 ni los resúmenes *express*, que según los ficheros de cambios derivan del resumen completo. Tres datos se han comprobado en fuentes públicas: el Reglamento (UE) 2025/327 del Espacio Europeo de Datos de Salud, la clasificación de las PET de la OCDE (2023) y la vigencia de la norma UNE 66175:2003.

## 1. Conclusión

El tema actual es correcto en lo esencial y acierta en el foco: BI, almacén de datos, modelo dimensional, OLTP frente a OLAP y KPI. Pero, como pasaba con B2-T01 y B2-T02, **es un esquema, no una explicación**. Tiene unos 8 KB para un enunciado con cinco conceptos de examen, y tres de los cinco (cuadro de mando integral, DSS y EIS) ocupan una línea cada uno.

Las 6 preguntas INAP del tema se pueden responder con él, aunque dos solo de forma justa:

- **2019 · 24** (qué término NO pertenece a los cubos OLAP: «satélite»). El tema no explica Data Vault, que es de donde sale el distractor, ni la terminología completa del cubo.
- **2024 · 25** (SOLAP como «Spiral OLAP»). El tema lo resuelve en una nota añadida, pero no explica qué tipos de OLAP existen más allá de ROLAP, MOLAP y HOLAP.

El problema real está en lo que el INAP puede preguntar y el tema no cubre: tipos y componentes de los DSS, características de los EIS, las cuatro perspectivas del CMI con sus relaciones causa-efecto, KGI, tipos de hechos y medidas, dimensiones lentamente cambiantes, constelación de hechos, la lista completa de operaciones y tipos OLAP, Inmon frente a Kimball o las reglas de Codd para OLAP.

Las fuentes de PreparaTIC tampoco sirven tal cual. La 072 no se actualiza desde 2019 y la 075 desde 2023, y las dos tienen errores (sección 5).

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 24 | Término ajeno a los cubos OLAP: satélite | Hechos, dimensiones y copo de nieve aparecen; Data Vault no. |
| 2022 · 16 | Definición que NO es de BI: servidor de aplicaciones | Se responde con la definición de BI. |
| 2022 · 17 | Tecnologías que NO son BI: OLTP y DNS | Se responde con la tabla OLTP/OLAP. |
| 2024 · 25 | Tipo de OLAP que no existe: «Spiral OLAP» | Solo en la nota añadida; no explica SOLAP espacial ni los demás tipos. |
| 2024 · 26 | KPI: los objetivos no pueden ser borrosos | Se responde con la nota añadida. |
| 2025 · 26 | Lo que NO es un DW: datos actualizados y borrados constantemente | Se responde con las propiedades de Inmon. |

Preguntas relacionadas que el INAP clasificó en otros temas y que el material de los temas 072 y 075 sí trata:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 76 | B3-T15 | Estructura para guardar datos en bruto de orígenes diversos: Data Lake |
| 2022 · 31 | B2-T12 | Significado de ERP |
| 2022 · 32 | B2-T12 | Diferencia entre ERP y CRM |
| 2022 · 68 | B3-T15 | Plataforma para analítica con Spark: Databricks Lakehouse Platform |
| 2024 · 40 | B2-T12 | Tipo de CRM centrado en la interacción multicanal: colaborativo |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Niveles de decisión y tipos de problema (estructurado, semiestructurado, no estructurado) | — | Es lo que distingue TPS, MIS, DSS y EIS. |
| Componentes del DSS (datos, modelos, diálogo), tipos y análisis *what-if* | — | El enunciado nombra los DSS y el tema les dedica una línea. |
| Características del EIS (agregación, excepciones, *drill-down*, datos externos) | 072 (parcial) | Ídem para los EIS. |
| CMI: origen, cuatro perspectivas, relaciones causa-efecto, mapa estratégico, indicadores de resultado e inductores, adaptación al sector público | 072 | Es el primer concepto del enunciado. |
| KGI frente a KPI, tipos de cuadro de mando, ficha del indicador y UNE 66175 | 072, 075 | Pregunta INAP 2024 · 26 y trampas típicas. |
| Inmon frente a Kimball, data marts dependientes e independientes, Data Vault | 075 (parcial) | Explica el distractor «satélite» (2019 · 24). |
| Tipos de hechos y de medidas, claves subrogadas, dimensiones conformadas y lentamente cambiantes | — | Base del modelado dimensional. |
| Constelación de hechos y *starflake* | 075 (con error) | Esquemas típicos de test. |
| Terminología del cubo, dispersión y explosión de datos | 075 | Pregunta 2019 · 24. |
| Operaciones *drill-across*, *drill-through* y *page* | 075 | El tema solo da cinco operaciones. |
| Tipos de OLAP (DOLAP, WOLAP, SOLAP, RTOLAP, *in-memory*), reglas de Codd y FASMI | 075 (parcial) | Pregunta 2024 · 25. |
| Lenguajes de consulta analítica: ROLLUP, CUBE, MDX, XMLA | — | Aparecen en preguntas de OLAP. |
| ERP, CRM, SCM y el lugar de la BI entre los sistemas corporativos | 072 | Dos preguntas INAP de 2022 y una de 2024, aunque clasificadas en B2-T12. |
| Lakehouse con formatos de tabla abiertos, Data Fabric y principios de Data Mesh | 075 | El tema los nombra sin explicarlos. |
| PET y espacios de datos | 075 | Contexto actual; el tema no los cita. |

## 4. Explicaciones confusas o mal formateadas

1. **Referencias internas.** «A1 075 incluye...» y «Fuentes base: A1 072 + 075 y materiales BI/DW del RELEASE» remiten a códigos que no dicen nada a quien estudia.
2. **Definiciones de una línea.** DSS, EIS, MIS y CMI son viñetas sin contraste entre ellas. La diferencia DSS/EIS aparece en las claves de test («DSS ≠ EIS, aunque están relacionados») sin que el tema la explique.
3. **Nota añadida fuera de lugar.** «Microdatos oficiales añadidos — OLAP y KPI» va al final, separada de los apartados de OLAP y KPI.
4. **Resúmenes repetidos.** «Resumen II.04», «Test» y «Resumen de repaso» repiten lo mismo con otras palabras.
5. **Data Lake y compañía.** El tema avisa de que no son el núcleo, pero tampoco explica en qué se diferencian, que es lo que pregunta el INAP (2019 · 76, 2022 · 68).

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 075 | El CMI «combina KPI con KGI (Key Global Indicator)» | KGI = *Key Goal Indicator*, indicador de objetivo clave. La propia 072 lo escribe bien. |
| 075 | Constelación «o copo de estrellas (*starflake*)»: son lo mismo | Son esquemas distintos. Constelación (o galaxia): varias tablas de hechos que comparten dimensiones. *Starflake*: estrella en la que solo algunas dimensiones se normalizan. |
| 075 | Estrella, copo de nieve y constelación son esquemas de «BBDD multidimensionales» | Son esquemas **relacionales** para modelar datos dimensionales (la base de ROLAP). Una base multidimensional (MOLAP) guarda cubos, no tablas. |
| 075 | HBase como ejemplo de base de datos para cubos MOLAP/HOLAP | HBase es una base NoSQL de columna ancha. Lo que se apoyaba en ella era Apache Kylin, un motor OLAP. Ejemplos reales: Oracle OLAP, SQL Server Analysis Services, Essbase. |
| 075 | OLAP «es lo más rápido para sentencias SQL de tipo SELECT» | OLAP está optimizado para consultas analíticas, pero MOLAP no se consulta con SQL sino con lenguajes como MDX. |
| 075 | El enfoque *top-down* «es poco práctico» | Es una opinión. El enfoque de Inmon (*Corporate Information Factory*) se sigue usando; lo que tiene es mayor coste y plazo inicial. |
| 075 | «Una dimensión obligatoria en OLAP es el TIEMPO» | La dimensión tiempo aparece en casi todos los modelos, porque el DW es variable en el tiempo, pero ninguna regla la hace obligatoria. |
| 075 | Lakehouse: los datos «se convierten al formato Delta Lake» | Delta Lake es el formato de Databricks. Hay otros formatos abiertos de tabla: Apache Iceberg y Apache Hudi. |
| 075 | El desacoplamiento cómputo/almacenamiento reduce costes «mediante clústeres en hardware económico» | Desacoplar significa que cómputo y almacenamiento escalan por separado, normalmente sobre almacenamiento de objetos. |
| 075 | Con el RGPD, la seguridad de la privacidad en el Data Lake «se ve asegurada» | El RGPD impone obligaciones; no asegura nada por sí mismo. La seguridad la dan las medidas técnicas y organizativas (art. 32). |
| 075 | PET: las cuatro categorías se atribuyen a ENISA | La definición de PET es de ENISA, pero la clasificación en cuatro categorías es de la OCDE (*Emerging privacy-enhancing technologies*, 2023). |
| 075 | IDSA «integran 133 empresas» | Dato coyuntural; la asociación ha crecido. No es dato de examen. |
| 075 | Referencias a «España Digital 2026» y «ENIA» | El resumen es de mayo de 2023. Desde entonces se aplican el Reglamento de Gobernanza de Datos (2022/868, desde el 24/09/2023) y el Reglamento de Datos (2023/2854, desde el 12/09/2025), y se ha aprobado el Reglamento (UE) 2025/327 del Espacio Europeo de Datos de Salud. |
| 072 | *Up-selling*: «opciones complementarias» dirigidas a clientes potenciales | *Up-selling* es ofrecer una versión superior o más cara del mismo producto. Ofrecer productos complementarios es *cross-selling*. Las dos técnicas se dirigen al cliente que está comprando o ya compró. |
| 072 | IVR = *Interactive Voice Recognition* | IVR = *Interactive Voice Response*, respuesta de voz interactiva, como dice el enunciado de B2-T12. |
| 072 | SAP ERP «actualmente en versión ECC 6.0»; interfaz «SAPUI7» | La suite vigente es SAP S/4HANA; el mantenimiento estándar de ECC 6.0 termina a finales de 2027. La biblioteca de interfaz es SAPUI5. |
| 072 | OpenERP entre las soluciones libres | Se llama Odoo desde 2014. |
| 072 | SPSS Clementine y SAS Enterprise Miner entre las soluciones CRM | Son herramientas de minería de datos (hoy IBM SPSS Modeler y SAS Enterprise Miner), no CRM. |
| 072 | Social CRM con Google+ | Google+ cerró en 2019. |
| 072 | Guías de indicadores «UNE 66175:2003 y UNE 66145» | La guía de implantación de sistemas de indicadores es la UNE 66175:2003. No se ha podido verificar una «UNE 66145» sobre indicadores, así que la propuesta no la cita. |
| 072 | Contexto normativo: Plan de Transformación Digital de la AGE (Estrategia TIC 2015-2020) | Es un plan vencido. La propuesta no lo usa como marco vigente. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Inteligencia de negocio: qué es y qué forma parte de ella.
  2. Sistemas de información para la decisión: DSS y EIS.
  3. Cuadros de mando y cuadro de mando integral.
  4. Almacenes de datos, su aprovisionamiento y el modelo dimensional.
  5. OLTP y OLAP.
- **Usar del 072 solo lo que pertenece al tema:** cuadros de mando, KPI, KGI y CMI, más una sección breve sobre ERP y CRM como fuentes de la BI. Los centros de contacto, la arquitectura multicanal y el IVR son de B2-T12.
- **Usar del 075 el núcleo de almacén de datos y OLAP** y resumir como contexto lo que excede el enunciado: Data Lake, Lakehouse, Data Fabric, Data Mesh, PET y espacios de datos.
- **Explicar antes de resumir.** Cada concepto va con su definición, su contraste con el concepto vecino y, cuando ayuda, un ejemplo de la Administración (un cubo de expedientes o un CMI de un organismo).
- **Cubrir las 6 preguntas INAP** en el apartado donde se explica cada concepto y listarlas al final con su respuesta, junto con las 5 relacionadas de otros temas.
- **Remitir a otros temas en vez de duplicarlos:**
  - SQL y bases de datos relacionales: B2-T05.
  - Centros de contacto, CRM y multicanal: B2-T12.
  - Gestión documental y flujos de trabajo (BPM): B2-T16.
  - Modelado de datos y normalización: B3-T04.
  - Minería de datos, Big Data, Hadoop y NoSQL: B3-T15.
  - Protección de datos: B1-T07.
  - Datos abiertos y reutilización: B1-T09.
- **No incluir versiones de productos ni cuotas de mercado como datos de examen.** Los productos se citan solo como ejemplos.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 21/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T04.md`](../../content/fork-topics/B2-T04.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama de la cadena BI del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.04) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.

Antes del examen conviene comprobar si el tribunal ha publicado plantillas nuevas que afecten al tema y el calendario de aplicación del Reglamento del Espacio Europeo de Datos de Salud.
