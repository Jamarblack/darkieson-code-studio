import React, { useState, useEffect } from "react";
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
// Removed ThemeToggle because we are forcing Dark Mode for this aesthetic

// Custom Telegram Icon to match Lucide style
const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
  </svg>
);

const SOCIALS = [
  { href: "https://github.com/Jamarblack", label: "GIT", icon: Github },
  { href: "https://www.linkedin.com/in/mubaraq-abdulraheem-8749892b7", label: "LNK", icon: Linkedin },
  { href: "https://t.me/Darkieson", label: "TEL", icon: TelegramIcon },
  { href: "mailto:darkiesoncodestudio@gmail.com", label: "EML", icon: Mail },
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
        "fixed top-0 w-full z-40 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-brand-neon/40 py-2"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between font-mono">
          
          {/* 1. Brand: Command Prompt Style */}
          <a href="#hero" className="group flex items-center gap-2 text-brand-neon hover:text-white transition-colors">
            <div className="border border-brand-neon p-1 group-hover:bg-brand-neon group-hover:text-black transition-all">
              <Terminal size={20} />
            </div>
            <span className="font-bold tracking-tighter text-lg">
              ~/DARKIESON<span className="animate-cursor-blink">_</span>
            </span>
          </a>

          {/* 2. Desktop Menu: "Tabs" Style */}
          <div className="hidden md:flex items-center space-x-1">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-1 text-sm text-gray-400 hover:text-brand-neon hover:border-b-2 hover:border-brand-neon transition-all"
              >
                {`[${item.toUpperCase()}]`}
              </a>
            ))}
          </div>

          {/* 3. Socials: Icons with Borders */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-4 w-px bg-brand-neon/30 mx-2"></div>
            {SOCIALS.map(({ href, icon: Icon }) => (
              <a
                key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="text-brand-neon/70 hover:text-brand-neon hover:scale-110 transition-transform"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* 4. Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-neon border border-brand-neon/30 hover:bg-brand-neon/10"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className="space-y-1">
              <span className={cn("block w-6 h-0.5 bg-current transition-transform", isMenuOpen && "rotate-45 translate-y-1.5")}></span>
              <span className={cn("block w-6 h-0.5 bg-current transition-opacity", isMenuOpen && "opacity-0")}></span>
              <span className={cn("block w-6 h-0.5 bg-current transition-transform", isMenuOpen && "-rotate-45 -translate-y-1.5")}></span>
            </div>
          </button>
        </nav>

        {/* 5. Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 border-t border-brand-neon/30 bg-black/95 backdrop-blur-xl">
            <div className="flex flex-col p-4 space-y-4 font-mono text-sm">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item} href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center text-gray-400 hover:text-brand-neon pl-2 border-l-2 border-transparent hover:border-brand-neon transition-all"
                >
                  <span className="mr-2 text-brand-neon">{`>`}</span> {item.toUpperCase()}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-brand-neon/20">
                {SOCIALS.map(({ href, icon: Icon }) => (
                  <a key={href} href={href} target="_blank" className="text-brand-neon hover:text-white">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;