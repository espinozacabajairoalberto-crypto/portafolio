# 🚀 Portafolio Web Profesional — Estudiante de Ingeniería de Sistemas

Portafolio web moderno, rápido, modular y 100% responsive desarrollado con **Astro**, **TypeScript** y **CSS moderno**. Diseñado especialmente para destacar proyectos académicos universitarios, proyectos personales, habilidades técnicas y materias de la carrera de **Ingeniería de Sistemas**.

---

## ✨ Características Principales

- 🎨 **Diseño Moderno & High-Tech**: Paleta oscura (`#07090E`), acentos violeta/azul cian, glassmorphism sutil y bordes luminosos.
- ⚡ **Rendimiento Ultrarrápido**: Generación de sitios estáticos (SSG) con Astro sin sobrecarga de JavaScript innecesario.
- 📱 **100% Responsive**: Optimizado para pantallas de escritorio (PC), tablets y teléfonos móviles con menú colapsable.
- 📄 **Rutas Dinámicas (`/proyectos/[slug]`)**: Páginas individuales y detalladas para cada proyecto que detallan:
  - Problema identificado
  - Objetivo
  - Solución desarrollada
  - Tecnologías y herramientas
  - Capturas y diagramas
  - Características clave
  - Resultados obtenidos
  - Aprendizajes técnicos
- 🎓 **Módulo Interactivo de Materias**: Explorador de asignaturas universitarias conectado directamente con los proyectos realizados.
- 🛠️ **Fácil de Personalizar**: Todos los datos (nombre, bio, redes, habilidades, materias y proyectos) están centralizados en la carpeta `src/data/`.

---

## 📁 Estructura del Proyecto

```
portfolio-sistemas/
├── public/
│   ├── favicon.svg                   # Icono de la pestaña del navegador
│   └── images/
│       ├── profile-placeholder.svg   # Fotografía de perfil (reemplázala con tu foto)
│       └── projects/                 # Capturas e ilustraciones de los proyectos
│           ├── gym-center.svg
│           ├── biblioteca.svg
│           ├── estacionamiento-iot.svg
│           ├── simplex-combustible.svg
│           └── placeholder-project.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro              # Barra de navegación fija con menú móvil
│   │   ├── Hero.astro                # Encabezado principal con presentación
│   │   ├── About.astro               # Sección sobre mí y pilares de formación
│   │   ├── Skills.astro              # Habilidades clasificadas con tabs y niveles
│   │   ├── ProjectCard.astro         # Tarjeta individual reutilizable
│   │   ├── Projects.astro            # Listado con pestañas (Académicos / Personales)
│   │   ├── Subjects.astro            # Grid de asignaturas universitarias con modal
│   │   ├── Contact.astro             # Información de contacto y formulario con validación
│   │   ├── Footer.astro              # Pie de página con año dinámico
│   │   └── ui/
│   │       ├── Badge.astro           # Chips de tecnologías y asignaturas
│   │       └── SectionTitle.astro    # Títulos de sección estandarizados
│   ├── data/
│   │   ├── config.ts                 # INFORMACIÓN PERSONAL, redes y enlaces
│   │   ├── skills.ts                 # Listado de habilidades y tecnologías
│   │   ├── subjects.ts               # Asignaturas de la carrera
│   │   └── projects.ts               # Base de datos completa de proyectos
│   ├── layouts/
│   │   └── Layout.astro              # Layout base HTML, SEO, Meta tags y Scripts
│   ├── pages/
│   │   ├── index.astro               # Página de inicio
│   │   └── proyectos/
│   │       └── [slug].astro          # Plantilla dinámica para cada proyecto
│   ├── styles/
│   │   └── global.css                # Variables de diseño, fuentes y animaciones
│   └── types/
│       └── index.ts                  # Tipos e interfaces TypeScript
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Requisitos Previos
Tener instalado **Node.js** (versión 18 o superior).

### 2. Instalación de dependencias
Abre una terminal en la carpeta `portfolio-sistemas` y ejecuta:

```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
Luego abre tu navegador en `http://localhost:4321` para ver el portafolio en tiempo real con recarga automática.

### 4. Compilar para producción
```bash
npm run build
```
Generará la versión estática optimizada en la carpeta `dist/`, lista para desplegar en **Vercel**, **Netlify**, **GitHub Pages** o cualquier hosting web.

---

## ✏️ Guía de Personalización

### 1. Modificar tu información personal y enlaces
Abre el archivo `src/data/config.ts` y actualiza tus datos:
```typescript
export const profileConfig: ProfileConfig = {
  name: "Tu Nombre y Apellido",
  role: "Estudiante de Ingeniería de Sistemas",
  bioShort: "Tu descripción profesional corta...",
  email: "tu-correo@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  avatar: "/images/tu-foto.jpg", // Coloca tu foto en public/images/
};
```

### 2. Cambiar tu fotografía
1. Copia tu foto a la carpeta `public/images/` (por ejemplo `public/images/mi-foto.jpg`).
2. En `src/data/config.ts`, cambia `avatar: "/images/mi-foto.jpg"`.

### 3. Agregar o editar Proyectos
Abre `src/data/projects.ts`. Cada proyecto tiene la siguiente estructura:
```typescript
{
  id: 'mi-nuevo-proyecto',
  slug: 'mi-nuevo-proyecto',
  title: 'Nombre de mi Proyecto',
  category: 'academic', // o 'personal'
  subjectId: 'desarrollo-web', // id de la materia asociada (en subjects.ts)
  subjectName: 'Desarrollo Web',
  description: 'Descripción corta para la tarjeta...',
  problem: 'Problema que motivó el proyecto...',
  objective: 'Objetivo principal...',
  solution: 'Solución tecnológica implementada...',
  technologies: ['Python', 'MySQL', 'Flask'],
  features: ['Característica 1', 'Característica 2'],
  results: ['Resultado 1'],
  learnings: ['Aprendizaje 1'],
  image: '/images/projects/mi-captura.png',
  githubUrl: 'https://github.com/tu-usuario/repo',
  demoUrl: 'https://demo.com',
  featured: true
}
```
Al agregar un proyecto aquí, se generará **automáticamente su tarjeta en el inicio y su página en `/proyectos/mi-nuevo-proyecto`**.

### 4. Agregar o editar Habilidades
Abre `src/data/skills.ts` y modifica la lista de tecnologías o agrega nuevas.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Astro 4.x](https://astro.build)
- **Lenguaje**: TypeScript
- **Estilos**: Vanilla CSS con variables CSS modernas, Flexbox, CSS Grid y Glassmorphism
- **Iconografía**: Lucide Icons (SVG inline optimizado)
- **Tipografías**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)