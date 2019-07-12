import React from 'react';
import { ReducerCounterContainer } from './containers/ReducerCounterContainer';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import '../Counter.css';

interface Props {
  label: string;
  description?: string;
}

const CounterWithReducerContainer: React.FC<Props> = ({ label, description }: Props) => {
  const counter = ReducerCounterContainer.useContainer();
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
        <Count count={counter.state.count} />
        <CountButton onClick={counter.increment} label="+" />
        <span className="spacer" />
        <CountButton onClick={counter.reset} label="Reset" />
      </div>
    </div>
  );
};

export default CounterWithReducerContainer;
