import React from 'react';

import { BreakpointProvider } from "./Breakpoint";
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
  return <BreakpointProvider>
    <ThemeProvider
      onThemeChange={props.onThemeChange}
    >
      {props.children}
    </ThemeProvider>
  </BreakpointProvider>
}

export default ThirdCoast;