import React from 'react';

import { AtomProps } from './types';
import { createAtom } from './common';


interface ViewProps extends AtomProps {

}

const View = React.memo((props: ViewProps) => {
  return createAtom('div', 'view', props);
});

export default View;