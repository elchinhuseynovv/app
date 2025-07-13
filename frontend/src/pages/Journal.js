import React from 'react';
import { mockJournalPosts } from '../data/mockData';
import { WaveText, GlitchText, TypewriterOnScroll, GradientText, StaggerText } from '../components/TextEffects';
import { 
  FadeInOnScroll, 
  StaggerChildren, 
  ParallaxContainer, 
  ScaleOnScroll, 
  SlideAndFade, 
  MorphingBox 
} from '../components/ScrollAnimations';

const Journal = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-8 bg-white overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-black rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
        </ParallaxContainer>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInOnScroll>
            <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-8">
              <GradientText 
                text="Journal"
                colors={["#000000", "#333333", "#666666"]}
              />
            </h1>
          </FadeInOnScroll>
          
          <SlideAndFade direction="up">
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              <TypewriterOnScroll text="Thoughts on design, creativity, and the intersection of art and technology." />
            </p>
          </SlideAndFade>
        </div>
      </section>

      {/* Journal Posts */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <StaggerChildren staggerDelay={300}>
            <div className="space-y-16">
              {mockJournalPosts.map((post, index) => (
                <MorphingBox key={post.id} className="group cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-light text-gray-500 tracking-wide uppercase pulse-text">
                          {post.date}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-light text-black tracking-tight">
                          <GlitchText text={post.title} />
                        </h2>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="pt-4">
                        <span className="text-sm text-black font-light tracking-wide hover:text-gray-600 transition-colors duration-300 hover-gradient">
                          <StaggerText text="Read More →" delay={50} />
                        </span>
                      </div>
                    </div>
                  </div>
                </MorphingBox>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
              <WaveText text="Stay Updated" />
            </h2>
          </FadeInOnScroll>
          
          <SlideAndFade direction="up" className="mb-8">
            <p className="text-gray-600 font-light">
              <TypewriterOnScroll text="Subscribe to receive occasional updates about new work, thoughts, and creative processes." />
            </p>
          </SlideAndFade>

          <ScaleOnScroll>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300 hover:border-gray-400"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-black text-white font-light text-sm tracking-wide hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 elastic-text"
              >
                <StaggerText text="Subscribe" delay={100} />
              </button>
            </form>
          </ScaleOnScroll>
        </div>
      </section>

      {/* Recent Topics */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-12 tracking-tight text-center">
              <GradientText 
                text="Popular Topics"
                colors={["#000000", "#333333", "#666666"]}
              />
            </h2>
          </FadeInOnScroll>
          
          <StaggerChildren staggerDelay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { topic: "Design Process", count: 12 },
                { topic: "Creative Technology", count: 8 },
                { topic: "Visual Culture", count: 15 },
                { topic: "Art & Photography", count: 10 },
                { topic: "Brand Identity", count: 6 },
                { topic: "Digital Innovation", count: 9 }
              ].map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-lg font-light text-black mb-2 hover-gradient">
                      <StaggerText text={item.topic} delay={50} />
                    </h3>
                    <p className="text-sm text-gray-500 font-light">
                      {item.count} articles
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </main>
  );
};

export default Journal;