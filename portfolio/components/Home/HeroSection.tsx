'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../UI/Button';
import { useTypewriter } from '../../hooks/useTypewriter';

interface HeroSectionProps {
  onTypewriterComplete?: (isComplete: boolean) => void;
  children?: React.ReactNode;
}

export default function HeroSection({ onTypewriterComplete, children }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const { displayedText, isTyping, isComplete } = useTypewriter({
    text: "Hi,    I'm Michael.        I like to solve problems.",
    speed: 30,
    delay: 50
  });

  useEffect(() => {
    if (isComplete && !showTransition) {
      // Wait 1 second after completion, then start transition
      const timer = setTimeout(() => {
        setShowTransition(true);
        if (onTypewriterComplete) {
          onTypewriterComplete(true);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, showTransition, onTypewriterComplete]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      className="relative h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: 'url(/backgroundimage2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#263238',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Typewriter heading that slides to top */}
      <motion.div 
        className="relative z-10 flex-shrink-0 flex items-center justify-center"
        style={{ height: '100vh' }}
        animate={showTransition ? {
          height: 'auto',
          paddingTop: '6rem',
          paddingBottom: '2rem'
        } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.h1 
          className="font-black text-center absolute left-1/2"
          initial={{
            fontSize: '48px',
            fontWeight: 900,
            color: '#F7F7F7',
            top: '50%',
            x: '-50%',
            y: '-50%',
            width: '90vw',
            maxWidth: '1200px'
          }}
          animate={showTransition ? {
            fontSize: '36px',
            top: '7rem',
            y: '0%'
          } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <span className="border-r-2 border-white pr-1">
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </motion.h1>
      </motion.div>

      {/* Content area that fades in after transition */}
      {showTransition && (
        <motion.div
          className="flex-1 relative z-10 flex items-center justify-center px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
                     <div className="w-full max-w-6xl">
             {/* Render children content */}
             <div className="space-y-8">
               {children}
             </div>
           </div>
        </motion.div>
      )}
    </section>
  );
} 