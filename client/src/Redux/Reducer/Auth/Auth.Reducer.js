// redux type
import {SIGN_IN, SIGN_UP} from "./Auth.Type"

//initial state
const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN: 
      return {
        ...state,
      };

    case SIGN_UP: 
      return {
        ...state,
      };

    default: 
      return {
        ...state
      };
  }
};

export default authReducer;