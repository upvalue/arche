import React from 'react';
import { AtomProps } from './types';

import Text from './Text';
import { useTheme } from './Theme';
import { createAtom } from './common';

import './Button.scss';

interface ButtonProps extends AtomProps {
  intent?: 'primary' | 'secondary' | 'warning' | 'danger';
}

const buttonDefaultProps: AtomProps = {
  padding: ['py1', 'px2']
};

/**
 * A button.
 */
const Button = React.memo((props: ButtonProps) => {
  return createAtom('button', 'button', { ...buttonDefaultProps, ...props });
});

export default Button;