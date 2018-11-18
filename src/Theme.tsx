// Theme.tsx - Theme context and hook
import React, { useContext, useState } from 'react';

export type ThemeName = undefined | string;

export type Theme = [ThemeName, (theme: ThemeName) => void];

const ThemeContext = React.createContext<Theme>(undefined as any as Theme);

interface ThemeProviderProps {
  theme?: ThemeName;
  onThemeChange?: (theme: ThemeName) => void;
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [themeName, setTheme] = useState<ThemeName>(undefined);

  const setThemeCb = (theme: ThemeName) => {
    setTheme(theme);
    if (props.onThemeChange) {
      props.onThemeChange(theme);
    }
  }

  return <ThemeContext.Provider value={[themeName, setThemeCb]}>
    {props.children}
  </ThemeContext.Provider>
}

/**
 * Returns [theme, setTheme] in exactly the same way as useState.
 */
export const useTheme = () => useContext(ThemeContext);