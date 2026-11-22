# Diagnóstico del tema B2-T07

**Tema:** Modelo de desarrollo de aplicaciones basado en contenedores y microservicios. Arquitectura y soluciones. Despliegue, monitorización y escalado.

**Revisado:** 22/11/2026 · Revisión del fork, redactada con ayuda de IA. No es material oficial.

**Material consultado**

- Tema actual: `content/topics/B2-T07.md` (apuntes V2.1 del 23/09/2026 y resumen maestro de repaso). El propio tema declara como base «A1 065 + 097 + 100 + 132 y RELEASE Microservicios».
- Resúmenes PreparaTIC leídos en la carpeta de Drive:
  - 065 · Arquitectura de desarrollo en la web (edición 29, actualizado a 13/04/2023). Se usan los apartados de microservicios, pasarela de API, contenedores y nube.
  - 097 · Modelos de integración continua. Herramientas y sus aplicaciones (edición 28, actualizado a 23/01/2022).
  - 100 · La migración de aplicaciones. Gestión de la configuración y de versiones. Gestión de entornos (edición 27, actualizado a 09/10/2020). Solo es pertinente la gestión de entornos; el resto corresponde a B3-T08 y B4-T04.
  - 132 · Virtualización de sistemas y de centros de datos (versión 30.1, actualizado a 18/09/2024).
- Las 3 preguntas oficiales INAP clasificadas en B2-T07 (2019, 2022 y 2025), las 10 relacionadas que el INAP clasificó en B3-T06, B3-T08, B4-T04 y B4-T06, y las 20 preguntas IA del banco del tema.
- Para los datos de versiones: notas de versión y blog oficial de Kubernetes (consultados el 22/11/2026).

**No revisado a fondo:** las carpetas «Doc adicional» de los temas 065, 097, 100 y 132.

## 1. Conclusión

El tema actual es de los mejores del bloque. Es correcto y actual, tiene buenos contrastes (imagen frente a contenedor, Pod frente a contenedor, Service frente a microservicio, *readiness* frente a *liveness*) y ya recoge la respuesta de las tres preguntas INAP. Pero sigue siendo **un esquema**: casi todo son enumeraciones sin explicación.

- Los **contenedores** no se explican por dentro. Faltan los *namespaces* y *cgroups* de Linux, los tres estándares OCI, los entornos de ejecución (runc, containerd, CRI-O) y los tipos de almacenamiento de Docker.
- Los **microservicios** se definen, pero faltan sus características (Lewis y Fowler), los patrones habituales (descubrimiento de servicios, pasarela, *sidecar*, malla de servicios, saga) y la aplicación de doce factores.
- **Kubernetes** está bien enumerado, pero faltan los tipos de Service, el almacenamiento persistente, RBAC, las políticas de red, los estándares de seguridad de Pods, Helm y los operadores.
- La **monitorización** no nombra herramientas (Prometheus, Grafana, OpenTelemetry) ni los métodos de las cuatro señales doradas, RED y USE.
- El **escalado** no explica cómo calcula el HPA ni menciona el escalado por eventos (KEDA).
- No hay contexto **DevOps**, aunque el INAP lo pregunta en B3-T06.

Las 3 preguntas INAP del tema se responden con el texto actual, pero la de 2025 (`hostPID`) solo con una frase añadida al final del apartado de seguridad, sin explicar por qué no son correctos los distractores (`privileged`, `allowPrivilegeEscalation`, `hostPath`).

Además, hay un dato que ha cambiado: el controlador **Ingress NGINX** se retiró en marzo de 2026 y Kubernetes recomienda migrar a **Gateway API**. El tema no lo dice.

## 2. Preguntas INAP del tema y relacionadas

| Pregunta | Qué pide | Estado en el tema actual |
| --- | --- | --- |
| 2019 · 27 | Mecanismo preferido de Docker para persistir datos: volúmenes | Cubierta, dentro de un párrafo entero en negrita. |
| 2022 · 23 | Cuándo usar un registro de contenedores público: pequeños proyectos de código abierto | Cubierta en el mismo párrafo. |
| 2025 · 31 | Configuración que permite a un contenedor ver los procesos del nodo: `hostPID: true` | Una frase al final del apartado de seguridad; no explica los distractores. |

Preguntas relacionadas que el INAP clasificó en otros temas:

| Pregunta | Tema de clasificación | Qué pide |
| --- | --- | --- |
| 2019 · 52 | B3-T06 | Afirmación correcta sobre DevOps: la infraestructura como código |
| 2022 · 22 | B3-T06 | Significado de CI/CD |
| 2022 · 54 | B3-T08 | Tipo de migración de aplicaciones que no existe (*reprompting*) |
| 2022 · 81 | B4-T06 | Hipervisor de tipo 2 |
| 2024 · 55 | B3-T06 | Qué es Jenkins |
| 2024 · 56 | B3-T06 | Herramienta basada en el POM: Maven |
| 2024 · 79 | B4-T04 | Qué es la pila ELK |
| 2024 · 82 | B4-T06 | Hipervisor de tipo 1 |
| 2025 · 57 | B3-T06 | Documentación como código |
| 2025 · 80 | B4-T04 | Fichero YAML de Ansible con las tareas: *playbook* |

## 3. Qué falta respecto al enunciado y a las fuentes

| Falta en el tema | Está en las fuentes | Por qué importa |
| --- | --- | --- |
| Virtualización por *hardware* frente a virtualización del sistema operativo; tipos de hipervisor | 132 | Contexto de los contenedores; preguntas 2022 · 81 y 2024 · 82. |
| Historia (chroot, jails, zonas, LXC, Docker, OCI) | 132 (parcial) | Explica por qué los contenedores no son nuevos. |
| Mecanismos del núcleo: *namespaces*, *cgroups*, *capabilities*, seccomp | — | Base técnica del aislamiento y de la pregunta 2025 · 31. |
| Las tres especificaciones OCI (imagen, ejecución, distribución) y los entornos de ejecución | — | El tema solo cita «OCI». |
| Dockerfile, capas, construcción en varias etapas | 132 (parcial) | Construcción de imágenes. |
| Tipos de almacenamiento en Docker: volúmenes, montajes enlazados y tmpfs | — | Pregunta 2019 · 27 y sus distractores. |
| Docker Compose | 132 | Herramienta habitual para varios contenedores. |
| Características de los microservicios (Lewis y Fowler, 2014), ley de Conway y contextos delimitados | 065 (parcial) | Definición de examen. |
| Patrones: pasarela de API, BFF, descubrimiento de servicios, *sidecar*, malla de servicios, estrangulador | 065 (parcial) | «Arquitectura y soluciones». |
| La aplicación de doce factores | — | Criterio clásico de diseño para contenedores. |
| *Serverless* y funciones como servicio | 065 | Alternativa de despliegue. |
| Componentes del plano de control con su función (etcd, kube-apiserver…) y del nodo | — | El tema los nombra sin explicar. |
| Tipos de Service, Gateway API y retirada de Ingress NGINX | — | Dato actual. |
| Volúmenes persistentes (PV, PVC, StorageClass) | — | Persistencia en Kubernetes. |
| RBAC, NetworkPolicy, estándares de seguridad de Pods (Privileged, Baseline, Restricted) | — | Pregunta 2025 · 31. |
| Clases de calidad de servicio de los Pods | — | Consecuencia de *requests* y *limits*. |
| Helm, Kustomize, operadores y distribuciones (OpenShift, EKS, AKS, GKE) | 132 (parcial) | «Soluciones». |
| Integración continua, entrega continua y despliegue continuo con sus herramientas | 097 | Preguntas 2022 · 22, 2024 · 55 y 2024 · 56. |
| DevOps, DevSecOps, SRE e infraestructura como código | 097 | Preguntas 2019 · 52 y 2025 · 80. |
| Entornos (desarrollo, integración, preproducción, producción) | 100 | Despliegue. |
| Parámetros del despliegue progresivo (*maxSurge*, *maxUnavailable*), pruebas A/B, lanzamiento oscuro y *feature flags* | 097 (parcial) | Estrategias de despliegue. |
| Principios de GitOps (OpenGitOps) y herramientas (Argo CD, Flux) | — | El tema lo define en una frase. |
| Herramientas de monitorización (Prometheus, Grafana, ELK/EFK, Loki, Jaeger, OpenTelemetry) | 097 (parcial) | Pregunta 2024 · 79. |
| Señales doradas, RED y USE; SLI, SLO y presupuesto de error | 097 (SRE, parcial) | Monitorización. |
| Fórmula del HPA, VPA, escalado del clúster, KEDA y redimensionado en caliente | — | Escalado. |
| Cadena de suministro: SBOM (SPDX, CycloneDX), firma (Sigstore), SLSA, análisis de imágenes | — | Seguridad actual. |

## 4. Explicaciones confusas o mal formateadas

1. **Negrita accidental.** El párrafo de imagen, registro, OCI y volúmenes (apartado 2) y la actualización de Kubernetes (apartado 1) están enteros en negrita, como pasaba en los temas anteriores.
2. **Referencias internas.** «Las fuentes A1 aportan…» y «A1 065 + 097 + 100 + 132 y RELEASE Microservicios» no dicen nada a quien estudia.
3. **Versión de Kubernetes repetida.** La misma nota sobre las ramas 1.37, 1.36 y 1.35 aparece tres veces (apartado 1, enfoque para supuesto y «Actualización 2026»).
4. **Respuestas de examen sueltas.** La respuesta de la 2025 · 31 aparece al final del apartado de seguridad, sin explicar los *namespaces* ni los distractores.
5. **Resúmenes repetidos.** «Resumen II.07», «Test» y «Resumen de repaso» repiten lo mismo con otras palabras.

## 5. Errores de las fuentes que no hay que trasladar

| Fuente | Dice | Lo correcto |
| --- | --- | --- |
| 065 | Los contenedores permiten la ejecución de una aplicación «en cualquier sistema operativo» | Un contenedor **comparte el núcleo del anfitrión**. Un contenedor Linux necesita un núcleo Linux; en Windows o macOS, Docker Desktop lo ejecuta dentro de una máquina virtual Linux. También debe coincidir la arquitectura del procesador (amd64, arm64) o existir una imagen para ella. |
| 065 | Microservicios: «separar claramente la presentación (*frontend*)… de los distintos servicios (*backend*)» | Los microservicios **descomponen el *back-end*** en servicios pequeños, alineados con capacidades de negocio, con datos propios y **despliegue independiente**. La separación entre *front-end* y *back-end* existe también en un monolito. |
| 132 | Contenedores: «todas deben utilizar el mismo sistema operativo que el servidor anfitrión» | Deben usar el mismo **núcleo**, no la misma distribución. En un anfitrión Red Hat se pueden ejecutar contenedores con Ubuntu o Alpine. |
| 132 | Portabilidad: el contenedor «se puede desplegar en cualquier otro sistema que… tenga instalado Docker» | Exige un núcleo compatible y la misma arquitectura de procesador. Además, la imagen sigue el estándar OCI y la pueden ejecutar otros motores (Podman, containerd, CRI-O), no solo Docker. |
| 132 | Herramientas de gestión: «Docker Compose y Kubernetes… Docker Swarm, **Moby**» | **Moby** es el proyecto de código abierto del que se construye Docker, no una herramienta para gestionar contenedores. |
| 132 | El auge de los contenedores, «desde 2014», con Docker | Docker se publicó en **marzo de 2013** (la versión 1.0, en junio de 2014). Antes ya existían chroot (1979), FreeBSD jails (2000), las zonas de Solaris (2004) y LXC (2008). |
| 132 | Paravirtualización: «ralentiza la ejecución… para que el hipervisor recompile continuamente el sistema operativo invitado… Solución: virtualización asistida por *hardware*» | Eso describe la **traducción binaria** de la virtualización completa. En la paravirtualización el núcleo invitado se **modifica** para llamar al hipervisor (*hypercalls*) y evitar esa traducción. La asistencia por *hardware* (Intel VT-x, AMD-V) resuelve el problema de la virtualización completa. |
| 132 | Virtualización completa: «se logra un rendimiento muy elevado» y a la vez «genera una sobrecarga considerable» | Es contradictorio. Con traducción binaria la sobrecarga es alta; con asistencia por *hardware* el rendimiento es cercano al nativo. |
| 097 | SCM = «*System Control Management*» | SCM significa ***Source Control Management*** (control de código fuente) o *Software Configuration Management*. |
| 097 | Jenkins «utiliza archivos JenkinsFile con una sintaxis yaml» | El **Jenkinsfile** usa un lenguaje basado en **Groovy**, con sintaxis declarativa o de *script*. YAML lo usa el complemento *Configuration as Code* para configurar el propio Jenkins. |
| 097 | Jenkins «llame a Sonar para ejecutar los test» | **SonarQube no ejecuta pruebas**: analiza el código y lee los informes de cobertura que generan las herramientas de prueba (JUnit con JaCoCo, por ejemplo). |
| 097 | Ansible, «herramienta… creada por Red Hat» | La creó Michael DeHaan en 2012; **Red Hat la compró en 2015**. |
| 097 | SRE: «un sistema en el que el desarrollo controla las operaciones», «implementado con las mejores prácticas integradas en el *hardware*», «coloca al equipo de desarrollo a la cabeza» | SRE consiste en **aplicar la ingeniería de *software* a las operaciones**. Lo hacen ingenieros dedicados, con objetivos de nivel de servicio (SLO), presupuestos de error y reducción del trabajo manual repetitivo. No es que el equipo de desarrollo dirija las operaciones, ni tiene que ver con el *hardware*. |
| 097 | *Dog fooding* como estrategia de despliegue «técnicamente similar» a azul-verde | El *dogfooding* es la práctica de usar internamente el propio producto. Se puede combinar con cualquier estrategia de despliegue, pero no es una estrategia en sí. |
| 097 | *Quality gate*: «concepto asociado a la herramienta SonarQube» | Es un concepto general de los *pipelines*: un umbral que bloquea el avance si no se cumple. SonarQube lo usa con ese nombre, pero no es exclusivo suyo. |
| 097 | Servidores de integración continua: CruiseControl, Continuum, Solano CI, Team Foundation Build | CruiseControl y Continuum están abandonados y Solano CI cerró. Team Foundation Server es hoy **Azure DevOps Server**, con Azure Pipelines. Los actuales: Jenkins, GitLab CI/CD, GitHub Actions, Azure Pipelines, Tekton. |

## 6. Criterios de la propuesta

- **Seguir el enunciado del BOE**, en este orden:
  1. De la virtualización a los contenedores.
  2. Contenedores: mecanismos, imágenes, OCI, Docker y almacenamiento.
  3. Microservicios: características, cuándo usarlos y patrones.
  4. Kubernetes: arquitectura y objetos.
  5. Soluciones: distribuciones, servicios gestionados, Helm, operadores, malla de servicios y *serverless*.
  6. Despliegue: DevOps, CI/CD, entornos, estrategias y GitOps.
  7. Monitorización y observabilidad.
  8. Escalado.
  9. Seguridad de contenedores y cadena de suministro.
- **Cubrir lo que el INAP clasifica en B3-T06 y B4-T04 solo en lo que es despliegue.** CI/CD, DevOps, Jenkins, Maven y Ansible se explican lo necesario para el *pipeline*; las herramientas en detalle se remiten a esos temas.
- **No memorizar versiones.** Se dan los hitos estables (cuándo algo pasó a estable o se retiró) y la regla de soporte de Kubernetes, no números de parche.
- **Explicar antes de resumir.** Cada concepto va con su definición, su contraste y un ejemplo de la Administración.
- **Cubrir las 3 preguntas INAP** en el apartado donde se explica cada concepto, y listarlas al final con su respuesta, junto con las 10 relacionadas.
- **Remitir a otros temas en vez de duplicarlos:**
  - Cliente-servidor, SOA, servicios web, REST y patrones de resiliencia: B2-T06.
  - Nube (IaaS, PaaS, SaaS): B2-T01.
  - Metodologías ágiles y DevOps en detalle: B3-T06.
  - Pruebas: B3-T07.
  - Gestión de la configuración, control de versiones y herramientas de operación automática: B4-T04.
  - Virtualización de servidores y alta disponibilidad: B4-T06.
- **No copiar texto de PreparaTIC.** La propuesta es redacción propia a partir de los hechos, porque el fork es público.

## 7. Integración y verificaciones pendientes

**Integrada el 22/11/2026 como sustitución del tema.**

- El texto vigente está en [`content/fork-topics/B2-T07.md`](../../content/fork-topics/B2-T07.md).
- La sustitución se declara en [`content/topic-overrides.json`](../../content/topic-overrides.json), con la huella del texto, el estado «pendiente de revisión» y el diagrama de Kubernetes del tema anterior.
- `scripts/topic_overrides.py` genera el Markdown y el HTML del tema.
- Los apuntes V2.1 originales (II.07) se conservan sin cambios en el corpus, y el validador sigue comprobando su hash.

Para marcar el tema como revisado, cambia `reviewStatus` a `reviewed` en el manifiesto y ejecuta `python3 scripts/topic_overrides.py`.
