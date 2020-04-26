import { INCREMENT, DECREMENT, RESET } from '../actions/types';

export const increment = nr => {
  return {
    type: INCREMENT,
    payload: nr,
  };
};

export const decrement = nr => {
  return {
    type: DECREMENT,
    payload: nr,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
