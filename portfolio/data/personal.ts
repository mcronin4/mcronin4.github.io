import { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Michael Cronin',
  title: 'Applied Mathematics & Engineering Student',
  email: 'michael.cronin@queensu.ca',
  phone: '+1 416-276-6120',
  github: 'mcronin4',
  linkedin: 'michael-cronin-20mjc8',
  location: 'Queen\'s University, Kingston, ON',
  bio: 'Applied Mathematics and Engineering student passionate about solving problems through code and mathematics. Currently recruiting for full time software engineering roles for 2026.',
  detailedBio: `I study Applied Mathematics and Engineering at Queen's University, nicknamed "Apple Math", in the Computing and Communications stream. It is quite a unique program where half of my courses are taken with computer engineers (algorithms, data structures, OOP, software development, etc.), and the other half are taken with math majors (real/complex analysis, probability, stochastics, information theory, etc.). Apple Math graduates enter the workforce with as much technical expertise as computer engineers, and having taken more math courses than math majors.`,
  education: {
    degree: 'Applied Mathematics and Engineering (Computing and Communications)',
    school: 'Queen\'s University',
    description: 'A unique program combining computer engineering coursework with advanced mathematics.',
    gpa: '4.18/4.30, including perfect scores in all math courses, earning a $23 400 scholarship',
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
    {
      name: 'Camping / Outdoors',
      description: 'Love exploring nature through hiking, canoeing, and wilderness adventures. I have paddled >800km, including a 26-day trip through Northern Quebec on the Moisie River.'
    },
    {
      name: 'Volunteering',
      description: 'Passionate about giving back to the community through various volunteer initiatives. Helped oversee 20 engineering design teams and ran the Queen\'s Engineering Orientation Week.'
    },
    {
      name: 'Coding / Hackathons',
      description: 'I love to build things. I love exploring new projects and hackathons are a great excuse to spend days grinding out a project. Achievements include winning "Best AI Retrieval" at HackAI and being a finalist at Hack the North.'
    },
    {
      name: 'Skiing',
      description: 'I love to ski, having skied in the French Alps, and the Rockies. I am a CSA-certified instructor and have taught skiing to beginners.'
    },
    {
      name: 'Volleyball',
      description: 'Played competetive volleyball in high school and club programs, co-captaining a top 5 team in Canada. Continue to play casually 2+ times a week.'
    },
    {
      name: 'Crosswords / Puzzles',
      description: 'I love puzzles. I solve (or try to solve!) the NYT crossword every morning.'
    }
  ],
  awards: [
    'Nellie & Ralph Jeffery Award in Mathematics (for highest GPA in Math courses)',
    'Science Jacket Award (for the single person who has contributed most to the good name of Queen\'s in first year)',
    'Queen\'s Engineering Competition Winner (first place achievement)',
    'Best AI Retrieval Project at HackAI Toronto (Canada\'s most competitive hackathon)'
  ]
}; 