
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

// Custom Telegram SVG icon component
const TelegramIcon = ({ size = 22 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.38.24-1.51.99-.21.15-.46.22-.74.22-.24 0-.71-.14-1.13-.25-.51-.14-.92-.22-.88-.46.02-.12.16-.24.4-.38 1.61-.7 2.69-1.16 3.24-1.38 1.53-.64 1.85-.75 2.05-.75.05 0 .15.01.21.09.05.06.06.14.07.2-.01.06.01.13 0 .18z"/>
  </svg>
);

const SOCIALS = [
  {
    href: "https://github.com/Jamarblack",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/mubaraq-abdulraheem-8749892b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://t.me/Darkieson",
    label: "Telegram",
    icon: TelegramIcon,
  },
  {
    href: "mailto:darkiesoncodestudio@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white dark:bg-gray-950 dark:text-gray-50">
      <div className="responsive-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center space-x-2">
            <img
              src="/lovable-uploads/10ce7542-9eb7-434c-9ad1-22d2092d8ed9.png"
              alt="Darkieson Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-medium">Darkieson Code Studio</span>
          </div>

          <div className="flex flex-row gap-4 mb-4 md:mb-0">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={label}
                className="text-gray-400 hover:text-white transition"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} Darkieson Code Studio. All rights reserved.
            <span className="pl-3">
              <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                Back to top
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
