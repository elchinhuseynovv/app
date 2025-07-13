import React from 'react';

const About = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight">
                About Me
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                I'm a multi-disciplinary creative who believes in the power of design to transcend traditional boundaries.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face"
                  alt="Elchin Hussain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 font-light leading-relaxed">
              <p className="text-xl">
                For over a decade, I've been exploring the intersection of visual design, photography, and digital art. 
                My work is driven by a simple belief: the most powerful creative solutions emerge when we stop thinking 
                in categories and start thinking in possibilities.
              </p>
              <p>
                Based between New York and Barcelona, I collaborate with forward-thinking brands, artists, and cultural 
                institutions to create work that resonates on both intellectual and emotional levels. My approach is 
                rooted in deep research, thoughtful experimentation, and an unwavering commitment to craft.
              </p>
              <p>
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
            Creative Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-black">
                Process Over Product
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                I believe that the journey of creation is as important as the final outcome. Every project begins with 
                deep listening, thorough research, and collaborative exploration.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-black">
                Timeless Over Trendy
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                While I stay current with design trends and technology, I prioritize creating work that will remain 
                relevant and impactful for years to come.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-black">
                Substance Over Style
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Beautiful design is meaningless without purpose. Every creative decision is made in service of 
                communicating ideas clearly and memorably.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-black">
                Collaboration Over Competition
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                The best work emerges from genuine collaboration. I see every project as an opportunity to learn 
                from and contribute to a shared creative vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-12 tracking-tight">
            Experience & Recognition
          </h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <span className="text-sm font-light text-gray-500 tracking-wide uppercase">
                  Awards
                </span>
                <ul className="space-y-2 text-gray-700 font-light">
                  <li>D&AD Pencil Winner, 2023</li>
                  <li>ADC Gold Cube, 2022</li>
                  <li>Cannes Lions Bronze, 2022</li>
                  <li>Type Directors Club, 2021</li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="text-sm font-light text-gray-500 tracking-wide uppercase">
                  Exhibitions
                </span>
                <ul className="space-y-2 text-gray-700 font-light">
                  <li>MoMA Design Store, 2023</li>
                  <li>Venice Biennale, 2022</li>
                  <li>Design Museum London, 2021</li>
                  <li>Cooper Hewitt, 2020</li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="text-sm font-light text-gray-500 tracking-wide uppercase">
                  Speaking
                </span>
                <ul className="space-y-2 text-gray-700 font-light">
                  <li>99U Conference, 2023</li>
                  <li>Design Week Barcelona, 2022</li>
                  <li>AIGA Denver, 2022</li>
                  <li>Brand New Conference, 2021</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;