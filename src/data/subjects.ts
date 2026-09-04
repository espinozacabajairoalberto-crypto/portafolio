import type { Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'programacion',
    name: 'Programación',
    code: 'SIS-101',
    description: 'Fundamentos de algoritmia, estructuras de datos, programación orientada a objetos y paradigmas de desarrollo.',
    icon: 'code-brackets',
    area: 'Ciencias de la Computación'
  },
  {
    id: 'base-de-datos',
    name: 'Base de Datos',
    code: 'SIS-201',
    description: 'Modelado relacional, diseño entidad-relación, normalización, álgebra relacional y consultas SQL avanzadas.',
    icon: 'database',
    area: 'Gestión de Información'
  },
  {
    id: 'ingenieria-de-software',
    name: 'Ingeniería de Software',
    code: 'SIS-301',
    description: 'Ciclo de vida del software, metodologías ágiles, arquitectura de software, patrones de diseño y diagramado UML.',
    icon: 'layers',
    area: 'Ingeniería de Software'
  },
  {
    id: 'desarrollo-web',
    name: 'Desarrollo Web',
    code: 'SIS-302',
    description: 'Construcción de aplicaciones web full-stack, arquitecturas cliente-servidor, APIs REST y maquetado responsive.',
    icon: 'globe',
    area: 'Desarrollo de Software'
  },
  {
    id: 'programacion-movil',
    name: 'Programación Móvil',
    code: 'SIS-401',
    description: 'Desarrollo de aplicaciones móviles nativas, ciclo de vida de actividades, diseño de interfaces y consumo de servicios.',
    icon: 'smartphone',
    area: 'Desarrollo de Software'
  },
  {
    id: 'investigacion-de-operaciones',
    name: 'Investigación de Operaciones',
    code: 'SIS-402',
    description: 'Modelado matemático de optimización, programación lineal, método Simplex, análisis de sensibilidad y teoría de redes.',
    icon: 'trending-up',
    area: 'Optimización y Sistemas'
  },
  {
    id: 'metodos-numericos',
    name: 'Métodos Numéricos',
    code: 'MAT-301',
    description: 'Aproximaciones matemáticas, resolución numérica de ecuaciones diferenciales, interpolación y ajuste de curvas.',
    icon: 'calculator',
    area: 'Matemática Aplicada'
  },
  {
    id: 'electronica',
    name: 'Electrónica',
    code: 'ELC-101',
    description: 'Circuitos eléctricos, componentes digitales, compuertas lógicas, microcontroladores y simulación en Proteus.',
    icon: 'cpu',
    area: 'Hardware y Circuitos'
  },
  {
    id: 'iot',
    name: 'IoT (Internet de las Cosas)',
    code: 'SIS-501',
    description: 'Integración de sensores, protocolos de comunicación, placas Arduino/ESP, telemetría y procesamiento de datos en tiempo real.',
    icon: 'wifi',
    area: 'Hardware y Redes'
  },
  {
    id: 'simulacion',
    name: 'Simulación',
    code: 'SIS-502',
    description: 'Simulación de sistemas discretos y continuos, generación de variables aleatorias, análisis probabilístico y toma de decisiones.',
    icon: 'activity',
    area: 'Modelado y Simulación'
  }
];
