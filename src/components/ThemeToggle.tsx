
import React from "react";
import { Sun, Moon, Settings } from "lucide-react";

type Theme = 'light' | 'dark' | 'system';

const themes: { type: Theme; label: string; icon: React.ReactNode }[] = [
  { type: "light", label: "Light", icon: <Sun className="w-6 h-6" /> },
  { type: "dark", label: "Dark", icon: <Moon className="w-6 h-6" /> },
  { type: "system", label: "System", icon: <Settings className="w-6 h-6" /> }
];

function getSystemTheme() {
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );

  React.useEffect(() => {
    let desiredTheme = theme;
    if (theme === "system") {
      desiredTheme = getSystemTheme();
    }
    document.documentElement.classList.toggle("dark", desiredTheme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative  inline-block ">
      <select
        className="appearance-none w-24 right-0 bg-white flex justify-between dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-2 py-1 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue cursor-pointer transition"
        value={theme}
        onChange={e => setTheme(e.target.value as Theme)}
        aria-label="Theme Toggle"
      >
        {themes.map(({ type, label }) => (
          <option value={type} key={type}>{label}</option>
        ))}
      </select>
      <span className="absolute left-16 top-1 pointer-events-none">
        {themes.find(t => t.type === theme)?.icon}
      </span>
    </div>
  );
}
