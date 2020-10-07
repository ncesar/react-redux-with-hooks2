import { actionsTypes } from '../contants/counter';

//2º criar ações
export const actions = {
  increment: () => ({
    type: actionsTypes.COUNTER_INCREMENT,
  }),
  decrement: () => ({
    type: actionsTypes.COUNTER_DECREMENT,
  }),
};
