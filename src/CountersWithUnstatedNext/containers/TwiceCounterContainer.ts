import { CounterContainer } from './CounterContainer';

export const TwiceCounterContainer = () => {
  const counter = CounterContainer.useContainer();
  const increment = () => counter.setCount((counter.count || 1) * 2);
  return { ...counter, increment };
};
