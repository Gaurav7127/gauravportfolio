export enum ViewState {
    PROFILE = 'PROFILE',
    SKILLS = 'SKILLS',
    PROJECTS = 'PROJECTS',
    EDUCATION = 'EDUCATION',
    CONTACT = 'CONTACT'
  }
  
  export interface Project {
    id: string;
    title: string;
    techStack: string[];
    description: string;
    fullDescription?: string;
    role: string;
    link?: string;
    architecture: {
        flow: Array<{
            label: string;
            type: 'input' | 'process' | 'storage' | 'output';
        }>;
    };
  }
  
  export interface EducationItem {
    id: string;
    degree: string;
    institution: string;
    year: string;
    score?: string;
    details?: string;
  }

  export interface CertificationItem {
    id: string;
    title: string;
    issuer: string;
    year: string;
    link?: string; // URL to the certificate credential
  }
  
  export interface Skill {
    name: string;
    iconClass: string; // Devicon class name
    level: number; // Percentage
    category: 'Languages' | 'Web' | 'Tools' | 'Soft Skills';
  }

  export interface PersonalInfo {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    resume: string; // Added resume field
    socials: {
        linkedin: string;
        github: string;
        portfolio: string;
    };
  }

  export interface ExperienceItem {
    id: string;
    title: string;
    date: string;
    organization: string;
    type: string;
    description?: string;
  }