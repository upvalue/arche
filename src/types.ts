import { PaddingClass, MarginClass, FlexClass } from './types-generated';

export type Intent = 'primary' | 'secondary' | 'warning' | 'danger';

export interface IntentProps {
  intent?: Intent;
}

export interface AtomProps {
  component?: any;
  /**
   * Foreground color. One of primary, secondary, warning, or danger. Shades from 1 to 5.
   */
  color?: string;
  /**
   * Background color.
   */
  bg?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  margin?: MarginClass | ReadonlyArray<MarginClass>;
  padding?: PaddingClass | ReadonlyArray<PaddingClass>;
  flex?: FlexClass | ReadonlyArray<FlexClass>;
  minimal?: boolean;
};

