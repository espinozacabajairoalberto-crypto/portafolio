import type { Skill } from '../types';

export const skillCategories = [
  { id: 'languages', label: 'Lenguajes de Programación', icon: 'code' },
  { id: 'web', label: 'Desarrollo Web', icon: 'globe' },
  { id: 'databases', label: 'Bases de Datos', icon: 'database' },
  { id: 'tools', label: 'Herramientas y Entornos', icon: 'tool' },
] as const;

export const skills: Skill[] = [
  // Lenguajes
  { name: 'Python', category: 'languages', level: 'Avanzado', levelNumber: 5, icon: 'python' },
  { name: 'Java', category: 'languages', level: 'Intermedio', levelNumber: 4, icon: 'java' },
  { name: 'Kotlin', category: 'languages', level: 'Intermedio', levelNumber: 3, icon: 'kotlin' },
  { name: 'C#', category: 'languages', level: 'Intermedio', levelNumber: 3, icon: 'csharp' },
  { name: 'C++', category: 'languages', level: 'Intermedio', levelNumber: 3, icon: 'cpp' },
  { name: 'JavaScript', category: 'languages', level: 'Avanzado', levelNumber: 4, icon: 'javascript' },
  { name: 'SQL', category: 'languages', level: 'Avanzado', levelNumber: 4, icon: 'sql' },

  // Desarrollo Web
  { name: 'HTML5', category: 'web', level: 'Avanzado', levelNumber: 5, icon: 'html' },
  { name: 'CSS3', category: 'web', level: 'Avanzado', levelNumber: 4, icon: 'css' },
  { name: 'JavaScript (ES6+)', category: 'web', level: 'Avanzado', levelNumber: 4, icon: 'javascript' },
  { name: 'Astro', category: 'web', level: 'Intermedio', levelNumber: 4, icon: 'astro' },
  { name: 'Flask', category: 'web', level: 'Avanzado', levelNumber: 4, icon: 'flask' },
  { name: 'Jinja2', category: 'web', level: 'Avanzado', levelNumber: 4, icon: 'jinja' },

  // Bases de Datos
  { name: 'MySQL', category: 'databases', level: 'Avanzado', levelNumber: 4, icon: 'mysql' },
  { name: 'SQL Server', category: 'databases', level: 'Intermedio', levelNumber: 3, icon: 'sqlserver' },
  { name: 'MySQL Workbench', category: 'databases', level: 'Avanzado', levelNumber: 4, icon: 'workbench' },

  // Herramientas
  { name: 'Git', category: 'tools', level: 'Avanzado', levelNumber: 4, icon: 'git' },
  { name: 'GitHub', category: 'tools', level: 'Avanzado', levelNumber: 4, icon: 'github' },
  { name: 'Visual Studio Code', category: 'tools', level: 'Avanzado', levelNumber: 5, icon: 'vscode' },
  { name: 'Android Studio', category: 'tools', level: 'Intermedio', levelNumber: 3, icon: 'android' },
  { name: 'Arduino IDE', category: 'tools', level: 'Intermedio', levelNumber: 4, icon: 'arduino' },
  { name: 'Proteus', category: 'tools', level: 'Intermedio', levelNumber: 3, icon: 'proteus' },
  { name: 'PlantUML', category: 'tools', level: 'Avanzado', levelNumber: 4, icon: 'plantuml' },
  { name: 'Draw.io', category: 'tools', level: 'Avanzado', levelNumber: 5, icon: 'drawio' },
];
