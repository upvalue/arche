import React from 'react';

import { useTheme } from "./Theme";
import { AtomProps } from "./types";

// common.ts

export const arrayToString = (x: ReadonlyArray<string> | string | undefined) => {
  return Array.isArray(x) ? x.join(' ') : x;
}


/**
 * Extract functional CSS style class names from props
 * @param componentClassName Component class name, always present
 * @param props To extract class names from
 */
export const buildClassNames = (componentClassName: string, props: AtomProps) => {
  const classNames = [
    useTheme(),
    `tc-${componentClassName}`,
    props.bg && `tc-bg-${props.bg}`,
    props.color && `tc-color-${props.color}`,
    arrayToString(props.margin),
    arrayToString(props.padding),
    props.className,
  ];

  return classNames.filter(Boolean).join(' ');
}

export const createAtom = (defaultComponent: string, componentClassName: string, props: AtomProps) => {
  const elementProps: any = {
    className: buildClassNames(componentClassName, props),
  }

  if (props.style) {
    elementProps.style = props.style;
  }

  return React.createElement(props.component || defaultComponent, elementProps, props.children);
}