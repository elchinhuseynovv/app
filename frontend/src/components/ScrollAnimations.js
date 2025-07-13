import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

// Fade In on Scroll Component
export const FadeInOnScroll = ({ children, className = "", delay = 0, direction = "up" }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const directionClasses = {
    up: 'translate-y-8',
    down: 'translate-y-[-32px]',
    left: 'translate-x-[-32px]',
    right: 'translate-x-8'
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : '',
        transitionDelay: `${delay}ms`
      }}
    >
      <div className={`${isVisible ? '' : directionClasses[direction]} transition-transform duration-1000 ease-out`}>
        {children}
      </div>
    </div>
  );
};

// Stagger Children Animation
export const StaggerChildren = ({ children, className = "", staggerDelay = 100 }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={elementRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="transition-all duration-800 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

// Parallax Container
export const ParallaxContainer = ({ children, speed = 0.5, className = "" }) => {
  const { elementRef, offsetY } = useParallax(speed);

  return (
    <div ref={elementRef} className={`relative ${className}`}>
      <div
        style={{
          transform: `translateY(${offsetY}px)`
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Scale on Scroll
export const ScaleOnScroll = ({ children, className = "" }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)'
      }}
    >
      {children}
    </div>
  );
};

// Rotate on Scroll
export const RotateOnScroll = ({ children, className = "", rotation = 5 }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'rotate(0deg)' : `rotate(${rotation}deg)`
      }}
    >
      {children}
    </div>
  );
};

// Slide and Fade
export const SlideAndFade = ({ children, className = "", direction = "left" }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left': return 'translateX(-100px)';
        case 'right': return 'translateX(100px)';
        case 'up': return 'translateY(-100px)';
        case 'down': return 'translateY(100px)';
        default: return 'translateX(-100px)';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform()
      }}
    >
      {children}
    </div>
  );
};

// Typewriter on Scroll
export const TypewriterOnScroll = ({ text, className = "", speed = 50 }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, text, speed]);

  return (
    <div ref={elementRef} className={className}>
      {displayText}
      {isVisible && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};

// Morphing Box on Scroll
export const MorphingBox = ({ children, className = "" }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(180deg)',
        borderRadius: isVisible ? '0px' : '50%'
      }}
    >
      {children}
    </div>
  );
};

// Counter Animation on Scroll
export const CounterOnScroll = ({ target, suffix = "", className = "" }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
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
    }
  }, [isVisible, target]);

  return (
    <div ref={elementRef} className={className}>
      {count}{suffix}
    </div>
  );
};

// Progress Bar on Scroll
export const ProgressBar = ({ className = "" }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 h-1 bg-black transition-all duration-300 z-50 ${className}`} 
         style={{ width: `${progress}%` }} />
  );
};

export default {
  FadeInOnScroll,
  StaggerChildren,
  ParallaxContainer,
  ScaleOnScroll,
  RotateOnScroll,
  SlideAndFade,
  TypewriterOnScroll,
  MorphingBox,
  CounterOnScroll,
  ProgressBar
};