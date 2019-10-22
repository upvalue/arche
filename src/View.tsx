import { HTMLAttributes } from 'react';

import { AtomProps } from './types';
import { createAtom, StringOrArray, arrayToString } from './common';

export type FlexDirectionProp = 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'md-row';
export type FlexItemsProp = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexJustifyProp = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type ViewProps = HTMLAttributes<HTMLDivElement> & AtomProps & {
  direction?: StringOrArray<FlexDirectionProp>;
  items?: StringOrArray<FlexItemsProp>;
  justify?: StringOrArray<FlexJustifyProp>;
  auto?: true;
};

export const View = (props: ViewProps) => {
  const classnames = [
    'view',
    'flex',
    arrayToString(props.direction, 'flex'),
    arrayToString(props.items, 'items'),
    arrayToString(props.justify, 'justify'),
    props.auto && 'flex-auto',
  ].filter(Boolean).join(' ');

  return createAtom('div', classnames, props, null);
};

export default View;
