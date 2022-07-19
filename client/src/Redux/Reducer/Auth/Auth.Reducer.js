// redux type
import {SIGN_IN, SIGN_UP} from "./Auth.Type"

//initial state
const INITIAL_STATE = {
  
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
      };
      
    case SIGN_UP:
      return {
        ...state, 
        ...action.payload
      };

    default:
      return {
        ...state,
        ...action.payload
      };
  }
};

export default AuthReducer;
