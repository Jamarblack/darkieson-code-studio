
import React, { useState } from 'react';
import { useInView } from "react-intersection-observer";
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="responsive-container">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="section-heading">
            Let's Work Together
          </h2>
          <p className="section-subheading">
            Have a project in mind or want to discuss potential collaboration? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <div className="bg-gray-50 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Email</h4>
                    <a href="mailto:darkiesoncodestudio@gmail.com" className="text-gray-700 hover:text-brand-blue transition-colors">
                      darkiesoncodestudio@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Location</h4>
                    <p className="text-gray-700">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Jamarblack" 
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                  >
                    <img 
                      src={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>}
                      alt="github"
                      className="w-10 h-10"
                      />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mubaraq-abdulraheem-8749892b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="t.me/Darkieson" 
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                  >
                    <Send size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-300",
            inView ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 px-6 rounded-lg font-medium text-white transition-all",
                    isSubmitting 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-brand-blue hover:bg-brand-blue/90 hover-up"
                  )}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
