
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="responsive-container">
        <nav className="flex items-center justify-between">
          <a 
            href="#hero" 
            className="flex items-center gap-2 text-xl font-bold text-primary transition-opacity hover:opacity-80"
          >
            <img 
              src="/lovable-uploads/10ce7542-9eb7-434c-9ad1-22d2092d8ed9.png" 
              alt="Darkieson Logo" 
              className="h-10 w-10 rounded-full animate-pulse-slow" 
            />
            <span className="hidden sm:inline">Darkieson Code Studio</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in-fast">
            <a 
              href="#about" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
