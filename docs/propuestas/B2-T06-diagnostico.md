# Diagnóstico del tema B2-T06

**Tema:** Arquitectura de sistemas cliente-servidor, multicapas y multidispositivo: tipología. Componentes. Interoperabilidad de componentes. Ventajas e inconvenientes. Arquitectura de servicios web.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T06.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 058 SOA + 065 web».
- Resúmenes PreparaTIC leídos en la carpeta de Drive:
  - 058 · El procesamiento cooperativo y la arquitectura cliente-servidor. Arquitectura SOA (resumen edición 26, actualizado a 13/01/2019, y resumen *express* edición 29, actualizado a 18/04/2023).
  - 065 · Arquitectura de desarrollo en la web (edición 29, actualizado a 13/04/2023). Se usan los apartados de arquitectura (2), despliegue (3), clasificación de aplicaciones (6.2 y 6.3) e interconexión con sistemas y servicios (10). El desarrollo *front-end* y los *frameworks* corresponden a B3-T12.
- Las 5 preguntas oficiales INAP clasificadas en B2-T06 (2019, 2022, 2024 y 2025), las 14 relacionadas que el INAP clasificó en B2-T02, B2-T12, B3-T10, B3-T12 y B4-T06, y las 20 preguntas IA del banco del tema.

**No revisado a fondo:** las carpetas «Doc adicional» de los temas 058 y 065 y el fichero de referencias del 058.

## 1. Conclusión

El tema actual es correcto y tiene buenos contrastes: capa lógica frente a servidor físico, SOA frente a SOAP, orquestación frente a coreografía y HTTP sin estado frente a una aplicación con sesión. Pero, como los temas B2-T01 a B2-T05, **es un esquema, no una explicación**. Tiene unos 10 KB para un enunciado con cinco partes, y dos de ellas casi no aparecen:

- **«Tipología» y «Componentes»** del cliente-servidor. No están los tipos de servidor, los clientes ligero y pesado, la clasificación de Gartner ni el *middleware* como componente.
- **«Interoperabilidad de componentes».** No están RPC, CORBA, RMI, DCOM, la mensajería ni los contratos de interfaz. El *middleware*, que el INAP preguntó en 2025, figura en un apartado añadido al final («Microdatos oficiales añadidos»).

Las 5 preguntas INAP del tema se pueden responder con él, pero dos de ellas solo con ese apartado añadido (2025 · 29 y 2025 · 30). Y la 2024 · 30, cuyos distractores son «VSDL», «UDI» y «SOA», exige conocer la pila de servicios web con UDDI, que el tema no menciona.

Lo que falta es lo que el INAP pregunta alrededor, en preguntas que clasifica en B3-T10 y B3-T12:

- UDDI y su función de registro y publicación.
- WSDL como lenguaje de descripción.
- Las restricciones de REST según Fielding.
- Qué es JSON.
- Los componentes de RMI.
- Dónde se ejecutan servlets y EJB en la arquitectura de capas de Jakarta EE.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 26 | Servicios web basados en URI, HTTP y JSON: REST | Cubierta de forma general; no cita JSON. |
| 2022 · 20 | Tres capas: presentación, lógica y almacenamiento | Cubierta. |
| 2024 · 30 | Elemento de una arquitectura de servicios web: SOAP | SOAP y WSDL están; UDDI no, y los distractores juegan con «UDI» y «SOA». |
| 2025 · 29 | Misión del *middleware*: unificar la interfaz y abstraer las diferencias entre nodos | Solo en el apartado añadido al final. |
| 2025 · 30 | Ventaja de las arquitecturas multicapa: menor acoplamiento y mantenimiento más fácil | Solo en el apartado añadido al final. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 59 | B3-T10 | Capa de Jakarta EE en la que se sitúa un servlet: la web |
| 2019 · 64 | B3-T12 | Restricciones de REST: cliente-servidor, sin estado, caché, interfaz uniforme y sistema en capas |
| 2022 · 51 | B3-T10 | Componentes de RMI: *stubs*, *skeletons*, capa de referencia remota y transporte |
| 2022 · 57 | B3-T10 | Dónde se ejecutan los EJB: en el servidor Jakarta EE |
| 2022 · 61 | B3-T12 | Protocolo para registrar y publicar servicios web: UDDI |
| 2022 · 62 | B3-T12 | Afirmación incorrecta sobre JSON: no usa etiquetas ni atributos |
| 2024 · 39 | B2-T12 | Arquitectura multicanal en la atención al cliente |
| 2024 · 63 | B3-T10 | Servidor de aplicaciones Jakarta EE: IBM WebSphere (Tomcat es solo contenedor web) |
| 2024 · 66 | B3-T12 | UDDI de OASIS: registro y publicación de servicios web |
| 2025 · 23 | B2-T02 | Micronúcleo: servicios fuera del núcleo como procesos cliente y servidor |
| 2025 · 66 | B3-T12 | Lenguaje de descripción de servicios web: WSDL |
| 2025 · 67 | B3-T12 | Función del *back-end* |
| 2025 · 82 | B4-T06 | Balanceo por mínimo de conexiones ponderado |
| 2025 · 83 | B4-T06 | Balanceador en modo *passthrough* |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Características del sistema distribuido (concurrencia, ausencia de reloj global, fallos parciales, heterogeneidad) y tipos de transparencia | 058 (parcial) | Base de todo el tema; las transparencias son de test. |
| Falacias de la computación distribuida | — | Explican los inconvenientes del modelo distribuido. |
| Componentes del cliente-servidor: cliente, servidor, *middleware* y red | 058 (parcial) | «Componentes» es parte del enunciado; pregunta 2025 · 29. |
| Tipos de cliente (ligero, pesado, enriquecido) y de servidor (ficheros, base de datos, transacciones, aplicaciones, web, objetos) | 065 (parcial) | «Tipología» es parte del enunciado. |
| Clasificación de Gartner en cinco modelos de reparto | — | Tipología clásica en las oposiciones TIC. |
| Capa lógica (*layer*) frente a nivel físico (*tier*); una, dos, tres y N capas; MVC | 058 y 065 (parcial) | Preguntas 2022 · 20 y 2025 · 30. |
| Ventajas e inconvenientes en tabla por arquitectura | — | Es parte literal del enunciado. |
| Multidispositivo: diseño adaptable, *mobile first*, apps nativas, híbridas y multiplataforma, PWA, API primero, BFF | 065 (parcial) | Parte del enunciado; el tema actual le dedica un párrafo. |
| *Middleware*: definición y tipos (RPC, ORB, MOM, monitores TP, acceso a datos, servidores de aplicaciones) | 065 (parcial) | Pregunta 2025 · 29. |
| Interoperabilidad de componentes: IDL, *marshalling*, CORBA, DCOM, RMI, EJB, .NET, gRPC | 065 (parcial) | «Interoperabilidad de componentes» y pregunta 2022 · 51. |
| Mensajería: AMQP, MQTT, JMS, Kafka; publicación-suscripción y punto a punto | 065 (mínimo) | El tema solo cita garantías de entrega. |
| Capas de SOA (modelo S3), roles y gobierno SOA | 058 | El tema enumera principios sin explicar las capas. |
| WS-BPEL y WS-CDL como lenguajes de orquestación y coreografía | — | Concretan la diferencia. |
| Arquitectura de servicios web del W3C: roles y operaciones publicar, buscar y vincular | 058 (parcial) | Pregunta 2024 · 30. |
| UDDI y su estado actual | 058 | Preguntas 2024 · 30, 2022 · 61 y 2024 · 66. |
| Estructura del mensaje SOAP, versiones 1.1 y 1.2; elementos de WSDL 1.1 y 2.0 | — | Preguntas de test sobre servicios web. |
| Pila WS-* completa (WS-Addressing, WS-ReliableMessaging, WS-Policy, WS-AtomicTransaction) y WS-I | 058 (solo seguridad) | Completa la «arquitectura de servicios web». |
| Restricciones de REST según Fielding, HATEOAS y modelo de madurez de Richardson | — | Preguntas 2019 · 26 y 2019 · 64. |
| JSON (RFC 8259, ECMA-404) | — | Pregunta 2022 · 62. |
| Comparación SOAP frente a REST; GraphQL, gRPC, WebSocket y *webhooks* | 065 | Distractores habituales. |
| Patrones de resiliencia (tiempo de espera, reintento con espera exponencial, cortacircuitos) y observabilidad | — | El tema los cita sin explicar. |

## 4. Explicaciones confusas o mal formateadas

1. **Apartado añadido al final.** «Microdatos oficiales añadidos — middleware y multicapa» pega las respuestas de dos preguntas INAP de 2025 después del resumen, en vez de explicarlas donde corresponde.
2. **Referencias internas.** «A1 058 SOA + 065 web» en las fuentes base no dice nada a quien estudia.
3. **Mezcla de planos.** El apartado de REST mezcla la definición del estilo con recomendaciones de diseño de API (paginación, *idempotency keys*, límites de tasa) sin separarlas.
4. **Afirmaciones sin explicar.** «Exactly once extremo a extremo suele ser una propiedad costosa», «outbox» y «dead-letter queue» aparecen sin definición.
5. **Resúmenes repetidos.** «Resumen II.06», «Test» y «Resumen de repaso» repiten lo mismo con otras palabras.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 058 | WSDL: «Definición de la gramática XML» | WSDL describe la **interfaz** del servicio: operaciones, mensajes, enlace con el protocolo y dirección. La gramática de los documentos XML la define **XML Schema** (XSD). Confundirlos lleva a fallar la 2025 · 66. |
| 058 | SOAP: «Formato de los documentos» | SOAP es un **protocolo de mensajería**: define el sobre (*Envelope*), la cabecera, el cuerpo y el elemento de fallo, y cómo se enlaza con un transporte. |
| 058 | WSDL y SOAP figuran como estándares del W3C sin más | SOAP 1.2 es Recomendación del W3C (2003, segunda edición 2007). **WSDL 1.1 es solo una Nota** del W3C (2001), aunque es la versión más usada. WSDL 2.0 sí es Recomendación (2007). |
| 058 | UDDI: organismo «UDDI», enlace a uddi.org | UDDI nació en un consorcio de empresas (Ariba, IBM y Microsoft, en 2000), que en 2002 lo transfirió a **OASIS**. La versión 3 es estándar OASIS desde 2005. Los registros públicos se cerraron en 2006 y uddi.org ya no existe. |
| 058 | WS-SecureConversation: «creado por IBM… para la creación y compartición de contenidos» | Establece un **contexto de seguridad** (claves de sesión) para intercambiar varios mensajes sin repetir la autenticación completa. Es estándar OASIS desde 2007, escrito por varias empresas. No tiene que ver con contenidos. |
| 058 | WS-Trust: «provee extensiones de WS-Security» | Define cómo **emitir, renovar y validar tokens de seguridad** mediante un servicio de tokens (STS) y cómo establecer relaciones de confianza entre dominios. |
| 058 | WS-Federation: «especificación» | Es estándar OASIS desde 2009 (versión 1.2). |
| 058 | Capas de SOA: sistemas operacionales, componentes de servicio, servicios y **coreografía**, más «integración» y «calidad del servicio» | Es el modelo **S3 de IBM**, que tiene nueve capas. La cuarta es la de **procesos de negocio**, que compone servicios por orquestación **o** coreografía. Faltan la capa de **consumidores** (presentación) y las transversales de **arquitectura de la información** y **gobierno**. |
| 058 | Composición: «orquestados por la aplicación» | Un servicio compuesto puede coordinarse por orquestación o por coreografía, y los servicios pueden componerse entre sí, no solo desde una aplicación. |
| 058 | Ausencia de estado: «delegando el manejo de estados en la aplicación» | El principio de Erl es **minimizar** el estado que retiene el servicio, aplazándolo cuando conviene a los mensajes, a una base de datos o al motor de procesos. No siempre se traslada a la aplicación. |
| 058 | Dos capas: «presentación y negocio» en el cliente y «datos» en el servidor | Es solo el caso del **cliente pesado**. En el de cliente ligero, la lógica está en el servidor, por ejemplo en procedimientos almacenados. La clasificación de Gartner distingue cinco repartos. |
| 058 | Tolerancia a fallos: el fallo de un nodo «será transparente» | Es un **objetivo**. Los **fallos parciales** son precisamente la principal dificultad del sistema distribuido. |
| 058 | Sincronización «a través de elementos distintos a un reloj común (característico de los sistemas centralizados)» | La característica es la **ausencia de un reloj global**. El orden se establece con relojes lógicos (Lamport) o sincronizando relojes físicos (NTP). |
| 065 | Arquitectura de tres niveles: «este estilo de desarrollo recibe el nombre de arquitectura monolítica» | **Monolito** se refiere a cómo se **despliega** la aplicación (una sola unidad), no a cuántas capas lógicas tiene. Una aplicación en tres capas puede desplegarse como monolito o distribuida. |
| 065 | Microservicios: «separar claramente la presentación (*frontend*)… de los distintos servicios… (*backend*)» | Los microservicios **descomponen el *back-end*** en servicios pequeños, alineados con capacidades de negocio, con datos propios y **despliegue independiente** (Lewis y Fowler, 2014). La separación entre *front-end* y *back-end* existe también en un monolito. |
| 065 | «El estándar SOAP (*Simple Object Access Protocol*)» | Desde la versión 1.2 (2003) **SOAP ya no es un acrónimo**: el W3C abandonó el nombre desarrollado. |
| 065 | Los servicios web SOAP «obligan a generar un esquema WSDL» | WSDL es lo habitual, pero SOAP no lo exige. Además, WSDL no es un «esquema». |
| 065 | Distinción entre «API REST» y «API RESTful» por usar los verbos HTTP | No hay tal distinción normativa. **REST** es el estilo de Fielding (2000) y **RESTful** significa que una API cumple sus restricciones. Usar bien los verbos HTTP corresponde al nivel 2 del modelo de Richardson; el estilo completo incluye además el hipermedia (HATEOAS). |
| 065 | REST serializa «mediante JSON o Binary JSON» | REST no prescribe formato: JSON es lo habitual, también XML u otros. BSON es el formato interno de MongoDB, no un formato habitual de las API REST. |
| 065 | GraphQL como «evolución de las API REST» | Es una **alternativa** con un esquema tipado y un único punto de entrada, no una versión posterior de REST. Lo publicó Facebook en 2015 y hoy lo gestiona la GraphQL Foundation. |
| 065 | gRPC usa «HTTP/2 y HTTP/3» y serializa en «Protocol Buffers, JSON y XML» | La especificación de gRPC se define sobre **HTTP/2**; HTTP/3 solo lo admiten algunas implementaciones. El formato por defecto es **Protocol Buffers**; se pueden usar otros, pero XML no es habitual. |
| 065 | Colas de mensajería: «RabbitMQ, JMI» | Es **JMS** (*Java Message Service*, hoy Jakarta Messaging). JMI es *Java Metadata Interface*, que no tiene que ver con la mensajería. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Sistemas centralizados y distribuidos.
  2. Cliente-servidor: componentes y tipología.
  3. Arquitecturas multicapa.
  4. Arquitecturas multidispositivo.
  5. *Middleware* e interoperabilidad de componentes.
  6. SOA.
  7. Arquitectura de servicios web (SOAP, WSDL, UDDI, WS-*).
  8. REST y otras API.
  9. Escalabilidad y resiliencia.
  10. Ventajas e inconvenientes.
- **Cubrir lo que el INAP clasifica en B3-T10 y B3-T12 solo en lo que es arquitectura.** La pila de servicios web, REST y JSON se explican con el detalle que piden las preguntas; la programación de servicios y las aplicaciones web se remiten a B3-T12.
- **Explicar antes de resumir.** Cada concepto va con su definición, su contraste y un ejemplo de la Administración.
- **Cubrir las 5 preguntas INAP** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 14 relacionadas.
- **Remitir a otros temas en vez de duplicarlos:**
  - Contenedores y microservicios: B2-T07.
  - Modelos OSI y TCP/IP: B2-T08.
  - XML, XSD y lenguajes de marcas: B2-T09.
  - Arquitectura multicanal de atención: B2-T12.
  - Jakarta EE y .NET: B3-T10 y B3-T11.
  - Aplicaciones web y servicios web en detalle: B3-T12.
  - Balanceo y alta disponibilidad: B4-T06.
  - Interoperabilidad administrativa (ENI, NTI, plataformas comunes): B1-T10.
- **Fechar las normas y versiones** (SOAP 1.2, WSDL 2.0, UDDI 3, RFC 9110, OpenAPI 3.2) y distinguir lo vigente de lo histórico.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T06.md`](../../content/fork-topics/B2-T06.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama de capas e integración del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.06) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
