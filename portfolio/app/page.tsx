'use client';

import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import { personalInfo } from '../data/personal';
import { skills } from '../data/skills';
import { Card, CardContent } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { MapPin, GraduationCap, Award, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Full-screen Hero Section with Typewriter */}
      <HeroSection />

      {/* Quick About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-lg text-slate-300 mb-6">
                I'm a student at Queen's University studying Applied Mathematics & Engineering, 
                with a passion for data science, machine learning, and software development.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                I love tackling complex problems and building solutions that make a real impact.
              </p>
              <a 
                href="/about"
                className="inline-flex items-center px-4 py-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Learn more about me →
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-400">Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Python', 'JavaScript', 'C++', 'MATLAB', 'React', 'TensorFlow', 'SQL', 'Git'].map((skill) => (
              <div 
                key={skill}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-800/80 transition-colors duration-200"
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 