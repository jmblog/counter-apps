import React from 'react';
import CounterWithHooksA from './CountersWithHooks/CounterWithHooksA';
import CounterWithHooksB from './CountersWithHooks/CounterWithHooksB';
import CounterWithHooksC from './CountersWithHooks/CounterWithHooksC';

export const CountersWithHooks: React.FC = () => (
  <>
    <h1>React Redux's new hook APIs </h1>
    <CounterWithHooksA />
    <hr />
    <CounterWithHooksB />
    <hr />
    <CounterWithHooksC />
  </>
);
