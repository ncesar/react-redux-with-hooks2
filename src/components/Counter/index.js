//6º pegar infos do redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//7º primeiro importa actions
import { actions } from '../../actions/counter';
import { selectors } from '../../selectors/counter';
//8º depois pra mapear o state e o dispatch é preciso importar o connect do react-redux
//ele basicamente recebe alguns parametors e retorna como se fosse outro

const Counter = () => {
  const counter = useSelector(selectors.getCounter);
  const dispatch = useDispatch();

  const handleDecrement = () => dispatch(actions.decrement());
  const handleIncrement = () => dispatch(actions.increment());
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
