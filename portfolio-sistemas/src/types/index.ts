export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileConfig {
  name: string;
  title: string;
  role: string;
  tagline: string;
  bioShort: string;
  bioFull: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availableForCollaboration: boolean;
  avatar: string;
}

export type SkillCategory = 'languages' | 'web' | 'databases' | 'tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  levelNumber: number; // 1 to 5 para indicadores visuales
  icon?: string;
}

export interface Subject {
  id: string;
  name: string;
  code?: string;
  description: string;
  icon: string;
  area: string;
}

export type ProjectCategory = 'academic' | 'personal';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  subjectId?: string;
  subjectName?: string;
  description: string;
  longDescription?: string;
  problem?: string;
  objective?: string;
  solution?: string;
  technologies: string[];
  features?: string[];
  results?: string[];
  learnings?: string[];
  image: string;
  screenshots?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  isDraft?: boolean;
}
