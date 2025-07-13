import React, { useState } from 'react';
import { mockPortfolioItems } from '../data/mockData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Design', 'Photography', 'Digital Art', 'Concepts'];
  
  const filteredItems = activeFilter === 'All' 
    ? mockPortfolioItems 
    : mockPortfolioItems.filter(item => item.category === activeFilter);

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-8">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            A comprehensive showcase of work spanning multiple disciplines and creative approaches.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 px-8 bg-gray-50 sticky top-24 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm font-light tracking-wide transition-all duration-300 pb-2 ${
                  activeFilter === filter
                    ? 'text-black border-b border-black'
                    : 'text-gray-600 hover:text-black border-b border-transparent hover:border-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-light text-gray-500 tracking-wide uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light text-black tracking-tight">
                    {item.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <button className="px-8 py-4 border border-black text-black font-light text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300">
            Load More Work
          </button>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;