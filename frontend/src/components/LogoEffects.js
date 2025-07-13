import React, { useState, useEffect, useRef } from 'react';

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, [data-cursor-hover]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, [data-cursor-hover]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
      }}
    >
      <div className="cursor-inner" />
    </div>
  );
};

// Simple Logo Component - always visible
export const SimpleLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Spectacular Logo Effect - combines multiple animations with enhanced effects
export const SpectacularLogo = ({ text = "Elchin Hussain", className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const [showRipple, setShowRipple] = useState(false);
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
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 2 + 1,
      angle: Math.random() * 360,
      speed: Math.random() * 2 + 1
    };
    return particle;
  };

  const generateParticles = () => {
    const newParticles = Array.from({ length: 12 }, createParticle);
    setParticles(newParticles);
  };

  useEffect(() => {
    if (isHovered) {
      generateParticles();
      const interval = setInterval(generateParticles, 300);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Magnetic mouse effect
  const handleMouseMove = (e) => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const deltaX = (mouseX - centerX) * 0.1;
      const deltaY = (mouseY - centerY) * 0.1;
      
      setMagneticOffset({ x: deltaX, y: deltaY });
    }
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
    setIsHovered(false);
    setShowRipple(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 1500);
  };

  // Split text into letters for individual animations
  const letters = text.split('');

  return (
    <div 
      ref={logoRef}
      className="relative inline-block perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Ripple Effect */}
      {showRipple && (
        <div className="logo-ripple" />
      )}

      {/* Enhanced Particles */}
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
            animation: `particleSpectacular ${particle.duration}s ease-out forwards`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)`,
              transform: `rotate(${particle.angle}deg)`
            }}
          />
        </div>
      ))}

      {/* Main Logo */}
      <div 
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`
        }}
      >
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
                  duration-500 
                  ease-out
                  ${isHovered ? 'hovered' : ''}
                  ${isHovered ? 'glow-text' : ''}
                  gradient-text
                `}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  transform: isHovered 
                    ? `translateY(-${Math.sin(index * 0.5) * 4}px) rotateZ(${Math.sin(index * 0.3) * 3}deg) scale(${1 + Math.sin(index * 0.2) * 0.1})` 
                    : 'none',
                  transitionDelay: `${index * 0.02}s`
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
            
            {/* Animated underline */}
            <div 
              className={`
                absolute 
                bottom-0 
                left-0 
                w-full 
                h-0.5 
                transition-all 
                duration-700
                ease-out
                ${isHovered ? 'logo-underline active' : ''}
              `}
              style={{
                background: isHovered 
                  ? 'linear-gradient(90deg, transparent, #000, #333, #000, transparent)' 
                  : 'transparent',
                transform: isHovered ? 'scaleX(1.1)' : 'scaleX(0)',
                transformOrigin: 'center'
              }}
            />
          </span>
        )}

        {/* Enhanced Glow effect overlay */}
        {isHovered && !showTypewriter && (
          <div className="absolute inset-0 pointer-events-none">
            <span 
              className={`
                ${className} 
                absolute 
                top-0 
                left-0 
                opacity-30 
                blur-sm 
                bg-gradient-to-r 
                from-gray-500 
                via-black 
                to-gray-500
                bg-clip-text 
                text-transparent
                animate-pulse
              `}
              style={{
                transform: `translate(${magneticOffset.x * 0.5}px, ${magneticOffset.y * 0.5}px)`
              }}
            >
              {text}
            </span>
            
            {/* Additional glow layers */}
            <span 
              className={`
                ${className} 
                absolute 
                top-0 
                left-0 
                opacity-15 
                blur-md 
                bg-gradient-to-r 
                from-gray-300 
                via-black 
                to-gray-300
                bg-clip-text 
                text-transparent
              `}
              style={{
                transform: `translate(${magneticOffset.x * 0.3}px, ${magneticOffset.y * 0.3}px)`
              }}
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