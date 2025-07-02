'use client';

import React, { useState } from 'react';
import { personalInfo } from '../../data/personal';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'why' | 'skills' | 'extracurriculars'>('why');

  // Mapping hobby names to image files
  const hobbyImages: { [key: string]: string } = {
    'Camping / Outdoors': '/canoeing.jpg',
    'Volunteering': '/volunteering.JPEG',
    'Coding / Hackathons': '/coding.jpg',
    'Skiing': '/skiing.jpg',
    'Volleyball': '/volleyball.jpg',
    'Crosswords / mental puzzles': '/crossword.jpg'
  };

  const contentTabs = {
    why: {
      title: "Why I Do What I Do",
      content: (
        <div className="px-1 space-y-2">
          <p className="text-white leading-relaxed">
            I find satisfaction in making things work. Driven by curiosity and a passion to learn new things, and I am always looking for new challenges to keep life interesting.
          </p>
          <p className="text-white leading-relaxed">
            Ever since I was young, I always spent hours on end tinkering with puzzles, games, and anything that made me think. Today, that same curiosity inspires me to continually learn and grow while contributing to society in the best way I know how.
          </p>
        </div>
      )
    },
    skills: {
      title: "Skills & Expertise",
      content: (
        <div className="px-1 space-y-2">
          <p className="text-white leading-relaxed">
            My technical expertise spans machine learning, software development, and data science. I'm proficient in Python, JavaScript, C++, and MATLAB, with hands-on experience in frameworks like React, TensorFlow, and various data analysis tools.
          </p>
          <p className="text-white leading-relaxed">
            I excel at breaking down complex problems into manageable components and finding innovative solutions. My mathematical background gives me a strong foundation for understanding algorithms and statistical concepts.
          </p>
        </div>
      )
    },
    extracurriculars: {
      title: "Extra-Curriculars",
      content: (
        <div className="space-y-2">
          {/* QMIND */}
          <div>
            <p className="text-white leading-relaxed text-sm">
              <span className="text-blue-400 font-semibold">QMIND:</span> Actively involved in Queen's Machine Intelligence and Data Science, where I conduct research on LLM security and contribute to cutting-edge AI safety projects.
            </p>
          </div>
          
          {/* Hackathons & Competitions */}
          <div>
            <p className="text-white leading-relaxed text-sm">
              <span className="text-blue-400 font-semibold">Various Hackathons and Competitions:</span> Regularly participate in hackathons and engineering competitions, including winning the Queen's Engineering Competition and competing at the Ontario Engineering Competition. These experiences have taught me valuable teamwork and problem-solving skills.
            </p>
          </div>
          
          {/* Queen's Engineering Society */}
          <div>
            <p className="text-white leading-relaxed text-sm">
              <span className="text-blue-400 font-semibold">Queen's Engineering Society:</span> Active member contributing to various engineering initiatives and community building activities within the faculty.
            </p>
          </div>
        </div>
      )
    }
  };

  return (
    <main>

      {/* Top Section: Profile Pic | Interactive Content */}
      <section className="py-2 px-1 sm:px-4 lg:px-6 xl:px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            
            {/* Left Column - Profile Picture (25% width) */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <img 
                src="/headshot.jpg" 
                alt="Michael Cronin"
                className="w-64 h-64 object-cover rounded-2xl border-4 border-blue-500/30"
              />
            </div>

            {/* Right Column - Interactive Content (75% width) */}
            <div className="lg:col-span-3 space-y-3">
              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-2">
                {Object.entries(contentTabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as 'why' | 'skills' | 'extracurriculars')}
                    className={`px-2 py-1 rounded-lg font-medium transition-colors ${
                      activeTab === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Active Content */}
              <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-xl p-3 min-h-[200px]">
                <h2 className="text-xl font-bold text-white mb-3">
                  {contentTabs[activeTab].title}
                </h2>
                {contentTabs[activeTab].content}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Section: Educational Background & Awards | Hobbies */}
      <section className="px-1 sm:px-3 lg:px-4 xl:px-6">
        <div className="w-full">
          <div className="space-y-4">
            
            {/* Educational Background & Awards Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column - Educational Background */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3 text-center">
                  Educational Background
                </h2>
                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-xl p-4 space-y-2 h-64">
                  {/* Degree & School */}
                  <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-1">
                      {personalInfo.education.degree}
                    </h3>
                    <h4 className="text-lg text-slate-300 mb-1">
                      {personalInfo.education.school}
                    </h4>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-lg font-semibold text-blue-400">GPA: </span>
                      <span className="text-slate-300 font-medium">{personalInfo.education.gpa}</span>
                    </div>
                  </div>
                  
                  {/* Relevant Courses */}
                  <div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-1">
                      Relevant Courses
                    </h5>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                      {personalInfo.education.relevantCourses.map((course, index) => (
                        <div 
                          key={index}
                          className="bg-slate-600/30 rounded"
                        >
                          <span className="text-slate-300 text-xs">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Awards */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3 text-center">
                  Awards & Recognition
                </h2>
                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-xl p-4 space-y-3 h-64">
                  {/* Awards Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-1">
                      Academic & Professional Recognition
                    </h3>
                    <p className="text-lg text-slate-300 mb-2">
                      Recognized for excellence in academics, research, and innovation
                    </p>
                  </div>
                  
                  {/* Awards Grid */}
                  <div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-1">
                      Key Achievements
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {personalInfo.awards.map((award, index) => (
                        <div 
                          key={index}
                          className="bg-slate-600/30 rounded px-2 py-1 flex items-center space-x-2"
                        >
                          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xs">🏆</span>
                          </div>
                          <span className="text-slate-300 text-xs">
                            {award}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hobbies & Interests - Full Width */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-3 text-center">
                Hobbies & Interests
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
                {personalInfo.hobbies.map((hobby, index) => {
                  const imagePath = hobbyImages[hobby];
                  const imageExists = true; // All images now exist
                  
                  return (
                    <div 
                      key={index}
                      className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-xl hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-center p-2">
                        <div className="w-full h-24 bg-slate-600 rounded-lg mb-2 overflow-hidden relative">
                          {imageExists ? (
                            <img 
                              src={imagePath}
                              alt={hobby}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-slate-400 text-sm">Photo</span>
                            </div>
                          )}
                        </div>
                        <p className="text-white leading-relaxed text-xs px-1">
                          {hobby}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
} 