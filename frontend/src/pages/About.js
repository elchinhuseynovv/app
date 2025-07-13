import React, { useState, useEffect } from 'react';
import { TypingText, StaggerText, WaveText, GlitchText, RevealText, GradientText, MouseFollowText } from '../components/TextEffects';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight">
                <MouseFollowText 
                  text="About" 
                  className="hover-scale cursor-default inline-block mr-4"
                />
                <GradientText 
                  text="Me" 
                  colors={["#000000", "#333333", "#666666"]}
                />
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                <TypingText 
                  text="I'm a multi-disciplinary creative who believes in the power of design to transcend traditional boundaries."
                  speed={30}
                />
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face"
                  alt="Elchin Hussain"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-black animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 font-light leading-relaxed">
              <p className="text-xl slide-in-text">
                <RevealText 
                  text="For over a decade, I've been exploring the intersection of visual design, photography, and digital art. My work is driven by a simple belief: the most powerful creative solutions emerge when we stop thinking in categories and start thinking in possibilities."
                  delay={500}
                />
              </p>
              <p className="zoom-in-text delay-300">
                Based between New York and Barcelona, I collaborate with forward-thinking brands, artists, and cultural 
                institutions to create work that resonates on both intellectual and emotional levels. My approach is 
                rooted in deep research, thoughtful experimentation, and an unwavering commitment to craft.
              </p>
              <p className="bounce-text delay-500">
                Whether developing a comprehensive brand identity, capturing the essence of a space through photography, 
                or creating digital art that challenges perception, I bring the same level of curiosity and attention 
                to detail to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-12 tracking-tight">
            <WaveText 
              text="Creative Philosophy" 
              className="hover-shadow"
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Process Over Product",
                description: "I believe that the journey of creation is as important as the final outcome. Every project begins with deep listening, thorough research, and collaborative exploration."
              },
              {
                title: "Timeless Over Trendy",
                description: "While I stay current with design trends and technology, I prioritize creating work that will remain relevant and impactful for years to come."
              },
              {
                title: "Substance Over Style",
                description: "Beautiful design is meaningless without purpose. Every creative decision is made in service of communicating ideas clearly and memorably."
              },
              {
                title: "Collaboration Over Competition",
                description: "The best work emerges from genuine collaboration. I see every project as an opportunity to learn from and contribute to a shared creative vision."
              }
            ].map((item, index) => (
              <div key={index} className="space-y-6 group cursor-pointer">
                <h3 className="text-xl font-light text-black hover-gradient">
                  <StaggerText 
                    text={item.title}
                    delay={50}
                  />
                </h3>
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-12 tracking-tight">
            <GlitchText text="Skills & Expertise" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Design",
                skills: ["Brand Identity", "Typography", "Layout Design", "Digital Art", "UI/UX Design"]
              },
              {
                category: "Photography",
                skills: ["Portrait", "Architecture", "Street", "Commercial", "Fine Art"]
              },
              {
                category: "Technology",
                skills: ["Adobe Creative Suite", "Cinema 4D", "Figma", "Sketch", "Web Design"]
              }
            ].map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-xl font-light text-black">
                  <MouseFollowText text={category.category} />
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-gray-600 font-light hover:text-black transition-colors duration-300 cursor-pointer pulse-text"
                      style={{ animationDelay: `${skillIndex * 200}ms` }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-12 tracking-tight">
            <GradientText 
              text="Experience & Recognition"
              colors={["#000000", "#333333", "#666666"]}
            />
          </h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <span className="text-sm font-light text-gray-500 tracking-wide uppercase">
                  <StaggerText text="Awards" delay={100} />
                </span>
                <ul className="space-y-2 text-gray-700 font-light">
                  {["D&AD Pencil Winner, 2023", "ADC Gold Cube, 2022", "Cannes Lions Bronze, 2022", "Type Directors Club, 2021"].map((award, index) => (
                    <li key={index} className="hover:text-black transition-colors duration-300 cursor-pointer reveal-text" style={{ animationDelay: `${index * 300}ms` }}>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <span className="text-sm font-light text-gray-500 tracking-wide uppercase">
                  <StaggerText text="Exhibitions" delay={100} />
                </span>
                <ul className="space-y-2 text-gray-700 font-light">
                  {["MoMA Design Store, 2023", "Venice Biennale, 2022", "Design Museum London, 2021", "Cooper Hewitt, 2020"].map((exhibition, index) => (
                    <li key={index} className="hover:text-black transition-colors duration-300 cursor-pointer reveal-text" style={{ animationDelay: `${index * 300}ms` }}>
                      {exhibition}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <span className="text-sm font-light text-gray-500 tracking-wide uppercase">
                  <StaggerText text="Speaking" delay={100} />
                </span>
                <ul className="space-y-2 text-gray-700 font-light">
                  {["99U Conference, 2023", "Design Week Barcelona, 2022", "AIGA Denver, 2022", "Brand New Conference, 2021"].map((speaking, index) => (
                    <li key={index} className="hover:text-black transition-colors duration-300 cursor-pointer reveal-text" style={{ animationDelay: `${index * 300}ms` }}>
                      {speaking}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-black mb-8 italic">
            <MouseFollowText 
              text="&quot;Design is not just what it looks like and feels like. Design is how it works.&quot;"
              className="hover-shadow"
            />
          </blockquote>
          <p className="text-gray-600 font-light">
            <TypingText text="— My design philosophy" speed={50} />
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;