# Diagnóstico del tema B2-T05

**Tema:** La arquitectura ANSI/SPARC. Sistemas de gestión de bases de datos relacionales. El lenguaje SQL. Normas y estándares para la interoperabilidad entre gestores de bases de datos relacionales.

**Revisado:** 21/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T05.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 063 + 064».
- Resúmenes PreparaTIC leídos en la carpeta de Drive:
  - 063 · Los sistemas de gestión de bases de datos. El modelo de referencia de ANSI (edición 28, actualizado a 01/02/2022).
  - 064 · El modelo relacional. El lenguaje SQL. Normas y estándares para la interoperabilidad entre gestores de bases de datos relacionales (edición 29, actualizado a 23/04/2023).
- Las 7 preguntas oficiales INAP clasificadas en B2-T05 (2019, 2022 y 2025), las 10 relacionadas que el INAP clasificó en B3-T04 y B3-T15, y las 20 preguntas IA del banco del tema.

**No revisado a fondo:** las carpetas «Doc adicional» de los temas 063 y 064 y el resumen *express* del 063.

## 1. Conclusión

El tema actual es correcto en casi todo y tiene buenos contrastes: independencia física frente a lógica, WHERE frente a HAVING, niveles de aislamiento y CAP frente a ACID. Pero, como B2-T01, B2-T02 y B2-T04, **es un esquema, no una explicación**. Tiene unos 14 KB para un enunciado con cuatro bloques, y el cuarto, las normas de interoperabilidad, ocupa una lista de siete viñetas.

Las 7 preguntas INAP del tema se pueden responder con él. Ninguna queda sin cubrir, pero tres solo se cubren con una frase añadida al final de una viñeta:

- **2019 · 25** (TRUNCATE) y **2022 · 18** (componentes de proceso del SGBD) están dentro de viñetas en negrita, mezcladas con otras ideas.
- **2022 · 19** (regla del acceso garantizado) aparece en el texto, pero el tema no enumera las reglas de Codd. Por eso no sirve para los distractores: regla de la información, regla fundamental y tratamiento de nulos.

Lo que falta es lo que el INAP pregunta alrededor:

- La lista completa de las reglas de Codd.
- Las propiedades de una relación, la superclave y la diferencia entre clave primaria y UNIQUE.
- Las acciones referenciales (ON DELETE).
- La tabla de equivalencias entre el álgebra relacional y SQL.
- Las versiones y partes de la norma SQL.
- Los componentes del SGBD según Silberschatz, la recuperación con *log*, el 2PL estricto y MVCC.
- Los tipos de driver JDBC, ADO.NET y OLE DB, el estándar XA y SQL/CLI.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 25 | Sentencia que vacía una tabla sin borrarla: TRUNCATE | Dentro de una viñeta en negrita. |
| 2022 · 18 | Componentes de proceso del SGBD: compilador y precompilador DML, intérprete DDL y motor de ejecución | Añadido al final de la viñeta del gestor de almacenamiento, al que no pertenecen. |
| 2022 · 19 | Regla de Codd del acceso garantizado | Citada sin el resto de reglas. |
| 2022 · 46 | Niveles ANSI/SPARC: externo, conceptual e interno | Cubierta. |
| 2022 · 71 | Independencia de datos | Cubierta. |
| 2025 · 27 | CREATE es DDL | Cubierta. |
| 2025 · 28 | Cassandra no es relacional | Cubierta en el apartado de CAP. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 47 | B3-T04 | Qué evita Read Committed |
| 2019 · 48 | B3-T04 | COMMIT y ROLLBACK garantizan la atomicidad |
| 2019 · 68 | B3-T15 | Principio común de las bases NoSQL: BASE |
| 2022 · 45 | B3-T04 | Qué significa ACID |
| 2022 · 47 | B3-T04 | Definición de integridad referencial |
| 2024 · 28 | B3-T04 | Clave candidata |
| 2024 · 75 | B3-T04 | Qué es la normalización |
| 2025 · 51 | B3-T04 | Clave primaria frente a UNIQUE |
| 2025 · 52 | B3-T04 | ON DELETE RESTRICT |
| 2025 · 53 | B3-T04 | Lectura sucia |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Origen del modelo ANSI/SPARC, correspondencias entre niveles, usuarios y DBA | 063 | Pregunta 2022 · 46 y sus distractores. |
| Modelo de referencia DAFTG | 063 | Aparece en las fuentes de oposición; el tema no lo cita. |
| Funciones y características del SGBD; diccionario activo y pasivo | 063 | El tema las enumera sin explicar. |
| Componentes del SGBD: procesador de consultas y gestor de almacenamiento | 063 (parcial) | Pregunta 2022 · 18. |
| Las 13 reglas de Codd (0 a 12) | 064 | Pregunta 2022 · 19 y sus distractores. |
| Propiedades de una relación, grado, cardinalidad y superclave | 064 | Conceptos básicos de test. |
| Clave primaria frente a UNIQUE y acciones referenciales | — | Preguntas 2025 · 51 y 52. |
| Álgebra relacional con símbolos y su equivalencia en SQL; cálculo relacional | 064 | El tema nombra las operaciones sin explicarlas. |
| Tipos de datos SQL, restricciones (CHECK, DEFAULT, UNIQUE), MERGE, SAVEPOINT, roles y WITH GRANT OPTION | 064 (parcial) | El tema no los trata. |
| Valores nulos y lógica de tres valores; COUNT(*) frente a COUNT(columna) | 064 (parcial) | Trampa clásica. |
| CTE, consultas recursivas, funciones de ventana, CASE e INTERSECT/EXCEPT | 064 (parcial) | SQL actual. |
| Procedimientos, funciones, disparadores, cursores y SQL incrustado y dinámico | — | El tema solo los nombra. |
| Recuperación: *log*, WAL, UNDO/REDO y puntos de control | 063 (parcial) | Explica la atomicidad y la durabilidad. |
| 2PL básico frente a estricto, MVCC, interbloqueo y actualización perdida | 063 (parcial) | El tema no distingue las variantes. |
| Versiones de la norma SQL y sus partes (ISO/IEC 9075) | 064 (parcial y caducado) | Es el núcleo de «normas y estándares». |
| SQL/CLI, ODBC, tipos de driver JDBC, ADO.NET, OLE DB, PDO, XA y DRDA | 064 (parcial) | Ídem. |
| Tipos de SGBD y productos: relacional, objeto-relacional, NoSQL y NewSQL | 064 | Pregunta 2025 · 28. |

## 4. Explicaciones confusas o mal formateadas

1. **Negrita accidental.** La viñeta de DDL (apartado 3), la de clave foránea (apartado 5) y la del gestor de almacenamiento (apartado 12) están enteras en negrita, igual que pasaba en B2-T01 y B2-T02.
2. **Respuesta de examen en el sitio equivocado.** «Compilador DML, precompilador DML, intérprete DDL y motor de ejecución» se añade a la viñeta del **gestor de almacenamiento**. En realidad son los componentes del **procesador de consultas**.
3. **Referencias internas.** «El A1 063 diferencia...», «El A1 063 menciona CAP» y «A1 063 + 064. Correspondencia DIRECTA» remiten a códigos que no dicen nada a quien estudia.
4. **Orden.** El tema explica los lenguajes del SGBD (apartado 3) antes que la arquitectura ANSI/SPARC (apartado 4), y las transacciones antes que la arquitectura interna que las gestiona.
5. **Resúmenes repetidos.** «Resumen II.05», «Test» y «Resumen de repaso» repiten lo mismo con otras palabras.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 063 | «Nivel Externo o Lógico» | El nivel externo es el de las **vistas**. «Lógico» se usa para el nivel **conceptual** (esquema lógico global). Llamar lógico al externo lleva a fallar la 2022 · 46, cuyo distractor era «Externo, Conceptual y Lógico». |
| 063 | Nivel lógico del modelo relacional = externo + conceptual | El esquema lógico relacional (tablas) corresponde al nivel conceptual; las vistas, al externo; el esquema físico, al interno. |
| 063 | «El estándar ANSI establece 3 familias de modelos de datos»: jerárquico, Codasyl y relacional | La arquitectura ANSI/SPARC es **independiente del modelo de datos**. Esos tres son los modelos clásicos, pero no los «establece» ANSI. |
| 063 | 2PL: los recursos «solo serán liberados tras COMMIT o ROLLBACK» | Eso es el **2PL estricto o riguroso**. El 2PL básico solo exige no adquirir ningún bloqueo tras liberar el primero. |
| 063 | El 2PL lo usa «la mayoría de SGBD» | Muchos SGBD (Oracle, PostgreSQL, el motor InnoDB de MySQL) usan **MVCC** para las lecturas y bloqueos para las escrituras. |
| 063 | CAP: «no se pueden garantizar más que 2 de 3» | Es la simplificación popular. Brewer (2012) la matiza: solo cuando hay una **partición** de red hay que elegir entre consistencia y disponibilidad. La «C» de CAP no es la de ACID. |
| 063 | Lectura repetible: «las filas leídas quedan bloqueadas» | Es una forma de implementarla. Con MVCC se logra con instantáneas, sin bloquear las lecturas. |
| 064 | «Las 12 reglas de Codd» | Son 13, numeradas del 0 al 12. La 0 es la regla fundamental. |
| 064 | Atributo: «conjunto de columnas» | Un atributo es **una** columna. |
| 064 | Join natural: «pares de tuplas que cumplen una condición, r ⋈p s = σp(r × s)» | Esa es la **theta-combinación**. El join natural iguala los atributos del mismo nombre y no repite esas columnas. |
| 064 | FNBC: dependencia «no trivial (A → A)» | A → A es precisamente una dependencia **trivial**. |
| 064 | Ejemplo de FNBC: «cada asignatura es impartida por un único profesor» con la dependencia IDProfesor → IDAsignatura | La dependencia que se usa dice lo contrario: **cada profesor imparte una única asignatura**. |
| 064 | SQL = «ISO/IEC 9075 - SQL2» | SQL2 es SQL-92. La versión vigente es **SQL:2023** (ISO/IEC 9075:2023). |
| 064 | TRUNCATE «no permite ROLLBACK» | Depende del SGBD. En Oracle y MySQL provoca un COMMIT implícito, pero en PostgreSQL y SQL Server se puede deshacer dentro de una transacción. |
| 064 | Cláusula CONSTRAINT: «crear o eliminar índices» | CONSTRAINT define **restricciones**: PRIMARY KEY, FOREIGN KEY, UNIQUE y CHECK. Los índices no forman parte de la norma SQL. |
| 064 | TOP y DISTINCTROW como cláusulas SQL | Son extensiones de Microsoft. La norma usa FETCH FIRST n ROWS ONLY (SQL:2008). |
| 064 | INTERSECT y EXCEPT devuelven «los campos» presentes en las tablas | Devuelven **filas**: las comunes a las dos consultas o las de la primera que no están en la segunda. |
| 064 | Diferencia en SQL: «SELECT ... MINUS SELECT ...» | MINUS es de Oracle. La norma usa EXCEPT. |
| 064 | Vista: «no es muy eficiente»; la materializada «se almacena en caché» | El optimizador integra la definición de la vista en la consulta. La vista materializada se guarda como una tabla y se refresca. |
| 064 | Índice: «tablas internas» | Es una estructura auxiliar (árbol B+, *hash* o *bitmap*), no una tabla. |
| 064 | OLE DB «deprecated» | Microsoft revirtió esa decisión en 2017 y publicó un nuevo proveedor OLE DB para SQL Server (MSOLEDBSQL). Para .NET, lo habitual es ADO.NET. |
| 064 | ORM de Java: Hibernate, iBatis, EJB, JDO | iBatis es hoy MyBatis. Los *entity beans* de EJB quedaron sustituidos por JPA, hoy **Jakarta Persistence**. |
| 064 | IBM Db2 como base de datos «de nicho» | Db2 es un SGBD relacional de propósito general. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Bases de datos y SGBD.
  2. Arquitectura ANSI/SPARC.
  3. Modelo relacional.
  4. SQL.
  5. Transacciones, concurrencia y recuperación.
  6. Arquitectura interna del SGBD.
  7. Normas y estándares de interoperabilidad.
- **Cubrir lo que el INAP clasifica en B3-T04 solo en la medida en que es función del SGBD** (ACID, aislamiento, claves, integridad). El diseño, la normalización y la resolución de conflictos se resumen y se remiten a B3-T04.
- **Explicar antes de resumir.** Cada concepto va con su definición, su contraste y, en SQL, un ejemplo sobre un esquema sencillo de la Administración.
- **Cubrir las 7 preguntas INAP** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 10 relacionadas.
- **Remitir a otros temas en vez de duplicarlos:**
  - Diseño, normalización y concurrencia en profundidad: B3-T04.
  - Administración del SGBD (copias, alta disponibilidad, ajuste): B4-T02.
  - NoSQL y Big Data: B3-T15.
  - Almacenes de datos y OLAP: B2-T04.
  - Java EE y .NET: B3-T10 y B3-T11.
- **Distinguir siempre la norma SQL de los dialectos** (TOP, LIMIT, MINUS, PL/SQL, T-SQL).
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 21/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T05.md`](../../content/fork-topics/B2-T05.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama ANSI/SPARC del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.05) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
