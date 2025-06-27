'use client';

import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Card } from '../../components/UI/Card';
import { Button } from '../../components/UI/Button';

const categories = ['all', 'ml', 'web', 'research', 'other'] as const;
type Category = typeof categories[number];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const selectedProjectData = selectedProject 
    ? projects.find(p => p.id === selectedProject)
    : null;

  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in machine learning, web development, 
            research, and engineering. Each project represents a challenge I took on to learn 
            something new.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {category === 'all' ? 'All Projects' : 
                 category === 'ml' ? 'Machine Learning' :
                 category === 'web' ? 'Web Development' :
                 category === 'research' ? 'Research' : 'Other'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="h-full bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 hover:bg-slate-700"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs rounded-full ${
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
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-700 text-slate-400 text-sm rounded">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl && (
                      <button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
                      >
                        View Code
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProjectData && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">
                  {selectedProjectData.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="prose prose-invert max-w-none mb-6">
                <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                  {selectedProjectData.longDescription}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProjectData.githubUrl && (
                  <Button 
                    variant="primary" 
                    onClick={() => window.open(selectedProjectData.githubUrl, '_blank')}
                  >
                    View Code
                  </Button>
                )}
                <Button 
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 