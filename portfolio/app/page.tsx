'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import { personalInfo } from '../data/personal';
import { skills } from '../data/skills';
import { Card, CardContent } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { MapPin, GraduationCap, Award, Heart } from 'lucide-react';

export default function HomePage() {
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Full-screen Hero Section with Typewriter and embedded content */}
      <HeroSection onTypewriterComplete={setTypewriterComplete}>
        {/* Two-column layout that fades in after typewriter completes */}
        {typewriterComplete && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto px-8">
            {/* Left Column - About Me */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 overflow-hidden rounded-xl">
                  <img 
                    src="/headshot.jpg" 
                    alt="Michael Cronin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  I'm a student at Queen's University studying Applied Mathematics & Engineering, 
                  with a passion for data science, machine learning, and software development.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I love tackling complex problems and building solutions that make a real impact.
                </p>
                <a 
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  Learn More About Me →
                </a>
              </div>
            </motion.div>

            {/* Right Column - Featured Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
              <FeaturedProjects />
              <div className="mt-6">
                <a 
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  View All Projects →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </HeroSection>
    </div>
  );
} 