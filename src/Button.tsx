import React from 'react';
import { HTMLAttributes } from 'react';
import { AtomProps, IntentProps } from './types';

import { createAtom } from './common';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & AtomProps & IntentProps;

const buttonDefaultProps: AtomProps = {
  padding: ['py1', 'px2'],
};


/**
 * A button.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return createAtom('button', 'button flex items-center', { ...buttonDefaultProps, ...props }, ref);
});

export default Button;