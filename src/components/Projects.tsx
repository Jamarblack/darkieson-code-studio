import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Lock, Unlock, FolderOpen, Database, Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl?: string; // Added optional GitHub link field
  securityLevel: "TOP SECRET" | "CONFIDENTIAL" | "PUBLIC";
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack System",
    description: "Secure transaction hub with cart functionality, user authentication protocols, and payment gateway integration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://darkieson-store.vercel.app/",
    securityLevel: "TOP SECRET"
  },
  {
    id: 2,
    title: "Portfolio Template",
    category: "Frontend Architecture",
    description: "Minimalist digital identity mainframe for creative operatives and agencies.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    demoUrl: "https://craft-port.vercel.app/",
    securityLevel: "PUBLIC"
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Productivity Tool",
    description: "Collaborative mission control dashboard for team organization and project tracking.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://taskflow-brown-alpha.vercel.app/",
    securityLevel: "CONFIDENTIAL"
  },
  {
    id: 4,
    title: "Finance Dashboard",
    category: "Data Visualization",
    description: "Real-time analytics engine providing financial data visualization and asset tracking.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    technologies: ["React", "D3.js", "Express", "MySQL"],
    demoUrl: "https://finance-hub-five.vercel.app/",
    securityLevel: "TOP SECRET"
  },
  {
    id: 5,
    title: "Social Media Platform",
    category: "Network Infrastructure",
    description: "Decentralized communication node with real-time messaging and content distribution capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    technologies: ["React Native", "GraphQL", "Apollo", "MongoDB"],
    demoUrl: "https://huppy.vercel.app",
    securityLevel: "TOP SECRET"
  },
  {
    id: 6,
    title: "Weather Application",
    category: "Environmental Scanner",
    description: "Atmospheric monitoring system providing accurate forecasts with animated data visualizations.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    technologies: ["JavaScript", "Weather API", "CSS Animations"],
    demoUrl: "#",
    securityLevel: "PUBLIC"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-black border border-gray-800 hover:border-brand-neon transition-colors duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Header: "Confidential" Strip */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800 group-hover:bg-brand-neon/10 group-hover:border-brand-neon/50 transition-colors">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-brand-neon">
          <FolderOpen size={14} />
          <span>CASE_FILE_00{project.id}</span>
        </div>
        <div className={cn(
          "text-[10px] font-bold tracking-widest px-2 py-0.5 border",
          project.securityLevel === "TOP SECRET" ? "border-red-500 text-red-500 bg-red-500/10" :
          project.securityLevel === "CONFIDENTIAL" ? "border-yellow-500 text-yellow-500 bg-yellow-500/10" :
          "border-brand-neon text-brand-neon bg-brand-neon/10"
        )}>
          {project.securityLevel}
        </div>
      </div>

      {/* 2. Image Section (The "Encrypted" Reveal) */}
      <div className="relative h-48 overflow-hidden bg-black">
        {/* The Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-110 opacity-60 grayscale-0 blur-0" : "scale-100 opacity-40 grayscale blur-sm"
          )}
        />
        
        {/* Overlay Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_2px,rgba(0,0,0,0.3)_2px)] bg-[size:100%_4px] pointer-events-none"></div>
        
        {/* "Locked" Icon overlay that disappears on hover */}
        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="w-12 h-12 text-gray-600/50" />
          </div>
        )}
      </div>

      {/* 3. Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-neon transition-colors flex items-center gap-2">
            {project.title}
            {isHovered && <Unlock className="w-4 h-4 text-brand-neon animate-pulse" />}
          </h3>
          <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-wider">
            // {project.category}
          </p>
        </div>

        <p className="text-sm text-gray-400 font-mono leading-relaxed border-l-2 border-gray-800 pl-3 group-hover:border-brand-neon transition-colors">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="text-[10px] uppercase font-mono px-2 py-1 bg-gray-900 text-gray-400 border border-gray-800 group-hover:border-brand-neon/30 group-hover:text-brand-neon transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 flex gap-4">
          <a 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-bold font-mono text-xs uppercase hover:bg-brand-neon hover:scale-[1.02] transition-all"
          >
            <span>INITIALIZE_DEMO</span>
            <ExternalLink size={14} />
          </a>
          {/* Optional GitHub Link (Disabled if not provided) */}
          {project.githubUrl ? (
             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-colors">
               <Github size={18} />
             </a>
          ) : (
            <div className="p-2 border border-gray-800 text-gray-800 cursor-not-allowed" title="Source Code Classified">
              <Code2 size={18} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-neon/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-neon/10 blur-[100px] pointer-events-none"></div>

      <div className="responsive-container relative z-10">
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-2 text-brand-neon font-mono text-sm tracking-widest uppercase">
            <Database className="w-4 h-4" />
            <span>Archive_Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
            PROJECT_DATABASE
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono text-sm md:text-base border-l-2 border-brand-neon pl-4">
            Decrypting select case files from recent operations. 
            <br />
            <span className="text-brand-neon opacity-70"> Access Level: GUEST</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;