export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  links: {
    github?: string;
    gitlab?: string;
    live?: string;
  };
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
}
