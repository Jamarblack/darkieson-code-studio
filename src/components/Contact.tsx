
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";
import ContactDetails from "./ContactDetails";

// UseInView for animation only
const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 md:py-24">
      <div className="responsive-container">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Contact
          </span>
          <h2 className="section-heading animate-section-fade-in relative">
            Get In Touch
          </h2>
          <p className="section-subheading">
            Feel free to reach out for questions, collaborations, or just a friendly hello.
          </p>
          <ContactSocials />
          <ContactDetails />
        </div>
        <div className={cn(
          "transition-all duration-700 delay-300",
          inView ? "opacity-100" : "opacity-0 translate-y-10"
        )}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
