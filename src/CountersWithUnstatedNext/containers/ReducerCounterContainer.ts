import { useReducer } from 'react';
import { createContainer } from 'unstated-next';

interface State {
  count: number;
}

const initialState = { count: 0 };

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};

const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const decrement = () => dispatch({ type: 'decrement' });
  const increment = () => dispatch({ type: 'increment' });
  const reset = () => dispatch({ type: 'reset' });
  return { state, decrement, increment, reset };
};

export const ReducerCounterContainer = createContainer(useCounter);
