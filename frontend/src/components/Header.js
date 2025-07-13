import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SpectacularLogo } from './LogoEffects';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with Spectacular Effects */}
          <Link to="/" className="block">
            <SpectacularLogo 
              text="Elchin Hussain"
              className="text-2xl font-light tracking-wide text-black transition-colors duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-light tracking-wide transition-colors duration-300 relative ${
                  location.pathname === item.href
                    ? 'text-black after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-gray-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
            <nav className="px-8 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-light tracking-wide transition-colors duration-300 ${
                    location.pathname === item.href
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;