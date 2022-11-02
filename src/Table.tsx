import React, { ReactElement, useMemo } from 'react';

interface ColProps extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    /** Label for the Column */ 
    children: React.ReactNode,
    /** Function to be called n times depending on the 'it' prop on the library's Table parent.
     * Must return the data to be displayd on the actual row iteration. */ 
    func: (index: number) => any,
}

interface TableProps extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    /** Needs to be the library's Col element and can be any amount. */ 
    children?: ReactElement | React.ReactElement[],
    /** Number of iterations,  */ 
    it: number
}

export const Col : React.FC<ColProps> = ({children, func, ...rest }) => {
  return (
      <th {...rest}>
          {children}
      </th>
  );
}

const iterator = (callback : (index: number) => any, times : number) => {
    let ret = [];
    for (let i = 0; i < times; ++i) {
        ret.push(callback(i));
    }
    return ret;
}

export const Table : React.FC<TableProps> = ({ it, children, ...rest }) => {

  const columns : ColProps[] = useMemo(() => {
    if (children instanceof Array) {
      return children.map(value => {
        return value.props;
      });
    } else {
      return [children?.props];
    }
  }, [children]);

  return (
    <table {...rest}>
      <thead>
        <tr>
          {children}
        </tr>
      </thead>
      <tbody>
        {iterator((i) => {
            return (
                <tr key={i} >
                    {columns.map((col, j) => {
                        return (
                            <td key={`${i}a${j}`} >{col.func(i)}</td>
                        );
                    })}
                </tr>
            );
        }, it)}
      </tbody>
    </table>
  );
}

const Components = { Table, Col };

export default Components;