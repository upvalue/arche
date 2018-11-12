import React from 'react';
import { AtomProps } from './types';
import { createAtom } from './common';

interface TextProps extends AtomProps {

}

const Text = React.memo((props: TextProps) => {
  return createAtom('p', 'text', props);
});

export default Text;
