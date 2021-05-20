import { INCREMENT, DECREMENT } from '../constants';

export default (state = {}, action) => {
  console.log('STATE FROM ORDER REDUCER', state);
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    default:
      return state;
  }
};
