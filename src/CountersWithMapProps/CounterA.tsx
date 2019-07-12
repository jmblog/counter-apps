import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import { State } from '../types/State';
import '../Counter.css';

interface StateProps {
  count: number;
}

type Props = StateProps & DispatchProp;

const CounterA: React.FC<Props> = (props: Props) => {
  return (
    <div className="counter">
      <h2>Counter A</h2>
      <div className="controller">
        <CountButton onClick={() => props.dispatch({ type: 'DECREMENT_A' })} label="-" />
        <Count count={props.count} />
        <CountButton onClick={() => props.dispatch({ type: 'INCREMENT_A' })} label="+" />
        <span className="spacer" />
        <CountButton onClick={() => props.dispatch({ type: 'RESET_A' })} label="Reset" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => {
  console.log('Running mapStateToProps in Counter A');
  const { counter } = state;
  return {
    count: counter.a,
  };
};

export default connect(mapStateToProps)(CounterA);
