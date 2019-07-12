import React from 'react';
import CounterWithContainer from './CountersWithUnstatedNext/CounterWithContainer';
import CounterWithReducerContainer from './CountersWithUnstatedNext/CounterWithReducerContainer';
import CounterWithTwiceCounterContainer from './CountersWithUnstatedNext/CounterWithTwiceCounterContainer';
import CounterWithSlowContainer from './CountersWithUnstatedNext/CounterWithSlowContainer';
import { CounterContainer } from './CountersWithUnstatedNext/containers/CounterContainer';
import { ReducerCounterContainer } from './CountersWithUnstatedNext/containers/ReducerCounterContainer';
import { SlowCounterContainer } from './CountersWithUnstatedNext/containers/SlowCounterContainer';

export const CountersWithUnstatedNext: React.FC = () => (
  <>
    <h1>unstated-next</h1>
    <CounterContainer.Provider>
      <CounterWithContainer label="A" />
    </CounterContainer.Provider>
    <hr />
    <CounterContainer.Provider>
      <CounterWithContainer label="B" />
    </CounterContainer.Provider>
    <hr />
    <ReducerCounterContainer.Provider>
      <CounterWithReducerContainer label="C" description="With a container using useReducer" />
    </ReducerCounterContainer.Provider>
    <hr />
    <CounterContainer.Provider>
      <CounterWithTwiceCounterContainer />
    </CounterContainer.Provider>
    <hr />
    <SlowCounterContainer.Provider>
      <CounterWithSlowContainer label="D" description="With a slow container" />
    </SlowCounterContainer.Provider>
  </>
);
