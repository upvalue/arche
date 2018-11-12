import { Padding, Margin } from './types-generated';

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
  margin?: Margin | ReadonlyArray<Margin>;
  padding?: Padding | ReadonlyArray<Padding>;
};