
import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { cn } from '@/lib/utils';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" ref={ref} className="py-24 bg-gray-50">
      <div className="responsive-container">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            About Me
          </span>
          <h2 className="section-heading animate-section-fade-in relative">
            Who I Am
            <span className="section-heading-accent" />
          </h2>
          <p className="section-subheading">
            A passionate web developer dedicated to creating beautiful, functional, and user-centered digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={cn(
            "transition-all duration-700 delay-100",
            inView ? "opacity-100" : "opacity-0 translate-x-[-20px]"
          )}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl blur opacity-20"></div>
              <div className="relative glass p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-gray-600 mb-4">
                  I started my coding journey over 5 years ago, and since then, I've been constantly learning and evolving. What began as curiosity has grown into a passionate career.
                </p>
                <p className="text-gray-600">
                  At Darkieson Code Studio, I combine technical expertise with an eye for design to create websites that not only function flawlessly but also look stunning.
                </p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-300",
            inView ? "opacity-100" : "opacity-0 translate-x-[20px]"
          )}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-pink rounded-2xl blur opacity-20"></div>
              <div className="relative glass p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">My Approach</h3>
                <p className="text-gray-600 mb-4">
                  I believe that every project deserves meticulous attention to detail. I focus on creating clean, efficient code and intuitive user experiences.
                </p>
                <p className="text-gray-600">
                  My goal is to exceed expectations by delivering solutions that are not only visually impressive but also technically sound and user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center transition-all duration-700 delay-500",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="bg-white p-6 rounded-xl shadow-sm hover-up">
            <div className="text-3xl font-bold text-brand-blue">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover-up">
            <div className="text-3xl font-bold text-brand-purple">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover-up">
            <div className="text-3xl font-bold text-brand-pink">30+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover-up">
            <div className="text-3xl font-bold text-brand-orange">15+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
