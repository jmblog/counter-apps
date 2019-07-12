import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { sleep } from '../../utils';

const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);
  const decrement = () => {
    sleep(500);
    setCount(count - 1);
  };
  const increment = () => {
    sleep(500);
    setCount(count + 1);
  };
  const reset = () => {
    sleep(500);
    setCount(initialState);
  };
  return { count, decrement, increment, reset, setCount };
};

export const SlowCounterContainer = createContainer(useCounter);
