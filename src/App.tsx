import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TerminalLoader from "./components/TerminalLoader";

const queryClient = new QueryClient();

const App = () => {
  // 1. State to track if the "hack" is finished
  const [isLoaded, setIsLoaded] = useState(false);

  // Optional: Prevent scrolling while loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoaded]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 2. Global CRT Overlay (The screen flicker effect) */}
        <div className="crt-overlay opacity-20 z-[9999] pointer-events-none fixed inset-0"></div>

        {/* 3. Conditional Rendering */}
        {!isLoaded ? (
          <TerminalLoader onComplete={() => setIsLoaded(true)} />
        ) : (
          <div className="animate-fade-in relative z-0">
             <Toaster />
             <Sonner />
             <BrowserRouter>
               <Routes>
                 <Route path="/" element={<Index />} />
                 <Route path="*" element={<NotFound />} />
               </Routes>
             </BrowserRouter>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;