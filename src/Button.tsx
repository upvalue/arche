import React, { HTMLAttributes } from 'react';
import { AtomProps } from './types';

import { createAtom } from './common';
import { Intent } from './types';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, AtomProps {
  intent?: Intent;
}

const buttonDefaultProps: AtomProps = {
  padding: ['py1', 'px2']
};

/**
 * A button.
 */
export const Button = React.memo((props: ButtonProps) => {
  return createAtom('button', 'button', { ...buttonDefaultProps, ...props });
});

export default Button;