// src/components/shared/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Or your custom context hook
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Force component to wait until it's safely mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a structural layout placeholder with matching dimensions 
  // to avoid layout shifts during hydration
  if (!mounted) {
    return <div className="w-[18px] h-[18px]" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 hover:bg-slate-800 transition-colors"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}