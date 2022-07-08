import { GET_USER, SELF, CLEAR_USER } from "./User.type"

const INITIAL_STATE = {
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USER: 
      return {
        ...state,
        user: action.payload
      };
    case CLEAR_USER:
      return {};
    case SELF:
      return {
        ...state,
        user: action.payload
      };
    default: 
      return {
        ...state
      }; 

  }
};

export default userReducer;