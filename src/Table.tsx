import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { AtomProps } from './types';
import { createAtom } from './common';

interface TableProps {
  columns: ReadonlyArray<React.ReactNode>;
  elementProps?: AtomProps & HTMLAttributes<HTMLTableElement>;
  children?: React.ReactNode;
  striped?: boolean;
}

const tableDefaultProps: AtomProps = {
  padding: ['px2', 'py2']
};


/**
 * A simple table
 */
export const Table = (props: TableProps) => {
  const { columns } = props;

  const children = (
    <>
      <thead>
        <tr>
          {columns.map((c, i) => {
            return <th className="a-px2 a-py2" key={i}>{c}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </>
  );

  return createAtom('table', classNames('a-Table', props.striped && 'a-Table-striped'), { ...tableDefaultProps, ...(props.elementProps || null), children }, null);
};

export default Table;