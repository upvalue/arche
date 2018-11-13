import React, { HTMLAttributes } from 'react';

import { AtomProps } from './types';
import { createAtom } from './common';


export type ViewProps = HTMLAttributes<HTMLDivElement> & AtomProps;

const View = React.memo((props: ViewProps) => {
  return createAtom('div', 'view', props);
});

export default View;