// redux type
import { CREATE_ORDER, ORDER_PLACED } from "./Order.Type";

//initial state
const INITIAL_STATE = {};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ORDER: 
      return {
        ...state,
      };

    case ORDER_PLACED: 
      return {
        ...state,
      };

    default: 
      return {
        ...state
      };
  }
};

export default orderReducer;