import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import { Button } from '../../../components/UI/Button';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/projects"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>
          
          <div className="text-center">
            {/* Category Badge */}
            <div className="flex justify-center mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
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
                <span className="ml-3 px-3 py-2 bg-blue-600 text-white text-sm rounded-full">
                  ⭐ Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.imageUrl && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-4xl mx-auto">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl border border-slate-600"
            />
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8">About This Project</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <span className="text-xl">🐱</span>
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
                      className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <span className="text-xl">🌐</span>
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
                      className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <span className="text-xl">🎥</span>
                      <div>
                        <p className="text-white font-medium">Video Demo</p>
                        <p className="text-slate-400 text-sm">Watch on YouTube</p>
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