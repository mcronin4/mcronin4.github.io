import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import { Button } from '../../../components/UI/Button';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Helper functions to extract video IDs from URLs
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

function getLoomVideoId(url: string): string | null {
  const regExp = /loom\.com\/share\/([a-f0-9]+)(\?.*)?/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function getLoomEmbedUrl(url: string): string | null {
  const regExp = /loom\.com\/share\/([a-f0-9]+)(\?.*)?/;
  const match = url.match(regExp);
  if (!match) return null;
  
  const videoId = match[1];
  const queryParams = match[2] || '';
  return `https://www.loom.com/embed/${videoId}${queryParams}`;
}

function getVideoInfo(url: string): { type: 'youtube' | 'loom' | null, id: string | null } {
  const youtubeId = getYouTubeVideoId(url);
  if (youtubeId) return { type: 'youtube', id: youtubeId };
  
  const loomId = getLoomVideoId(url);
  if (loomId) return { type: 'loom', id: loomId };
  
  return { type: null, id: null };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  // Determine what to show in the hero section
  const videoInfo = project.demoUrl ? getVideoInfo(project.demoUrl) : { type: null, id: null };
  const heroImageToUse = project.heroImageUrl || project.imageUrl;

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="w-full sm:px-4 lg:px-6 xl:px-8 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Top Row: Back Button & Tags */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 px-2 gap-2">
            {/* Back Button */}
            <div className="text-left">
              <Link 
                href="/projects"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                ← Back to Projects
              </Link>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap justify-start sm:justify-end gap-3">
              <span className={`!px-5 !py-2 rounded-full text-sm font-medium ${
                project.category === 'ml' ? 'bg-purple-600 text-white' :
                project.category === 'web' ? 'bg-green-600 text-white' :
                project.category === 'research' ? 'bg-yellow-600 text-white' :
                'bg-gray-600 text-white'
              }`}>
                {project.category === 'ml' ? 'Machine Learning' :
                 project.category === 'web' ? 'Web Development' :
                 project.category === 'research' ? 'Research' : 'Other'}
              </span>
              {project.featured && (
                <span className="!px-4 !py-2 bg-blue-600 text-white text-sm rounded-full">
                  ⭐ Featured
                </span>
              )}
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4 break-words leading-tight px-2 sm:px-4">
              {project.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Media - Video or Image */}
      <section className="w-full py-4 px-2 sm:px-4 lg:px-6 xl:px-8 flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="flex justify-center px-2">
            {videoInfo.id && videoInfo.type ? (
              /* Video Embed */
              <div className="w-full max-w-4xl">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-600">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={
                      videoInfo.type === 'youtube' 
                        ? `https://www.youtube.com/embed/${videoInfo.id}`
                        : getLoomEmbedUrl(project.demoUrl!) || ''
                    }
                    title={`${project.title} Demo Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            ) : heroImageToUse ? (
              /* Hero Image Fallback */
              <img 
                src={heroImageToUse} 
                alt={project.title}
                className="w-full max-w-4xl h-96 object-cover rounded-xl border border-slate-600"
              />
            ) : null}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="w-full py-8 px-2 sm:px-4 lg:px-6 xl:px-8 flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Column - About This Project (3/4 width) */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-white mb-4">About This Project</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* Right Column - Technologies & Links (1/4 width) */}
            <div className="lg:col-span-1 space-y-4">
              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="!px-4 !py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Project Links</h3>
                <div className="space-y-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-600"
                    >
                      <span className="text-2xl">🐱</span>
                      <div>
                        <p className="text-white font-medium">View Code</p>
                        <p className="text-slate-400 text-sm">GitHub Repository</p>
                      </div>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-600"
                    >
                      <span className="text-2xl">🌐</span>
                      <div>
                        <p className="text-white font-medium">Live Demo</p>
                        <p className="text-slate-400 text-sm">View Online</p>
                      </div>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-600"
                    >
                      <span className="text-2xl">🎥</span>
                      <div>
                        <p className="text-white font-medium">Video Demo</p>
                        <p className="text-slate-400 text-sm">Watch Demo Video</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Back to Projects */}
              <div>
                <Link href="/projects">
                  <Button variant="outline" className="w-full">
                    ← Back to All Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 