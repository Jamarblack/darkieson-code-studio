import React from 'react';
import { useInView } from "react-intersection-observer";
import { cn } from '@/lib/utils';
import { Cpu, Database, Terminal, Code2 } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

interface SoftSkill {
  name: string;
}

// Unified colors to "primary" to match the Hacker/Facility theme
const technicalSkills: Skill[] = [
  { name: "UX_DESIGN", percentage: 95 },
  { name: "JAVASCRIPT / TYPESCRIPT", percentage: 90 },
  { name: "REACT / NEXT.JS", percentage: 85 },
  { name: "NODE.JS_SERVER", percentage: 80 },
  { name: "CSS / TAILWIND", percentage: 90 }
];

const softSkills: Skill[] = [
  { name: "PROBLEM_SOLVING", percentage: 95 },
  { name: "COMMUNICATION_UPLINK", percentage: 85 },
  { name: "TEAM_SYNC", percentage: 90 },
  { name: "CREATIVE_ALGO", percentage: 95 }
];

const additionalSoftSkills: SoftSkill[] = [
  { name: "ADAPTABILITY" },
  { name: "TIME_MANAGEMENT" },
  { name: "CRITICAL_THINKING" },
  { name: "LEADERSHIP_PROTOCOL" }
];

// Internal ProgressBar Component for Theme Compatibility
const ThemeProgressBar = ({ label, value, animate }: { label: string, value: number, animate: boolean }) => (
  <div className="mb-6 group">
    <div className="flex justify-between mb-2 font-mono text-xs">
      <span className="text-foreground font-bold group-hover:text-primary transition-colors flex items-center gap-2">
        <span className="text-primary opacity-50">{`>`}</span> {label}
      </span>
      <span className="text-muted-foreground">{value}%</span>
    </div>
    <div className="h-2 w-full bg-secondary overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
      <div 
        className={cn(
          "h-full bg-primary transition-all duration-1000 ease-out shadow-[0_0_10px_var(--neon-glow)]",
          animate ? "w-full" : "w-0"
        )}
        style={{ width: animate ? `${value}%` : '0%' }}
      />
    </div>
  </div>
);

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="skills" ref={ref} className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(var(--neon-main) 1px, transparent 1px), linear-gradient(90deg, var(--neon-main) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="responsive-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 text-xs font-mono px-3 py-1 rounded-none mb-4 uppercase tracking-widest">
            <Cpu size={12} className="animate-spin-slow" />
            System_Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            EXPERTISE_DATABASE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm md:text-base">
            Comprehensive overview of loaded technical modules and heuristic subroutines.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Column 1: Technical Skills */}
          <div className={cn(
            "transition-all duration-700 bg-card/30 p-6 border border-border backdrop-blur-sm",
            inView ? "opacity-100" : "opacity-0 translate-x-[-20px]"
          )}>
            <h3 className="text-2xl font-bold mb-8 font-display text-foreground flex items-center gap-2">
              <Terminal className="text-primary" /> TECHNICAL_STACK
            </h3>
            
            {technicalSkills.map((skill, index) => (
              <ThemeProgressBar
                key={index}
                value={skill.percentage}
                label={skill.name}
                animate={inView}
              />
            ))}
          </div>
          
          {/* Column 2: Soft Skills */}
          <div className={cn(
            "transition-all duration-700 delay-300 bg-card/30 p-6 border border-border backdrop-blur-sm",
            inView ? "opacity-100" : "opacity-0 translate-x-[20px]"
          )}>
            <h3 className="text-2xl font-bold mb-8 font-display text-foreground flex items-center gap-2">
              <Database className="text-primary" /> HEURISTIC_DATA
            </h3>
            
            {softSkills.map((skill, index) => (
              <ThemeProgressBar
                key={index}
                value={skill.percentage}
                label={skill.name}
                animate={inView}
              />
            ))}
            
            {/* Additional Skills Grid */}
            <div className={cn(
              "grid grid-cols-2 gap-4 mt-8 transition-all duration-700 delay-500 border-t border-border pt-8",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              {additionalSoftSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border p-4 text-center hover:border-primary transition-colors group cursor-default"
                >
                  <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                    <Code2 size={12} className="opacity-50" />
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;