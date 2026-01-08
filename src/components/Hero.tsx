import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Operative // Building secure, scalable, and aesthetic digital architectures.";
  
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background text-foreground transition-colors duration-500">
      
      {/* 1. ADAPTIVE MATRIX BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* The Grid Floor now uses CSS variables for color */}
        <div 
            className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] animate-background-shine opacity-30"
            style={{
                backgroundImage: `
                    linear-gradient(to right, var(--neon-glow) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--neon-glow) 1px, transparent 1px)
                `
            }}
        ></div>
        
        {/* Fade to background color at edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      </div>

      <div className="responsive-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* 2. TEXT CONTENT */}
        <div className="order-2 lg:order-1 space-y-8">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-1 text-xs font-mono text-primary tracking-widest uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System_Status: Online
          </motion.div>

          {/* Heading */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-foreground mb-2">
              <span className="glitch-text block" data-text="WAKE_UP">WAKE_UP</span>
              <span className="text-primary">NEO_DEV</span>
            </h1>
            <p className="font-mono text-muted-foreground text-sm md:text-base mt-4 border-l-2 border-primary pl-4 h-12">
              <span className="text-primary mr-2">{`>`}</span>
              {text}
              <span className="animate-cursor-blink">_</span>
            </p>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>SECURE_CODE</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary" />
              <span>OPTIMIZED_CORE</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
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
              className="group relative px-8 py-4 bg-primary text-background font-bold font-mono uppercase tracking-wider overflow-hidden hover:text-primary transition-colors border border-primary"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initiate_Project <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 border border-border text-foreground font-mono uppercase tracking-wider hover:bg-primary/10 transition-all hover:border-primary hover:text-primary"
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
            {/* Spinning Rings - Adapted for Light Mode visibility */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-primary/50 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
            
            {/* The Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary bg-background relative group">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(var(--neon-main),0.1)_50%)] z-20 bg-[size:100%_4px] pointer-events-none opacity-20"></div>
              
              {/* Tint Overlay */}
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
              
              <img 
                src="/lovable-uploads/10ce7542-9eb7-434c-9ad1-22d2092d8ed9.png" 
                alt="Operative Darkieson" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;