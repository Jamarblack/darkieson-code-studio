import React from 'react';
import { Radio } from "lucide-react";
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import ContactSocials from './ContactSocials';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden border-t border-gray-900">
      {/* Background World Map or Grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="responsive-container relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-brand-neon font-mono text-xs tracking-widest uppercase mb-2">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>Transmission_Link</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            INITIATE_CONTACT
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Right Column: Details & Socials */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
             <ContactDetails />
             <ContactSocials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;