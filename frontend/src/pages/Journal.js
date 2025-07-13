import React from 'react';
import { mockJournalPosts } from '../data/mockData';

const Journal = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-8">
            Journal
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Thoughts on design, creativity, and the intersection of art and technology.
          </p>
        </div>
      </section>

      {/* Journal Posts */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {mockJournalPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-light text-gray-500 tracking-wide uppercase">
                        {post.date}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-light text-black tracking-tight">
                        {post.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-4">
                      <span className="text-sm text-black font-light tracking-wide hover:text-gray-600 transition-colors duration-300">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8 tracking-tight">
            Stay Updated
          </h2>
          <p className="text-gray-600 font-light mb-8">
            Subscribe to receive occasional updates about new work, thoughts, and creative processes.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-300 text-black font-light text-sm focus:outline-none focus:border-black transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white font-light text-sm tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Journal;