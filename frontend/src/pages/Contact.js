import React, { useState } from 'react';

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
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-8">
            Contact
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and creative challenges.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-light text-gray-600 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-black text-white font-light text-sm tracking-wide hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
                Get In Touch
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-light text-black mb-4">
                    Email
                  </h3>
                  <a 
                    href="mailto:hello@elchinhussain.com" 
                    className="text-gray-600 font-light hover:text-black transition-colors duration-300"
                  >
                    hello@elchinhussain.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-light text-black mb-4">
                    Location
                  </h3>
                  <p className="text-gray-600 font-light">
                    Based between New York & Barcelona
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-black mb-4">
                    Response Time
                  </h3>
                  <p className="text-gray-600 font-light">
                    I typically respond within 24-48 hours
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-black mb-4">
                    Social Media
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-300"
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="text-sm font-light">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
            Current Availability
          </h2>
          <p className="text-lg text-gray-600 font-light mb-8">
            I'm currently accepting new projects for Q3 2024. Whether you're looking for brand identity, 
            creative direction, or collaborative partnerships, I'd love to hear about your vision.
          </p>
          <div className="inline-flex items-center space-x-2 text-green-600">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span className="text-sm font-light">Available for new projects</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;