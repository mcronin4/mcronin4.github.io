export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  category: 'web' | 'ml' | 'mobile' | 'research' | 'other';
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
  detailedBio: string;
  education: {
    degree: string;
    school: string;
    description: string;
  };
  hobbies: string[];
  awards: string[];
}

export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
} 