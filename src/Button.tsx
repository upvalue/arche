import { HTMLAttributes } from 'react';
import { AtomProps, IntentProps } from './types';

import { createAtom } from './common';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, AtomProps, IntentProps {
}

const buttonDefaultProps: AtomProps = {
  padding: ['py1', 'px2'],
  flex: ['flex', 'items-center']
};


/**
 * A button.
 */
export const Button = (props: ButtonProps) => {
  // TODO if this is common, should probably move it to createAtom to avoid multiple merges, do it all at once
  return createAtom('button', 'button', { ...buttonDefaultProps, ...props });
};

export default Button;