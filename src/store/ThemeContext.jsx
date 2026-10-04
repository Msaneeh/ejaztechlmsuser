import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "ejaztech-theme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    
    if (typeof window === "undefined") return "system";
    return localStorage.getItem(STORAGE_KEY) || "system";
  });

 
  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDark = theme === "dark" || (theme === "system" && systemDark);

    root.classList.toggle("dark", isDark);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  
  useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};