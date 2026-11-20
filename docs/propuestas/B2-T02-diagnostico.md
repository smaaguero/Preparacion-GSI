# Diagnóstico del tema B2-T02

**Tema:** Conceptos y fundamentos de los sistemas operativos. Características técnicas, funcionales y de administración: Windows, Linux, Unix y otros. Sistemas operativos para dispositivos móviles.

**Revisado:** 20/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T02.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso).
- Resúmenes PreparaTIC citados por el propio tema, leídos en la carpeta de Drive:
  - 059 · Conceptos y fundamentos de sistemas operativos. Evolución y tendencias (v31.1, 10/03/2026).
  - 060 · Sistemas operativos Unix-Linux (actualizado a 29/09/2020).
  - 061 · Sistemas operativos Microsoft (v30.2, 06/09/2024).
  - 062 · Otros sistemas operativos: OS X, iOS, Android, z/OS. Móviles (v30.1, 06/09/2024).
- Las 11 preguntas oficiales INAP clasificadas en B2-T02 (2022, 2024 y 2025) y las 80 preguntas del banco curado del tema.

**No revisado a fondo:** las carpetas «Doc adicional» de los temas 060, 061 y 062. No son resúmenes de PreparaTIC, sino material de apoyo de terceros: temas de oposiciones de la Xunta, exportaciones de Wikipedia, un libro sobre Windows Server 2016 y manuales de Linux, z/OS, macOS e iOS. Las fechas más dudosas se han comprobado en fuentes públicas: la retirada de ReiserFS, la publicación de Windows Server 2025 y la de POSIX.1-2024.

## 1. Conclusión

El tema actual no contiene errores graves y sus contrastes son útiles: proceso frente a hilo, paginación frente a segmentación, kernel monolítico frente a microkernel, o servicio de Windows frente a daemon de Unix. El problema es el mismo que tenía B2-T01: **es una lista de términos, no una explicación**. Ocupa unos 10 KB para un enunciado que abarca la teoría de sistemas operativos y cuatro familias de sistemas.

La consecuencia es medible: **con el tema actual no se pueden responder 5 de las 11 preguntas que el INAP ha puesto de este tema**, y una sexta solo de forma parcial.

Las fuentes de PreparaTIC tampoco sirven tal cual. La 060 no se actualiza desde 2020, y las cuatro arrastran errores y datos caducados (sección 5).

## 2. Preguntas INAP que el tema no permite responder

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2022 · 14 | El kernel de Windows no tiene un hilo central de planificación | No aparece. |
| 2022 · 69 | Planificación no apropiativa | No distingue apropiativa y no apropiativa. |
| 2022 · 70 | Carga de páginas por demanda frente a anticipada | No aparece. |
| 2024 · 29 | Características de un SO distribuido (concurrencia global) | Solo nombra «de red y distribuidos». |
| 2025 · 74 | Bit de modificado (*dirty bit*) en la tabla de páginas | No aparece. |
| 2024 · 73 | Round Robin; HRN como distractor | Nombra Round Robin, pero no lo explica. HRN no aparece. |

Sí permite responder las otras cinco: los modos usuario y kernel en UNIX (2022), las distribuciones Linux (2024), el driver (2024), las funciones del SO (2025) y el microkernel (2025).

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| PCB, creación de procesos (fork/exec), estados suspendidos y planificador de medio plazo | 059, 060 | Es la base de toda la gestión de procesos. |
| Criterios de planificación, colas multinivel y HRN | — | Los algoritmos solo se entienden comparando tiempos de espera y de respuesta. |
| Estrategias ante el interbloqueo: prevención, evitación (banquero), detección y «avestruz» | — | Pregunta clásica; el tema solo da las cuatro condiciones. |
| Comunicación entre procesos: tuberías, señales, colas de mensajes, memoria compartida y sockets | 060 | No aparece. |
| Asignación contigua, fragmentación interna y externa | — | Explica por qué se usa la paginación. |
| Bits de la tabla de páginas, carga por demanda, conjunto de trabajo, algoritmo óptimo y anomalía de Belady | 059 (parcial) | Dos preguntas INAP recientes salen de aquí. |
| Técnicas de E/S (programada, interrupciones, DMA), buffering, spooling y planificación de disco | 059, 060 | El tema las nombra sin explicarlas. |
| Métodos de asignación de ficheros, i-nodos, enlaces duros y simbólicos, límites de FAT32 | 060, 061 | Son datos típicos de test. |
| Estructuras por capas y de máquina virtual | 059 | El 059 las usa como clasificación de referencia. |
| Arquitectura de Windows: HAL, kernel, ejecutivo, subsistemas, registro, SID y tokens | 061 | El tema solo da una lista de herramientas de administración. |
| Historia de Unix, POSIX, GNU, FHS, bits setuid, setgid y sticky, umask y señales | 060 | La sección de Unix y Linux tiene dos párrafos. |
| macOS y z/OS | 059, 062 | Son los «otros» del enunciado y el tema solo cita APFS. |
| Arquitectura de Android (capas, ART, componentes, ciclo de vida) y de iOS (capas, firma, jailbreak) | 062 | La parte de móviles es un solo párrafo. |
| Marco público: RD 1112/2018 sobre accesibilidad de apps y medidas del ENS sobre configuración y parcheo | 062 (parcial) | Se aplica en supuestos de la AGE. |

## 4. Explicaciones confusas o mal formateadas

1. **Negrita accidental.** La viñeta de Linux/Unix de la sección 6 y toda la sección 10 (móviles) están en negrita, igual que pasaba con Tanenbaum en B2-T01.
2. **Referencias internas.** «El A1 059, actualizado en marzo de 2026, es una base especialmente útil» remite a un código de fuente que no dice nada a quien estudia.
3. **Conceptos citados en el test sin explicar.** «Driver ≠ firmware» aparece en las claves de test, pero el tema no explica qué es el firmware ni el controlador hardware.
4. **Planificación.** Enumera FCFS, Round Robin, prioridades, SJF y SRT sin decir qué hace cada uno, cuál es apropiativo ni qué problema tiene (efecto convoy, inanición).
5. **Windows.** Mezcla Active Directory, GPO y EDR con el sistema operativo y no explica cómo está construido Windows por dentro.
6. **Resúmenes repetidos.** El «Resumen II.02» y el «Resumen de repaso» repiten lo mismo con otras palabras.
7. **Preguntas del banco fuera de tema.** Las preguntas MAN-GSI-P17-155, 158 y 159 tratan de HPC y cloud (B2-T01), y la 147 de MDM, EMM y UEM (B4-T15). No se tocan en esta revisión; se anotan para reclasificarlas.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 059 | NTFS: «la última versión (septiembre 2020) es 5.1» | La versión de NTFS es la 3.1 desde Windows XP. «5.1» es el número interno de Windows XP. |
| 059 | La segmentación «es más eficiente» porque permite compartir segmentos | Facilita compartir y proteger por unidades lógicas, pero sufre fragmentación externa. Por eso los sistemas actuales se basan en la paginación. |
| 059 | FIFO, NRU, LRU, NFU y LFU como «algoritmos para implementar la gestión de memoria» | Son algoritmos de **reemplazo de páginas**, una parte concreta de la gestión de memoria. |
| 059 | LIFO entre las políticas de planificación | No es un algoritmo clásico de planificación de CPU: provocaría inanición de los procesos más antiguos. |
| 059 | ReiserFS como sistema de ficheros vigente de Linux | Se retiró del kernel en Linux 6.13 (2025). Los actuales son ext4, XFS y Btrfs. |
| 059 | ext2: particiones de hasta 4 TB y ficheros de hasta 2 GB | Los límites dependen del tamaño de bloque (ficheros de 16 GiB a 2 TiB). Los 2 GB eran una limitación antigua de sistemas de 32 bits. |
| 059, 062 | iOS «deriva de macOS, que a su vez está basado en Darwin BSD» | macOS e iOS comparten Darwin, cuyo núcleo XNU combina Mach y componentes BSD. «Darwin BSD» no existe como sistema. |
| 060 | POSIX = «Portable Operating System for UNIX» | POSIX = *Portable Operating System Interface* (IEEE 1003). La versión vigente es POSIX.1-2024. |
| 060 | Linux toma de Minix «la estructura y código del núcleo» | Linux no contiene código de Minix. Minix es un microkernel y Linux un kernel monolítico; de ahí el debate Tanenbaum-Torvalds de 1992. |
| 060 | El kernel tiene «aproximadamente 1,5 millones de líneas» | El dato es de los años noventa. Hoy son decenas de millones. |
| 060 | GNU incluye el «intérprete de comandos bsh» | Es **bash** (*Bourne-Again SHell*). |
| 060 | Los UID inferiores a 100 «tienen privilegios especiales» | Solo el UID 0 (root) tiene privilegios especiales. Los UID bajos se reservan por convención a cuentas de sistema, sin privilegios propios. |
| 060 | «/swap» es un directorio del sistema | No existe un directorio /swap estándar. El intercambio usa una partición o un fichero. |
| 060 | «/usr directorio de usuarios» | /usr contiene programas, bibliotecas y documentación compartidos. Las cuentas de usuario están en /home. |
| 060 | Linux en tiempo real usa «FIFO non-preemptive» | Una tarea SCHED_FIFO no tiene quantum, pero sí la expulsa otra tarea de tiempo real de mayor prioridad. Además, los procesos normales usan hoy EEVDF (antes CFS). |
| 060 | Shells más conocidas: Bourne, C shell y Korn | Falta bash, la shell por defecto de la mayoría de distribuciones, y zsh, la de macOS desde Catalina. |
| 060 | Unity como shell vigente de Ubuntu | Ubuntu la abandonó en 2017 y usa GNOME. |
| 061 | El kernel de Windows se denomina «microkernel» | Windows NT es un kernel **híbrido**: el ejecutivo y los drivers se ejecutan en modo kernel. Llamarlo microkernel lleva a fallar preguntas como la 23 de 2025. |
| 061 | BitLocker To Go llega con Windows 8 | Llegó con Windows 7. |
| 061 | PowerShell 5.1 es la última versión estable | 5.1 es la última versión de *Windows PowerShell*. La vigente es PowerShell 7, multiplataforma y de código abierto. |
| 061 | Windows 10: «la última versión es la 2004 (mayo de 2020)» | La última fue la 22H2, y su soporte terminó el 14/10/2025. |
| 061 | Windows 11 incluye el Subsistema de Windows para Android | Microsoft lo retiró el 5 de marzo de 2025. |
| 061 | Hyper-V 2012: «hasta 8000 nodos por clúster» | Son 64 nodos y 8000 máquinas virtuales por clúster. |
| 061 | Windows Server 2016 incluye las herramientas Sysinternals | Se descargan aparte; no forman parte del sistema. |
| 061 | Windows Server 2025 «se prevé para otoño de 2024» | Está disponible desde noviembre de 2024. |
| 061 | La DACL «se asigna a los objetos creados por el proceso si no se especifica otra» | Eso es la DACL **por defecto** del token de acceso. Una DACL es la lista de ACE que concede o deniega acceso a un objeto; la SACL define la auditoría. |
| 062 | El jailbreak permite instalar iOS en «hardware de terceros» | El jailbreak elimina las restricciones de software de un dispositivo de Apple y rompe su modelo de seguridad. No tiene que ver con instalar iOS en otro hardware. |
| 062 | iOS «se puede actualizar mediante iTunes» | Se actualiza por red (OTA) desde iOS 5. En el Mac, iTunes se sustituyó por el Finder en 2019. |
| 062 | ART compila las apps solo de forma anticipada (AOT) | Desde Android 7 combina JIT y AOT guiada por perfiles de uso. |
| 062 | Las apps Android «también pueden publicarse» en formato AAB | Google Play exige AAB para las apps nuevas desde agosto de 2021. El dispositivo recibe APK generados a partir de él. |
| 062 | «Todas las aplicaciones están escritas en Java o Kotlin» | También pueden incluir código nativo en C/C++ (NDK). |
| 062 | Arquitectura macOS: OpenGL, QuickTime, Carbon y Java 1.4 | OpenGL está obsoleto en favor de Metal, Carbon desapareció con macOS Catalina y Java no se incluye en el sistema. |
| 059–062 | Versiones y cuotas de mercado (Android 15/16, iOS 17/26, macOS Sequoia/Tahoe, z/OS 3.1) | Son datos coyunturales y además se contradicen entre fuentes. La propuesta no los usa como datos de examen. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE:**
  1. Conceptos y fundamentos: funciones, procesos, planificación, concurrencia, memoria, E/S, ficheros y protección.
  2. Características técnicas, funcionales y de administración de Windows, Unix y Linux, y otros (macOS, z/OS).
  3. Sistemas operativos móviles.
- **Explicar antes de resumir.** Cada concepto va con su definición, su contraste con el concepto vecino y, cuando ayuda, un ejemplo resuelto (tiempos de espera FCFS frente a SJF, permisos en octal).
- **Cubrir las 11 preguntas INAP** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta.
- **Remitir a otros temas en vez de duplicarlos:**
  - Hardware y arquitectura: B2-T01.
  - Contenedores: B2-T07.
  - Ciberseguridad general: B2-T13.
  - Licencias y software libre: B2-T14.
  - Almacenamiento y RAID: B4-T05.
  - Virtualización y CPD: B4-T06.
  - Gestión de móviles (MDM, EMM y UEM): B4-T15.
- **No incluir versiones ni cuotas de mercado como datos de examen.** Solo hitos estables con fecha: fin de soporte de Windows 10, requisitos de Windows 11 o el formato AAB.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 20/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T02.md`](../../content/fork-topics/B2-T02.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama de proceso e hilos del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.02) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.

Antes del examen conviene comprobar las versiones vigentes de Windows 11, Windows Server, Android, iOS y z/OS, y si el tribunal ha publicado plantillas nuevas que afecten al tema.
