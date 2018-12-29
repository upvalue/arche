// OverlayPortal.tsx
import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';

export type OverlayNode = HTMLElement;

export type OverlayState = {
  node: HTMLElement;
  elements: ReadonlyArray<React.ReactElement<any> >;
};

export type OverlayContextValue = [OverlayState, (ref: OverlayState) => void];

const OverlayContext = React.createContext<OverlayContextValue>(null as any as OverlayContextValue);

/**
 * Div portal for any elements with absolute positioning
 */
export const OverlayProvider = (props: { children: React.ReactNode }) => {
  const [overlayState, setOverlayState] = useState<OverlayState | null>(null);
  // empty souls


  return (
    <React.Fragment>
      {overlayState &&
        ReactDOM.createPortal(overlayState.elements, overlayState.node)
      }
      <OverlayContext.Provider value={[overlayState as any, setOverlayState]}>
        {props.children}
      </OverlayContext.Provider>
    </React.Fragment>
  );
}

export const InOverlay = (props: { children: React.ReactNode }) => {
  const [overlayState, setOverlayState] = useContext(OverlayContext);

  console.log('creating overlay', overlayState);
  if (!overlayState) {
    const overlayDiv = document.createElement('div');
    document.body.appendChild(overlayDiv);

    const p = React.createElement('p', {}, 'howdy');

    setOverlayState({
      node: overlayDiv,
      elements: [p],
    });

    return null;
  }

  return null;
}

// <InOverlay>
//    <div className="toast">Gettin TOASTY</div>
// <InOverlay>

// so need to put props.children into portal.

// isnt it the portal we need to save off?