// Theme.ts - Theme
import React, { useContext } from 'react';

export type ThemeType = undefined | string;

const ThemeContext = React.createContext<ThemeType>(undefined);

interface ThemeProviderProps {
  theme?: ThemeType;
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);