'use client';

import { useEffect, useState } from 'react';
import { Button } from '../UI/Button';
import { useTypewriter } from '../../hooks/useTypewriter';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { displayedText, isTyping } = useTypewriter({
    text: "Hi I'm Michael. I like to solve problems",
    speed: 50,
    delay: 500
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/backgroundimage2.jpg)',
        backgroundSize: '100% 100%',
        backgroundColor: '#263238'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="text-center relative z-10">
        {/* Typewriter heading - exactly like original */}
        <h1 
          className="font-black"
          style={{ 
            fontSize: '60px',
            fontWeight: 900,
            color: '#F7F7F7',
            paddingTop: '45vh',
            paddingBottom: '50vh'
          }}
        >
          <span className="border-r-2 border-white pr-1">
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </h1>
      </div>
    </section>
  );
} 