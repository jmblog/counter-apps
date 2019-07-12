import React from 'react';
import { TwiceCounterContainer } from './containers/TwiceCounterContainer';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import '../Counter.css';

const CounterWithTwiceCounterContainer: React.FC = () => {
  const counter = TwiceCounterContainer();
  return (
    <div className="counter">
      <h2>Twice Counter</h2>
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

export default CounterWithTwiceCounterContainer;
