import React from 'react';
import { personalInfo } from '../../data/personal';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                {personalInfo.detailedBio}
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/headshot.jpg" 
                alt="Michael Cronin"
                className="w-80 h-80 object-cover rounded-full border-4 border-blue-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Educational Background
          </h2>
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {personalInfo.education.degree}
            </h3>
            <h4 className="text-xl text-slate-300 mb-6">
              {personalInfo.education.school}
            </h4>
            <p className="text-slate-300 leading-relaxed mb-6">
              {personalInfo.education.description}
            </p>
            <p className="text-slate-300 leading-relaxed">
              This program fits me perfectly since I love math and solving problems, and I find that going through logical proofs helps my critical thinking skills that I can apply to other parts of my life. As well, with my computer courses, I get the technical groundwork that I use in the workplace and build off of in my personal projects.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInfo.awards.map((award, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/80 transition-colors"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">🏆</span>
                  </div>
                  <p className="text-slate-300 font-medium">
                    {award}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalInfo.hobbies.map((hobby, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-slate-700/30 rounded-lg p-6"
              >
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-400 text-lg">•</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {hobby}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Why I Do What I Do
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I find satisfaction in making things work. Driven by curiosity and a passion to learn new things, and I am always looking for new challenges to keep life interesting.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Ever since I was young, I always spent hours on end tinkering with puzzles, games, and anything that made me think. Today, that same curiosity inspires me to continually learn and grow while contributing to society in the best way I know how.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 