import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'compile-ai-news',
    title: 'Compile',
    tagline: 'AI news intelligence platform',
    description:
      'Ingests 500+ articles a day, clusters them into stories, and builds a personalized feed with semantic search and tone-adjustable rewrites.',
    longDescription: `Compile is a news reader I built end to end. A self-healing Crawl4AI pipeline ingests 500+ articles a day, generating extraction schemas on the fly for layouts it has not seen before. Articles land in Supabase for relational data and Pinecone for embeddings, behind a real-time API that the frontend and downstream jobs read from.

A semantic clustering step groups related coverage into a single story and summarizes each one with Gemini 2.5, so you read one well-sourced piece instead of twelve near-duplicates. The Next.js frontend has a "For You" feed driven by embeddings of what you actually read, semantic search across the corpus, and controls to rewrite any story to the tone and length you want.`,
    technologies: ['Python', 'Next.js', 'TypeScript', 'Supabase', 'Pinecone', 'Temporal', 'Crawl4AI', 'Gemini 2.5', 'Vercel'],
    liveUrl: 'https://www.compile-news.com/home',
    demoUrl: 'https://www.loom.com/share/1a12c09d72334fceb5ec7d0136036c88?sid=4a92be44-3105-4d3c-8ad4-c765e596a94f',
    heroImageUrl: '/compile_hero.jpg',
    category: 'ml',
    featured: true,
    year: '2025',
  },
  {
    id: 'mantis-web-crawler',
    title: 'Mantis',
    tagline: 'Visual QA crawler for the web',
    description:
      'A crawler that drives a site with Playwright and hands screenshots to a multimodal model to find visual bugs and accessibility issues that DOM-based tools miss.',
    longDescription: `Traditional QA tools inspect the DOM against static rules and miss anything that only shows up visually: overlapping components, elements pushed off-screen, broken images, controls that look enabled but are not. Mantis crawls a site breadth-first with Playwright, exercising clicks, scrolls, and viewport sizes along the way, and hands each state to a multimodal model to find those bugs.

It ships as a PyPI package with a CLI, produces JSON reports that link every issue to a DOM node with a suggested fix, and drops into CI or GitHub Actions so problems get caught before merge. Built with three teammates at Hack the North 2025, where it was a finalist and won Best Developer Tool.`,
    technologies: ['Python', 'Playwright', 'Cohere', 'axe-core', 'Flask', 'PyPI'],
    githubUrl: 'https://github.com/ColinG03/mantis',
    liveUrl: 'https://pypi.org/project/mantis-web-crawler/',
    demoUrl: 'https://www.youtube.com/watch?v=jMbZNe5SsH8',
    imageUrl: '/mantis.jpg',
    category: 'ml',
    featured: true,
    year: '2025',
    recognition: 'Hack the North finalist · Best Developer Tool',
  },
  {
    id: 'chameleon-ai-content',
    title: 'Chameleon',
    tagline: 'Content adaptation agent',
    description:
      'Turns articles and YouTube videos into platform-native posts for X and LinkedIn. Built in 24 hours; won Best AI Retrieval at HackAI Toronto.',
    longDescription: `Built in 24 hours at HackAI Toronto, where it won the Best AI Retrieval Project award. Paste an article or a YouTube link and Chameleon pulls the transcript, extracts the key topics, reads the emotional register of the source, and writes posts tuned to each platform's conventions and length limits.

The pipeline is a LangGraph workflow over Gemini with a streaming FastAPI backend, so posts appear as they are generated rather than after a long wait. Next.js frontend, Supabase with row-level security for auth and storage, deployed on Vercel.`,
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'LangGraph', 'Gemini', 'Supabase', 'PostgreSQL'],
    githubUrl: 'https://github.com/mcronin4/hackAI-JACM',
    liveUrl: 'https://devpost.com/software/chameleon-qpz6ru',
    demoUrl: 'https://youtu.be/lXXtfYojx7E',
    imageUrl: '/chameleon.png',
    category: 'ml',
    featured: true,
    year: '2025',
    recognition: 'HackAI Toronto · Best AI Retrieval',
  },
  {
    id: 'llm-jailbreak-defense',
    title: 'LLM Jailbreak Defense',
    tagline: 'Mechanistic interpretability research',
    description:
      'Steering refusal-related features inside a language model to make it more robust to jailbreak prompts. Co-authored paper published at CUCAI.',
    longDescription: `With QMIND, I worked on defending language models against jailbreak prompts by looking inside the model rather than filtering its inputs. Using sparse autoencoders trained with SAELens, we identified features in the model's activations that correlate with refusal behaviour, then boosted or suppressed those features at inference time.

The resulting framework raised refusal rates on jailbreak prompts by roughly 40% while keeping performance on benchmark tasks intact. We built a Gradio demo for steering individual features and watching the output change, and co-authored a paper published at the Canadian Undergraduate Conference on Artificial Intelligence.`,
    technologies: ['Python', 'PyTorch', 'SAELens', 'Transformers', 'Gradio'],
    heroImageUrl: '/jailbreak_hero.png',
    category: 'research',
    featured: true,
    year: '2024 – 2025',
    recognition: 'Published at CUCAI 2025',
  },
  {
    id: 'qec-2025-snowplow',
    title: 'Plow Kingston',
    tagline: 'Snowplow routing simulator',
    description:
      "Routes a plow fleet across Kingston's real road network during a live storm simulation. First place in the QEC 2025 programming competition.",
    longDescription: `Built in a day for the programming category of the Queen's Engineering Competition, where it took first place. The app loads Kingston's actual road network from GeoJSON, runs a storm simulation that keeps depositing snow across the graph, and dispatches plows against it.

Routing uses a finite-horizon greedy policy: a bounded depth-first search that scores candidate paths by road importance, snow depth, and length per unit of time. A Leaflet map shows the plow moving in real time over a snow-depth heatmap, with clearing statistics and turn-by-turn navigation. Next.js frontend, FastAPI backend, deployed on Vercel.`,
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'Leaflet', 'Graph algorithms'],
    githubUrl: 'https://github.com/mcronin4/plow_kingston',
    liveUrl: 'https://plowking.vercel.app/',
    heroImageUrl: '/plowking.jpg',
    category: 'other',
    featured: false,
    year: '2025',
    recognition: "Queen's Engineering Competition · First place",
  },
  {
    id: 'micra-content-agent',
    title: 'MiCRA',
    tagline: 'Multimodal content repurposing agent',
    description:
      'Takes transcripts, articles, video, and audio and produces platform-specific outputs, with a consistency engine that checks generated text against every source.',
    longDescription: `I led a five-person QMIND team building MiCRA for Project X, a Toronto AI and data consulting firm. It takes long-form inputs (transcripts from YouTube, Zoom, or Whisper, articles, video, audio, and images) and turns them into platform-specific outputs like LinkedIn posts, emails, tweet threads, and meeting notes.

The interesting part is the consistency layer. Most "prompt in, content out" tools start hallucinating as soon as you give them several sources. MiCRA extracts entities across every input, aligns and normalizes terminology between them, and checks generated text against the sources before it leaves the pipeline. Generation runs on Gemini through a template-driven prompt builder, and a human-in-the-loop editor step closes the loop.`,
    technologies: ['Python', 'Gemini', 'NLP', 'Entity extraction', 'Next.js'],
    githubUrl: 'https://github.com/mcronin4/MiCRA',
    liveUrl: 'https://mi-cra.vercel.app/',
    heroImageUrl: '/system_design.png',
    category: 'ml',
    featured: false,
    year: '2025',
  },
  {
    id: 'scrappers-cup-tennis-ladder',
    title: 'Scrappers Cup',
    tagline: 'Tennis ladder manager',
    description:
      'Rankings and match tracking for a tennis ladder, with a "poison ladder" system where winners take the loser\'s rung and a phone-first admin panel.',
    longDescription: `A ranking and match-tracking app for a tennis ladder. Winners take the loser's rung, which keeps the ladder moving and makes every match matter.

Admins enter set-by-set scores from their phones. The ranking engine normalizes gaps and duplicates, replays the full match history chronologically to rebuild standings after an edit, and handles players dropping out and rejoining without losing their history. Next.js and Supabase with an email-allowlist auth model, with unit and integration tests in Vitest.`,
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vitest'],
    githubUrl: 'https://github.com/mcronin4/scrappers-cup',
    demoUrl: 'https://www.loom.com/share/8e413a9c9e2f4c3588f87bc8444447d6?sid=4050dbaf-1314-43f4-8ee3-96ce89ebc5be',
    category: 'web',
    featured: false,
    year: '2025',
  },
  {
    id: 'crossword-solver',
    title: 'Crossword Clue Solver',
    tagline: 'BERT model with a Chrome extension',
    description:
      'A clue solver fine-tuned from BERT on 750,000 clue-answer pairs, wired into the NYT Crossword through a Chrome extension for hints without spoilers.',
    longDescription: `I do the NYT crossword most mornings and wanted hints that stop short of just giving the answer. I fine-tuned a BERT-based model in TensorFlow on more than 750,000 clue-answer pairs and served it from a small Flask API.

The Chrome extension reads the clue you currently have selected on the NYT site (or takes one you type in) and shows the model's guesses in a small panel, so you can nudge yourself without opening a search engine.`,
    technologies: ['Python', 'TensorFlow', 'BERT', 'Flask', 'Chrome extension', 'JavaScript'],
    githubUrl: 'https://github.com/mcronin4/Crossword_Solver_RNN_Extension',
    heroImageUrl: '/crossword_hero.png',
    category: 'ml',
    featured: false,
    year: '2024',
  },
  {
    id: 'crane-controller',
    title: 'Remote-Controlled Crane',
    tagline: 'Ontario Engineering Competition',
    description:
      'An eight-hour build of a remote-controlled crane that picks up staples with precision, lifts them, and drops them into a bucket, from a fixed kit of materials.',
    longDescription: `I qualified for the Ontario Engineering Competition by winning the Queen's Engineering Competition, and this was the provincial challenge: with a limited kit of materials and eight hours, build a remote-controlled crane that can pick up staples with precision, lift them to height, and drop them into a bucket.

We modelled loads in Python and MATLAB, wrote unit tests for the Arduino control code, and built a CAD model before touching any materials. After a decision matrix to choose between designs, we built directly from the CAD model. The crane completed every required task with bonus points, and the design placed highly after the presentation and report.`,
    technologies: ['Arduino', 'SOLIDWORKS', 'Python', 'MATLAB'],
    heroImageUrl: '/crane_hero.jpg',
    category: 'other',
    featured: false,
    year: '2024',
  },
  {
    id: 'system-controller',
    title: 'Black Box Controller',
    tagline: 'System identification and PID design',
    description:
      'Identified an unknown plant from sampled outputs alone, then designed a feed-forward and PID controller that exceeded every target spec. Top of the class.',
    longDescription: `We were handed a black box with an unknown transfer function and could only observe samples of its output at regular intervals. The task was to characterise it well enough to design a controller that makes the output track the input exactly.

That meant proving the system was time invariant, estimating the noise and justifying a low-pass filter with Fourier analysis, building a Bode plot with an efficient frequency sweep, fitting a transfer function and adding feed-forward compensation to make the system minimum phase, and finally designing and tuning a PID controller. The controller exceeded every target specification and was ranked top of the class.`,
    technologies: ['MATLAB', 'Simulink', 'Fourier analysis', 'PID control'],
    heroImageUrl: '/blackbox_hero.png',
    category: 'research',
    featured: false,
    year: '2023',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
