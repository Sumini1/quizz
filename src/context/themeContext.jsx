

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Ambil tema dari localStorage, default ke "light" jika tidak ada
    return localStorage.getItem("sb-react-daisyui-preview-theme") || "light";
  });

  useEffect(() => {
    // Terapkan tema ke elemen <html> setiap kali tema berubah
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sb-react-daisyui-preview-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

