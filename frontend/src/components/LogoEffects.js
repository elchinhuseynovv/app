import React, { useState, useEffect, useRef } from 'react';

// Simple Logo Component - always visible
export const SimpleLogo = ({ text = "Elchin Hussain", className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
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
  AnimatedLogo,
  GlitchLogo,
  MorphingLogo,
  LiquidLogo,
  NeonLogo,
  TypewriterLogo,
  RotatingLogo
};