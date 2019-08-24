import { HTMLAttributes } from 'react';

import { AtomProps } from './types';
import { createAtom } from './common';

export type ViewProps = HTMLAttributes<HTMLDivElement> & AtomProps;

export const View = (props: ViewProps) => {
  return createAtom('div', 'view', props, null);
};

export default View;