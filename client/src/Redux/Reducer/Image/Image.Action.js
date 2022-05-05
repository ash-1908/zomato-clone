// libraries
import axios from "axios"

// redux types
import {GET_IMAGE} from "./Image.Type"

export const getImage = (_id) => async(dispatch) => {
  try {
    const image = await axios({
      method: "GET",
      url: `http://localhost:3000/image/${_id}`
    });
  
    return dispatch({type: GET_IMAGE, payload: image.data});
  } catch(error) {
    return dispatch({type: "ERROR", payload: error.message});
  }
}