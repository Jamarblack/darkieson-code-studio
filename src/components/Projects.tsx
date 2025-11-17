import React from 'react';
import { useInView } from "react-intersection-observer";
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  delay: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with cart functionality, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://darkieson-store.vercel.app/",
    delay: 100,
  },
  {
    id: 2,
    title: "Portfolio Template",
    description: "A clean, minimalist portfolio template for creative professionals and agencies.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    demoUrl: "https://craft-port.vercel.app/",
    delay: 200,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app designed to help teams organize and track their projects efficiently.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://taskflow-brown-alpha.vercel.app/",
    delay: 300,
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description: "An interactive dashboard providing real-time financial data visualization and analytics.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    technologies: ["React", "D3.js", "Express", "MySQL"],
    demoUrl: "https://finance-hub-five.vercel.app/",
    delay: 400,
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "A feature-rich social network with real-time messaging and content sharing capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    technologies: ["React Native", "GraphQL", "Apollo", "MongoDB"],
    demoUrl: "https://huppy.vercel.app/",
    delay: 500,
  },
  {
    id: 6,
    title: "Weather Application",
    description: "A beautifully designed weather app providing accurate forecasts with animated visualizations.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    technologies: ["JavaScript", "Weather API", "CSS Animations"],
    demoUrl: "#",
    delay: 600,
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" ref={ref} className="py-24 dark:bg-gray-950 dark:text-gray-50 bg-gray-50">
      <div className="responsive-container">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            My Work
          </span>
          <h2 className="section-heading animate-section-fade-in relative">
            Featured Projects
          </h2>
          <p className="section-subheading">
            A selection of my recent work showcasing my skills and expertise in web development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={cn(
                "group relative bg-white rounded-2xl overflow-hidden shadow-md dark:bg-gray-950 dark:border-2 transition-all duration-700 hover:shadow-xl",
                inView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
                `delay-[${project.delay}ms]`
              )}
            >
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 opacity-30 group-hover:opacity-10 transition-opacity z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.demoUrl}
                  className="inline-flex items-center text-brand-blue font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
