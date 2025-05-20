
import React from 'react';
import { Github, Linkedin, Telegram, Mail } from "lucide-react";

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
    icon: Telegram,
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
    <footer className="py-8 bg-gray-900 text-white">
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
