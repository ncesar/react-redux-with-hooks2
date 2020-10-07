//6º pegar infos do redux
import React from 'react';

//7º primeiro importa actions
import { actions } from '../../actions/counter';
import { connect } from 'react-redux';
//8º depois pra mapear o state e o dispatch é preciso importar o connect do react-redux
//ele basicamente recebe alguns parametors e retorna como se fosse outro

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counterReducers.counter,
});

const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(actions.decrement()),
  increment: () => dispatch(actions.increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
