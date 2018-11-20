import React, { HTMLAttributes } from 'react';
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
export const Button = React.memo((props: ButtonProps) => {
  return createAtom('button', 'button', { ...buttonDefaultProps, ...props });
});

export default Button;