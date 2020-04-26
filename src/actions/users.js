import axios from 'axios';
import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './types';

export const getUsers = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_USERS_BEGIN,
    });

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: error.message,
    });
  }
};
