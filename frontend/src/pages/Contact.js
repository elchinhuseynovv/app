import React, { useState } from 'react';
import { WaveText, GlitchText, TypewriterOnScroll, GradientText, StaggerText } from '../components/TextEffects';
import { 
  FadeInOnScroll, 
  StaggerChildren, 
  ParallaxContainer, 
  ScaleOnScroll, 
  SlideAndFade, 
  MorphingBox 
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
    { name: 'Instagram', url: 'https://instagram.com/elchinhussain', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/elchinhussain', icon: '💼' },
    { name: 'Behance', url: 'https://behance.net/elchinhussain', icon: '🎨' },
    { name: 'Twitter', url: 'https://twitter.com/elchinhussain', icon: '🐦' }
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
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-300 transform hover:scale-105"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <span className="text-lg">{link.icon}</span>
                          <span className="text-sm font-light">{link.name}</span>
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