// libraries
import axios from "axios"

// redux types
import {GET_FOOD_LIST, GET_FOOD} from "./Food.type"

export const getFood = (foodId) => async(dispatch) => {
  try {
    const food = await axios({
      method: "GET",
      url: `http://localhost:3000/food/${foodId}`
    });
  
    return dispatch({type: GET_FOOD, payload: food.data});
  } catch(error) {
    return dispatch({type: "ERROR", payload: error.message});
  }
}
export const getFoodList = (menuId) => async(dispatch) => {
  try {
    const food = await axios({
      method: "GET",
      url: `http://localhost:3000/menu/${menuId}`
    });
  
    return dispatch({type: GET_FOOD_LIST, payload: food.data});
  } catch(error) {
    return dispatch({type: "ERROR", payload: error.message});
  }
}