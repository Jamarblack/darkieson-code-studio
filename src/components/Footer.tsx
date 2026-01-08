import React from "react";
import { Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12 font-mono relative overflow-hidden">
      {/* Decorative scanline at the top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent"></div>

      <div className="responsive-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 text-gray-500">
            <Terminal size={16} className="text-brand-neon" />
            <span className="text-sm tracking-widest">
              DARKIESON_CODE_STUDIO
            </span>
          </div>

          {/* Copyright / Status */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-gray-600">
              © {currentYear} SYSTEM_ID: DARKIESON. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-2 text-[10px] text-gray-700 uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Session_Active
            </div>
          </div>
        </div>
        
        {/* "Return to Top" Command */}
        <div className="mt-12 text-center">
          <a 
            href="#hero" 
            className="inline-block text-brand-neon text-xs border border-brand-neon/30 px-4 py-2 hover:bg-brand-neon hover:text-black transition-colors"
          >
            [ EXECUTE: SCROLL_TO_TOP() ]
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;