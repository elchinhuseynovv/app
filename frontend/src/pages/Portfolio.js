import React, { useState } from 'react';
import { mockPortfolioItems } from '../data/mockData';
import { WaveText, GlitchText, GradientText } from '../components/TextEffects';
import { 
  FadeInOnScroll, 
  StaggerChildren, 
  ParallaxContainer, 
  ScaleOnScroll, 
  SlideAndFade, 
  MorphingBox 
} from '../components/ScrollAnimations';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Design', 'Photography', 'Digital Art', 'Concepts'];
  
  const filteredItems = activeFilter === 'All' 
    ? mockPortfolioItems 
    : mockPortfolioItems.filter(item => item.category === activeFilter);

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
              <TypewriterOnScroll text="A comprehensive showcase of work spanning multiple disciplines and creative approaches." />
            </p>
          </SlideAndFade>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 px-8 bg-gray-50 sticky top-24 z-40">
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <div className="flex flex-wrap justify-center gap-8">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 pb-2 transform hover:scale-105 ${
                    activeFilter === filter
                      ? 'text-black border-b border-black'
                      : 'text-gray-600 hover:text-black border-b border-transparent hover:border-gray-300'
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

      {/* Portfolio Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <StaggerChildren staggerDelay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <MorphingBox key={`${item.id}-${activeFilter}`} className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-6 relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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