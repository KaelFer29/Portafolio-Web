// ============================================================
// ARCHIVO DE DATOS CENTRALIZADO
// Edita este archivo para actualizar toda la informacion de tu portafolio.
// No necesitas tocar los componentes.
// ============================================================

export const personalInfo = {
  name: "Kael Fernández Hernández",
  title: "FullStack Developer & Computer Science Student",
  location: "Chile",
  university: "Pontificia Universidad Católica de Chile",
  careerYear: "4to año",
  career: "Lic. en Ingeniería en Ciencias de la Computación",
  email: "kaeldedios@gmail.com",
  available: true,
  bio: "Estudiante de cuarto año de Licenciatura en Ingeniería en Ciencias de la Computación con experiencia práctica en desarrollo FullStack. Recientemente completé mi práctica profesional en la Municipalidad de Vitacura, donde diseñé e implementé sistemas de gestión desde cero. Apasionado por construir soluciones escalables, automatizadas y con impacto real.",
  shortBio:
    "Desarrollo software que resuelve problemas reales. Especializado en arquitecturas FullStack, infraestructura como código y DevOps.",
  aboutParagraphs: [
    "Soy un desarrollador FullStack y estudiante de Ciencias de la Computación en mi cuarto año de carrera en la Pontificia Universidad Católica de Chile. Mi formación me ha dado una sólida base en algoritmos, estructuras de datos, sistemas operativos y teoría de la computación, mientras que mi experiencia práctica me ha permitido aplicar estos conocimientos en proyectos reales con impacto institucional.",
    "Durante mi práctica profesional en la Municipalidad de Vitacura, asumí la responsabilidad técnica completa del Sistema de Calificaciones de Funcionarios, un proyecto que diseñé e implementé desde cero en menos de dos meses. Trabajé con Django, Next.js, PostgreSQL, Docker y AWS, implementando infraestructura como código con Terraform/OpenTofu y automatizando el despliegue con CI/CD. Esta experiencia me permitió enfrentar desafíos de arquitectura, integración y escalabilidad en un entorno de producción real.",
    "Me interesa especialmente el diseño de sistemas, la automatización de procesos, DevOps y las arquitecturas escalables. Siempre busco escribir código limpio, mantenible y bien documentado. Fuera del código, disfruto aprender sobre nuevas tecnologías y contribuir a la comunidad de desarrolladores.",
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
    company: "Municipalidad de Vitacura",
    role: "Junior Full Stack Software Engineer",
    period: "Ene 2026 - Feb 2026",
    description:
      "Desarrollé desde cero el Sistema de Calificaciones de Funcionarios, digitalizando el proceso de evaluación de desempeño municipal. Diseñé la arquitectura completa, modelé la base de datos, implementé APIs REST, desarrollé interfaces con Next.js, integré firma electrónica con FirmaGob, y configuré infraestructura en AWS con CI/CD. El sistema eliminó procesos manuales, redujo errores y mejoró la trazabilidad institucional.",
    technologies: [
      "Django",
      "Django REST Framework",
      "Next.js 14",
      "PostgreSQL",
      "Docker",
      "AWS (EC2, S3, DynamoDB)",
      "OpenTofu/Terraform",
      "GitHub Actions",
      "Nginx",
      "Redis",
      "Celery",
    ],
    type: "internship",
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
  gallery?: string[]
  videoUrl?: string
  demoUrl?: string
  repoUrl?: string
  category: "academic" | "professional" | "personal"
  period: string
  institution?: string
}

export const projects: Project[] = [
  {
    slug: "sistema-calificaciones-municipalidad",
    title: "Sistema de Calificaciones de Funcionarios",
    description:
      "Sistema integral de gestión de evaluaciones de desempeño para la Municipalidad de Vitacura, con firma electrónica, roles múltiples y flujo completo de calificación.",
    longDescription:
      "Sistema desarrollado desde cero durante mi práctica profesional en la Municipalidad de Vitacura. Digitaliza el proceso completo de evaluación de desempeño de funcionarios municipales, reemplazando procedimientos manuales por un sistema centralizado y trazable. Incluye arquitectura cliente-servidor con API REST, gestión de roles (funcionario, jefe, Junta Calificadora, Dirección de Personal, Alcaldesa), cálculo automático de calificaciones, integración con FirmaGob para firma electrónica masiva, generación de PDFs con códigos QR, notificaciones OTP por correo, y gestión de períodos y plazos. La infraestructura como código con OpenTofu/Terraform en AWS (EC2, S3, DynamoDB) garantiza reproducibilidad, con despliegue automatizado mediante GitHub Actions y CI/CD completo.",
    technologies: [
      "Django 4.2",
      "Django REST Framework",
      "Next.js 14",
      "PostgreSQL",
      "Docker",
      "AWS (EC2, S3, DynamoDB)",
      "OpenTofu/Terraform",
      "Redis",
      "Celery",
      "Nginx",
      "GitHub Actions",
    ],
    highlights: [
      "Desarrollo completo en menos de 2 meses desde diseño hasta producción",
      "Integración con FirmaGob para firma electrónica y códigos QR",
      "Infraestructura como código con OpenTofu y despliegue CI/CD automatizado",
      "Eliminó dependencia de planillas manuales y redujo errores en cálculos",
      "Sistema de roles con 5 tipos de usuario y flujos específicos por rol",
    ],
    image: "/projects/sistema-calificaciones.jpg",
    gallery: [
      "/projects/sistema-calificaciones/1.jpg",
      "/projects/sistema-calificaciones/2.jpg",
      "/projects/sistema-calificaciones/3.jpg",
      "/projects/sistema-calificaciones/4.jpg",
    ],
    videoUrl: "/projects/sistema-calificaciones/demo.mp4",
    category: "professional",
    period: "Ene 2026 - Feb 2026",
    institution: "Municipalidad de Vitacura",
  },
  {
    slug: "stoncks",
    title: "Stoncks",
    description:
      "Aplicación web financiera basada en la nube que permite simular operaciones bancarias y gestionar activos virtuales.",
    longDescription:
      "Desarrollo de una aplicación web financiera basada en la nube que permite simular operaciones bancarias y gestionar activos virtuales. Enfocada en la escalabilidad y el procesamiento distribuido, utilizando AWS (EC2, S3, CI/CD), Docker, MQTT.js, Python (Celery, Redis), JavaScript y Auth0. Diseño de una arquitectura de microservicios orientada a eventos, reemplazando un enfoque monolítico. Implementación de procesos asíncronos y comunicación en tiempo real entre servicios. Automatización del despliegue mediante pipelines CI/CD y contenedores Docker.",
    technologies: [
      "AWS (EC2, S3, CI/CD)",
      "Docker",
      "MQTT.js",
      "Python",
      "Celery",
      "Redis",
      "JavaScript",
      "Auth0",
    ],
    highlights: [
      "Diseño de una arquitectura de microservicios orientada a eventos, reemplazando un enfoque monolítico",
      "Implementación de procesos asíncronos y comunicación en tiempo real entre servicios",
      "Automatización del despliegue mediante pipelines CI/CD y contenedores Docker",
    ],
    image: "/projects/stoncks.jpg",
    category: "academic",
    period: "May 2025 - Jun 2025",
    institution: "Pontificia Universidad Católica de Chile",
  },
  {
    slug: "akingdrez",
    title: "AKingDrez: Strategy & Combat",
    description:
      "Juego web de estrategia inspirado en el ajedrez tradicional, con un sistema de combate por turnos en tiempo real.",
    longDescription:
      "Diseño e implementación de un juego web de estrategia inspirado en el ajedrez tradicional, con un sistema de combate por turnos en tiempo real. Desarrollado con JavaScript, React, React Query, Node.js (Koa, WebSockets), Sequelize, PostgreSQL y Figma para el modelado de la interfaz y la experiencia de usuario. Desarrollo del sistema de sincronización y combate en tiempo real mediante WebSockets. Implementación del backend en Node.js con Koa, integrando endpoints RESTful y comunicación en tiempo real. Diseño de una base de datos escalable con Sequelize y PostgreSQL para gestionar sesiones y perfiles de usuario. Creación de una interfaz pixel-art responsiva y animada con React y CSS.",
    technologies: [
      "JavaScript",
      "React",
      "React Query",
      "Node.js",
      "Koa",
      "WebSockets",
      "Sequelize",
      "PostgreSQL",
      "Figma",
    ],
    highlights: [
      "Desarrollo del sistema de sincronización y combate en tiempo real mediante WebSockets",
      "Implementación del backend en Node.js con Koa, integrando endpoints RESTful y comunicación en tiempo real",
      "Diseño de una base de datos escalable con Sequelize y PostgreSQL para gestionar sesiones y perfiles de usuario",
      "Creación de una interfaz pixel-art responsiva y animada con React y CSS",
    ],
    image: "/projects/akingdrez.jpg",
    category: "academic",
    period: "Sep 2024 - Dic 2024",
    institution: "Pontificia Universidad Católica de Chile",
  },
  {
    slug: "pzcourses",
    title: "PZCourses",
    description:
      "Plataforma web inspirada en la interfaz de Project Zomboid, orientada a la administración de cursos con control de acceso por roles.",
    longDescription:
      "Desarrollo de una plataforma web inspirada en la interfaz de Project Zomboid, orientada a la administración de cursos con control de acceso por roles, contenido interactivo y comunicación en tiempo real. Implementada con Ruby on Rails, PostgreSQL y la API de Cloudinary. Implementación de un sistema de autenticación y autorización multirol (estudiantes, instructores y administradores). Integración de Cloudinary para la carga de imágenes de perfil y materiales de estudio. Diseño y desarrollo de endpoints RESTful y lógica de control de acceso basada en roles. Participación en la arquitectura general y en la garantía de mantenibilidad mediante un diseño modular y prácticas de código limpio.",
    technologies: [
      "Ruby on Rails",
      "PostgreSQL",
      "Cloudinary API",
    ],
    highlights: [
      "Implementación de un sistema de autenticación y autorización multirol (estudiantes, instructores y administradores)",
      "Integración de Cloudinary para la carga de imágenes de perfil y materiales de estudio",
      "Diseño y desarrollo de endpoints RESTful y lógica de control de acceso basada en roles",
      "Participación en la arquitectura general y en la garantía de mantenibilidad mediante un diseño modular y prácticas de código limpio",
    ],
    image: "/projects/pzcourses.jpg",
    category: "academic",
    period: "Sep 2024 - Dic 2024",
    institution: "Pontificia Universidad Católica de Chile",
  },
  {
    slug: "easyfood",
    title: "EasyFood",
    description:
      "Sistema de bases de datos relacional para una aplicación de delivery de alimentos, abarcando desde el modelado conceptual hasta el despliegue web.",
    longDescription:
      "Diseño e implementación de un sistema de bases de datos relacional para una aplicación de delivery de alimentos, abarcando desde el modelado conceptual hasta el despliegue web, usando PostgreSQL, Python (Flask, Psycopg2) y Bootstrap. Diseño del modelo entidad-relación y esquema relacional normalizado. Implementación de scripts de validación, carga y limpieza de datos en Python para PostgreSQL. Desarrollo de una interfaz web con Flask para ejecutar y visualizar consultas SQL. Diseño y prueba de consultas SQL complejas (joins, agregaciones, subconsultas).",
    technologies: [
      "PostgreSQL",
      "Python",
      "Flask",
      "Psycopg2",
      "Bootstrap",
    ],
    highlights: [
      "Diseño del modelo entidad-relación y esquema relacional normalizado",
      "Implementación de scripts de validación, carga y limpieza de datos en Python para PostgreSQL",
      "Desarrollo de una interfaz web con Flask para ejecutar y visualizar consultas SQL",
      "Diseño y prueba de consultas SQL complejas (joins, agregaciones, subconsultas)",
    ],
    image: "/projects/easyfood.jpg",
    category: "academic",
    period: "May 2024 - Jun 2024",
    institution: "Pontificia Universidad Católica de Chile",
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
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express",
      "REST APIs",
      "Celery",
    ],
  },
  {
    name: "Bases de Datos",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    name: "DevOps y Herramientas",
    skills: [
      "Docker",
      "AWS (EC2, S3, DynamoDB)",
      "Terraform/OpenTofu",
      "GitHub Actions",
      "Nginx",
      "Git",
      "Linux",
      "CI/CD",
    ],
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
