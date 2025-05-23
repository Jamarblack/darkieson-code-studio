
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ContactDetails from '@/components/ContactDetails';
import Footer from '@/components/Footer';
import { useInView } from "react-intersection-observer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Index;
