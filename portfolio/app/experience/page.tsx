import React from 'react';
import { experiences } from '../../data/experience';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Work Experience
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My professional journey through internships, research, and teaching roles. 
            Each experience has helped shape my technical skills and professional development.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600"></div>
            
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative mb-16 last:mb-0">
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  experience.current 
                    ? 'bg-blue-600 border-blue-400' 
                    : 'bg-slate-800 border-blue-600'
                }`}></div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:mr-1/2 md:pr-12' 
                    : 'md:ml-1/2 md:pl-12'
                }`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800/80 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {experience.company}
                        </h3>
                        {experience.current && (
                          <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-green-600/20 text-green-300 text-sm rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl text-blue-400 mb-2">
                        {experience.position}
                      </h4>
                      <p className="text-slate-400">
                        {experience.duration}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                        {experience.description}
                      </p>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">
                        Key Skills Developed
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            What I'm Looking For
          </h2>
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I am currently recruiting for <strong className="text-blue-400">Summer 2025 internships</strong> before 
              I finish my final year at Queen&apos;s University. I&apos;m particularly interested in roles that combine my 
              mathematical background with technical implementation.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              I&apos;m looking for opportunities in data science, software development, machine learning, 
              or research roles where I can apply my unique blend of advanced mathematics and computer science skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="/Michael Cronin Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 