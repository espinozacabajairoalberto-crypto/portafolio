import type { ProfileConfig } from '../types';

export const profileConfig: ProfileConfig = {
  // INFORMACIÓN PERSONAL: Modifica estos datos con tu información real
  name: "Jairo Espinoza",
  title: "Jairo Espinoza | Portafolio Profesional",
  role: "Estudiante de Ingeniería de Sistemas",
  tagline: "Desarrollo de Software · Bases de Datos · IoT · Soluciones Tecnológicas",
  bioShort: "Me interesa el desarrollo de software, aplicaciones web, bases de datos, IoT y la creación de soluciones tecnológicas.",
  bioFull: "Soy estudiante de Ingeniería de Sistemas interesado en aprender y desarrollar soluciones mediante software y tecnología. Durante mi formación he trabajado en proyectos relacionados con desarrollo web, bases de datos, programación, IoT, optimización y análisis de sistemas.",
  
  // ENLACES DE CONTACTO Y REDES
  email: "tu-correo@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-perfil",
  location: "Bolivia / Internacional",
  availableForCollaboration: true,
  
  // RUTA DE LA FOTOGRAFÍA (coloca tu foto en public/images/ y actualiza esta ruta)
  avatar: "/images/profile-placeholder.svg",
};

export const navLinks = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Sobre mí", href: "/#sobre-mi" },
  { name: "Habilidades", href: "/#habilidades" },
  { name: "Proyectos", href: "/#proyectos" },
  { name: "Materias", href: "/#materias" },
  { name: "Contacto", href: "/#contacto" },
];
