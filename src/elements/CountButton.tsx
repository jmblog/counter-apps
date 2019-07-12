import React from 'react';

interface Props {
  onClick: () => void;
  label: string;
}

const _CountButton: React.FC<Props> = (props: Props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export const CountButton = React.memo(_CountButton);
