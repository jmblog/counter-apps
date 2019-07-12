import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(initialState);
  return { count, decrement, increment, reset, setCount };
};

export const CounterContainer = createContainer(useCounter);
