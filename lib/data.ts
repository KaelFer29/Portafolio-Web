// ============================================================
// ARCHIVO DE DATOS CENTRALIZADO
// Edita este archivo para actualizar toda la informacion de tu portafolio.
// No necesitas tocar los componentes.
// ============================================================

export const personalInfo = {
  name: "Kael Fernández Hernández",
  title: "FullStack Developer and Computer Science Student",
  location: "Chile",
  university: "Universidad de Chile",
  careerYear: "4to año",
  career: "Lic. en Ingenieria en Ciencias de la Computacion",
  email: "kaeldedios@gmail.com",
  available: true,
  bio: "Estudiante de cuarto ano de Licenciatura en Ingenieria en Ciencias de la Computacion con experiencia practica en desarrollo FullStack. Apasionado por construir soluciones de software elegantes, escalables y con impacto real.",
  shortBio:
    "Desarrollo software que resuelve problemas reales. Me apasiona la interseccion entre la teoria de CS y la ingenieria de software practica.",
  aboutParagraphs: [
    "Soy un desarrollador FullStack y estudiante de Ciencias de la Computacion en mi cuarto ano de carrera. Mi formacion me ha dado una solida base en algoritmos, estructuras de datos, sistemas operativos y teoria de la computacion, mientras que mi experiencia practica me ha permitido aplicar estos conocimientos en proyectos reales.",
    "Durante mi practica profesional y proyectos academicos, he trabajado con diversas tecnologias tanto en frontend como backend, siempre buscando escribir codigo limpio, mantenible y eficiente. Me interesa especialmente el diseno de sistemas, la optimizacion de rendimiento y las arquitecturas escalables.",
    "Fuera del codigo, disfruto aprender sobre nuevas tecnologias, contribuir a proyectos open source y compartir conocimiento con la comunidad de desarrolladores.",
  ],
  socialLinks: {
    github: "https://github.com/KaelFer29",
    linkedin: "https://linkedin.com/in/kael-fernandez",
    email: "mailto:kaeldedios@gmail.com",
  },
  resumeUrl: "/resume.pdf",
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  type: "work" | "internship" | "freelance"
}

export const experiences: Experience[] = [
  {
    company: "Empresa Tech",
    role: "Practicante de Desarrollo FullStack",
    period: "Ene 2025 - Mar 2025",
    description:
      "Desarrollo de features para la plataforma principal de la empresa. Implementacion de APIs RESTful, optimizacion de queries en base de datos y desarrollo de componentes de interfaz de usuario. Colaboracion en equipo usando metodologias agiles.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
    type: "internship",
  },
  {
    company: "Proyecto Freelance",
    role: "Desarrollador FullStack",
    period: "Jul 2024 - Dic 2024",
    description:
      "Diseno e implementacion de una aplicacion web completa para un cliente. Arquitectura de la base de datos, desarrollo del backend API y construccion del frontend responsive.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    type: "freelance",
  },
]

export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  highlights: string[]
  image: string
  demoUrl?: string
  repoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "proyecto-plataforma-web",
    title: "Plataforma Web de Gestion",
    description:
      "Aplicacion web FullStack para gestion de recursos con autenticacion, dashboard interactivo y reportes en tiempo real.",
    longDescription:
      "Plataforma completa de gestion de recursos desarrollada como proyecto principal durante mi practica profesional. Incluye sistema de autenticacion seguro, dashboard con visualizaciones de datos en tiempo real, gestion CRUD completa y generacion de reportes exportables. La arquitectura sigue principios de clean architecture con separacion clara de responsabilidades.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Autenticacion JWT con refresh tokens",
      "Dashboard con graficos en tiempo real",
      "API RESTful documentada con Swagger",
      "Deploy automatizado con CI/CD",
    ],
    image: "/projects/plataforma-web.jpg",
    demoUrl: "https://demo.ejemplo.com",
    repoUrl: "https://github.com/tu-usuario/plataforma-web",
    featured: true,
  },
  {
    slug: "algoritmos-visualizer",
    title: "Algoritmos Visualizer",
    description:
      "Herramienta interactiva para visualizar algoritmos de ordenamiento, busqueda y grafos con animaciones paso a paso.",
    longDescription:
      "Aplicacion educativa que permite visualizar el funcionamiento interno de diversos algoritmos clasicos de Ciencias de la Computacion. Incluye algoritmos de ordenamiento (QuickSort, MergeSort, HeapSort), busqueda en grafos (BFS, DFS, Dijkstra) y estructuras de datos (arboles AVL, hash tables). Cada algoritmo se presenta con animaciones paso a paso y analisis de complejidad.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    highlights: [
      "Visualizacion paso a paso de 15+ algoritmos",
      "Controles de velocidad y tamano de input",
      "Analisis de complejidad en tiempo real",
      "Responsive y accesible",
    ],
    image: "/projects/algoritmos-visualizer.jpg",
    repoUrl: "https://github.com/tu-usuario/algo-visualizer",
    featured: true,
  },
  {
    slug: "sistema-chat",
    title: "Sistema de Chat en Tiempo Real",
    description:
      "Aplicacion de mensajeria en tiempo real con WebSockets, salas de chat y notificaciones push.",
    longDescription:
      "Sistema de chat que soporta comunicacion en tiempo real mediante WebSockets. Permite crear salas de chat publicas y privadas, enviar mensajes con formato, compartir archivos y recibir notificaciones push. El backend maneja la concurrencia con un sistema de eventos eficiente.",
    technologies: [
      "React",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Redis",
      "Tailwind CSS",
    ],
    highlights: [
      "Mensajeria en tiempo real con WebSockets",
      "Salas publicas y privadas",
      "Sistema de notificaciones push",
      "Manejo eficiente de concurrencia",
    ],
    image: "/projects/sistema-chat.jpg",
    repoUrl: "https://github.com/tu-usuario/chat-system",
    featured: true,
  },
  {
    slug: "api-microservicios",
    title: "API de Microservicios",
    description:
      "Arquitectura de microservicios con gateway API, service discovery y monitoreo distribuido.",
    longDescription:
      "Proyecto academico que implementa una arquitectura de microservicios completa. Incluye un API Gateway centralizado, service discovery automatico, circuit breaker pattern, y monitoreo distribuido con metricas y logs centralizados. Cada servicio se despliega de forma independiente usando contenedores Docker.",
    technologies: [
      "Go",
      "gRPC",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
    ],
    highlights: [
      "API Gateway con rate limiting",
      "Service discovery automatico",
      "Circuit breaker pattern",
      "Monitoreo con Prometheus y Grafana",
    ],
    image: "/projects/api-microservicios.jpg",
    repoUrl: "https://github.com/tu-usuario/microservices",
    featured: false,
  },
]

export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Go",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    name: "Bases de Datos",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL"],
  },
  {
    name: "DevOps y Herramientas",
    skills: ["Git", "Docker", "Linux", "CI/CD", "AWS", "Vercel"],
  },
  {
    name: "CS Fundamentals",
    skills: [
      "Algoritmos y Estructuras de Datos",
      "Sistemas Operativos",
      "Redes de Computadores",
      "Bases de Datos Relacionales",
      "Teoria de la Computacion",
      "Ingenieria de Software",
    ],
  },
]

export const navLinks = [
  { label: "Sobre Mi", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
]
