import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'language', proficiency: 'advanced' },
  { name: 'JavaScript', category: 'language', proficiency: 'advanced' },
  { name: 'C++', category: 'language', proficiency: 'intermediate' },
  { name: 'C', category: 'language', proficiency: 'intermediate' },
  { name: 'Java', category: 'language', proficiency: 'intermediate' },
  { name: 'MATLAB', category: 'language', proficiency: 'advanced' },
  { name: 'SQL', category: 'language', proficiency: 'intermediate' },
  { name: 'TypeScript', category: 'language', proficiency: 'intermediate' },

  // Frameworks & Libraries
  { name: 'TensorFlow', category: 'framework', proficiency: 'intermediate' },
  { name: 'Flask', category: 'framework', proficiency: 'intermediate' },
  { name: 'React', category: 'framework', proficiency: 'intermediate' },
  { name: 'Next.js', category: 'framework', proficiency: 'beginner' },
  { name: 'Qt', category: 'framework', proficiency: 'intermediate' },

  // Tools & Technologies
  { name: 'Git', category: 'tool', proficiency: 'intermediate' },
  { name: 'PowerBI', category: 'tool', proficiency: 'advanced' },
  { name: 'SOLIDWORKS', category: 'tool', proficiency: 'intermediate' },
  { name: 'Arduino', category: 'tool', proficiency: 'intermediate' },
  { name: 'Google App Scripts', category: 'tool', proficiency: 'intermediate' },
  { name: 'Chrome Extensions', category: 'tool', proficiency: 'intermediate' },

  // Databases
  { name: 'MySQL', category: 'database', proficiency: 'intermediate' },
  { name: 'Database Design', category: 'database', proficiency: 'intermediate' }
];

export const skillsByCategory = {
  languages: skills.filter(skill => skill.category === 'language'),
  frameworks: skills.filter(skill => skill.category === 'framework'),
  tools: skills.filter(skill => skill.category === 'tool'),
  databases: skills.filter(skill => skill.category === 'database')
}; 