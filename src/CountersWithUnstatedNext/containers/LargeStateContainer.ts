import { useState } from 'react';
import { createContainer } from 'unstated-next';

export interface LargeState {
  count: {
    a: number;
    b: number;
    c: number;
    d: number;
  };
  decrement_a: () => void;
  decrement_b: () => void;
  decrement_c: () => void;
  decrement_d: () => void;
  increment_a: () => void;
  increment_b: () => void;
  increment_c: () => void;
  increment_d: () => void;
  reset_a: () => void;
  reset_b: () => void;
  reset_c: () => void;
  reset_d: () => void;
}

const useLargeState = (initialState = { a: 0, b: 0, c: 0, d: 0 }): LargeState => {
  const [count, setCount] = useState(initialState);
  const decrement_a = () => setCount({ ...count, a: count.a - 1 });
  const increment_a = () => setCount({ ...count, a: count.a + 1 });
  const decrement_b = () => setCount({ ...count, b: count.b - 1 });
  const increment_b = () => setCount({ ...count, b: count.b + 1 });
  const decrement_c = () => setCount({ ...count, c: count.c - 1 });
  const increment_c = () => setCount({ ...count, c: count.c + 1 });
  const decrement_d = () => setCount({ ...count, d: count.d - 1 });
  const increment_d = () => setCount({ ...count, d: count.d + 1 });
  const reset_a = () => setCount({ ...count, a: initialState.a });
  const reset_b = () => setCount({ ...count, b: initialState.b });
  const reset_c = () => setCount({ ...count, c: initialState.c });
  const reset_d = () => setCount({ ...count, d: initialState.d });
  return {
    count,
    decrement_a,
    increment_a,
    decrement_b,
    increment_b,
    decrement_c,
    increment_c,
    decrement_d,
    increment_d,
    reset_a,
    reset_b,
    reset_c,
    reset_d,
  };
};

export const LargeStateContainer = createContainer(useLargeState);
