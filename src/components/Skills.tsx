import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Cpu, Wifi, HardDrive, Zap, Globe, Code, Layers, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

interface SkillModule {
  name: string;
  load: number; // 0-100
  id: string;
  status: "OPTIMAL" | "HIGH LOAD" | "STABLE";
}

const coreModules: SkillModule[] = [
  { name: "UX_ARCHITECTURE", load: 95, id: "MOD_01", status: "OPTIMAL" },
  { name: "JAVASCRIPT_ENGINE", load: 90, id: "MOD_02", status: "STABLE" },
  { name: "REACT_CORE", load: 85, id: "MOD_03", status: "STABLE" },
  { name: "NODE_SERVER", load: 80, id: "MOD_04", status: "STABLE" },
  { name: "TAILWIND_RENDER", load: 92, id: "MOD_05", status: "OPTIMAL" },
  { name: "DATABASE_IO", load: 88, id: "MOD_06", status: "HIGH LOAD" },
  { name: "Typescript", load: 88, id: "MOD_07", status: "HIGH LOAD" },
  { name: "React-Native", load: 88, id: "MOD_08", status: "HIGH LOAD" },
];

const softProcessors = [
  { name: "CRITICAL_THINKING", status: "RUNNING", latency: "12ms" },
  { name: "TEAM_SYNC_PROTOCOL", status: "CONNECTED", latency: "24ms" },
  { name: "ADAPTABILITY_ALGO", status: "ACTIVE", latency: "8ms" },
  { name: "CREATIVE_OUTPUT", status: "MAXIMIZED", latency: "15ms" },
];

const SkillGauge = ({ module, index }: { module: SkillModule; index: number }) => {
  // Animate the "load" number counting up
  const [currentLoad, setCurrentLoad] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentLoad(prev => {
          if (prev >= module.load) {
            clearInterval(interval);
            return module.load;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [module.load, index]);

  return (
    <div className="bg-black border border-gray-800 p-4 relative overflow-hidden group hover:border-brand-neon transition-colors">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="relative z-10 flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-gray-500 text-xs font-mono group-hover:text-brand-neon">
          <HardDrive size={14} />
          <span>{module.id}</span>
        </div>
        <div className={cn(
          "text-[10px] font-bold px-2 py-0.5 border font-mono",
          module.status === "OPTIMAL" ? "border-brand-neon text-brand-neon bg-brand-neon/10" : "border-yellow-500 text-yellow-500 bg-yellow-500/10"
        )}>
          {module.status}
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-bold font-mono text-sm mb-1">{module.name}</h3>
        
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-display font-bold text-white group-hover:text-brand-neon transition-colors">
            {currentLoad}%
          </span>
          <span className="text-xs text-gray-500 mb-1 font-mono">LOAD_CAPACITY</span>
        </div>

        {/* The "Bar" Visual */}
        <div className="h-2 bg-gray-900 w-full overflow-hidden flex gap-0.5">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-full w-full transition-all duration-300",
                i < (currentLoad / 5) 
                  ? "bg-brand-neon shadow-[0_0_5px_rgba(0,255,65,0.5)]" 
                  : "bg-gray-800"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      <div className="responsive-container relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-brand-neon font-mono text-xs tracking-widest uppercase mb-2">
            <Cpu className="w-4 h-4 animate-spin-slow" />
            <span>System_Diagnostics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            CORE_MODULES
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-xl">
            Real-time analysis of technical capabilities and heuristic subroutines. All systems operating within nominal parameters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: Technical Skills (Grid) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {coreModules.map((mod, i) => (
              <SkillGauge key={mod.id} module={mod} index={i} />
            ))}
          </div>

          {/* Column 3: Soft Skills (Terminal List) */}
          <div className="bg-gray-900/30 border border-gray-800 p-6 font-mono text-sm h-full">
            <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
              <span className="text-white font-bold flex items-center gap-2">
                <BrainCircuit size={16} className="text-brand-neon" />
                BG_PROCESSES
              </span>
              <span className="text-gray-500 text-xs">PID: 8842</span>
            </div>

            <div className="space-y-4">
              {softProcessors.map((proc, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-neon opacity-50 group-hover:opacity-100">{`>`}</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{proc.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-brand-neon text-xs">{proc.status}</div>
                    <div className="text-gray-600 text-[10px]">{proc.latency}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <div className="w-2 h-2 bg-brand-neon rounded-full animate-pulse"></div>
                System stable. Memory usage: 42%
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;