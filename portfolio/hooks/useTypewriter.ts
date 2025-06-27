import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTypewriter({ text, speed = 100, delay = 0 }: UseTypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsTyping(false);
        }
      }, speed);

      return () => clearTimeout(timer);
    };

    const delayTimer = setTimeout(startTyping, delay);
    
    return () => clearTimeout(delayTimer);
  }, [currentIndex, text, speed, delay]);

  return {
    displayedText,
    isTyping,
    isDone: currentIndex >= text.length
  };
} 