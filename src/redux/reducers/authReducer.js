// userReducer.js
import { SET_USER, CLEAR_USER } from '../action/actionTypes';

const initialState = {
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default userReducer;
