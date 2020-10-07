//4º importar reducer
//combine é pra juntar os reducers em 1
import { combineReducers } from 'redux';
import { reducers as counterReducers } from './counter';

export const reducers = combineReducers({
  counterReducers,
});
