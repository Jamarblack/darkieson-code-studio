import React from "react";
import { motion } from "framer-motion";
import { User, Terminal, Cpu, Zap, Activity, History, Database } from "lucide-react"; // <--- Fixed imports here
import { cn } from "@/lib/utils";

// Helper component for the stats
const StatBlock = ({ label, value, icon: Icon, delay }: { label: string, value: string, icon: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-gray-900/50 border border-gray-800 p-4 flex items-center gap-4 hover:border-brand-neon/50 hover:bg-gray-900 transition-all group"
  >
    <div className="p-3 bg-black border border-gray-800 text-gray-400 group-hover:text-brand-neon group-hover:border-brand-neon transition-colors">
      <Icon size={20} />
    </div>
    <div>
      <div className="text-2xl font-bold font-display text-white group-hover:text-brand-neon transition-colors">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
        {label}
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden border-b border-gray-900">
      
      {/* Background Decor: Grid scan */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,2,8,1)_1px,transparent_1px),linear-gradient(rgba(13,2,8,1)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 pointer-events-none"></div>

      <div className="responsive-container relative z-10">
        
        {/* Header: "Identity Verification" */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-brand-neon/30 bg-brand-neon/5 px-3 py-1 text-xs font-mono text-brand-neon tracking-widest uppercase mb-4"
          >
            <Activity size={14} className="animate-pulse" />
            <span>Identity_Verification_Protocol</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            OPERATIVE PROFILE: DARKIESON
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Column 1: The Dossier Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative p-6 border-l-2 border-brand-neon bg-gray-900/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Terminal size={18} className="text-brand-neon" />
                // ORIGIN_STORY
              </h3>
              <p className="text-gray-400 font-mono leading-relaxed text-sm md:text-base">
                Initiated coding sequence 5 years ago. What began as a simple <span className="text-brand-neon">"Hello World"</span> exploration has evolved into a full-scale obsession with digital architecture. 
                <br /><br />
                I don't just write code; I engineer solutions. My directive is to bridge the gap between complex backend logic and seamless frontend interactivity.
              </p>
            </div>

            <div className="relative p-6 border-l-2 border-gray-700 hover:border-brand-neon bg-gray-900/20 backdrop-blur-sm transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Cpu size={18} className="text-gray-500 group-hover:text-brand-neon transition-colors" />
                // OPERATIONAL_DIRECTIVE
              </h3>
              <p className="text-gray-400 font-mono leading-relaxed text-sm md:text-base">
                Every project is a mission. My approach combines military-grade precision with creative adaptability. I focus on <span className="text-white">clean architecture</span>, <span className="text-white">performance optimization</span>, and <span className="text-white">user-centric design patterns</span>.
              </p>
            </div>
          </motion.div>

          {/* Column 2: The "Combat Record" Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatBlock 
              label="Total Runtime" 
              value="5+ YEARS" 
              icon={History} 
              delay={0.2} 
            />
             <StatBlock 
              label="Missions Complete" 
              value="50+" 
              icon={Database} 
              delay={0.3} 
            />
             <StatBlock 
              label="Client Uplinks" 
              value="30+" 
              icon={User} 
              delay={0.4} 
            />
             <StatBlock 
              label="Tech Arsenal" 
              value="15+" 
              icon={Zap} 
              delay={0.5} 
            />
            
            {/* Decorative "System Status" Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="col-span-1 sm:col-span-2 mt-4 border border-dashed border-gray-700 p-4 flex justify-between items-center text-xs font-mono text-gray-500"
            >
              <span>CURRENT_STATUS:</span>
              <span className="text-brand-neon animate-pulse">AVAILABLE_FOR_HIRE</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;