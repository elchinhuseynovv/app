import React, { useState, useEffect } from 'react';
import { mockPortfolioItems } from '../data/mockData';
import { WaveText, GlitchText, GradientText } from '../components/TextEffects';
import { 
  FadeInOnScroll, 
  StaggerChildren, 
  ParallaxContainer, 
  ScaleOnScroll, 
  SlideAndFade, 
  MorphingBox,
  TypewriterOnScroll 
} from '../components/ScrollAnimations';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSticky, setIsSticky] = useState(false);
  
  const filters = ['All', 'Design', 'Photography', 'Digital Art', 'Concepts'];
  
  const filteredItems = activeFilter === 'All' 
    ? mockPortfolioItems 
    : mockPortfolioItems.filter(item => item.category === activeFilter);

  // Handle sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = 500; // Approximate hero section height
      setIsSticky(scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-8 bg-white overflow-hidden">
        <ParallaxContainer speed={0.2} className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gray-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gray-200 rounded-full opacity-20"></div>
        </ParallaxContainer>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInOnScroll>
            <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-8">
              <GradientText 
                text="Portfolio"
                colors={["#000000", "#333333", "#666666"]}
              />
            </h1>
          </FadeInOnScroll>
          
          <SlideAndFade direction="up">
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              <TypewriterOnScroll text="Software Engineer/LLM & Machine Learning Engineer" />
            </p>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-4">
              <TypewriterOnScroll text="After Hours: Making Music & Grading Colors" />
            </p>
          </SlideAndFade>
        </div>
      </section>

      {/* Filter Navigation - Enhanced Sticky */}
      <section className={`py-6 px-8 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-24 z-40 transition-all duration-300 ${isSticky ? 'shadow-lg' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <div className="flex flex-wrap justify-center gap-8">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 pb-2 transform hover:scale-105 ${
                    activeFilter === filter
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-600 hover:text-black border-b-2 border-transparent hover:border-gray-300'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <WaveText text={filter} />
                </button>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Portfolio Grid - Enhanced */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            <StaggerChildren staggerDelay={150}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <MorphingBox key={`${item.id}-${activeFilter}`} className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden mb-6 relative rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 hidden items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-400 rounded-full mb-4 mx-auto flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-600 font-light">{item.category}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-light tracking-wide uppercase">
                          View Project
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-light text-gray-500 tracking-wide uppercase pulse-text">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-light text-black tracking-tight hover-gradient">
                        <GlitchText text={item.title} />
                      </h3>
                      <p className="text-sm text-gray-600 font-light">
                        {item.description}
                      </p>
                      <div className="pt-2">
                        <span className="text-xs text-gray-400 font-light">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </MorphingBox>
                ))}
              </div>
            </StaggerChildren>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-600 font-light">No portfolio items match the selected category.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <ScaleOnScroll>
            <button className="px-8 py-4 border border-black text-black font-light text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 elastic-text">
              <TypewriterOnScroll text="Load More Work" speed={60} />
            </button>
          </ScaleOnScroll>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
              <GradientText 
                text="Interested in working together?"
                colors={["#000000", "#333333", "#666666"]}
              />
            </h2>
          </FadeInOnScroll>
          
          <SlideAndFade direction="up" className="mb-8">
            <p className="text-lg text-gray-600 font-light">
              <TypewriterOnScroll text="Let's discuss your next project and create something amazing." />
            </p>
          </SlideAndFade>

          <ScaleOnScroll>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-black text-white font-light text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 elastic-text"
            >
              <WaveText text="Start a Project" />
            </a>
          </ScaleOnScroll>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;