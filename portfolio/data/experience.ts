import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exa',
    company: 'Exa',
    role: 'Software Engineer',
    start: 'Jun 2026',
    end: 'Present',
    location: 'San Francisco, CA',
    summary:
      'Exa is the search engine built for AI: a web-scale index and retrieval API that agents and LLM applications use to find and read the web.',
    highlights: [],
    tags: ['Search', 'AI'],
    link: 'https://exa.ai',
    current: true,
  },
  {
    id: 'saxecap',
    company: 'SaxeCap',
    role: 'Forward Deployed Engineer',
    start: 'Oct 2025',
    end: 'Mar 2026',
    summary:
      'SaxeCap is an AI private equity firm that buys traditional businesses and transforms them with AI. I worked directly with portfolio and partner companies to scope, build, and ship AI and automation systems into their operations.',
    highlights: [],
    tags: ['LLM systems', 'Automation', 'Python', 'Data pipelines'],
    link: 'https://saxecap.com',
  },
  {
    id: 'celestica',
    company: 'Celestica',
    role: 'Data Engineering Intern',
    start: 'May 2024',
    end: 'Aug 2025',
    location: 'Toronto, ON',
    summary:
      'Data engineering for the Advanced Technology Solutions analytics team.',
    highlights: [
      'Redesigned and migrated the supply chain database schema, cutting refresh latency by 70% and enabling near real-time KPIs.',
      'Built automated ETL pipelines in Python and JavaScript over Google APIs, making it routine to onboard new data sources across supply chain systems.',
      'Developed and maintained 100+ PowerBI dashboards used by executives and by ML pilot programs.',
    ],
    tags: ['Python', 'JavaScript', 'SQL', 'PowerBI', 'Google Apps Script'],
    link: 'https://www.celestica.com/',
  },
  {
    id: 'queens-research',
    company: "Queen's University, Mathematics & Statistics",
    role: 'Undergraduate Researcher',
    start: 'May 2023',
    end: 'Aug 2023',
    location: 'Kingston, ON',
    summary:
      'NSERC-funded control theory research with Professor Kexue Zhang: sufficient conditions for input-to-state stability of nonlinear systems on time scales, proved without solving the underlying equations, and checked in MATLAB.',
    highlights: [],
    tags: ['Control theory', 'Mathematical proofs', 'MATLAB'],
    link: '/USRA_2023_Report__ISS_in_terms_of_two_measures.pdf',
  },
];
