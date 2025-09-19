'use client';

import React from 'react';
import { personalInfo } from '../../data/personal';

export default function AboutPage() {
  // Mapping hobby names to image files
  const hobbyImages: { [key: string]: string } = {
    'Camping / Outdoors': '/canoeing.jpg',
    'Volunteering': '/volunteering.JPEG',
    'Coding / Hackathons': '/coding.jpg',
    'Skiing': '/skiing.jpg',
    'Volleyball': '/volleyball.jpg',
    'Crosswords / Puzzles': '/crossword_hero.png'
  };

  return (
    <main className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* About Me - Compact Section */}
        <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:bg-slate-700/50 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            About Me
          </h2>
          
          {/* Grid Layout: 1/3 and 2/3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column (1/3 width) */}
            <div className="lg:col-span-1 space-y-4">
              {/* Top: Profile Picture */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src="/headshot.jpg" 
                  alt="Michael Cronin"
                  className="w-48 h-48 object-cover rounded-xl border-3 border-blue-500/30 hover:border-blue-500/50 transition-colors"
                />
              </div>
              
              {/* Bottom: About & Location */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-bold text-white mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-2">
                  {personalInfo.title}
                </p>
                <p className="text-slate-300 text-xs mb-3">
                  {personalInfo.location}
                </p>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
            </div>

            {/* Right Column (2/3 width) */}
            <div className="lg:col-span-2 space-y-4">
              
              {/* Top: Education */}
              <div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">
                  Education
                </h4>
                <div className="space-y-1">
                  <h5 className="text-md font-semibold text-white">
                    {personalInfo.education.degree}
                  </h5>
                  <h6 className="text-md text-slate-300">
                    {personalInfo.education.school}
                  </h6>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {personalInfo.education.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-blue-400">GPA:</span>
                    <span className="text-slate-300 text-xs">{personalInfo.education.gpa}</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Awards */}
              <div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">
                  Awards & Recognition
                </h4>
                <div className="space-y-2">
                  {personalInfo.awards.map((award, index) => (
                    <div 
                      key={index}
                      className="bg-slate-600/30 rounded px-2 py-1 flex items-start space-x-2"
                    >
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold text-xs">🏆</span>
                      </div>
                      <span className="text-slate-300 text-xs leading-relaxed">
                        {award}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Hobbies with Hover Descriptions */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Hobbies & Interests
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {personalInfo.hobbies.map((hobby, index) => {
              const imagePath = hobbyImages[hobby.name];
              
              return (
                <div 
                  key={index}
                  className="group bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-xl hover:bg-slate-700/50 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="h-48 bg-slate-600 overflow-hidden relative">
                    <img 
                      src={imagePath}
                      alt={hobby.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
                    />
                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <p className="text-white text-sm text-center leading-relaxed font-medium">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-center group-hover:text-blue-400 transition-colors">
                      {hobby.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
} 