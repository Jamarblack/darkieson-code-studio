
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from "react-intersection-observer";

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
            <span className="section-heading-accent" />
          </h2>
          <p className="section-subheading">
            Feel free to reach out for questions, collaborations, or just a friendly hello.
          </p>
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

