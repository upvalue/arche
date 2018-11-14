// Breakpooint.tsx - breakpoint context and hook
import React, { useContext, useState, useEffect } from 'react';
import { BREAKPOINT_LG, BREAKPOINT_MD } from './constants';

export interface Screen {
  width: number;
  height: number;
  available: boolean;
}

export type BreakpointType = 'sm' | 'md' | 'lg';

const BreakpointContext = React.createContext<BreakpointType>('lg');

interface BreakpointProviderProps {
  children?: React.ReactNode;
}

export const BreakpointProvider = (props: BreakpointProviderProps) => {
  const [screen, setScreen] = useState(window !== undefined ? { width: window.innerWidth, height: window.innerHeight, available: true } : { width: 0, height: 0, available: false });

  // TODO debounce?
  const handleScreenResize = () => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
      available: true
    });
  }

  useEffect(() => {
    window.onresize = handleScreenResize;
  });

  let formFactor: BreakpointType = 'sm';

  if (screen.width >= BREAKPOINT_LG) {
    formFactor = 'lg';
  } else if (screen.width >= BREAKPOINT_MD) {
    formFactor = 'md';
  }

  return <BreakpointContext.Provider value={formFactor}>
    {props.children}
  </BreakpointContext.Provider>
}

export const useBreakpoint = () => useContext(BreakpointContext);
