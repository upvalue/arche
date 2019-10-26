import { HTMLAttributes } from 'react';

import { AtomProps } from './types';
import { createAtom } from './common';

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> { }

const tableCellDefaultProps: AtomProps = {
  padding: ['px2', 'py2']
};


/**
 * A simple table
 */
export const TableCell = (props: TableCellProps) => {
  return createAtom('td', 'a-TableCell', { ...tableCellDefaultProps, ...props }, null);
};

export default TableCell;
