import React, { HTMLAttributes, useState } from 'react';
import { AtomProps, IntentProps } from './types';
import { createAtom } from './common';

interface ToastProps extends HTMLAttributes<HTMLDivElement>, AtomProps, IntentProps { }

export const Toast = React.memo((props: ToastProps) => {
  const [toastDismissed, setToastDismissed] = useState(false);

  return createAtom('div', 'toast',
    {
      ...props,
      onClick: () => {
        setToastDismissed(true);
      },
    }
  );
});

export default Toast;