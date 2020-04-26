import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGOUT,
} from '../actions/types';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case FETCH_USERS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        users: [],
        isLoading: false,
        error: action.payload,
      };
    // In case of logout reset the users state
    case LOGOUT: {
      return {
        ...state,
        users: [],
        isLoading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
