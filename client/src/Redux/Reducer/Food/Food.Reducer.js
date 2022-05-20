// redux type
import {GET_FOOD_LIST} from "./Food.Type"

//initial state
const INITIAL_STATE = {
  FoodList: []
};

const food = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FOOD_LIST: 
      return {
        ...state,
        FoodList: action.payload
      };
    default: 
      return {
        ...state
      };
  }
};

export default foodReducer;