import React, { useState, useEffect, useRef } from 'react';

// Animated Logo with Multiple Effects
export const AnimatedLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const logoElement = logoRef.current;
    if (logoElement) {
      logoElement.addEventListener('mousemove', handleMouseMove);
      return () => logoElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const letters = text.split('');

  return (
    <div
      ref={logoRef}
      className={`logo-container relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Logo Text */}
      <div className="logo-text relative">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`logo-letter inline-block transition-all duration-300 ${
              isHovered ? 'hovered' : ''
            }`}
            style={{
              animationDelay: `${index * 50}ms`,
              transform: isHovered 
                ? `translateY(${Math.sin(index * 0.5) * 3}px) rotateZ(${Math.sin(index * 0.3) * 2}deg)` 
                : 'translateY(0) rotateZ(0deg)'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>

      {/* Animated Underline */}
      <div className={`logo-underline absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-500 ${
        isHovered ? 'w-full' : 'w-0'
      }`}></div>

      {/* Floating Particles */}
      {isHovered && (
        <div className="logo-particles absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-black rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 200}ms`,
                opacity: 0.4
              }}
            />
          ))}
        </div>
      )}

      {/* Glow Effect */}
      <div className={`logo-glow absolute inset-0 pointer-events-none transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent blur-sm"></div>
      </div>
    </div>
  );
};

// Glitch Logo Effect
export const GlitchLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 8000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div 
      className={`glitch-logo relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <div className={`glitch-text relative ${isGlitching ? 'glitching' : ''}`}>
        {text}
      </div>
      
      {/* Glitch Layers */}
      <div className={`glitch-layer-1 absolute inset-0 ${isGlitching ? 'animate-glitch-1' : ''}`}>
        {text}
      </div>
      <div className={`glitch-layer-2 absolute inset-0 ${isGlitching ? 'animate-glitch-2' : ''}`}>
        {text}
      </div>
    </div>
  );
};

// Morphing Logo Effect
export const MorphingLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [currentState, setCurrentState] = useState(0);
  const states = ['normal', 'stretched', 'compressed', 'tilted'];

  useEffect(() => {
    const morphInterval = setInterval(() => {
      setCurrentState(prev => (prev + 1) % states.length);
    }, 3000);

    return () => clearInterval(morphInterval);
  }, []);

  const getTransform = () => {
    switch (states[currentState]) {
      case 'stretched': return 'scaleX(1.1) scaleY(0.9)';
      case 'compressed': return 'scaleX(0.9) scaleY(1.1)';
      case 'tilted': return 'rotate(1deg) scaleX(1.05)';
      default: return 'scale(1)';
    }
  };

  return (
    <div className={`morphing-logo cursor-pointer ${className}`}>
      <div 
        className="morphing-text transition-transform duration-1000 ease-in-out"
        style={{ transform: getTransform() }}
      >
        {text}
      </div>
    </div>
  );
};

// Liquid Logo Effect
export const LiquidLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className={`liquid-logo relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className={`liquid-text relative transition-all duration-500 ${
        isActive ? 'liquid-active' : ''
      }`}>
        {text}
      </div>
      
      {/* Liquid Drops */}
      {isActive && (
        <div className="liquid-drops absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="liquid-drop absolute w-2 h-2 bg-black rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: '100%',
                animation: `liquidDrop 1s ease-out ${i * 200}ms`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Neon Logo Effect
export const NeonLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [isNeonActive, setIsNeonActive] = useState(false);

  return (
    <div 
      className={`neon-logo cursor-pointer ${className}`}
      onMouseEnter={() => setIsNeonActive(true)}
      onMouseLeave={() => setIsNeonActive(false)}
    >
      <div className={`neon-text relative transition-all duration-300 ${
        isNeonActive ? 'neon-glow' : ''
      }`}>
        {text}
      </div>
    </div>
  );
};

// Typewriter Logo Effect
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
    <div className={`typewriter-logo cursor-pointer ${className}`}>
      <div className="typewriter-text relative">
        {displayText}
        {!isCompleted && (
          <span className="typewriter-cursor animate-pulse">|</span>
        )}
      </div>
    </div>
  );
};

// 3D Rotating Logo
export const RotatingLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div 
      className={`rotating-logo perspective-1000 cursor-pointer ${className}`}
      onMouseEnter={() => setIsRotating(true)}
      onMouseLeave={() => setIsRotating(false)}
    >
      <div className={`rotating-text transform-style-preserve-3d transition-transform duration-700 ${
        isRotating ? 'rotate-y-180' : ''
      }`}>
        <div className="text-front absolute inset-0">
          {text}
        </div>
        <div className="text-back absolute inset-0 rotate-y-180">
          {text.split('').reverse().join('')}
        </div>
      </div>
    </div>
  );
};

export default {
  AnimatedLogo,
  GlitchLogo,
  MorphingLogo,
  LiquidLogo,
  NeonLogo,
  TypewriterLogo,
  RotatingLogo
};