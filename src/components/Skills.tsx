
import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { cn } from '@/lib/utils';
import ProgressBar from './ui/ProgressBar';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface SoftSkill {
  name: string;
}

const technicalSkills: Skill[] = [
  { name: "UX Design", percentage: 95, color: "bg-brand-blue" },
  { name: "JavaScript / TypeScript", percentage: 90, color: "bg-yellow-500" },
  { name: "React / Next.js", percentage: 85, color: "bg-cyan-500" },
  { name: "Node.js", percentage: 80, color: "bg-green-500" },
  { name: "CSS / Tailwind", percentage: 90, color: "bg-pink-500" }
];

const softSkills: Skill[] = [
  { name: "Problem Solving", percentage: 95, color: "bg-brand-blue" },
  { name: "Communication", percentage: 85, color: "bg-indigo-500" },
  { name: "Teamwork", percentage: 90, color: "bg-rose-500" },
  { name: "Creativity", percentage: 95, color: "bg-amber-500" }
];

const additionalSoftSkills: SoftSkill[] = [
  { name: "Adaptability" },
  { name: "Time Management" },
  { name: "Critical Thinking" },
  { name: "Leadership" }
];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="skills" ref={ref} className="py-24 bg-gray-50">
      <div className="responsive-container">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            My Skills
          </span>
          <h2 className="section-heading">
            Expertise & Capabilities
          </h2>
          <p className="section-subheading">
            A comprehensive overview of my technical abilities and soft skills that I bring to every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100" : "opacity-0 translate-x-[-20px]"
          )}>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            
            {technicalSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                value={skill.percentage}
                color={skill.color}
                animate={inView}
                label={skill.name}
                percentage
              />
            ))}
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-300",
            inView ? "opacity-100" : "opacity-0 translate-x-[20px]"
          )}>
            <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
            
            {softSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                value={skill.percentage}
                color={skill.color}
                animate={inView}
                label={skill.name}
                percentage
              />
            ))}
            
            <div className={cn(
              "grid grid-cols-2 gap-4 mt-8 transition-all duration-700 delay-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              {additionalSoftSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-100 p-4 text-center hover-up">
                  <span className="font-medium">{skill.name}</span>
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
