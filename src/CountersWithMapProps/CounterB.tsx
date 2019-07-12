import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Count } from '../elements/Count';
import { CountButton } from '../elements/CountButton';
import { selectorB } from '../selectors';
import { State } from '../types/State';
import '../Counter.css';

interface StateProps {
  count: number;
}

type Props = StateProps & DispatchProp;

const CounterB: React.FC<Props> = (props: Props) => {
  return (
    <div className="counter">
      <h2>Counter B</h2>
      <div className="controller">
        <CountButton onClick={() => props.dispatch({ type: 'DECREMENT_B' })} label="-" />
        <Count count={props.count} />
        <CountButton onClick={() => props.dispatch({ type: 'INCREMENT_B' })} label="+" />
        <span className="spacer" />
        <CountButton onClick={() => props.dispatch({ type: 'RESET_B' })} label="Reset" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => {
  console.log('Running mapStateToProps in Counter B');
  return {
    count: selectorB(state),
  };
};

export default connect(mapStateToProps)(CounterB);
