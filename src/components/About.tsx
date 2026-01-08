import React from "react";
import { motion } from "framer-motion";
import { User, Terminal, Cpu, Zap, Activity, History, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const StatBlock = ({ label, value, icon: Icon, delay }: { label: string, value: string, icon: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-card/50 border border-border p-4 flex items-center gap-4 hover:border-primary/50 hover:bg-card transition-all group"
  >
    <div className="p-3 bg-secondary border border-border text-muted-foreground group-hover:text-primary group-hover:border-primary transition-colors">
      <Icon size={20} />
    </div>
    <div>
      <div className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
        {label}
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden border-b border-border transition-colors duration-500">
      
      {/* Background Decor: Grid scan (Adaptive) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
            backgroundImage: `
                linear-gradient(90deg, var(--neon-main) 1px, transparent 1px),
                linear-gradient(var(--neon-main) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
        }}
      ></div>

      <div className="responsive-container relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary tracking-widest uppercase mb-4"
          >
            <Activity size={14} className="animate-pulse" />
            <span>Identity_Verification_Protocol</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            OPERATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">PROFILE</span>
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
            <div className="relative p-6 border-l-2 border-primary bg-card/40 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Terminal size={18} className="text-primary" />
                // ORIGIN_STORY
              </h3>
              <p className="text-muted-foreground font-mono leading-relaxed text-sm md:text-base">
                Initiated coding sequence 5 years ago. What began as a simple <span className="text-primary font-bold">"Hello World"</span> exploration has evolved into a full-scale obsession with digital architecture. 
                <br /><br />
                I don't just write code; I engineer solutions. My directive is to bridge the gap between complex backend logic and seamless frontend interactivity.
              </p>
            </div>

            <div className="relative p-6 border-l-2 border-border hover:border-primary bg-card/40 backdrop-blur-sm transition-colors group">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Cpu size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                // OPERATIONAL_DIRECTIVE
              </h3>
              <p className="text-muted-foreground font-mono leading-relaxed text-sm md:text-base">
                Every project is a mission. My approach combines military-grade precision with creative adaptability. I focus on <span className="text-foreground font-bold">clean architecture</span>, <span className="text-foreground font-bold">performance optimization</span>, and <span className="text-foreground font-bold">user-centric design patterns</span>.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatBlock label="Total Runtime" value="5+ YEARS" icon={History} delay={0.2} />
             <StatBlock label="Missions Complete" value="50+" icon={Database} delay={0.3} />
             <StatBlock label="Client Uplinks" value="30+" icon={User} delay={0.4} />
             <StatBlock label="Tech Arsenal" value="15+" icon={Zap} delay={0.5} />
            
            {/* System Status Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="col-span-1 sm:col-span-2 mt-4 border border-dashed border-border p-4 flex justify-between items-center text-xs font-mono text-muted-foreground"
            >
              <span>CURRENT_STATUS:</span>
              <span className="text-primary animate-pulse font-bold">AVAILABLE_FOR_HIRE</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;