import React from 'react';
import { experiences } from '../../data/experience';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-4 px-2 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-base text-slate-300 max-w-3xl mx-auto">
            My professional journey through internships, research, and teaching roles. Each experience has helped shape my technical skills and professional development.
          </p>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-6 px-2 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="w-full max-w-4xl">
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 rounded-xl p-6 hover:from-slate-700/90 hover:to-slate-800/90 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm">
                  
                  {/* Header */}
                  <div className="mb-4 relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <h3 className="text-xl font-bold text-white">
                          {experience.company}
                        </h3>
                      </div>
                      {experience.current && (
                        <span className="inline-flex items-center mt-2 sm:mt-0 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-sm rounded-full border border-green-400/30 shadow-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      {experience.position}
                    </h4>
                    <p className="text-slate-400 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {experience.duration}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6 relative z-10">
                    <div className="bg-slate-800/30 rounded-lg p-4 border-l-4 border-blue-500/50">
                      <p className="text-slate-200 leading-relaxed text-base">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <h5 className="text-base font-semibold text-white">
                        Key Skills Developed
                      </h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-200 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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