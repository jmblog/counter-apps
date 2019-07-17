import React from 'react';
import { LargeStateContainer } from './containers/LargeStateContainer';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import '../Counter.css';

interface Props {
  label: string;
  description?: string;
}

const CounterWithLargeStateContainer2: React.FC<Props> = ({ label, description }: Props) => {
  const counter = LargeStateContainer.useContainer();
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
        <CountButton onClick={counter.decrement_b} label="-" />
        <Count count={counter.count.b} />
        <CountButton onClick={counter.increment_b} label="+" />
        <span className="spacer" />
        <CountButton onClick={counter.reset_b} label="Reset" />
      </div>
    </div>
  );
};

export default CounterWithLargeStateContainer2;
