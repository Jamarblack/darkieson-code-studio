
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ContactDetails from '@/components/ContactDetails';
import Footer from '@/components/Footer';
import { useInView } from "react-intersection-observer";
import ContactForm from '@/components/ContactForm';
import ContactSocials from '@/components/ContactSocials';

const Index = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactDetails />
      <ContactForm />
      <ContactSocials />
      <Footer />
    </div>
  );
};

export default Index;
