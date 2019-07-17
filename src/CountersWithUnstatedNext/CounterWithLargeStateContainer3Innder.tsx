import React from 'react';
import { LargeState } from './containers/LargeStateContainer';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import '../Counter.css';

type Props = LargeState & {
  label: string;
  description?: string;
};

const CounterWithLargeStateContainer3Inner = React.memo(
  (props: Props) => {
    return (
      <div className="counter">
        <h2>
          Counter {props.label}
          {props.description ? (
            <>
              <br /> <small className="description">{props.description}</small>
            </>
          ) : null}
        </h2>
        <div className="controller">
          <CountButton onClick={props.decrement_c} label="-" />
          <Count count={props.count.c} />
          <CountButton onClick={props.increment_c} label="+" />
          <span className="spacer" />
          <CountButton onClick={props.reset_c} label="Reset" />
        </div>
      </div>
    );
  },
  (prevProps: Props, nextProps: Props) => {
    if (prevProps.count.c !== nextProps.count.c) {
      return false;
    }
    return true;
  },
);

export default CounterWithLargeStateContainer3Inner;
