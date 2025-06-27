import { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Michael Cronin',
  title: 'Applied Mathematics & Engineering Student',
  email: 'michael.cronin@queensu.ca',
  phone: '+1 416-276-6120',
  github: 'mcronin4',
  linkedin: 'michael-cronin-20mjc8',
  location: 'Queen\'s University, Kingston, ON',
  bio: 'Applied Mathematics and Engineering student passionate about solving problems through code and mathematics. Currently recruiting for Summer 2025 internships.',
  detailedBio: `I study Applied Mathematics and Engineering at Queen's University, nicknamed "Apple Math", in the Computing and Communications stream. It is quite a unique program where half of my courses are taken with computer engineers (algorithms, data structures, OOP, software development, etc.), and the other half are taken with math majors (real/complex analysis, probability, stochastics, information theory, etc.). Apple Math graduates enter the workforce with as much technical expertise as computer engineers, and having taken more math courses than math majors.`,
  education: {
    degree: 'Applied Mathematics and Engineering (Computing and Communications)',
    school: 'Queen\'s University',
    description: 'A unique program combining computer engineering coursework with advanced mathematics.',
    gpa: '4.18/4.30, including perfect scores in all math courses, earning a $23 000 scholarship',
    relevantCourses: [
      'Data Structures & Algorithms',
      'Real & Complex Analysis',
      'Machine Learning',
      'Software Development',
      'Probability & Statistics',
      'Information Theory',
      'Linear Algebra',
      'Object-Oriented Programming'
    ]
  },
  hobbies: [
    'Camping / Outdoors',
    'Volunteering',
    'Coding / Hackathons',
    'Skiing',
    'Volleyball',
    'Crosswords / mental puzzles'
  ],
  awards: [
    'Nellie & Ralph Jeffery Award in Mathematics (for highest GPA in Math courses)',
    'NSERC USRA Research Award (to support Mathematics research)',
    'Jacob Malomet Memorial Award (for top grades in first year)',
    'Science Jacket Award (for the single person who has contributed most to the good name of Queen\'s in first year)',
    'Queen\'s Engineering Competition Winner (first place achievement)',
    'Best AI Retrieval Project at HackAI Toronto (Canada\'s most competitive hackathon)'
  ]
}; 