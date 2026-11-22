# Diagnóstico del tema B2-T08

**Tema:** El modelo TCP/IP y el modelo de referencia de interconexión de sistemas abiertos (OSI) de ISO: arquitectura, capas, interfaces, protocolos, direccionamiento y encaminamiento.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T08.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 109 + 111 + 115 y redes A1».
- Resúmenes PreparaTIC leídos en la carpeta de Drive:
  - 111 · El modelo de referencia OSI de ISO: arquitectura, capas, interfaces, protocolos, direccionamiento y encaminamiento (edición 29, actualizado a 26/04/2023).
  - 109 · La red Internet y los servicios básicos (edición 29, actualizado a 20/04/2023).
  - 115 · Redes IP: arquitectura, encaminamiento y calidad de servicio; transición IPv4-IPv6 (edición 29, actualizado a 11/04/2023).
- Las 9 preguntas oficiales INAP clasificadas en B2-T08 (2019, 2022, 2024 y 2025) y una de reserva de 2024, las 15 relacionadas que el INAP clasificó en B4-T08, B4-T09, B4-T10, B4-T13 y B4-T16, y las preguntas IA del banco del tema.

**No revisado a fondo:** las carpetas «Doc adicional» de los temas 109 y 111 y los resúmenes *express*.

## 1. Conclusión

El tema actual es correcto y práctico: tabla de capas, CIDR, rangos privados, puertos, TCP frente a UDP y conceptos de encaminamiento. Pero, como los anteriores, **es un esquema, no una explicación**. Unos 11 KB para un enunciado con seis partes, y tres de ellas apenas se tratan:

- **Arquitectura e interfaces.** No explica los conceptos del modelo de referencia: entidad, servicio, punto de acceso al servicio (SAP), primitivas, PDU, SDU e ICI, ni servicio orientado o no a conexión.
- **Protocolos.** No hay cabeceras (IPv4, IPv6, TCP, UDP, Ethernet), ni establecimiento y cierre de conexión TCP, ni control de congestión, ni los protocolos propios de OSI (CLNP, IS-IS, TP0–TP4, ASN.1, X.400, X.500).
- **Direccionamiento.** El cálculo de subredes se pide («debes ser capaz de calcular…») pero no se enseña con un ejemplo resuelto. Faltan los tipos de dirección IPv6, las direcciones especiales IPv4 y los mecanismos de transición.

Las 9 preguntas INAP del tema se pueden responder con él, pero la de 2025 (máscara, *wildcard* y clase de 171.25.63.87/17) solo con un apartado añadido después del resumen, y la de 2022 sobre las funciones de la capa de sesión con una celda de tabla. La de reserva de 2024 (BER en X.690) no tiene respuesta en el tema.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 28 | Orden de las capas OSI de abajo arriba | Cubierta. |
| 2019 · 29 | Primer mensaje DHCP, en difusión: DHCPDISCOVER | Cubierta (DORA). |
| 2019 · 30 | Afirmación incorrecta sobre IPv6: que tenga difusión (*broadcast*) | Cubierta en una frase; no explica los jumbogramas ni las cabeceras de extensión. |
| 2019 · 80 | Puertos bien conocidos: 0–1023 | Cubierta. |
| 2022 · 24 | Funciones de la capa de sesión: control del diálogo y recuperación | Solo en una celda de tabla. |
| 2022 · 25 | Orden de las capas OSI | Cubierta. |
| 2024 · 32 | Dirección de clase B: 128.0.0.0 | Cubierta. |
| 2024 · 93 | Qué es OSI y cuántas capas tiene: modelo de referencia de 7 capas | Cubierta. |
| 2025 · 34 | Máscara, *wildcard* y clase de 171.25.63.87/17 | Solo en el apartado añadido al final. |
| 2024 · reserva 3 | Las BER están definidas en ITU-T X.690 | No está. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 81 | B4-T08 | VLAN por asignación de puertos: estática |
| 2019 · 82 | B4-T09 | Sondeo SNMP = monitorización activa; *trap* = pasiva |
| 2019 · 86 | B4-T10 | NAT no es un protocolo de encaminamiento |
| 2019 · 89 | B4-T13 | Organismo que publica los RFC: IETF |
| 2019 · reserva 5 | B4-T08 | EtherType 0x0806 = ARP |
| 2022 · 86 | B4-T09 | *Trap* SNMP: alerta asíncrona sin petición |
| 2022 · 88 | B4-T10 | Máximo de saltos alcanzable en RIPv2: 15 |
| 2022 · 89 | B4-T10 | Tabla de un router de un área OSPF *stub* |
| 2024 · 31 | B4-T09 | Protocolo para consultar el estado de los activos: SNMP |
| 2024 · 33 | B4-T16 | Modelo de calidad de servicio que no existe: «PriServ» |
| 2024 · 88 | B4-T10 | Actualizaciones disparadas en RIP |
| 2025 · 88 | B4-T08 | Defensa contra la suplantación DHCP: *DHCP snooping* |
| 2025 · 90 | B4-T10 | IS-IS va directamente sobre la capa de enlace |
| 2025 · 94 | B4-T13 | Agregación jerárquica de rutas: CIDR |
| 2025 · 95 | B4-T13 | IPv6 sobre enlaces de bajo consumo: 6LoWPAN |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Historia y normas del modelo OSI (ISO/IEC 7498-1, ITU-T X.200) | 111 | Pregunta 2024 · 93. |
| Entidad, servicio, SAP, primitivas y unidades de datos (PDU, SDU, ICI, IDU) | 111 (con errores) | «Interfaces» es parte del enunciado. |
| Funciones detalladas de cada capa OSI | 111 | Pregunta 2022 · 24 y sus distractores, que son funciones de otras capas. |
| Protocolos OSI (CLNP, IS-IS, TP0–TP4, ASN.1 y BER, X.400, X.500, FTAM, CMIP) | 111 (parcial) | Pregunta de reserva 2024 · 3. |
| Equipos de interconexión por capa (repetidor, puente, conmutador, router, pasarela) | 111 (parcial) | Clásico de test. |
| Historia de TCP/IP, organismos de Internet y proceso de los RFC | 109 | Pregunta 2019 · 89. |
| Cabeceras de Ethernet, IPv4, IPv6, TCP y UDP | 115 (parcial) | Preguntas de reserva 2019 · 5 y 2019 · 30. |
| Direcciones especiales IPv4 (bucle local, enlace local, CGNAT, documentación, multidifusión) | 115 (parcial) | Distractores de la 2024 · 32. |
| Cálculo de subredes resuelto paso a paso, VLSM y agregación | 115 (parcial) | Preguntas 2025 · 34 y 2025 · 94. |
| Tipos de dirección IPv6 en tabla, NDP, SLAAC y mecanismos de transición | 115 | Pregunta 2019 · 30. |
| Establecimiento y cierre de TCP, control de flujo y de congestión | — | «Protocolos» del enunciado. |
| QUIC, SCTP | 109 (parcial) | Transporte actual. |
| DNS: jerarquía, servidores, resolución, DNSSEC, DoT y DoH | 109 | Servicio básico de la pila. |
| Algoritmos de encaminamiento (vector distancia, estado de enlace, vector de rutas) y sus mecanismos (horizonte dividido, actualizaciones disparadas) | 115 | Preguntas 2022 · 88, 2024 · 88 y 2025 · 90. |
| OSPF por áreas, IS-IS, BGP y su seguridad (RPKI) | 115 (parcial) | Preguntas 2022 · 89 y 2025 · 90. |
| Modelos de calidad de servicio y multidifusión | 115 (parcial) | Pregunta 2024 · 33. |

## 4. Explicaciones confusas o mal formateadas

1. **Apartado añadido al final.** «Microdato oficial añadido — wildcard IPv4» pega la respuesta de la 2025 · 34 después del resumen.
2. **Referencias internas.** «El banco A1 109/111/115…» y «A1 109 + 111 + 115 y redes A1» no dicen nada a quien estudia.
3. **Mezcla de temas.** El apartado de puertos acaba con una definición de SNMP, la monitorización activa y pasiva y la IETF; y el de encaminamiento, con los modelos de calidad de servicio. Son respuestas de preguntas de otros temas añadidas sin contexto.
4. **Cálculo de subredes sin ejemplo.** Se dice que hay que saber calcular red, difusión y número de equipos, pero no se muestra cómo.
5. **Resúmenes repetidos.** «Resumen II.08», «Test» y «Resumen de repaso» repiten lo mismo con otras palabras.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 111 | El modelo OSI fue «creado en el año 1980», publicado por la UIT «desde 1983» y por ISO «desde 1984» | El trabajo empezó en 1977. La primera edición se publicó en **1984**, a la vez como ISO 7498 y como Recomendación X.200 del CCITT (hoy ITU-T). La versión vigente es **ISO/IEC 7498-1:1994** (ITU-T X.200, 1994). |
| 111 | OSI define cinco tipos de transporte y «un tipo TP4 puede ser sin conexión» | Las cinco clases **TP0 a TP4 son todas orientadas a conexión** (ISO 8073). El transporte sin conexión de OSI es otro protocolo, el CLTP (ISO 8602). |
| 111 | Primitivas: «Protocolos no confirmados: Request, Indication. Protocolos confirmados: Response, Confirm» | Hay **cuatro primitivas**: solicitud, indicación, respuesta y confirmación. Un **servicio** no confirmado usa solo las dos primeras; uno confirmado usa **las cuatro**, no solo respuesta y confirmación. |
| 111 | «Los routers y Firewalls trabajan a este nivel» (red) | Los cortafuegos filtran en varios niveles: red y transporte (filtrado de paquetes y de estado) y aplicación (proxies, cortafuegos de nueva generación). |
| 109 | ARPANET fue «desarrollada en el MIT para ARPA» | La construyó la empresa **BBN** por contrato con ARPA. Los primeros nodos (1969) estaban en UCLA, el SRI, la UCSB y la Universidad de Utah. |
| 109 | «1972 → [ARPANET] evoluciona a DARPA» | En 1972 lo que cambió de nombre fue la **agencia**, ARPA, que pasó a llamarse DARPA. La red siguió llamándose ARPANET. |
| 109 | RedIRIS (1988) «gestionada por Red.es» | La gestionó primero Fundesco y después el CSIC. **Red.es la gestiona desde 2004.** |
| 109 | «1992 → Se crean ISOC y RIPE» | ISOC sí es de 1992, pero RIPE se creó en **1989**. En 1992 se creó el RIPE NCC, su centro de coordinación. |
| 109 | ICANN es «responsable de asignar las direcciones IP» | ICANN, a través de la función **IANA** (hoy operada por PTI, filial de ICANN), asigna grandes bloques a los cinco **registros regionales** (RIR). Son los RIR los que asignan direcciones a los operadores y organizaciones. |
| 109 | IAB: «supervisión y aprobación de normas» | Quien **aprueba** los estándares de Internet es el **IESG**. El IAB supervisa la arquitectura, resuelve apelaciones y gestiona la relación con otros organismos. |
| 109 | Estados de un RFC: «protocolo estándar, borrador estándar, propuesta estándar…» | Desde el **RFC 6410 (2011)** la vía de normalización tiene solo dos niveles: **estándar propuesto** y **estándar de Internet**. El «borrador estándar» se suprimió. Fuera de esa vía están los RFC experimentales, informativos e históricos. |
| 109 | Sistema autónomo: «una red o grupo de redes IP bajo el control de un único ISP» | Es un conjunto de redes bajo **una administración técnica con una política de encaminamiento común** (RFC 1930). Pueden tenerlo operadores, universidades, empresas o Administraciones, no solo los ISP. |
| 109 | Acceso al punto de presencia: «la más extendida ADSL» | En España la tecnología de acceso fijo dominante es la **fibra hasta el hogar (FTTH)**; el ADSL está en retirada. |
| 109 | FTP activo: «el Servidor le ordena al Cliente que abra el puerto»; pasivo: «tanto el canal de control como el canal de datos los abre el Servidor» | En modo **activo** el **cliente** indica con PORT en qué puerto escucha y el **servidor** abre la conexión de datos desde su puerto 20. En modo **pasivo** el cliente envía PASV, el servidor responde con un puerto y **el cliente abre las dos conexiones**. Por eso el pasivo atraviesa mejor los cortafuegos del cliente. |
| 109 | «IIP. Protocolo de envío y control de trabajos de impresión… Puerto tcp 631» | Es **IPP** (*Internet Printing Protocol*). |
| 115 | Los paquetes ICMP tienen «Version = 4, ToS = 0 y Protocol = 1» | El campo de protocolo vale 1, pero el antiguo ToS (hoy DSCP y ECN) no tiene por qué ser 0. |
| 115 | «RIPv2 soporta máscaras de tamaño variable (CIDR) y subredes mientras que RIP no» | RIPv1 admite subredes, pero de **longitud fija**, porque no transmite la máscara (es *classful*). Lo que añade RIPv2 es el envío de la máscara, y con ello **VLSM y CIDR**. |
| 115 | IGRP y EIGRP «desarrollados por CISCO» como protocolos propietarios | IGRP está abandonado. **EIGRP** se publicó como RFC informativo en 2016 (RFC 7868) y es un protocolo de **vector distancia avanzado** (algoritmo DUAL). |
| 115 | BGP «mantiene en la tabla de routing… la ruta completa a los destinos» | BGP es de **vector de rutas**: guarda la **lista de sistemas autónomos** que atraviesa la ruta (AS_PATH), no la ruta completa router a router. |
| 115 | «Una técnica de NAT en estudio es NAT64» | **NAT64** está normalizado desde 2011 (RFC 6146), junto con DNS64, y se usa ampliamente, por ejemplo en las redes móviles solo IPv6 con 464XLAT. |
| 115 | Tunelización automática: «6to4, Teredo o ISATAP» como técnicas vigentes | **6to4 se declaró obsoleto** en 2015 (RFC 7526) y Teredo e ISATAP están prácticamente abandonados. Hoy se usan la doble pila, la traducción (NAT64, 464XLAT) y DS-Lite. |
| 115 | STUN sirve para «la determinación del tipo de NAT» | Esa función era del STUN clásico (RFC 3489). Desde el RFC 5389 (2008), STUN (*Session Traversal Utilities for NAT*) sirve para descubrir la dirección pública y mantener las asociaciones, y es una pieza de ICE; ya no clasifica el NAT. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Arquitecturas por capas: conceptos e interfaces.
  2. Modelo OSI: historia, capas, protocolos y equipos.
  3. Modelo TCP/IP: capas, comparación con OSI y organismos.
  4. Acceso a red: Ethernet, VLAN y ARP.
  5. Direccionamiento IPv4, con cálculo de subredes resuelto.
  6. IPv6.
  7. Transporte: puertos, TCP, UDP y QUIC.
  8. Servicios esenciales de la pila: DHCP, DNS e ICMP.
  9. Encaminamiento.
- **Cubrir lo que el INAP clasifica en B4-T08, B4-T09, B4-T10, B4-T13 y B4-T16 solo en lo que es arquitectura, direccionamiento o encaminamiento.** RIP, OSPF, BGP, VLAN y SNMP se explican lo necesario; su administración y su configuración se remiten a esos temas.
- **Explicar antes de resumir**, con ejemplos numéricos de direccionamiento.
- **Cubrir las 9 preguntas INAP y la de reserva** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 15 relacionadas.
- **Fechar las normas** (ISO/IEC 7498-1:1994, RFC 9293 para TCP, RFC 8200 para IPv6, RFC 9000 para QUIC) y distinguir lo vigente de lo histórico.
- **Remitir a otros temas en vez de duplicarlos:**
  - Medios de transmisión y cableado: B4-T07.
  - Redes locales, Ethernet y VLAN en detalle: B4-T08.
  - Gestión de red y SNMP: B4-T09.
  - Redes de área extensa, MPLS y administración del encaminamiento: B4-T10.
  - Internet, IoT y servicios: B4-T13.
  - Seguridad de red (cortafuegos, VPN, IPsec): B4-T12.
  - Calidad de servicio y comunicaciones en tiempo real: B4-T16.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T08.md`](../../content/fork-topics/B2-T08.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama OSI-TCP/IP del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.08) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
