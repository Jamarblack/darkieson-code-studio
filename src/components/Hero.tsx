import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Terminal, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Operative // Building secure, scalable, and aesthetic digital architectures.";
  
  // Typewriter effect for subtext
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black text-white">
      
      {/* 1. THE MATRIX BACKGROUND (CSS Grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving Grid Floor */}
        <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] bg-[linear-gradient(to_right,rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] animate-background-shine opacity-30"></div>
        {/* Radial Gradient to fade edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="responsive-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* 2. TEXT CONTENT: THE TERMINAL */}
        <div className="order-2 lg:order-1 space-y-8">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-brand-neon/50 bg-brand-neon/10 px-4 py-1 text-xs font-mono text-brand-neon tracking-widest uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
            </span>
            System_Status: Online
          </motion.div>

          {/* Main Glitch Heading */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-white mb-2">
              <span className="glitch-text block" data-text="WAKE_UP">WAKE_UP</span>
              <span className="text-brand-neon">NEO_DEV</span>
            </h1>
            <p className="font-mono text-gray-400 text-sm md:text-base mt-4 border-l-2 border-brand-neon pl-4 h-12">
              <span className="text-brand-neon mr-2">{`>`}</span>
              {text}
              <span className="animate-cursor-blink">_</span>
            </p>
          </div>

          {/* Stats / Tech Stack */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs text-gray-500"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-neon" />
              <span>SECURE_CODE</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-neon" />
              <span>OPTIMIZED_CORE</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-neon" />
              <span>CMD_ACCESS</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects"
              className="group relative px-8 py-4 bg-brand-neon text-black font-bold font-mono uppercase tracking-wider overflow-hidden hover:text-white transition-colors"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initiate_Project <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white font-mono uppercase tracking-wider hover:bg-white/10 transition-all hover:border-brand-neon hover:text-brand-neon"
            >
              Establish_Uplink
            </a>
          </motion.div>
        </div>

        {/* 3. IMAGE: THE HOLOGRAM */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Spinning Rings */}
            <div className="absolute inset-0 border-2 border-brand-neon/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-brand-neon/50 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
            
            {/* The Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-brand-neon bg-black relative group">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,65,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[size:100%_4px,3px_100%] pointer-events-none"></div>
              
              {/* Green Tint Overlay */}
              <div className="absolute inset-0 bg-brand-neon/20 mix-blend-overlay z-10"></div>
              
              <img 
                src="/lovable-uploads/10ce7542-9eb7-434c-9ad1-22d2092d8ed9.png" 
                alt="Operative Darkieson" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>

            {/* Floating "Data" Particles (Decorative) */}
            <div className="absolute -top-10 -right-10 text-brand-neon/40 font-mono text-xs animate-pulse">
              0x4A5B
              <br/>
              PROCESSING...
            </div>
            <div className="absolute bottom-0 -left-10 text-brand-neon/40 font-mono text-xs animate-pulse delay-75">
              LATENCY: 12ms
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;