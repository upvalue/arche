import React from 'react';

import { BreakpointProvider } from "./Breakpoint";
import { ThemeProvider, ThemeName } from "./Theme";
import { OverlayProvider } from "./OverlayPortal";

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
      <OverlayProvider>
        {props.children}
      </OverlayProvider>
    </ThemeProvider>
  </BreakpointProvider>
}

export default ThirdCoast;