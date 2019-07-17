import React, { useMemo } from 'react';
import { LargeStateContainer } from './containers/LargeStateContainer';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import '../Counter.css';

interface Props {
  label: string;
  description?: string;
}

const CounterWithLargeStateContainer4: React.FC<Props> = ({ label, description }: Props) => {
  const counter = LargeStateContainer.useContainer();
  return useMemo(
    () => (
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
          <CountButton onClick={counter.decrement_d} label="-" />
          <Count count={counter.count.d} />
          <CountButton onClick={counter.increment_d} label="+" />
          <span className="spacer" />
          <CountButton onClick={counter.reset_d} label="Reset" />
        </div>
      </div>
    ),
    [label, description, counter.count.d, counter.decrement_d, counter.increment_d, counter.reset_d],
  );
};

export default CounterWithLargeStateContainer4;
