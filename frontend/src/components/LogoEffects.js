import React, { useState, useEffect, useRef } from 'react';

// Simple Logo Component - always visible
export const SimpleLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Spectacular Logo Effect - combines multiple animations
export const SpectacularLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const logoRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    if (showTypewriter && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setTimeout(() => setShowTypewriter(false), 1000);
    }
  }, [currentIndex, text, showTypewriter]);

  // Particle system
  const createParticle = () => {
    const particle = {
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 2 + 1
    };
    return particle;
  };

  const generateParticles = () => {
    const newParticles = Array.from({ length: 8 }, createParticle);
    setParticles(newParticles);
  };

  useEffect(() => {
    if (isHovered) {
      generateParticles();
      const interval = setInterval(generateParticles, 500);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Split text into letters for individual animations
  const letters = text.split('');

  return (
    <div 
      ref={logoRef}
      className="relative inline-block perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `particleFloat ${particle.duration}s ease-out forwards`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-gray-400 to-black rounded-full" />
        </div>
      ))}

      {/* Main Logo */}
      <div className="relative">
        {showTypewriter ? (
          // Typewriter phase
          <span className={`${className} typewriter-text`}>
            {typewriterText}
            <span className="typewriter-cursor">|</span>
          </span>
        ) : (
          // Spectacular animated phase
          <span className={`${className} relative`}>
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`
                  logo-letter 
                  inline-block 
                  transition-all 
                  duration-300 
                  ${isHovered ? 'hovered' : ''}
                  ${isHovered ? 'glow-text' : ''}
                  gradient-text
                `}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  transform: isHovered ? `translateY(-${Math.sin(index * 0.5) * 3}px) rotateZ(${Math.sin(index * 0.3) * 2}deg)` : 'none'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
            
            {/* Animated underline */}
            <div 
              className={`
                logo-underline 
                absolute 
                bottom-0 
                left-0 
                w-full 
                h-0.5 
                transition-all 
                duration-500
                ${isHovered ? 'animate-pulse' : ''}
              `}
              style={{
                background: isHovered 
                  ? 'linear-gradient(90deg, transparent, #000, transparent)' 
                  : 'transparent'
              }}
            />
          </span>
        )}

        {/* Glow effect overlay */}
        {isHovered && !showTypewriter && (
          <div className="absolute inset-0 pointer-events-none">
            <span 
              className={`
                ${className} 
                absolute 
                top-0 
                left-0 
                opacity-20 
                blur-sm 
                bg-gradient-to-r 
                from-gray-600 
                to-black 
                bg-clip-text 
                text-transparent
                animate-pulse
              `}
            >
              {text}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Animated Logo with Simple Effects
export const AnimatedLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={`${className} transition-all duration-300 hover:scale-105`}>
      {text}
    </span>
  );
};

// Glitch Logo Effect - REMOVED, replaced with normal text
export const GlitchLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Morphing Logo Effect - simplified
export const MorphingLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={`${className} transition-all duration-300 hover:scale-105`}>
      {text}
    </span>
  );
};

// Liquid Logo Effect - simplified
export const LiquidLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Neon Logo Effect - simplified
export const NeonLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Typewriter Logo Effect - simplified
export const TypewriterLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text[index]);
        index++;
      } else {
        setIsCompleted(true);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      {!isCompleted && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

// 3D Rotating Logo - simplified
export const RotatingLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

export default {
  SimpleLogo,
  SpectacularLogo,
  AnimatedLogo,
  GlitchLogo,
  MorphingLogo,
  LiquidLogo,
  NeonLogo,
  TypewriterLogo,
  RotatingLogo
};