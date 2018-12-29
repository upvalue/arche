import React, { InputHTMLAttributes } from 'react';
import { AtomProps, IntentProps } from './types';

import { createAtom } from './common';

import './styles/all.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, AtomProps {
}

const buttonDefaultProps: AtomProps = {
};


/**
 * A button.
 */
export const Input = React.memo((props: InputProps) => {
  // TODO if this is common, should probably move it to createAtom to avoid multiple merges, do it all at once
  return createAtom('input', 'input', props);
});

export default Input;
