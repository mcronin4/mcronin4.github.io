'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '../UI/Card';
import { Button } from '../UI/Button';
import { featuredProjects } from '../../data/projects';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = featuredProjects[currentIndex];

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-slate-800/80 hover:bg-slate-700/80 rounded-full p-2 transition-colors backdrop-blur-sm border border-slate-600/50"
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-slate-800/80 hover:bg-slate-700/80 rounded-full p-2 transition-colors backdrop-blur-sm border border-slate-600/50"
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </button>

      {/* Carousel Slides */}
      <div className="overflow-hidden rounded-lg max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {/* Current Project Card - Compact Version */}
            <Link href={`/projects/${currentProject.id}`} className="block p-2">
              <Card className="group bg-slate-800/40 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/60 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  {/* Vertical layout for centered image */}
                  <div className="flex flex-col items-center">
                    {/* Project image - centered */}
                    <div className="relative w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden rounded-lg mx-auto mb-4 flex-shrink-0">
                      {currentProject.imageUrl && (
                        <img
                          src={currentProject.imageUrl}
                          alt={currentProject.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      {/* Year badge - smaller */}
                      <div className="absolute top-2 right-2">
                        <span className="!px-3 !py-2 bg-slate-800/80 text-slate-300 text-xs rounded backdrop-blur-sm">
                          {currentProject.year}
                        </span>
                      </div>
                    </div>

                    {/* Project content - expanded */}
                    <div className="w-full px-6 py-4 flex flex-col justify-between items-center">
                      <div className="w-full">
                        <div className="flex items-start justify-between mb-3 w-full">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors break-words whitespace-normal">
                            {currentProject.title}
                          </h3>
                          <span className={`!px-5 !py-2 rounded text-sm font-medium ml-3 ${
                            currentProject.category === 'ml' ? 'bg-purple-600/80 text-white' :
                            currentProject.category === 'web' ? 'bg-green-600/80 text-white' :
                            currentProject.category === 'research' ? 'bg-yellow-600/80 text-white' :
                            'bg-gray-600/80 text-white'
                          }`}>
                            {currentProject.category === 'ml' ? 'ML' :
                             currentProject.category === 'web' ? 'Web' :
                             currentProject.category === 'research' ? 'Research' : 'Other'}
                          </span>
                        </div>
                        
                        <p className="text-white text-base mb-4 break-words whitespace-normal leading-relaxed">
                          {currentProject.description}
                        </p>

                        {/* Technologies removed for featured projects */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 