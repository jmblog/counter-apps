import React from 'react';
import '../Counter.css';

interface Props {
  count: number;
}

export const Count: React.FC<Props> = (props: Props) => {
  return <span className="count">{props.count}</span>;
};
