import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from "react-intersection-observer";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Send } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";


// Inline SVG import for Telegram
const TelegramSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-send"
    {...props}
  >
    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
    <path d="m21.854 2.147-10.94 10.939"/>
  </svg>
);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const SOCIALS = [
  {
    href: "https://github.com/Jamarblack",
    label: "GitHub",
    icon: <img src="/github.svg" alt="github" className="w-10 h-10" />,
  },
  {
    href: "https://www.linkedin.com/in/mubaraq-abdulraheem-8749892b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    icon: <img src="/linkedin.svg" alt="linkedin" className="w-10 h-10" />,
  },
  {
    href: "https://t.me/Darkieson",
    label: "Telegram",
    icon: <img src="/telegram.svg" alt="telegram" className="w-10 h-10" />,
  },
  {
    href: "mailto:darkiesoncodestudio@gmail.com",
    label: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

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

          {/* Socials Section */}
          <div className="mt-8 mb-8 flex flex-wrap justify-center gap-8">
            {SOCIALS.map(({ href, icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-brand-blue transition-all hover:bg-gray-200 hover:text-brand-blue hover:scale-105 hover:shadow-lg"
                  aria-label={label}
                >
                  {icon}
                </a>
                <span className="mt-2 text-sm text-gray-700">{label}</span>
              </div>
            ))}
          </div>

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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="https://github.com/Jamarblack" 
                          className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                          aria-label="GitHub"
                        >
                          <img 
                            src="/github.svg"
                            alt="github"
                            className="w-10 h-10"
                          />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="https://www.linkedin.com/in/mubaraq-abdulraheem-8749892b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                          className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                          aria-label="LinkedIn"
                        >
                          <img 
                            src="/linkedin.svg"
                            alt="linkedin"
                            className="w-10 h-10"
                          />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="https://t.me/Darkieson" 
                          className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                          aria-label="Telegram"
                        >
                          <img
                            src="/telegram.svg"
                            alt="telegram"
                            className="w-10 h-10"
                          />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Telegram</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-300",
            inView ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
          <form className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm max-w-full sm:max-w-lg md:max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Me a Message</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-gray-800 bg-gray-50 focus:ring-2 focus:ring-brand-blue outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-gray-800 bg-gray-50 focus:ring-2 focus:ring-brand-blue outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-gray-800 bg-gray-50 focus:ring-2 focus:ring-brand-blue outline-none transition resize-none"
                ></textarea>
              </div>
              {/* The Telegram send button */}
              <div className="flex">
                <a
                  href="https://t.me/Darkieson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full flex flex-row items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-medium text-white transition-all",
                    "text-base sm:text-lg bg-brand-blue hover:bg-brand-blue/90 hover-up"
                  )}
                  style={{ textAlign: "center" }}
                  aria-label="Send Message via Telegram"
                >
                  <TelegramSVG className="w-5 h-5" />
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
