import axios from "axios"

//Redux types
import { GET_USER, AUTH_USER, SELF, CLEAR_USER } from './User.type' 

export const getUser = (_id) => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: `http://localhost:3000/user/${_id}`
    });

    return dispatch({ type: GET_USER, payload: user.data });
  } catch (error) {
    return dispatch({type: "ERROR", payload: error});
  }
}

export const getMyself = () => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: `http://localhost:3000/user/`
    });

    return dispatch({ type: SELF, payload: user.data });
  } catch (error) {
    return dispatch({type: "ERROR", payload: error});
  }
}
export const clearUser = () => async (dispatch) => {
  try {
    return dispatch({ type: CLEAR_USER, payload: {} });
  } catch (error) {
    return dispatch({type: "ERROR", payload: error});
  }
}
