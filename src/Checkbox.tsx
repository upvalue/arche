import React, { InputHTMLAttributes } from 'react';
import { AtomProps } from './types';

import { createAtom } from './common';

import { View } from './View';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, AtomProps {
}

const checkboxDefaultProps: AtomProps = {
  padding: ['px2', 'py2']
};


/**
 * A checkbox.
 */
export const Checkbox = (props: InputProps) => {
  // TODO if this is common, should probably move it to createAtom to avoid multiple merges, do it all at once
  const checkbox = createAtom('input', 'checkbox', { type: 'checkbox', ...checkboxDefaultProps, ...props }, null);
  return <View className="checkbox">
    <div className="checkbox-indicator">&nbsp;</div>
    {checkbox}
  </View>
};

export default Checkbox;
