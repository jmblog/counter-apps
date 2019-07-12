import React from 'react';
import { CounterContainer } from './containers/CounterContainer';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import '../Counter.css';

interface Props {
  label: string;
}

const CounterWithContainer: React.FC<Props> = ({ label }: Props) => {
  const counter = CounterContainer.useContainer();
  return (
    <div className="counter">
      <h2>Counter {label}</h2>
      <div className="controller">
        <CountButton onClick={counter.decrement} label="-" />
        <Count count={counter.count} />
        <CountButton onClick={counter.increment} label="+" />
        <span className="spacer" />
        <CountButton onClick={counter.reset} label="Reset" />
      </div>
    </div>
  );
};

export default CounterWithContainer;
