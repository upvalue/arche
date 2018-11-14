import React from 'react';

import { BreakpointProvider } from "./Breakpoint";
import { ThemeProvider } from "./Theme";

export interface ThirdCoastProps {
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
    <ThemeProvider>
      {props.children}
    </ThemeProvider>
  </BreakpointProvider>
}

export default ThirdCoast;