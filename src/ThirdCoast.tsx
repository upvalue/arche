import React from 'react';

import { ThemeProvider, ThemeName } from "./Theme";

export interface ThirdCoastProps {
  onThemeChange?: (theme: ThemeName) => void;
  children?: React.ReactNode;
}

/**
 * Wrapper for all Third Coast component, should be mounted at app root. Provides themes,
 * breakpoints, etc.
 * 
 * @param props 
 */
export const ThirdCoast = (props: ThirdCoastProps) => {
  return (
    <ThemeProvider
      onThemeChange={props.onThemeChange}
    >
      {props.children}
    </ThemeProvider>
  );
}

export default ThirdCoast;
