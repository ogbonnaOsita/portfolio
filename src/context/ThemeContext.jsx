import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  return (
    <ThemeContext.Provider value={{ setMode, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
