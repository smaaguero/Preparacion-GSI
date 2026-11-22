# Diagnóstico del tema B2-T13

**Tema:** Seguridad física y lógica de un sistema de información. Herramientas en ciberseguridad. Gestión de incidentes. Informática forense.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T13.md` (apuntes V2.1 del 23/09/2026, con las ampliaciones del fork sobre el Reglamento de Ciberresiliencia y NIS2, y resumen maestro de repaso). El propio tema declara como base «A1 125 + 126 + 127, ENS y CCN-CERT».
- Resúmenes PreparaTIC leídos en la carpeta de Drive:
  - 125 · La seguridad en redes. Tipos de ataques y herramientas para su prevención (versión 30.1, actualizado a 09/09/2024).
  - 126 · La seguridad en el nivel de aplicación (versión 31.1, actualizado a 23/02/2026).
  - 127 · Ciberseguridad. La Estrategia Nacional de Ciberseguridad (actualizado a 11/01/2022).
  - 048 · El Esquema Nacional de Seguridad (actualizado a 05/03/2026): apartados de la instrucción técnica de notificación de incidentes y relación de herramientas del CCN con los requisitos mínimos.
- Real Decreto 311/2022 (ENS), texto consolidado en el BOE: anexo I (dimensiones) y anexo II (grupos mp.if, op.exp y op.mon); títulos de los artículos 25, 33 y 34.
- Las 10 preguntas oficiales INAP clasificadas en B2-T13 (2019, 2022, 2024 y 2025) y 3 de reserva (2022 y 2025), las 7 relacionadas que el INAP clasificó en B1-T09, B2-T11, B4-T06 y B4-T12, y las preguntas IA del banco del tema.

**No revisado a fondo:** las carpetas «Doc adicional» de los temas 125, 126, 127 y 048; el texto de la guía CCN-STIC 817 y de la Guía nacional de notificación y gestión de ciberincidentes (el PDF publicado por INCIBE no estaba disponible); la página de soluciones del CCN-CERT (devolvió error 403).

## 1. Conclusión

El tema actual es correcto y bien enfocado: trata la seguridad como un ciclo (proteger, detectar, responder, recuperar, aprender), separa SOC de CSIRT y contención de erradicación, y ya incorporaba ampliaciones sobre el CRA y NIS2. Pero es **un esquema** de unos 20 KB (la mitad son esas ampliaciones) y lo que más pregunta el INAP está en frases sueltas en negrita:

- **Herramientas y servicios del CCN:** solo INES, y SAT-INET y SAT-ICS en un párrafo. Faltan PILAR, LUCÍA, CLARA, REYES, CARMEN, microCLAUDIA, las guías CCN-STIC 105, 140, 817 y la serie 887 (AWS), que han salido en 2022 y 2025.
- **Gestión de incidentes del sector público:** no explica peligrosidad e impacto, la notificación obligatoria al CCN-CERT (instrucción técnica de 2018) ni la relación entre ENS, RGPD, NIS y CRA.
- **Seguridad física:** una lista sin las medidas mp.if del ENS ni los sistemas de extinción.
- **Seguridad lógica:** sin modelos de control de acceso ni factores de autenticación explicados.
- **Forense:** correcto pero sin normas (RFC 3227, ISO/IEC 27037, UNE 71505 y 71506) ni marco procesal.
- **Gobernanza:** no explica la Estrategia Nacional de Ciberseguridad ni los órganos (la pregunta de reserva de 2022 es sobre el Consejo de Seguridad Nacional).

Las 10 preguntas del tema se pueden responder casi todas, pero varias solo porque la respuesta se añadió como frase en negrita (C&C, *smishing*, INES, precursor, niveles). Las 3 de reserva no tienen respuesta.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 35 | Qué es Ryuk: *ransomware* | Cita el *ransomware*, no Ryuk. |
| 2019 · 87 | Qué es un servidor de mando y control | Frase en negrita añadida. |
| 2019 · 88 | Qué es el *smishing* | Frase en negrita añadida. |
| 2022 · 76 | La guía CCN-STIC 887G trata de AWS | No está. |
| 2022 · reserva 2 | Función incorrecta del Consejo de Seguridad Nacional (RD 43/2021) | No está. |
| 2024 · 36 | Amenaza que afecta a la integridad: *ransomware* | No se explica la relación. |
| 2024 · 41 | SAT-INET no analiza el contenido salvo lo relevante | Cubierta. |
| 2024 · 42 | Cinco niveles de peligrosidad | Cubierta en una frase. |
| 2024 · 87 | Nessus: escáner de vulnerabilidades | Cita el escáner, no Nessus. |
| 2025 · 39 | Fase del ciclo de CCN-STIC 817: preparación | Cubierta (ciclo genérico). |
| 2025 · 40 | Qué es un precursor | Cubierta. |
| 2025 · reserva 4 | CloudTrail, GuardDuty y Security Hub en la guía 887G | No está. |
| 2025 · reserva 5 | Anexo A.1 de CCN-STIC 140: dispositivos de control de acceso a red | No está. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 83 | B4-T06 | El TIER de un CPD |
| 2022 · 84 | B4-T12 | Qué es un IPS |
| 2022 · 87 | B4-T12 | Qué es un UTM |
| 2024 · 37 | B2-T11 | INES, herramienta de gobernanza del CCN |
| 2024 · 85 | B4-T12 | Qué es un SIEM |
| 2024 · 92 | B4-T12 | Ataque DDoS |
| 2025 · 17 | B1-T09 | Esquemas AEAD sobre AES en CCN-STIC 807 |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Dimensiones con amenazas típicas; principios básicos del ENS | 048 | Pregunta 2024 · 36. |
| Medidas mp.if del ENS, extinción de incendios, SAI, TEMPEST | — | Seguridad física del enunciado. |
| Factores de autenticación, DAC, MAC, RBAC y ABAC; medidas op.acc, op.exp y op.mon | 125 (con errores) | Seguridad lógica del enunciado. |
| Clasificación clásica de ataques y taxonomía de CCN-STIC 817 | 125 | Base de la clasificación de incidentes. |
| Tipos de *malware* con ejemplos (Ryuk), C2, ingeniería social | 125 (parcial) | Preguntas de 2019. |
| UTM, NAC, *sandbox*, XDR, PAM, SOAR, MITRE ATT&CK, CVE y CVSS | 125 y 126 (parcial) | «Herramientas en ciberseguridad». |
| Herramientas del CCN, SAT, guías 105, 140, 817 y serie 887 | 048 (parcial) | Preguntas 2022 · 76, 2024 · 41 y reservas de 2025. |
| Peligrosidad, impacto y umbral de notificación al CCN-CERT | 048 | Pregunta 2024 · 42. |
| Mapa de notificaciones: ENS, RGPD, NIS, NIS2, CRA, DORA | 048 (parcial) | Supuesto práctico. |
| Estrategia Nacional de Ciberseguridad 2019 y órganos | 127 | Pregunta de reserva 2022. |
| Normas forenses, orden de volatilidad completo, LECrim | — | «Informática forense». |

## 4. Explicaciones confusas o mal formateadas

1. **Negrita accidental.** Las listas de tipos de ataque y de herramientas tienen elementos enteros en negrita (*malware*, *phishing*, MFA, INES) porque se añadieron como respuestas de examen.
2. **Ampliaciones encajadas.** Los bloques sobre el CRA y NIS2 interrumpen el apartado de gestión de incidentes y el de CSIRT; el nuevo texto los integra donde corresponde (notificaciones y marco europeo).
3. **Referencias internas.** «A1 125 + 126 + 127» no dice nada a quien estudia.
4. **Resúmenes repetidos.** «Resumen II.13», «Test» y «Resumen de repaso».

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 125 | ISO/IEC 27005: «publicada en 2011 (primera edición), 2008 (segunda edición) y 2018 última versión» | Primera edición 2008, segunda 2011, tercera 2018 y la vigente es la **cuarta, de 2022**. |
| 125 | «MAGERIT es una metodología desarrollada por CCN» | MAGERIT la elaboró el **Consejo Superior de Administración Electrónica** (versión 3, 2012). El CCN publica la herramienta **PILAR**, que la implementa. |
| 125 | El artículo 33 del ENS remite a CCN-CERT, CNPIC, INCIBE y MCCE según el tipo de entidad | El artículo 33 del ENS trata de la capacidad de respuesta en el sector público (CCN-CERT). El reparto entre CSIRT de referencia (**CCN-CERT, INCIBE-CERT y ESPDEF-CERT**) es del artículo 11 del **Real Decreto-ley 12/2018**. El CNPIC no es un CSIRT. |
| 125 | EAP = «*Extended* Authentication Protocol», usado en el control de acceso «WAP y WPA2» | **Extensible** Authentication Protocol; se usa en **WPA** y WPA2/WPA3 Enterprise (802.1X). WAP es otra cosa. |
| 125 | «WPA-3: utiliza cifrado de 192 bits» | Solo el **modo de 192 bits de WPA3-Enterprise**. WPA3-Personal usa SAE y AES de 128 bits. |
| 125 | IPsec AH aporta «integridad y no repudio en origen» | AH aporta integridad y **autenticación del origen** con claves simétricas (HMAC); no da no repudio, que exige firma con clave privada. |
| 125 | TLS aporta «integridad (esta última desde TLS 1.2)» | TLS (y SSL antes) protege la integridad con MAC **desde sus primeras versiones**; TLS 1.2 introdujo los cifrados AEAD y SHA-256 en la función pseudoaleatoria. |
| 125 | «ISO 19790 define un cuarto factor de conducta» | ISO/IEC 19790 son requisitos de seguridad para **módulos criptográficos**; no define factores de autenticación. |
| 125 | RBAC «surgió a mediados de los 80» | El modelo se formalizó en **1992** (Ferraiolo y Kuhn, NIST) y se normalizó en 2004 (ANSI INCITS 359). |
| 125 | OWASP Mobile Top 10, M2 «cadena de suministro»: describe ataques a binarios | Esa descripción es la de **M7** (protecciones binarias insuficientes). M2 trata de componentes de terceros comprometidos o vulnerables. |
| 125 | RADIUS «emplea tanto UDP como TCP» | RADIUS usa **UDP** (puertos 1812 y 1813); el transporte por TCP es experimental. TACACS+ usa TCP. |
| 126 | Encabezados «A03:2025 Uso de componentes con vulnerabilidades conocidas» y «A04:2025 Exposición de datos sensibles» | En el Top 10:2025, **A03** es «Fallos de la cadena de suministro de *software*» y **A04** «Fallos criptográficos», como dice el propio cuadro resumen del documento. |
| 126 | OWASP «publica y actualiza cada 3 años» el Top 10 | Ediciones de 2003, 2004, 2007, 2010, 2013, 2017, 2021 y 2025: sin periodicidad fija. |
| 126 | RFI «existe solamente en páginas dinámicas en PHP» | Es más frecuente en PHP, pero puede darse en cualquier tecnología que incluya ficheros a partir de una entrada controlable. |
| 126 | Entre las vulnerabilidades de bases de datos: «Gestión de usuarios mediante grupos» | Es una **buena práctica**, no una vulnerabilidad. |
| 127 | «La nueva Estrategia Nacional de **Seguridad** 2019» | Es la Estrategia Nacional de **Ciberseguridad** 2019. La Estrategia de Seguridad Nacional vigente es la de 2021. |
| 127 | La ciberdefensa «da respuesta a los ataques con nuevos ataques» | La ciberdefensa es el conjunto de capacidades militares de defensa, explotación y respuesta en el ciberespacio; no se reduce a contraatacar. |
| 127 | Global Cybersecurity Index de abril de 2021 con España cuarta | Dato desfasado: la edición de 2024 ya no ordena países por puesto, sino por niveles. |
| 127 | Estrategia Europea de Ciberseguridad de 2013 | La vigente es la de **2020**. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. Seguridad de un sistema de información (dimensiones, conceptos, principios, tipos de medidas).
  2. Seguridad física.
  3. Seguridad lógica.
  4. Amenazas y ataques.
  5. Herramientas en ciberseguridad, incluidas las del CCN.
  6. Gestión de incidentes y notificación.
  7. Marco nacional y europeo.
  8. Informática forense.
- **Integrar las ampliaciones del fork** sobre el CRA y NIS2 en los apartados de notificación y marco europeo, en lugar de mantenerlas como bloques aparte.
- **Remitir a otros temas en vez de duplicarlos:**
  - Riesgos: B2-T10.
  - Auditoría: B2-T11.
  - Seguridad de redes, criptografía y VPN: B4-T12.
  - CPD y TIER: B4-T06.
  - Seguridad web: B3-T12.
  - Incidencias de ITIL: B4-T03.
- **Cubrir las 10 preguntas INAP y las 3 de reserva** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 7 relacionadas.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T13.md`](../../content/fork-topics/B2-T13.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama de respuesta a incidentes y preservación forense del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.13) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash. El aviso de vigencia `UPD-2026-002` (CRA) sigue registrado; su contenido está ahora en los apartados 6.4 y 7.2 del texto.

Verificaciones pendientes:

- **Herramientas del CCN:** las funciones de la tabla del apartado 5.5 proceden del resumen 048 y de documentación pública general; la página de soluciones del CCN-CERT no se pudo consultar.
- **Guía CCN-STIC 817:** los nombres exactos de las fases (el INAP confirma «Preparación») y los niveles de impacto de la Guía nacional de notificación no se han cotejado con el texto de la guía.
- **NIS2 en España:** a octubre de 2026 la ley de transposición no se había publicado en el BOE; hay que comprobarlo antes de cada convocatoria.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
