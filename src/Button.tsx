import React from 'react';
import { AtomProps } from './types';

import { createAtom } from './common';

interface ButtonProps extends AtomProps {
  intent?: 'primary' | 'secondary' | 'warning' | 'danger';
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