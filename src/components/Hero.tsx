
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="blur-ellipse w-[500px] h-[500px] top-1/4 -left-48 bg-brand-blue/30"></div>
      <div className="blur-ellipse w-[400px] h-[400px] bottom-0 right-0 bg-brand-purple/20"></div>
      
      <div className="responsive-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div 
            className={cn(
              "md:w-1/2 text-center md:text-left transition-all duration-1000 opacity-0",
              isVisible && "opacity-100"
            )}
          >
            <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4 animate-fade-in-fast">
              Web Developer
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent animate-section-fade-in relative">
              Crafting <span className="text-brand-blue">digital</span> experiences.
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 h-1 w-24 rounded bg-gradient-to-r from-brand-purple to-brand-pink opacity-70" />
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Hi, I'm Darkieson. I design and develop modern websites and applications that focus on clean design and seamless interaction.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="shine-effect px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover-up"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg transition-all hover:bg-gray-200 hover-up"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div 
            className={cn(
              "md:w-1/2 flex justify-center transition-all duration-1000 translate-y-10 opacity-0",
              isVisible && "translate-y-0 opacity-100"
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/10ce7542-9eb7-434c-9ad1-22d2092d8ed9.png" 
                alt="Darkieson" 
                className="profile-image w-64 h-64 md:w-80 md:h-80 object-cover relative z-10 border-4 border-white shadow-xl" 
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-full -z-10 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-light">
          <a href="#about" className="text-gray-400 hover:text-gray-700 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-8 w-8"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
