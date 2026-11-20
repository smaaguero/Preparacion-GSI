# Diagnóstico del tema B2-T01

**Tema:** Tecnologías actuales de ordenadores: de los dispositivos móviles a los superordenadores y arquitecturas escalables y de altas prestaciones. Computación en la nube. Base tecnológica. Componentes, funcionalidades y capacidades.

**Revisado:** 20/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T01.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso).
- Fuentes PreparaTIC citadas por el propio tema, leídas en la carpeta de Drive indicada:
  - 052 · Sistemas de altas prestaciones. Grid computing. Mainframe (resumen actualizado a 10/05/2019).
  - 053 · Equipos departamentales. Servidores. CPD (v30.2, 12/09/2024).
  - 054 · Dispositivos personales y móviles (v31.1, 28/02/2026).
  - 055 · Cloud computing (resumen actualizado a 02/05/2023).
- Preguntas oficiales INAP clasificadas en B2-T01 (2022, 2024 y 2025) y las 80 preguntas del banco curado del tema.

**No revisado:** el «RELEASE de arquitectura física/cloud». El inventario del repositorio registra sus ficheros: «Arquitectura de Sistemas 2023 p29», «Consejos sobre dimensionamiento» y «Preparatic27 Cloud Computing_p29». Sin embargo, la conexión a Drive de esta cuenta no puede abrirlos y responde «no encontrado». Si los compartes o los descargas, completo la revisión con ellos.

## 1. Conclusión

El tema actual no es incorrecto en lo que dice. Sus contrastes conceptuales son buenos: mainframe frente a superordenador, UMA frente a NUMA, escalado vertical y horizontal, escalabilidad frente a elasticidad, IaaS, PaaS y SaaS, y los cuatro modelos de despliegue del NIST. El problema es otro: **explica poco y deja fuera la mitad del enunciado del BOE**. Es un esquema de conceptos para quien ya los conoce, no unos apuntes para aprenderlos. Además, las fuentes de PreparaTIC tienen errores y datos desfasados que conviene no trasladar.

## 2. Qué falta respecto al enunciado del BOE

El enunciado pide tres cosas: el recorrido «de los dispositivos móviles a los superordenadores», «arquitecturas escalables y de altas prestaciones» y la «base tecnológica: componentes, funcionalidades y capacidades». El tema actual resuelve la base tecnológica en tres párrafos y apenas trata los equipos concretos.

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Placa base, firmware UEFI, buses (PCIe, SATA, SAS, NVMe, USB) | 054 | Es la «base tecnológica» del enunciado. |
| Memoria: SRAM y DRAM, DDR4/DDR5, LPDDR, ECC | 053, 054 | Se pregunta la relación entre memoria, caché y servidor. |
| RISC frente a CISC, ARM y RISC-V | 054 | Clave para entender móviles, portátiles y servidores actuales. |
| Discos HDD y SSD; ZBR | 054 | ZBR cayó en 2025 y hoy solo aparece en un apéndice. |
| Aceleradores: GPU, NPU, TPU y FPGA | 054 | Es tecnología actual y aparece en el banco del tema. |
| Móviles: SoC, ARM, LPDDR, sensores y conectividad | 054 | Es el primer extremo del enunciado («dispositivos móviles»). |
| BYOD y modelos de uso corporativo | 054 | Cayó en 2025 y no aparece en el tema. |
| Tipos de equipo y formatos de servidor (torre, rack, blade, HCI) | 053 | Los formatos cayeron en 2022 y no aparecen en el tema. |
| Superordenadores: FLOPS, TOP500, exaescala | — | Es el otro extremo del enunciado y el banco pregunta por los FLOPS. |
| Ley de Amdahl, aceleración y eficiencia | — | El banco del tema la pregunta y el tema no la explica. |
| Características esenciales del NIST, enumeradas | 055 | Hoy aparecen diluidas en un párrafo. |
| Reparto de responsabilidad por capas, FaaS/serverless y actores del NIST | 055 | Diferencias típicas de test. |
| Marco español: ENS (op.nub.1), CCN-STIC 823, NubeSARA, RGPD y Data Act | 055 (parcial) | Es lo que más se pregunta en supuestos de la AGE. |

## 3. Explicaciones confusas o incompletas

1. **Tanenbaum.** Toda la viñeta de MIMD está en negrita y dice que Tanenbaum «propuso una clasificación más fina», pero no explica cuál. Fue la pregunta 11 de 2022. Hay que explicar la división entre multiprocesadores (memoria compartida, fuertemente acoplados) y multicomputadores (memoria propia y paso de mensajes, débilmente acoplados).
2. **Modelos de memoria.** Solo aparecen UMA y NUMA. Faltan COMA y la memoria distribuida sin espacio de direcciones común. Sin ellas no se entiende la diferencia entre multiprocesador y clúster.
3. **Datos sueltos dentro de la explicación de la CPU.** «Microdato de interfaz: el conector USB Type-C dispone de 24 contactos» y la frase sobre el registro de instrucción aparecen a mitad del párrafo de componentes, sin contexto. Deben ir donde tienen sentido: el USB-C en los buses y el registro de instrucción en el ciclo de instrucción.
4. **Referencias internas incomprensibles.** «El A1 052 destaca tres piezas» remite a un código de fuente que no significa nada para quien estudia.
5. **Grid.** Se dice qué no es («no debe estudiarse como si sustituyera al cloud»), pero no qué es: organizaciones virtuales, middleware tipo Globus y ejemplos.
6. **Edge computing.** Está metido en el párrafo que define la nube. Necesita su propio lugar y su relación con la nube.
7. **Cloud.** Las cinco características esenciales del NIST aparecen mezcladas en prosa. No hay tabla de quién gestiona cada capa en IaaS, PaaS y SaaS. Las funciones (FaaS) aparecen solo como «otros modelos».
8. **Virtualización.** Explica bien los hipervisores de tipo 1 y 2, pero no la paravirtualización ni la virtualización asistida por hardware. Conviene remitir a B4-T06 (CPD y virtualización) para no duplicar.

## 4. Contenido fuera de lugar o desactualizado

- **Apéndice «Microdatos oficiales añadidos».**
  - Dice que ZBR «apareció en la OEP 2025 con plantilla provisional», pero la plantilla de 2025 ya es definitiva. Además, ZBR debería explicarse en el apartado de discos.
  - La «concurrencia global» corresponde a la pregunta 29 de 2024, que está clasificada en B2-T02 (sistemas operativos), no en este tema.
- **Resúmenes repetidos.** El «Resumen II.01» y el «Resumen de repaso» repiten casi lo mismo con otras palabras.

## 5. Errores de las fuentes que no hay que trasladar

El tema actual evita algunos de estos errores. La propuesta los corrige de forma explícita, porque son justo las trampas que pone el examen.

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 052 | «Mainframes o superordenadores», como sinónimos | Son equipos distintos: el mainframe prioriza transacciones, E/S y continuidad; el superordenador, el cálculo. |
| 052 | La memoria distribuida es «NUMA» | Si no hay espacio de direcciones común, es un multicomputador con paso de mensajes. En NUMA la memoria está repartida físicamente, pero es compartida lógicamente. |
| 052 | La memoria compartida distribuida «engloba UMA y NUMA» | La memoria compartida distribuida es memoria físicamente repartida con un espacio lógico común. No engloba UMA. |
| 054 | RISC ejecuta «un ciclo por instrucción» | Es un objetivo ideal que se acerca mediante segmentación, no una propiedad garantizada. |
| 054 | PCIe agrupa «entre 1 y 32 líneas» | En la práctica, x1, x2, x4, x8 y x16. |
| 054 | USB 1.0 a 1,5 Mbit/s | USB 1.x tiene dos velocidades: 1,5 Mbit/s (low speed) y 12 Mbit/s (full speed). |
| 055 | AWS Lambda es PaaS | Es FaaS (serverless): se despliegan funciones, no aplicaciones. |
| 055 | Heroku es de código abierto | Es un PaaS propietario de Salesforce. |
| 055 | La nube híbrida es «al menos una privada y una pública» | Según el NIST, son dos o más infraestructuras distintas (privada, comunitaria o pública) unidas por tecnología que permite la portabilidad. |
| 055 | Gaia-X es una nube comunitaria | Es un marco europeo de federación de datos y servicios, no una nube comunitaria en el sentido del NIST. |
| 055 | Plataforma libre «Nebula» con módulos Cosmos, Nova, Glance… | Nebula fue la plataforma de la NASA cuyo componente de cómputo dio origen a Nova, de OpenStack. No es una plataforma vigente. OpenNebula es otro proyecto. |
| 055 | «Modelos de negocio»: proveedor, intermediario, habilitador y auditor | La arquitectura de referencia del NIST (SP 500-292) define cinco actores: consumidor, proveedor, auditor, intermediario (broker) y transportista (carrier). |
| 055 | Acuerdo marco de servicios cloud «previsto para 2023» | Hay que comprobar su vigencia antes del examen. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE:**
  1. Base tecnológica.
  2. Del móvil al superordenador.
  3. Arquitecturas escalables y de altas prestaciones.
  4. Nube.
- **Explicar antes de resumir.** Cada concepto va con su definición, su contraste con el concepto vecino y un ejemplo.
- **Integrar lo que ha caído en el INAP** donde se explica, y no en un apéndice.
- **Remitir a otros temas en vez de duplicarlos:**
  - Sistemas operativos: B2-T02.
  - Contenedores: B2-T07.
  - Almacenamiento: B4-T05.
  - CPD y virtualización: B4-T06.
  - Gestión de móviles: B4-T15.
- **No incluir datos coyunturales como reglas.** Los puestos del TOP500 o las cuotas de mercado se citan con fecha o no se citan.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 20/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T01.md`](../../content/fork-topics/B2-T01.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto y el estado «pendiente de revisión».
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.01) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.

Antes del examen conviene comprobar:

- El estado del acuerdo marco de servicios en la nube de la DGRCC.
- La numeración vigente de las guías CCN-STIC de configuración segura de cada proveedor.
- Los plazos del Reglamento de Datos (UE) 2023/2854 sobre cambio de proveedor.
