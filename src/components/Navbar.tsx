
import React, { useState, useEffect } from "react";
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 shadow",
        isScrolled
          ? "py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="responsive-container">
        <nav className="flex items-center justify-between gap-4">
          {/* Brand/Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-2xl font-bold text-primary transition-opacity hover:opacity-80"
          >
            <img
              src="/lovable-uploads/10ce7542-9eb7-434c-9ad1-22d2092d8ed9.png"
              alt="Darkieson Logo"
              className="h-10 w-10 rounded-full shadow"
            />
            <span className="hidden sm:inline font-extrabold tracking-wide">
              Darkieson Code Studio
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Socials (Desktop only) */}
          <div className="hidden md:flex items-center space-x-2 ml-4">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-500 hover:text-brand-blue transition rounded-full p-1"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              className="p-2 text-gray-600 dark:text-gray-200 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-7 w-7"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in-fast">
            <div className="flex flex-col space-y-3 mb-4">
              <a href="#about" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex flex-col items-center text-gray-600 hover:text-brand-blue transition"
                >
                  <Icon size={22} />
                  <span className="text-xs mt-1">{label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
