import { createSelector } from 'reselect';
import { State } from './types/State';
import { sleep } from './utils';

const selectB = (state: State) => {
  sleep(0);
  return state.counter.b;
};

export const selectorB = createSelector(
  selectB,
  count => count,
);
