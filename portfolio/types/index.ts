export type ProjectCategory = 'ml' | 'web' | 'research' | 'other';

export const categoryLabels: Record<ProjectCategory, string> = {
  ml: 'AI / ML',
  web: 'Web',
  research: 'Research',
  other: 'Engineering',
};

export interface Project {
  id: string;
  title: string;
  /** Short qualifier shown next to the title, e.g. "AI news platform". */
  tagline?: string;
  /** One or two sentences for cards and the detail page lead. */
  description: string;
  /** Detail page body. Paragraphs separated by blank lines. */
  longDescription: string;
  /** Optional bullet points shown under the body. */
  highlights?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  /** Logo or square mark. Rendered contained on a tinted background. */
  imageUrl?: string;
  /** Wide screenshot or photo. Rendered as a cover image when present. */
  heroImageUrl?: string;
  category: ProjectCategory;
  featured: boolean;
  year: string;
  /** Award, competition result, or publication, shown as a small badge. */
  recognition?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  highlights: string[];
  tags: string[];
  link?: string;
  current?: boolean;
}

export interface Interest {
  name: string;
  description: string;
  image: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  /** One-line summary used in metadata. */
  bio: string;
  /** Hero paragraph on the home page. */
  intro: string;
  /** Longer first-person copy for the About page. Paragraphs separated by blank lines. */
  about: string;
  education: {
    degree: string;
    school: string;
    years: string;
    notes: string[];
  };
  awards: { title: string; detail: string }[];
  interests: Interest[];
}

export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}
