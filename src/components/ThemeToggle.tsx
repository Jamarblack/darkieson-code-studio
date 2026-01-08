import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Default to dark if no preference
    return (localStorage.getItem("theme") as Theme) || "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative h-8 w-16 rounded-none border border-brand-neon/50 bg-black/50 backdrop-blur-sm p-1 transition-colors hover:border-brand-neon group"
      aria-label="Toggle System Theme"
    >
      {/* The Moving Switch (Pill) */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`absolute top-1 bottom-1 w-6 bg-brand-neon shadow-[0_0_10px_var(--neon-main)] ${
          theme === "dark" ? "left-1" : "right-1"
        }`}
      />

      {/* Icons */}
      <div className="relative z-10 flex h-full w-full items-center justify-between px-1">
        <Moon
          size={14}
          className={`transition-colors ${
            theme === "dark" ? "text-black" : "text-gray-500"
          }`}
        />
        <Sun
          size={14}
          className={`transition-colors ${
            theme === "light" ? "text-black" : "text-gray-500"
          }`}
        />
      </div>
    </button>
  );
}