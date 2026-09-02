import { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Michael Cronin',
  title: 'Software Engineer at Exa',
  email: 'michael.cronin@queensu.ca',
  phone: '+1 416-276-6120',
  github: 'mcronin4',
  linkedin: 'michael-cronin-20mjc8',
  location: 'San Francisco, CA',

  bio: "Software engineer at Exa in San Francisco. Previously a forward deployed engineer at SaxeCap, an AI private equity firm. Applied Mathematics & Engineering, Queen's University.",

  intro: `I'm a software engineer at Exa in San Francisco, where we're building the search engine for AI. Before that I was a forward deployed engineer at SaxeCap, an AI private equity firm. I studied Applied Mathematics & Engineering at Queen's.`,

  about: `I'm a software engineer at Exa in San Francisco. Exa is the search engine built for AI: it helps AI applications find and use the most relevant, up-to-date information from the web.

Before Exa I was a forward deployed engineer at SaxeCap, an AI private equity firm. Forward deployed means you sit with the company that has the problem, and ship the system inside their day-to-day operations. It is a good way to learn that the model is rarely the hard part.

I graduated from Queen's University in 2026 in Applied Mathematics & Engineering, a program that splits its time between computer engineering and a math major's worth of analysis, probability, and information theory. Outside of work I paddle, ski, play volleyball, and do the NYT crossword most mornings.`,

  education: {
    degree: 'B.A.Sc., Applied Mathematics & Engineering (Computing & Communications)',
    school: "Queen's University, Smith School of Engineering",
    years: 'Sep 2021 – May 2026',
    notes: [
      'Medal in Mathematics & Engineering for the highest standing in the graduating class.',
    ],
  },

  awards: [
    {
      title: 'Medal in Mathematics & Engineering',
      detail: "Queen's University medal for the highest standing in the graduating class, 2026.",
    },
    {
      title: 'Nellie & Ralph Jeffery Award in Mathematics',
      detail: 'Highest standing in mathematics courses across the program.',
    },
    {
      title: "Queen's Engineering Competition, first place",
      detail: 'Programming category, 2025. Qualified for the Ontario Engineering Competition.',
    },
    {
      title: 'Best AI Retrieval Project, HackAI Toronto',
      detail: 'For Chameleon, built in 24 hours.',
    },
  ],

  interests: [
    {
      name: 'Canoe tripping',
      description: 'Over 800 km paddled, including a 26-day whitewater expedition down the Moisie River in northern Quebec.',
      image: '/canoeing.jpg',
    },
    {
      name: 'Skiing',
      description: 'CSIA-certified instructor. French Alps, the Rockies, and a lot of beginners taught to stop.',
      image: '/skiing.jpg',
    },
    {
      name: 'Volleyball',
      description: 'Co-captained a top-five club team in Canada. Still play a couple of times a week.',
      image: '/volleyball.jpg',
    },
    {
      name: 'Crosswords',
      description: 'The NYT crossword most mornings. Built a clue solver so I could get hints without spoilers.',
      image: '/crossword_hero.png',
    },
  ],
};
