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
export const buildClassNames = (componentClassName: string, props: any) => {
  const classNames = [
    useTheme(),
    `${componentClassName}`,
    props.bg && `bg-${props.bg}`,
    props.color && `color-${props.color}`,
    props.intent,
    arrayToString(props.margin),
    arrayToString(props.padding),
    props.className,
  ];

  return classNames.filter(Boolean).join(' ');
}

/**
 * Create a simple atomic element
 * @param defaultComponent  The component or tag to use if none is specified in props
 * @param componentClassName Classname that will always be added e.g. "button", "view" etc
 * @param props Props
 */
export const createAtom = (defaultComponent: string, componentClassName: string, props: AtomProps) => {
  const elementProps: any = {
    ...props,
    className: buildClassNames(componentClassName, props),
  }

  return React.createElement(props.component || defaultComponent, elementProps, props.children);
}