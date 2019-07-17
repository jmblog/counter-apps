import React from 'react';
import { LargeStateContainer } from './containers/LargeStateContainer';
import CounterWithLargeStateContainer3Inner from './CounterWithLargeStateContainer3Innder';
import '../Counter.css';

interface Props {
  label: string;
  description?: string;
}

const CounterWithLargeStateContainer3: React.FC<Props> = ({ label, description }: Props) => {
  const counter = LargeStateContainer.useContainer();
  return <CounterWithLargeStateContainer3Inner {...counter} label={label} description={description} />;
};

export default CounterWithLargeStateContainer3;
