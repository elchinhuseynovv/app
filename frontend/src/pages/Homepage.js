import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SimpleText, TypingText, StaggerText, WaveText, RevealText, GradientText, MouseFollowText, MorphingText } from '../components/TextEffects';
import { SimpleLogo, MorphingLogo, NeonLogo } from '../components/LogoEffects';
import { 
  FadeInOnScroll, 
  StaggerChildren, 
  ParallaxContainer, 
  ScaleOnScroll, 
  RotateOnScroll, 
  SlideAndFade, 
  TypewriterOnScroll, 
  MorphingBox, 
  CounterOnScroll 
} from '../components/ScrollAnimations';

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const morphingTexts = [
    "Creating beyond categories.",
    "Designing with purpose.",
    "Art meets technology.",
    "Vision becomes reality."
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        </ParallaxContainer>

        <div className="text-center px-8 max-w-4xl mx-auto relative z-10">
          <FadeInOnScroll delay={200}>
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-black mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <SimpleLogo 
                  text="Elchin"
                  className="hover:scale-105 transition-transform duration-300"
                />
                <SimpleLogo 
                  text="Hussain"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </h1>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={600}>
            <div className="mb-12">
              <SimpleText 
                text="Creating beyond categories. Designing with purpose."
                className="text-xl md:text-2xl font-light text-gray-600 tracking-wide"
              />
            </div>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={1000}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/portfolio"
                className="group px-8 py-4 bg-black text-white font-light text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <SimpleText text="View Portfolio" />
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                to="/about"
                className="group px-8 py-4 border border-black text-black font-light text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <SimpleText text="About Me" />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxContainer speed={0.2}>
            <div className="absolute top-20 left-20 w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </ParallaxContainer>
          <ParallaxContainer speed={0.4}>
            <div className="absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-300"></div>
          </ParallaxContainer>
          <ParallaxContainer speed={0.6}>
            <div className="absolute bottom-32 left-16 w-3 h-3 bg-gray-300 rounded-full animate-pulse delay-500"></div>
          </ParallaxContainer>
          <ParallaxContainer speed={0.8}>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-black rounded-full animate-bounce delay-700"></div>
          </ParallaxContainer>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gray-300 floating-text"></div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInOnScroll>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
                <SimpleText text="Featured Work" className="hover-shadow" />
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                <SimpleText text="A curated selection of recent projects spanning design, photography, and digital art." />
              </p>
            </div>
          </FadeInOnScroll>

          <StaggerChildren staggerDelay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Work Items */}
              {[
                {
                  title: "Full - Stack",
                  category: "Raw-Media",
                  image: "/images/projects/image.png",
                  description: "Recently completed this website as the full-stack developer — responsible for both frontend and backend development. Delivered a complete visual identity system for an emerging tech startup."
                },
                {
                  title: "Back End",
                  category: "German Academy",
                  image: "images/projects/Screenshot 2025-07-13 200405.png",
                  description: "Worked on the backend development of this project, implementing server-side features and database integration for the German Academy."
                },
                {
                  title: "Digital Abstract",
                  category: "Digital Art",
                  image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=600&fit=crop",
                  description: "Generative art exploring form and color relationships"
                }
              ].map((item, index) => (
                <MorphingBox key={index} className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-6 relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-light text-gray-500 tracking-wide uppercase pulse-text">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-light text-black tracking-tight hover-gradient">
                      <SimpleText text={item.title} />
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      {item.description}
                    </p>
                  </div>
                </MorphingBox>
              ))}
            </div>
          </StaggerChildren>

          <FadeInOnScroll delay={400}>
            <div className="text-center mt-16">
              <Link
                to="/portfolio"
                className="inline-block px-8 py-4 border border-black text-black font-light text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                <SimpleText text="View All Work" />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SlideAndFade direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <ScaleOnScroll>
                <div className="space-y-4">
                  <div className="text-4xl font-light text-black glow-text">
                    <CounterOnScroll target={50} suffix="+" />
                  </div>
                  <p className="text-sm text-gray-600 font-light tracking-wide">
                    <SimpleText text="Projects Completed" />
                  </p>
                </div>
              </ScaleOnScroll>
              <ScaleOnScroll>
                <div className="space-y-4">
                  <div className="text-4xl font-light text-black glow-text">
                    <CounterOnScroll target={10} suffix="+" />
                  </div>
                  <p className="text-sm text-gray-600 font-light tracking-wide">
                    <SimpleText text="Years Experience" />
                  </p>
                </div>
              </ScaleOnScroll>
              <ScaleOnScroll>
                <div className="space-y-4">
                  <div className="text-4xl font-light text-black glow-text">
                    <CounterOnScroll target={25} suffix="+" />
                  </div>
                  <p className="text-sm text-gray-600 font-light tracking-wide">
                    <SimpleText text="Happy Clients" />
                  </p>
                </div>
              </ScaleOnScroll>
            </div>
          </SlideAndFade>
        </div>
      </section>

      {/* Parallax Quote Section */}
      <section className="relative py-32 px-8 bg-black text-white overflow-hidden">
        <ParallaxContainer speed={0.5} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
        </ParallaxContainer>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInOnScroll>
            <blockquote className="text-3xl md:text-4xl font-light mb-8 italic">
              <SimpleText 
                text="&quot;Design is not just what it looks like and feels like. Design is how it works.&quot;"
                className="text-white"
              />
            </blockquote>
          </FadeInOnScroll>
          <SlideAndFade direction="up" className="mt-8">
            <p className="text-gray-300 font-light">
              — Design Philosophy
            </p>
          </SlideAndFade>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-8 tracking-tight">
              <SimpleText 
                text="Let's create something" 
                className="block mb-2"
              />
              <SimpleText 
                text="extraordinary together." 
                className="text-black"
              />
            </h2>
          </FadeInOnScroll>
          
          <SlideAndFade direction="up" className="mb-12">
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              <TypewriterOnScroll text="Available for collaborations, creative partnerships, and commissioned work." />
            </p>
          </SlideAndFade>

          <RotateOnScroll rotation={-2}>
            <Link
              to="/contact"
              className="group inline-block px-8 py-4 bg-black text-white font-light text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 elastic-text"
            >
              <RevealText text="Get In Touch" delay={100} />
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </RotateOnScroll>
        </div>
      </section>
    </main>
  );
};

export default Homepage;