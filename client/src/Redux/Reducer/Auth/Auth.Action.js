// libraries
import axios from "axios"

// redux types
import {SIGN_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT} from "./Auth.Type"

//redux action
import { clearUser, getMyself } from "../User/User.action";


export const signin = (userData) => async(dispatch) => {
  try {
    const user = await axios({
      method: "POST",
      url: `http://localhost:3000/auth/signin`,
      data: {credentials: userData}
    });

    getMyself();

    localStorage.setItem("zomatoUser", JSON.stringify({token: user.data.token}))
    return dispatch({type: SIGN_IN, payload: user.data});
  } catch(error) {
    return dispatch({type: "ERROR", payload: error.message});
  }
}

export const googleAuth = (token) => async(dispatch) => {
  try {
    localStorage.setItem("zomatoUser", JSON.stringify({token}));
    getMyself();
    return dispatch({type: GOOGLE_AUTH, payload: {}});
  } catch(error) {
    return dispatch({type: "ERROR", payload: error.message});
  }
}

export const signOut = () => async(dispatch) => {
  try {
    localStorage.removeItem("zomatoUser");
    clearUser();
    window.location.href = "http://localhost:3000/delivery"
    return dispatch({type: SIGN_OUT, payload: {}});
  } catch(error) {
    return dispatch({type: "ERROR", payload: error.message});
  }
}

export const signup = (userData) => async(dispatch) => {
  try {
    const user = await axios({
      method: "POST",
      url: `http://localhost:3000/auth/signup`,
      data: {credentials: userData}
    });

    getMyself();

    localStorage.setItem("zomatoUser", JSON.stringify({token: user.data.token}))
    return dispatch({type: SIGN_UP, payload: user.data});
  } catch(error) {
    return dispatch({type: "ERROR", payload: error.message});
  }
}
