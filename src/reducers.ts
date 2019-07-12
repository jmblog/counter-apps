import { combineReducers, Reducer } from 'redux';
import { State } from './types/State';

const counterA: Reducer = (state: number = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_A':
      return state + 1;
    case 'DECREMENT_A':
      return state - 1;
    case 'RESET_A':
      return 0;
    default:
      return state;
  }
};

const counterB: Reducer = (state: number = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_B':
      return state + 1;
    case 'DECREMENT_B':
      return state - 1;
    case 'RESET_B':
      return 0;
    default:
      return state;
  }
};

const counterC: Reducer = (state: number = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_C':
      return state + 1;
    case 'DECREMENT_C':
      return state - 1;
    case 'RESET_C':
      return 0;
    default:
      return state;
  }
};

const counterHA: Reducer = (state: number = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_HA':
      return state + 1;
    case 'DECREMENT_HA':
      return state - 1;
    case 'RESET_HA':
      return 0;
    default:
      return state;
  }
};

const counterHB: Reducer = (state: number = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_HB':
      return state + 1;
    case 'DECREMENT_HB':
      return state - 1;
    case 'RESET_HB':
      return 0;
    default:
      return state;
  }
};

const counterHC: Reducer = (state: number = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_HC':
      return state + 1;
    case 'DECREMENT_HC':
      return state - 1;
    case 'RESET_HC':
      return 0;
    default:
      return state;
  }
};

const counter = combineReducers({
  a: counterA,
  b: counterB,
  c: counterC,
  hooks_a: counterHA,
  hooks_b: counterHB,
  hooks_c: counterHC,
});

export default combineReducers<State>({
  counter,
});
