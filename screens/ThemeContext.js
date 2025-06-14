import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    background: isDarkMode ? "#1a1a1a" : "#f5f5f5",
    text: isDarkMode ? "#ffffff" : "#000000",
    subText: isDarkMode ? "#b3b3b3" : "#666666",
    headerBorder: isDarkMode ? "#333333" : "#eeeeee",
    cardBackground: isDarkMode ? "#2d2d2d" : "#ffffff",
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
