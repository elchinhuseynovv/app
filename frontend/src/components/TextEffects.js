import React, { useState, useEffect } from 'react';

// Typing Text Effect Component
export const TypingText = ({ text, speed = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`${className} typing-text`}>
      {displayText}
    </span>
  );
};

// Stagger Text Effect Component
export const StaggerText = ({ text, className = "", delay = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={`${className} stagger-text`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{
            animationDelay: isVisible ? `${index * delay}ms` : '0ms',
            opacity: isVisible ? 1 : 0
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

// Wave Text Effect Component
export const WaveText = ({ text, className = "" }) => {
  return (
    <span className={`${className} wave-text`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="wave-letter"
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

// Glitch Text Effect Component
export const GlitchText = ({ text, className = "" }) => {
  return (
    <span className={`${className} glitch-text`} data-text={text}>
      {text}
    </span>
  );
};

// Reveal Text Effect Component
export const RevealText = ({ text, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`${className} ${isVisible ? 'reveal-text' : ''}`}>
      {text}
    </span>
  );
};

// Gradient Text Effect Component
export const GradientText = ({ text, className = "", colors = ["#000000", "#333333", "#666666"] }) => {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${colors.join(', ')})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <span className={`${className} gradient-text`} style={gradientStyle}>
      {text}
    </span>
  );
};

// Mouse Follow Text Effect Component
export const MouseFollowText = ({ text, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textShadow = `${mousePosition.x / 100}px ${mousePosition.y / 100}px 10px rgba(0, 0, 0, 0.3)`;

  return (
    <span 
      className={`${className}`} 
      style={{ 
        textShadow,
        transition: 'text-shadow 0.1s ease-out'
      }}
    >
      {text}
    </span>
  );
};

// Animated Counter Component
export const AnimatedCounter = ({ target, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className={className}>
      {count}
    </span>
  );
};

// Morphing Text Component
export const MorphingText = ({ texts, interval = 3000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span className={`${className} morphing-text ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
      {texts[currentIndex]}
    </span>
  );
};

export default {
  TypingText,
  StaggerText,
  WaveText,
  GlitchText,
  RevealText,
  GradientText,
  MouseFollowText,
  AnimatedCounter,
  MorphingText
};