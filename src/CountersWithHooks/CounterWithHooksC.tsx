import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../types/State';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import '../Counter.css';

const CounterWithHooksA: React.FC = () => {
  const count = useSelector((state: State) => {
    console.log('Running selector in Counter C with Hooks');
    return state.counter;
  });
  const dispatch = useDispatch();
  const incrementCounter = React.useCallback(() => dispatch({ type: 'INCREMENT_HC' }), [dispatch]);
  const decrementCounter = React.useCallback(() => dispatch({ type: 'DECREMENT_HC' }), [dispatch]);
  const resetCounter = React.useCallback(() => dispatch({ type: 'RESET_HC' }), [dispatch]);
  return (
    <div className="counter">
      <h2>
        Counter C
        <br />
        <small className="description">Subscribe whole state</small>
      </h2>
      <div className="controller">
        <CountButton onClick={decrementCounter} label="-" />
        <Count count={count.hooks_c} />
        <CountButton onClick={incrementCounter} label="+" />
        <span className="spacer" />
        <CountButton onClick={resetCounter} label="Reset" />
      </div>
    </div>
  );
};

export default CounterWithHooksA;
