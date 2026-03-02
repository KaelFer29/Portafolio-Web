# 💼 Portafolio Personal - Kael Fernández

Portafolio profesional construido con Next.js 16, React 19, TypeScript y Tailwind CSS 4.

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 18+ (recomendado: 20+)
- **pnpm** (gestor de paquetes)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/KaelFer29/portafolio-web.git
   cd portafolio-web
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   Edita `.env.local` y completa:
   - `RESEND_API_KEY`: Obtén tu API key en [resend.com](https://resend.com)
   - `CONTACT_EMAIL`: Tu email para recibir mensajes del formulario

4. **Ejecutar en desarrollo**
   ```bash
   pnpm dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

   **Nota para WSL (Windows Subsystem for Linux):** Si los cambios no se reflejan automáticamente, usa:
   ```bash
   pnpm dev:wsl
   ```
   Esto habilita el polling para file watching, solucionando problemas de HMR en WSL.

## 📝 Personalización

### 1. Información Personal

Edita `lib/data.ts` para actualizar:
- Información personal (nombre, bio, links)
- Experiencia laboral
- Proyectos
- Skills y tecnologías
- Links de navegación

### 2. Imágenes

- **Proyectos**: Coloca imágenes en `/public/projects/`
  - Tamaño recomendado: 1200x630px
  - Nombres según `data.ts`
- **CV/Resume**: Coloca `resume.pdf` en `/public/`
- **Favicon**: Reemplaza archivos en `/public/` (icon.svg, apple-icon.png, etc.)
- **OG Image**: Crea `/public/og-image.jpg` (1200x630px)

### 3. Metadata y SEO

Edita `app/layout.tsx`:
- Actualiza el campo `metadataBase` con tu dominio
- Personaliza títulos y descripciones
- Ajusta Open Graph tags

## 🛠️ Scripts Disponibles

```bash
pnpm dev        # Servidor de desarrollo
pnpm dev:wsl    # Servidor de desarrollo con polling (para WSL)
pnpm build      # Build para producción
pnpm start      # Servidor de producción
pnpm lint       # Linter (ESLint)
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Componentes**: Radix UI + shadcn/ui
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Email**: Resend
- **TypeScript**: Para type safety
- **Analytics**: Vercel Analytics

## 🌐 Deployment

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura las variables de entorno en Vercel
4. Deploy automático

### Otras Plataformas

Cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   │   └── contact/       # Endpoint de contacto
│   ├── projects/          # Páginas de proyectos
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/
│   ├── layout/            # Navbar, Footer, etc.
│   ├── sections/          # Secciones del home
│   └── ui/                # Componentes de shadcn/ui
├── lib/
│   ├── data.ts            # ⭐ DATOS CENTRALIZADOS
│   └── utils.ts           # Utilidades
├── public/                # Assets estáticos
│   ├── projects/          # Imágenes de proyectos
│   └── resume.pdf         # Tu CV
└── hooks/                 # React hooks personalizados
```

## ⚙️ Configuración del Formulario de Contacto

El formulario usa [Resend](https://resend.com) para enviar emails:

1. Crea una cuenta en [resend.com](https://resend.com)
2. Obtén tu API key
3. Agrégala a `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_EMAIL=tumail@ejemplo.com
   ```

## 🎨 Personalización de Estilos

- **Colores**: Edita `app/globals.css` (CSS variables)
- **Fuentes**: Configuradas en `app/layout.tsx` (Geist Sans & Mono)
- **Dark Mode**: Implementado con `next-themes`

## 📄 Licencia

MIT License - siéntete libre de usar este template para tu propio portafolio.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea tu feature branch
3. Commit tus cambios
4. Push al branch
5. Abre un Pull Request

## 📧 Contacto

Kael Fernández Hernández
- Email: kaeldedios@gmail.com
- GitHub: [@KaelFer29](https://github.com/KaelFer29)
- LinkedIn: [kael-fernandez](https://linkedin.com/in/kael-fernandez)

---

Hecho con ❤️ usando Next.js
