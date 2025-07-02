import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'compile-ai-news',
    title: 'Compile – AI-News Intelligence Platform',
    description: 'AI-powered news intelligence platform that aggregates 500+ articles daily, clusters them into stories, and delivers personalized feeds.',
    longDescription: `Architected a comprehensive AI-powered news intelligence platform that revolutionizes how users consume and interact with news content. The system features a self-healing Crawl4AI agent that automatically generates schemas for unseen article layouts, enabling robust scraping of 500+ news pieces daily. Data is intelligently stored in Supabase for relational information and Pinecone for vector embeddings, with a real-time API exposing the content to downstream applications.

The platform includes a sophisticated semantic-clustering algorithm that groups related articles into coherent "stories" and generates comprehensive summaries using Google's Gemini-2.5 language model. The React + Next.js frontend provides users with complete control over their news experience, allowing them to customize topics, adjust story rendering preferences, and rewrite articles to match their preferred tone and length.

Key features include embedding-driven "For-You" feeds that learn from user behavior, semantic search capabilities for finding relevant content, and intelligent recommendation systems. The entire platform is designed with scalability in mind, handling high-volume news ingestion while maintaining real-time responsiveness for user interactions.`,
    technologies: ['Python', 'Crawl4AI', 'Supabase', 'Pinecone', 'Google Gemini-2.5', 'React', 'Next.js', 'TypeScript', 'Vector Embeddings', 'Semantic Search', 'AI Retrieval', 'RAG', 'Real-time API', 'Web Scraping', 'Clustering Algorithms'],
    githubUrl: '', // Add if available
    demoUrl: 'https://www.loom.com/share/1a12c09d72334fceb5ec7d0136036c88?sid=4a92be44-3105-4d3c-8ad4-c765e596a94f',
    imageUrl: '/compile.ico',
    category: 'ml',
    featured: true,
    year: '2025'
  },
  {
    id: 'llm-jailbreak-defense',
    title: 'LLM Jailbreak Defense Research Project',
    description: 'Published research on improving LLM security by analyzing model activations to defend against jailbreaking attacks.',
    longDescription: `Conducted cutting-edge research on Large Language Model security as part of QMIND (Queen's Machine Intelligence and Data Science), focusing on developing robust defenses against jailbreaking methods that attempt to bypass AI safety measures. The project involved deep analysis of neural network internals to understand how malicious prompts succeed in circumventing model safeguards.

Developed an innovative framework that significantly improves refusal rates for various LLM jailbreaking techniques while maintaining the model's performance on legitimate tasks. The approach centers on analyzing the model's internal activations to identify relevant groups of neurons (features) that are crucial for safety mechanisms. By strategically boosting or suppressing these identified features, the system can better detect and refuse potentially harmful requests without degrading the model's helpful capabilities.

The research involved extensive experimentation with different activation patterns, feature selection algorithms, and intervention strategies. Key technical contributions include novel methods for identifying safety-relevant neural pathways and developing efficient techniques for real-time feature manipulation during inference.

The work culminated in a peer-reviewed paper co-authored and published at CUCAI (Canadian Undergraduate Conference on Artificial Intelligence), demonstrating the practical effectiveness and theoretical significance of the proposed defense mechanisms. This research contributes to the broader field of AI safety and responsible AI development.`,
    technologies: ['Python', 'PyTorch', 'Transformers', 'Neural Network Analysis', 'Feature Engineering', 'AI Safety', 'Research Methodology', 'Academic Writing'],
    githubUrl: '', // Add if available
    imageUrl: '/qmind.png',
    heroImageUrl: '/jailbreak_hero.png',
    category: 'research',
    featured: true,
    year: '2024-2025'
  },
  {
    id: 'chameleon-ai-content',
    title: 'Chameleon - AI-Powered Content Adaptation Platform',
    description: 'Award-winning hackathon project that transforms long-form content into platform-optimized social media posts using advanced AI retrieval.',
    longDescription: `Built in just 24 hours during the HackAI Toronto hackathon, Chameleon won the "Best AI Retrieval Project" award and $400 in BestBuy gift cards for demonstrating the most sophisticated implementation of contextual AI retrieval.

Chameleon is a full-stack AI application that revolutionizes content creation for social media by automatically adapting long-form content (articles, transcripts, videos) into platform-optimized posts for X (Twitter) and LinkedIn. The platform showcases advanced AI capabilities through intelligent topic extraction, emotional context analysis, and platform-specific content adaptation.

The system features a sophisticated AI pipeline that processes content through multiple stages: content ingestion (supporting both text and YouTube video transcripts), intelligent topic extraction using AI to identify key themes, emotional analysis for sentiment and tone detection, platform optimization for each social media platform's unique characteristics, and final post generation with metadata.

Key technical achievements include real-time streaming API for immediate feedback, multi-format support for processing various content types, contextual AI retrieval that understands content deeply, and responsive UI with smooth animations. The platform uses Google Gemini AI for content generation, LangGraph for workflow orchestration, and Supabase for real-time database operations with Row Level Security.

The project demonstrates exceptional engineering skills by delivering a production-ready application with user authentication, database design, AI integration, and full-stack development - all accomplished within the intense 24-hour hackathon timeframe.`,
    technologies: ['Next.js 15', 'TypeScript', 'FastAPI', 'Python', 'Google Gemini AI', 'LangGraph', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Zustand', 'YouTube Transcript API', 'AI Retrieval'],
    githubUrl: 'https://github.com/mcronin4/hackAI-JACM',
    liveUrl: 'https://devpost.com/software/chameleon-qpz6ru',
    demoUrl: 'https://youtu.be/lXXtfYojx7E',
    imageUrl: '/chameleon.png',
    category: 'ml',
    featured: true,
    year: '2025'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js featuring dynamic content, smooth animations, and advanced filtering.',
    longDescription: `Designed and developed a modern, fully responsive portfolio website to showcase my projects, experience, and skills. The website represents a complete redesign and migration from a static HTML/CSS site to a dynamic React-based application using Next.js and TypeScript.

The portfolio features a clean, professional design with a dark theme and blue accent colors, optimized for both desktop and mobile viewing. Key technical implementations include a component-based architecture with reusable UI elements, dynamic content management through TypeScript interfaces and data files, and smooth page transitions using Framer Motion.

Advanced features include intelligent project filtering by category and technology tags, allowing visitors to find relevant projects easily. The site includes comprehensive sections for projects (with detailed modals), work experience (with timeline layouts), skills categorization, and contact information with social media integration.

The website demonstrates modern web development practices including responsive design with Tailwind CSS, TypeScript for type safety, component composition patterns, SEO optimization, and performance optimization for fast loading times. The project showcases both technical expertise and design sensibilities, serving as both a functional portfolio and a demonstration of front-end development capabilities.

Additional features include animated navbar with hover effects, project cards with technology badges, modal system for detailed project views, contact form integration, and smooth scrolling animations throughout the site.`,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'SEO', 'Git', 'Vercel', 'Component Architecture'],
    githubUrl: 'https://github.com/mcronin4/mcronin4.github.io',
    liveUrl: 'https://michael-cronin.com',
    imageUrl: '/icon.png',
    heroImageUrl: '/website_hero.png',
    category: 'web',
    featured: false,
    year: '2024-2025'
  },
  {
    id: 'crossword-solver',
    title: 'Crossword Clue Solver RNN Extension',
    description: 'AI-powered crossword clue solver with Chrome extension integration for the NYT Crossword.',
    longDescription: `From my love of crosswords, I decided to make a crossword clue solver that would give me hints if I was stuck on a clue (without just searching up the answer). Using Tensorflow, I trained a model by transferring learning from BERT, and retraining extra layers with 750,000+ clue-answer pairs. I used Flask as a server to run inferences on. To integrate my model with the NYT Crossword, I developed a Chrome Extension using HTML, CSS, and Javascript to make a small UI interface that allows you to either type in a clue, or auto-load the clue you currently have selected.`,
    technologies: ['Python', 'TensorFlow', 'BERT', 'Flask', 'Chrome Extension', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/mcronin4/Crossword_Solver_RNN_Extension',
    imageUrl: '/crossword.jpg',
    category: 'ml',
    featured: false,
    year: '2024',
    heroImageUrl: '/crossword_hero.png'
  },
  {
    id: 'homebase',
    title: 'Homebase - Student Housing Social Platform',
    description: 'Social media app connecting students with landlords to help find houses, built with Qt and MySQL.',
    longDescription: `Developed a social media app designed to connect students with landlords to help find houses, as part of a group in CMPE 320 (Fundamentals of Software Development). We used Qt Creator to support the front end and a MySQL database to support the backend. The bulk of the code was written in C++, utilizing object oriented programming. Embedded SQL was used to allow for dynamic querying and manipulation of data. The team created UML Class, Sequence, State Chart, and Use Case diagrams to describe the system's software architecture. In addition, the team utilized Jira and BitBucket, as well as created Requirements Analysis Documents (RAD) and System Design Documents (SDD) to simulate the software development process.`,
    technologies: ['C++', 'Qt', 'QML', 'MySQL', 'SQL'],
    githubUrl: 'https://github.com/mcronin4/homebase',
    imageUrl: '/homebase.jpg',
    category: 'web',
    featured: false,
    year: '2023',
    heroImageUrl: '/homebase_hero.png'
  },
  {
    id: 'crane-controller',
    title: 'Remote-Controlled Precision Crane',
    description: 'Award-winning remote-controlled crane built for the Ontario Engineering Competition.',
    longDescription: `Built a remote-controlled crane as part of the Ontario Engineering Competition (of which I qualified for by winning the Queen's Engineering Competition). Given a very limited set of materials, the task was to build a remote-controlled crane that could pick up staples with precision, lift them up to a tall height, and drop them into a bucket. We had 8 hours to complete this task. As a team, we brainstormed and created many models/ideas to test before we started creation. This included Python/MATLAB models for load analysis, unit tests for Arduino scripts, and CAD models. After creating a decision matrix to pick our model, we constructed our machine based directly on our CAD model. Our design tested perfectly, achieving all required tasks and gaining some bonus points. After submitting a presentation and report, our design placed very highly in the competition and we were very proud in our result and to represent Queen's well on the provincial stage.`,
    technologies: ['Arduino', 'SOLIDWORKS', 'Python', 'MATLAB'],
    imageUrl: '/crane.jpg',
    category: 'other',
    featured: false,
    year: '2024',
    heroImageUrl: '/crane_hero.png'
  },
  {
    id: 'system-controller',
    title: 'Black Box System Controller',
    description: 'Top-of-class controller design for unknown transfer function system using advanced control theory.',
    longDescription: `As part of a design course, we were given a black box system with an unknown transfer function that took input functions to unpredictable output functions. The only information available was samples of the output function at regular intervals. The task was to test the system and design a controller to ensure that the output of the system matched the input function exactly. Key tasks to do this included: i) proving time invariance of the system ii) estimating noise and filtering it out (used Fourier Analysis to justify low-pass filter) iii) creating a Bode plot based on an efficient algorithm to test different frequencies iv) estimating a corresponding transfer function and implementing feed-forward compensation to ensure the system was minimum phase v) designing and testing a PID controller. The controller exceeded all target specifications and was deemed top of the class.`,
    technologies: ['MATLAB', 'Fourier Analysis', 'Simulink', 'PID Control'],
    imageUrl: '/controller.jpg',
    category: 'research',
    featured: false,
    year: '2023',
    heroImageUrl: '/blackbox_hero.png'
  },
  {
    id: 'hurricane-drone-simulation',
    title: 'Hurricane Monitoring Drone Simulation',
    description: 'MATLAB algorithm simulating autonomous drone deployment for hurricane data collection.',
    longDescription: `Created a MATLAB algorithm to simulate drones dispersing themselves around a moving hurricane to collect key meteorological data. Based on a moving density map, I used Lloyd's algorithm and k-means clustering to simulate the drones dispersing across the hurricane to optimize their position according to hurricane intensity. I used this algorithm to investigate three different real world solutions to this, including one expensive option with few drones but large communication radius, and another with many cheaper drones with small communication radius. Changing the parameters of this algorithm allowed for these real-world solutions to be tested and evaluated.`,
    technologies: ['MATLAB', 'k-means clustering', 'Lloyd\'s Algorithm'],
    imageUrl: '/hurricane.jpg',
    category: 'research',
    featured: false,
    year: '2022',
    heroImageUrl: '/hurricane_hero.png'
  }
];

export const featuredProjects = projects.filter(project => project.featured); 