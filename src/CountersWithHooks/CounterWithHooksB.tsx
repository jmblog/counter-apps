import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../types/State';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import { sleep } from '../utils';
import '../Counter.css';

const CounterWithHooksA: React.FC = () => {
  const count = useSelector((state: State) => {
    console.log('Running selector in Counter B with Hooks');
    sleep(0);
    return state.counter.hooks_b;
  });
  const dispatch = useDispatch();
  const incrementCounter = React.useCallback(() => dispatch({ type: 'INCREMENT_HB' }), [dispatch]);
  const decrementCounter = React.useCallback(() => dispatch({ type: 'DECREMENT_HB' }), [dispatch]);
  const resetCounter = React.useCallback(() => dispatch({ type: 'RESET_HB' }), [dispatch]);
  return (
    <div className="counter">
      <h2>Counter B</h2>
      <div className="controller">
        <CountButton onClick={decrementCounter} label="-" />
        <Count count={count} />
        <CountButton onClick={incrementCounter} label="+" />
        <span className="spacer" />
        <CountButton onClick={resetCounter} label="Reset" />
      </div>
    </div>
  );
};

export default CounterWithHooksA;
