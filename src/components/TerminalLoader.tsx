import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils'; // Ensure you have this utility or remove if not

const TerminalLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  // The "script" your terminal will run
  const logs = [
    "Initializing connection port 3000...",
    "Bypassing firewall security...",
    "Injecting payload: DARKIESON_V2...",
    "Accessing root directory...",
    "Decrypting assets...",
    "Compiling shaders...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    let delay = 0;
    
    // Type out the logs one by one
    logs.forEach((log, index) => {
      // Randomize the speed slightly for realism
      const lineDelay = Math.random() * 400 + 150; 
      delay += lineDelay;

      setTimeout(() => {
        setLines(prev => [...prev, log]);
        
        // When the last line is printed, wait a bit then finish
        if (index === logs.length - 1) {
          setTimeout(onComplete, 1000); 
        }
      }, delay);
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-mono text-brand-neon p-4">
      {/* The Terminal Window */}
      <div className="w-full max-w-lg border border-brand-neon/30 p-4 bg-black/90 shadow-[0_0_20px_rgba(0,255,65,0.15)] relative overflow-hidden">
        
        {/* Scanline decoration inside the window */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%] opacity-20"></div>

        {/* Terminal Header */}
        <div className="border-b border-brand-neon/30 pb-2 mb-4 flex justify-between text-[10px] sm:text-xs uppercase tracking-widest text-brand-neon/70">
          <span>Target: Portfolio_Mainframe</span>
          <span>Status: UNSECURED</span>
        </div>

        {/* The Logs */}
        <div className="space-y-2 h-64 overflow-y-auto font-mono text-sm">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-2 animate-fade-in-fast">
              <span className="text-brand-neon/50">{`>`}</span>
              <span className={i === lines.length - 1 ? "text-white" : "text-brand-neon"}>
                {line}
              </span>
            </div>
          ))}
          {/* Blinking Cursor */}
          <div className="w-2 h-4 bg-brand-neon animate-cursor-blink inline-block ml-2" />
        </div>

        {/* Loading Bar at the bottom */}
        <div className="mt-4 w-full h-1 bg-brand-dark rounded-full overflow-hidden border border-brand-neon/20">
          <div 
            className="h-full bg-brand-neon shadow-[0_0_10px_#00ff41]" 
            style={{ 
              width: `${(lines.length / logs.length) * 100}%`,
              transition: 'width 0.3s ease-out'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;