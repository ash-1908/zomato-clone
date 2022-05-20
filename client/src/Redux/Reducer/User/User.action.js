import axios from "axios"

//Redux types
import { GET_USER, AUTH_USER } from './User.type' 

export const getUser = (_id) => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: `http://localhost:3000/user/${_id}`
    });

    return dispatch({ payload: user.data });
  } catch (error) {
    return dispatch({type: "ERROR", payload: error});
  }
}

export const authUser = (_id) => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: `http://localhost:3000/user/${_id}`
    });

    localStorage.setItem("zomato", _id);

    return dispatch({ type: GET_USER, payload: user.data });
  } catch (error) {
    return dispatch({type: "ERROR", payload: error});
  }
}