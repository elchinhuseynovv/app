import React, { useState } from 'react';
import { WaveText, GlitchText, GradientText, StaggerText } from '../components/TextEffects';
import { 
  FadeInOnScroll, 
  StaggerChildren, 
  ParallaxContainer, 
  ScaleOnScroll, 
  SlideAndFade, 
  MorphingBox,
  TypewriterOnScroll 
} from '../components/ScrollAnimations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/elchinhussain/', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-pink-500 via-red-500 to-yellow-500',
      hoverColor: 'hover:text-white',
      bgColor: 'bg-gradient-to-br from-pink-50 to-orange-50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500',
      shadowColor: 'hover:shadow-pink-500/25'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/elchinhussain/', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:text-white',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      hoverBg: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700',
      shadowColor: 'hover:shadow-blue-500/25'
    },
    { 
      name: 'Behance', 
      url: 'https://www.behance.net/elchinhuseynov2', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 2-5.101 2-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.665-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3c3.016 0 2.764-4.025-.594-4.025H3v4.025h3.391z"/>
        </svg>
      ),
      color: 'from-indigo-600 to-purple-600',
      hoverColor: 'hover:text-white',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600',
      shadowColor: 'hover:shadow-indigo-500/25'
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/elchin.huseynov.18/?locale=pl_PL', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:text-white',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      hoverBg: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800',
      shadowColor: 'hover:shadow-blue-500/25'
    }
  ];

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-8 bg-white overflow-hidden">
        <ParallaxContainer speed={0.2} className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gray-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-30"></div>
        </ParallaxContainer>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInOnScroll>
            <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-8">
              <GradientText 
                text="Contact"
                colors={["#000000", "#333333", "#666666"]}
              />
            </h1>
          </FadeInOnScroll>
          
          <SlideAndFade direction="up">
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              <TypewriterOnScroll text="I'm always interested in new opportunities, collaborations, and creative challenges." />
            </p>
          </SlideAndFade>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <MorphingBox>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
                <WaveText text="Send a Message" />
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <StaggerChildren staggerDelay={100}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-light text-gray-600 mb-2">
                        <StaggerText text="Name" delay={50} />
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300 hover:border-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-light text-gray-600 mb-2">
                        <StaggerText text="Email" delay={50} />
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300 hover:border-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-light text-gray-600 mb-2">
                      <StaggerText text="Subject" delay={50} />
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300 hover:border-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-light text-gray-600 mb-2">
                      <StaggerText text="Message" delay={50} />
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300 resize-none hover:border-gray-400"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-black text-white font-light text-sm tracking-wide hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 elastic-text"
                  >
                    <GlitchText text="Send Message" />
                  </button>
                </StaggerChildren>
              </form>
            </MorphingBox>

            {/* Contact Info */}
            <div>
              <FadeInOnScroll>
                <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
                  <WaveText text="Get In Touch" />
                </h2>
              </FadeInOnScroll>
              
              <StaggerChildren staggerDelay={200}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-light text-black mb-4">
                      <StaggerText text="Email" delay={50} />
                    </h3>
                    <a 
                      href="mailto:hello@elchinhussain.com" 
                      className="text-gray-600 font-light hover:text-black transition-colors duration-300 hover-gradient"
                    >
                      hello@elchinhussain.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-black mb-4">
                      <StaggerText text="Location" delay={50} />
                    </h3>
                    <p className="text-gray-600 font-light">
                      Based between New York & Barcelona
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-black mb-4">
                      <StaggerText text="Response Time" delay={50} />
                    </h3>
                    <p className="text-gray-600 font-light">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-black mb-4">
                      <StaggerText text="Social Media" delay={50} />
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative p-4 rounded-lg ${link.bgColor} border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 flex items-center space-x-3">
                            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                              {link.icon}
                            </span>
                            <div>
                              <span className={`text-sm font-medium text-gray-700 ${link.hoverColor} transition-colors duration-300`}>
                                {link.name}
                              </span>
                              <div className="text-xs text-gray-500 mt-1">
                                Connect with me
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 group-hover:w-full transition-all duration-300"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
              <GradientText 
                text="Current Availability"
                colors={["#000000", "#333333", "#666666"]}
              />
            </h2>
          </FadeInOnScroll>
          
          <SlideAndFade direction="up" className="mb-8">
            <p className="text-lg text-gray-600 font-light">
              <TypewriterOnScroll text="I'm currently accepting new projects for Q3 2024. Whether you're looking for brand identity, creative direction, or collaborative partnerships, I'd love to hear about your vision." />
            </p>
          </SlideAndFade>

          <ScaleOnScroll>
            <div className="inline-flex items-center space-x-2 text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-light">
                <StaggerText text="Available for new projects" delay={50} />
              </span>
            </div>
          </ScaleOnScroll>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-12 tracking-tight text-center">
              <WaveText text="Services I Offer" />
            </h2>
          </FadeInOnScroll>
          
          <StaggerChildren staggerDelay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Brand Identity",
                  description: "Complete visual identity systems including logos, typography, and brand guidelines."
                },
                {
                  title: "Creative Direction",
                  description: "Strategic creative leadership for campaigns, projects, and brand experiences."
                },
                {
                  title: "Photography",
                  description: "Commercial and artistic photography spanning portraits, architecture, and conceptual work."
                }
              ].map((service, index) => (
                <MorphingBox key={index} className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-light text-black mb-4 hover-gradient">
                    <GlitchText text={service.title} />
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </MorphingBox>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </main>
  );
};

export default Contact;