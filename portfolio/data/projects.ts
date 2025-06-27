import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'crossword-solver',
    title: 'Crossword Clue Solver RNN Extension',
    description: 'AI-powered crossword clue solver with Chrome extension integration for the NYT Crossword.',
    longDescription: `From my love of crosswords, I decided to make a crossword clue solver that would give me hints if I was stuck on a clue (without just searching up the answer). Using Tensorflow, I trained a model by transferring learning from BERT, and retraining extra layers with 750,000+ clue-answer pairs. I used Flask as a server to run inferences on. To integrate my model with the NYT Crossword, I developed a Chrome Extension using HTML, CSS, and Javascript to make a small UI interface that allows you to either type in a clue, or auto-load the clue you currently have selected.`,
    technologies: ['Python', 'TensorFlow', 'BERT', 'Flask', 'Chrome Extension', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/mcronin4/Crossword_Solver_RNN_Extension',
    imageUrl: '/crossword.jpg',
    category: 'ml',
    featured: true
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
    featured: true
  },
  {
    id: 'crane-controller',
    title: 'Remote-Controlled Precision Crane',
    description: 'Award-winning remote-controlled crane built for the Ontario Engineering Competition.',
    longDescription: `Built a remote-controlled crane as part of the Ontario Engineering Competition (of which I qualified for by winning the Queen's Engineering Competition). Given a very limited set of materials, the task was to build a remote-controlled crane that could pick up staples with precision, lift them up to a tall height, and drop them into a bucket. We had 8 hours to complete this task. As a team, we brainstormed and created many models/ideas to test before we started creation. This included Python/MATLAB models for load analysis, unit tests for Arduino scripts, and CAD models. After creating a decision matrix to pick our model, we constructed our machine based directly on our CAD model. Our design tested perfectly, achieving all required tasks and gaining some bonus points. After submitting a presentation and report, our design placed very highly in the competition and we were very proud in our result and to represent Queen's well on the provincial stage.`,
    technologies: ['Arduino', 'SOLIDWORKS', 'Python', 'MATLAB'],
    imageUrl: '/crane.jpg',
    category: 'other',
    featured: true
  },
  {
    id: 'system-controller',
    title: 'Black Box System Controller',
    description: 'Top-of-class controller design for unknown transfer function system using advanced control theory.',
    longDescription: `As part of a design course, we were given a black box system with an unknown transfer function that took input functions to unpredictable output functions. The only information available was samples of the output function at regular intervals. The task was to test the system and design a controller to ensure that the output of the system matched the input function exactly. Key tasks to do this included: i) proving time invariance of the system ii) estimating noise and filtering it out (used Fourier Analysis to justify low-pass filter) iii) creating a Bode plot based on an efficient algorithm to test different frequencies iv) estimating a corresponding transfer function and implementing feed-forward compensation to ensure the system was minimum phase v) designing and testing a PID controller. The controller exceeded all target specifications and was deemed top of the class.`,
    technologies: ['MATLAB', 'Fourier Analysis', 'Simulink', 'PID Control'],
    imageUrl: '/controller.jpg',
    category: 'research',
    featured: false
  },
  {
    id: 'hurricane-drone-simulation',
    title: 'Hurricane Monitoring Drone Simulation',
    description: 'MATLAB algorithm simulating autonomous drone deployment for hurricane data collection.',
    longDescription: `Created a MATLAB algorithm to simulate drones dispersing themselves around a moving hurricane to collect key meteorological data. Based on a moving density map, I used Lloyd's algorithm and k-means clustering to simulate the drones dispersing across the hurricane to optimize their position according to hurricane intensity. I used this algorithm to investigate three different real world solutions to this, including one expensive option with few drones but large communication radius, and another with many cheaper drones with small communication radius. Changing the parameters of this algorithm allowed for these real-world solutions to be tested and evaluated.`,
    technologies: ['MATLAB', 'k-means clustering', 'Lloyd\'s Algorithm'],
    imageUrl: '/hurricane.jpg',
    category: 'research',
    featured: false
  }
];

export const featuredProjects = projects.filter(project => project.featured); 