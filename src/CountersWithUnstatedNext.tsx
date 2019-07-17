import React from 'react';
import CounterWithContainer from './CountersWithUnstatedNext/CounterWithContainer';
import CounterWithReducerContainer from './CountersWithUnstatedNext/CounterWithReducerContainer';
import CounterWithTwiceCounterContainer from './CountersWithUnstatedNext/CounterWithTwiceCounterContainer';
import CounterWithSlowContainer from './CountersWithUnstatedNext/CounterWithSlowContainer';
import CounterWithLargeStateContainer1 from './CountersWithUnstatedNext/CounterWithLargeStateContainer1';
import CounterWithLargeStateContainer2 from './CountersWithUnstatedNext/CounterWithLargeStateContainer2';
import CounterWithLargeStateContainer3 from './CountersWithUnstatedNext/CounterWithLargeStateContainer3';
import CounterWithLargeStateContainer4 from './CountersWithUnstatedNext/CounterWithLargeStateContainer4';
import { CounterContainer } from './CountersWithUnstatedNext/containers/CounterContainer';
import { ReducerCounterContainer } from './CountersWithUnstatedNext/containers/ReducerCounterContainer';
import { SlowCounterContainer } from './CountersWithUnstatedNext/containers/SlowCounterContainer';
import { LargeStateContainer } from './CountersWithUnstatedNext/containers/LargeStateContainer';

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
    <hr />
    <LargeStateContainer.Provider>
      <CounterWithLargeStateContainer1 label="E" description="With a large state container" />
      <hr />
      <CounterWithLargeStateContainer2 label="E'" description="Another with a large state container" />
      <hr />
      <CounterWithLargeStateContainer3 label="E''" description="Use React.memo()" />
      <hr />
      <CounterWithLargeStateContainer4 label="E'''" description="Use useMemo()" />
    </LargeStateContainer.Provider>
  </>
);
