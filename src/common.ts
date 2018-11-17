import React from 'react';

import { useTheme } from "./Theme";
import { AtomProps } from "./types";

// common.ts

/**
 * Converts an array to space-separated strings, if it is an array.
 * Used for example for padding 'p1' => 'p1', ['px1', 'py2'] => 'px1 py2'
 */
export const arrayToString = (x: ReadonlyArray<string> | string | undefined) =>
  Array.isArray(x) ? x.join(' ') : x;

/**
 * Extract functional CSS style class names from props
 * @param componentClassName Component class name, always present
 * @param props To extract class names from
 */
export const buildClassNames = (componentClassName: string, props: any) => {
  const classNames = [
    useTheme()[0],
    `${componentClassName}`,
    props.bg && `bg-${props.bg}`,
    props.color && `color-${props.color}`,
    props.intent,
    props.minimal && 'minimal',
    props.flex && 'flex',
    arrayToString(props.flex),
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
    flex: undefined,
    minimal: undefined,
    margin: undefined,
    padding: undefined,
    intent: undefined,
  }

  return React.createElement(props.component || defaultComponent, elementProps, props.children);
}