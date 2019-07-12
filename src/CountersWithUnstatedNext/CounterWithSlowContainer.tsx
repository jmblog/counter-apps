import React from 'react';
import { SlowCounterContainer } from './containers/SlowCounterContainer';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import '../Counter.css';

interface Props {
  label: string;
  description?: string;
}

const CounterWithSlowContainer: React.FC<Props> = ({ label, description }: Props) => {
  const counter = SlowCounterContainer.useContainer();
  return (
    <div className="counter">
      <h2>
        Counter {label}
        {description ? (
          <>
            <br /> <small className="description">{description}</small>
          </>
        ) : null}
      </h2>
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

export default CounterWithSlowContainer;
