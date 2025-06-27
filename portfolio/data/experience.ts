import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'celestica',
    company: 'Celestica',
    position: 'Data Analytics Intern',
    duration: 'May 2024 - Present',
    description: `My role at Celestica consisted of working on the internal data analytics team of the Advanced Technology Solutions (ATS) division. Since some of my team was less technical, I was able to take a leadership role on the data engineering aspect of the team, working to increase efficiency. In one of my major projects, I restructured our production database to reduce refresh times by over 70%. I was also able to generate key data points that weren't used by the team through writing Google App Scripts (JavaScript). Additionally, I was in constant communication with the Celestica leadership team and global ATS sites to develop and maintain over 120 PowerBI dashboards to drive financial and business decisions.`,
    skills: ['Database management', 'JavaScript', 'PowerBI', 'Data Engineering', 'Google App Scripts'],
    current: true
  },
  {
    id: 'queens-researcher',
    company: 'Queen\'s Department of Mathematics and Statistics',
    position: 'Research Assistant',
    duration: 'May 2023 - August 2023',
    description: `I was awarded an NSERC USRA grant to support my control theory research with professor Kexue Zhang. My research primarily focused on developing sufficient conditions for input-to-state stability of non-linear systems on time scales in terms of two measures. In layman's terms, I worked to develop and prove mathematical conditions that allowed us to determine if a complicated system of differential equations was "input-to-state stable" without actually needing to solve the equation itself, which is often impossible. Beyond the technical proofs, I also extensively used MATLAB to simulate these systems and test our findings.`,
    skills: ['Research skills', 'MATLAB modelling', 'Control theory', 'Mathematical proofs', 'Academic writing']
  },
  {
    id: 'queens-ta',
    company: 'Queen\'s University',
    position: 'Teaching Assistant',
    duration: 'May 2023 - August 2023',
    description: `I worked as a teaching assistant for APSC 174, an introductory course to linear algebra for first-year engineers. I taught weekly tutorials and answered questions by email. The course covered basic linear algebra such as vector spaces, set theory, linear transformations, matrices, determinants, eigenvalues and eigenvectors. I received very positive feedback on my teaching style, and was additionally hired by the Math department to run general group study sessions for all first-year math classes.`,
    skills: ['Presentation skills', 'Linear algebra', 'Teaching', 'Communication', 'Leadership']
  }
]; 