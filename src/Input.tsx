import { InputHTMLAttributes } from 'react';
import { AtomProps } from './types';

import { createAtom } from './common';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, AtomProps {
}

const inputDefaultProps: AtomProps = {
  padding: ['px2', 'py2']
};


/**
 * A text input fields
 */
export const Input = (props: InputProps) => {
  // TODO if this is common, should probably move it to createAtom to avoid multiple merges, do it all at once
  return createAtom('input', 'a-input', { ...inputDefaultProps, ...props }, null);
};

export default Input;
