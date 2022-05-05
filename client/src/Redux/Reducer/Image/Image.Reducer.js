// redux type
import {GET_IMAGE} from "./Image.Type"

//initial state
const INITIAL_STATE = {
  Image: []
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_IMAGE: 
      return {
        ...state,
        Image: action.payload
      };
    default: 
      return {
        ...state
      };
  }
};

export default imageReducer;