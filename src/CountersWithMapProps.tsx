import React from 'react';
import CounterA from './CountersWithMapProps/CounterA';
import CounterB from './CountersWithMapProps/CounterB';
import CounterC from './CountersWithMapProps/CounterC';

export const CountersWithMapProps: React.FC = () => (
  <>
    <h1>mapStateToProps</h1>
    <CounterA />
    <hr />
    <CounterB />
    <hr />
    <CounterC />
  </>
);
