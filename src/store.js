//1º criar store
import { createStore } from 'redux';
import { reducers } from './reducers';

//precisamos passar os reducers no parametro da store
export const store = createStore(reducers);
