'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { projects } from '../../data/projects';
import { Card } from '../../components/UI/Card';
import { Button } from '../../components/UI/Button';

const categories = ['all', 'ml', 'web', 'research', 'other'] as const;
type Category = typeof categories[number];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('all');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const technologyDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false);
      }
      if (technologyDropdownRef.current && !technologyDropdownRef.current.contains(event.target as Node)) {
        setTechnologyDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <main className="min-h-screen">



      {/* Brief Intro */}
      <section className="py-2 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <p className="text-xl text-slate-300 leading-relaxed">
            A collection of projects showcasing my skills in machine learning, web development, 
            research, and engineering. Each project represents a challenge I took on to learn 
            something new.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-4xl space-y-4">
          {/* Dropdown Filters */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Category Dropdown */}
            <div className="relative" ref={categoryDropdownRef}>
              <button
                onClick={() => {
                  setCategoryDropdownOpen(!categoryDropdownOpen);
                  setTechnologyDropdownOpen(false);
                }}
                className="w-64 !px-6 !py-3 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-xl text-white font-medium hover:bg-slate-700/80 transition-all duration-200 flex items-center justify-between shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>
                    {selectedCategory === 'all' ? 'All Categories' : 
                     selectedCategory === 'ml' ? 'Machine Learning' :
                     selectedCategory === 'web' ? 'Web Development' :
                     selectedCategory === 'research' ? 'Research' : 'Other'}
                  </span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {categoryDropdownOpen && (
                <div className="absolute top-full mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-xl shadow-2xl z-50 overflow-hidden">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSelectedTechnology('all');
                        setCategoryDropdownOpen(false);
                      }}
                      className={`w-full !px-6 !py-3 text-left hover:bg-slate-700/50 transition-colors flex items-center space-x-3 ${
                        selectedCategory === category ? 'bg-blue-600/20 text-blue-300' : 'text-slate-300'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        selectedCategory === category ? 'bg-blue-400' : 'bg-slate-500'
                      }`}></div>
                      <span>
                        {category === 'all' ? 'All Categories' : 
                         category === 'ml' ? 'Machine Learning' :
                         category === 'web' ? 'Web Development' :
                         category === 'research' ? 'Research' : 'Other'}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Technology Dropdown */}
            <div className="relative" ref={technologyDropdownRef}>
              <button
                onClick={() => {
                  setTechnologyDropdownOpen(!technologyDropdownOpen);
                  setCategoryDropdownOpen(false);
                }}
                className="w-64 !px-6 !py-3 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-xl text-white font-medium hover:bg-slate-700/80 transition-all duration-200 flex items-center justify-between shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="truncate">
                    {selectedTechnology === 'all' ? 'All Technologies' : selectedTechnology}
                  </span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${technologyDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {technologyDropdownOpen && (
                <div className="absolute top-full mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedTechnology('all');
                      setTechnologyDropdownOpen(false);
                    }}
                    className={`w-full !px-6 !py-3 text-left hover:bg-slate-700/50 transition-colors flex items-center space-x-3 ${
                      selectedTechnology === 'all' ? 'bg-green-600/20 text-green-300' : 'text-slate-300'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      selectedTechnology === 'all' ? 'bg-green-400' : 'bg-slate-500'
                    }`}></div>
                    <span>All Technologies</span>
                  </button>
                  {allTechnologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => {
                        setSelectedTechnology(tech);
                        setTechnologyDropdownOpen(false);
                      }}
                      className={`w-full !px-6 !py-3 text-left hover:bg-slate-700/50 transition-colors flex items-center space-x-3 ${
                        selectedTechnology === tech ? 'bg-green-600/20 text-green-300' : 'text-slate-300'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        selectedTechnology === tech ? 'bg-green-400' : 'bg-slate-500'
                      }`}></div>
                      <span>{tech}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filters & Results Count */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {selectedCategory !== 'all' && (
                <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  Category: {selectedCategory === 'ml' ? 'Machine Learning' :
                            selectedCategory === 'web' ? 'Web Development' :
                            selectedCategory === 'research' ? 'Research' : 'Other'}
                </span>
              )}
              {selectedTechnology !== 'all' && (
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  Technology: {selectedTechnology}
                </span>
              )}
            </div>
            <div className="flex items-center justify-center gap-6">
              <p className="text-slate-400">
                Showing <span className="text-white font-medium">{filteredProjects.length}</span> of <span className="text-white font-medium">{projects.length}</span> projects
              </p>
              {(selectedCategory !== 'all' || selectedTechnology !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedTechnology('all');
                  }}
                  className="!px-6 !py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 rounded-lg text-sm transition-colors border border-slate-600 hover:border-slate-500"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-2 px-2 sm:px-3 lg:px-4 flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-center justify-center gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="w-full flex justify-center !m-2">
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full max-w-3xl group cursor-pointer"
                >
                <div className="bg-slate-800 border border-slate-600 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-200 hover:bg-slate-700 h-80">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Project Image */}
                    <div className="lg:w-1/3 h-64 lg:h-full p-2 flex items-center justify-center">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-contain rounded"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder-project.jpg';
                        }}
                      />
                    </div>
                    
                    {/* Project Content */}
                    <div className="lg:w-2/3 p-4 flex flex-col relative h-full">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`!px-5 !py-2 text-xs rounded-full ${
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
                            <span className="!px-3 !py-2 bg-blue-600 text-white text-xs rounded-full">
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <span 
                              key={tech}
                              className="!px-3 !py-2 bg-slate-700 text-slate-300 text-sm rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 6 && (
                            <span className="!px-3 !py-2 bg-slate-700 text-slate-400 text-sm rounded">
                              +{project.technologies.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>



                      {/* Clickable Arrow */}
                      <div className="absolute bottom-6 right-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                          <svg 
                            className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
} 