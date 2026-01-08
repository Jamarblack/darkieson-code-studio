import React from "react";
import { Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 font-mono relative overflow-hidden transition-colors duration-500">
      <div className="responsive-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal size={16} className="text-primary" />
            <span className="text-sm tracking-widest">
              DARKIESON_CODE_STUDIO
            </span>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-muted-foreground">
              © {currentYear} SYSTEM_ID: DARKIESON. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-2 text-[10px] text-muted-foreground/80 uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Session_Active
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#hero" 
            className="inline-block text-primary text-xs border border-primary/30 px-4 py-2 hover:bg-primary hover:text-background transition-colors"
          >
            [ EXECUTE: SCROLL_TO_TOP() ]
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;