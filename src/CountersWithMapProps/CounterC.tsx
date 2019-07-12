import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import { State } from '../types/State';
import '../Counter.css';

interface StateProps {
  counter: State['counter'];
}

type Props = StateProps & DispatchProp;

const CounterC: React.FC<Props> = (props: Props) => {
  return (
    <div className="counter">
      <h2>
        Counter C<br />
        <small className="description">Subscribe whole state</small>
      </h2>
      <div className="controller">
        <CountButton onClick={() => props.dispatch({ type: 'DECREMENT_C' })} label="-" />
        <Count count={props.counter.c} />
        <CountButton onClick={() => props.dispatch({ type: 'INCREMENT_C' })} label="+" />
        <span className="spacer" />
        <CountButton onClick={() => props.dispatch({ type: 'RESET_C' })} label="Reset" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => {
  console.log('Running mapStateToProps in Counter C');
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(CounterC);
