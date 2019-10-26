import { HTMLAttributes } from 'react';
import { AtomProps } from './types';

import { createAtom } from './common';

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> { }

const tableRowDefaultProps: AtomProps = {
  padding: ['px2', 'py2']
};


/**
 * A simple table
 */
export const TableRow = (props: TableRowProps) => {
  return createAtom('tr', 'a-TableRow', { ...tableRowDefaultProps, ...props }, null);
};

export default TableRow;
