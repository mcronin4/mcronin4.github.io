'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { projects } from '../../data/projects';
import { Card } from '../../components/UI/Card';
import { Button } from '../../components/UI/Button';

const categories = ['all', 'ml', 'web', 'research', 'other'] as const;
type Category = typeof categories[number];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('all');

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    // Filter by technology
    if (selectedTechnology !== 'all') {
      filtered = filtered.filter(project => 
        project.technologies.includes(selectedTechnology)
      );
    }
    
    return filtered;
  }, [selectedCategory, selectedTechnology]);

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Spacer */}
      <div className="h-12"></div>
      
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

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Category Filters */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 text-center">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedTechnology('all'); // Reset technology filter when category changes
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
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

          {/* Technology Filters */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 text-center">Filter by Technology</h3>
            <div className="flex flex-wrap justify-center gap-2 max-h-32 overflow-y-auto">
              <button
                onClick={() => setSelectedTechnology('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  selectedTechnology === 'all'
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                All Technologies
              </button>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTechnology(tech)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    selectedTechnology === tech
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters & Results Count */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                  Category: {selectedCategory === 'ml' ? 'Machine Learning' :
                            selectedCategory === 'web' ? 'Web Development' :
                            selectedCategory === 'research' ? 'Research' : 'Other'}
                </span>
              )}
              {selectedTechnology !== 'all' && (
                <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                  Technology: {selectedTechnology}
                </span>
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              <p className="text-slate-400 text-sm">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
              {(selectedCategory !== 'all' || selectedTechnology !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedTechnology('all');
                  }}
                  className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-slate-200 rounded text-sm transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
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
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
} 