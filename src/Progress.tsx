import React, { ProgressHTMLAttributes } from 'react';
import { AtomProps, IntentProps } from './types';

import { createAtom } from './common';

type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & AtomProps & IntentProps;

const progressDefaultProps: ProgressProps = {
  intent: 'primary',
}


/**
 * A progress bar
 */
export const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>((props, ref) => {
  return createAtom('progress', 'a-Progress', { ...progressDefaultProps, ...props }, ref);
});

export default Button;
