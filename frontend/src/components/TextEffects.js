import React, { useState, useEffect } from 'react';

// Simple Text Component - always visible
export const SimpleText = ({ text, className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Typing Text Effect Component - simplified
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
    <span className={className}>
      {displayText}
    </span>
  );
};

// Stagger Text Effect Component - simplified
export const StaggerText = ({ text, className = "", delay = 100 }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Wave Text Effect Component - simplified
export const WaveText = ({ text, className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Glitch Text Effect Component - REMOVED, replaced with normal text
export const GlitchText = ({ text, className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Reveal Text Effect Component - simplified
export const RevealText = ({ text, className = "", delay = 0 }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Gradient Text Effect Component - simplified to avoid transparency issues
export const GradientText = ({ text, className = "", colors = ["#000000", "#333333", "#666666"] }) => {
  return (
    <span className={`${className} text-black`}>
      {text}
    </span>
  );
};

// Mouse Follow Text Effect Component - simplified
export const MouseFollowText = ({ text, className = "" }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Animated Counter Component - simplified
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

// Morphing Text Component - simplified
export const MorphingText = ({ texts, interval = 3000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span className={className}>
      {texts[currentIndex]}
    </span>
  );
};

export default {
  SimpleText,
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