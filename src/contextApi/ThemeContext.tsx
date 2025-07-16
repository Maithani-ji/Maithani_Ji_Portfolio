import { createContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextType={
    isDark:boolean;
    setIsDark:React.Dispatch<React.SetStateAction<boolean>>

}

const ThemeContext = createContext<ThemeContextType| undefined>(undefined);
type ThemeProviderProps = {
    children: ReactNode;
  };
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
