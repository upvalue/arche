import { HTMLAttributes, useState } from 'react';
import { AtomProps, IntentProps } from './types';
import { createAtom } from './common';

interface ToastProps extends HTMLAttributes<HTMLDivElement>, AtomProps, IntentProps { }

export const Toast = (props: ToastProps) => {
  // Required in order to avoid unused variable warning
  const setToastDismissed = useState(false)[1];

  return createAtom('div', 'toast',
    {
      ...props,
      onClick: () => {
        setToastDismissed(true);
      },
    }
  );
};

export default Toast;