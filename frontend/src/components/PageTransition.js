import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(useLocation());
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className={`h-full bg-black transition-all duration-300 ${
            isTransitioning ? 'w-full' : 'w-0'
          }`}
        />
      </div>

      {/* Page Content */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isTransitioning 
            ? 'opacity-0 transform translate-y-8 scale-95' 
            : 'opacity-100 transform translate-y-0 scale-100'
        }`}
      >
        {React.cloneElement(children, { key: displayLocation.pathname })}
      </div>

      {/* Overlay Effect */}
      <div 
        className={`fixed inset-0 bg-black pointer-events-none z-40 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-10' : 'opacity-0'
        }`}
      />

      {/* Animated Shapes */}
      <div className={`fixed inset-0 pointer-events-none z-30 ${isTransitioning ? 'block' : 'hidden'}`}>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-black rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-gray-300 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default PageTransition;