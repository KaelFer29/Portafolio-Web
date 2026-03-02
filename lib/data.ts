// ============================================================
// ARCHIVO DE DATOS CENTRALIZADO
// Edita este archivo para actualizar toda la informacion de tu portafolio.
// No necesitas tocar los componentes.
// ============================================================

export const personalInfo = {
  name: "Kael Fernández Hernández",
  title: "FullStack Developer and Computer Science Student",
  location: "Chile",
  university: "Pontificia Universidad Católica de Chile",
  careerYear: "4to año",
  career: "Lic. en Ingeniería en Ciencias de la Computación",
  email: "kaeldedios@gmail.com",
  available: true,
  bio: "Estudiante de cuarto año de Licenciatura en Ingeniería en Ciencias de la Computación con experiencia práctica en desarrollo FullStack. Apasionado por construir soluciones de software elegantes, escalables y con impacto real.",
  shortBio:
    "Desarrollo software que resuelve problemas reales. Me apasiona la intersección entre la teoría de CS y la ingeniería de software práctica.",
  aboutParagraphs: [
    "Soy un desarrollador FullStack y estudiante de Ciencias de la Computación en mi cuarto año de carrera. Mi formación me ha dado una sólida base en algoritmos, estructuras de datos, sistemas operativos y teoría de la computación, mientras que mi experiencia práctica me ha permitido aplicar estos conocimientos en proyectos reales.",
    "Durante mi práctica profesional y proyectos académicos, he trabajado con diversas tecnologías tanto en frontend como backend, siempre buscando escribir código limpio, mantenible y eficiente. Me interesa especialmente el diseño de sistemas, la optimización de rendimiento y las arquitecturas escalables.",
    "Fuera del código, disfruto aprender sobre nuevas tecnologías, contribuir a proyectos open source y compartir conocimiento con la comunidad de desarrolladores.",
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
      "Desarrollo de features para la plataforma principal de la empresa. Implementación de APIs RESTful, optimización de queries en base de datos y desarrollo de componentes de interfaz de usuario. Colaboración en equipo usando metodologías ágiles.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
    type: "internship",
  },
  {
    company: "Proyecto Freelance",
    role: "Desarrollador FullStack",
    period: "Jul 2024 - Dic 2024",
    description:
      "Diseño e implementación de una aplicación web completa para un cliente. Arquitectura de la base de datos, desarrollo del backend API y construcción del frontend responsive.",
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
      "Aplicación web FullStack para gestión de recursos con autenticación, dashboard interactivo y reportes en tiempo real.",
    longDescription:
      "Plataforma completa de gestión de recursos desarrollada como proyecto principal durante mi práctica profesional. Incluye sistema de autenticación seguro, dashboard con visualizaciones de datos en tiempo real, gestión CRUD completa y generación de reportes exportables. La arquitectura sigue principios de clean architecture con separación clara de responsabilidades.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Autenticación JWT con refresh tokens",
      "Dashboard con gráficos en tiempo real",
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
      "Herramienta interactiva para visualizar algoritmos de ordenamiento, búsqueda y grafos con animaciones paso a paso.",
    longDescription:
      "Aplicación educativa que permite visualizar el funcionamiento interno de diversos algoritmos clásicos de Ciencias de la Computación. Incluye algoritmos de ordenamiento (QuickSort, MergeSort, HeapSort), búsqueda en grafos (BFS, DFS, Dijkstra) y estructuras de datos (árboles AVL, hash tables). Cada algoritmo se presenta con animaciones paso a paso y análisis de complejidad.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    highlights: [
      "Visualización paso a paso de 15+ algoritmos",
      "Controles de velocidad y tamaño de input",
      "Análisis de complejidad en tiempo real",
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
      "Aplicación de mensajería en tiempo real con WebSockets, salas de chat y notificaciones push.",
    longDescription:
      "Sistema de chat que soporta comunicación en tiempo real mediante WebSockets. Permite crear salas de chat públicas y privadas, enviar mensajes con formato, compartir archivos y recibir notificaciones push. El backend maneja la concurrencia con un sistema de eventos eficiente.",
    technologies: [
      "React",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Redis",
      "Tailwind CSS",
    ],
    highlights: [
      "Mensajería en tiempo real con WebSockets",
      "Salas públicas y privadas",
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
      "Proyecto académico que implementa una arquitectura de microservicios completa. Incluye un API Gateway centralizado, service discovery automático, circuit breaker pattern, y monitoreo distribuido con métricas y logs centralizados. Cada servicio se despliega de forma independiente usando contenedores Docker.",
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
      "Service discovery automático",
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
