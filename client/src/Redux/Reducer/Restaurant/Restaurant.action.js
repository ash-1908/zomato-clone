import axios from "axios"

//Redux types
import { GET_RESTAURANT } from './Restaurant.type'

export const getRestaurant = (city) => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: `http://localhost:3000/restaurant/?city=${city}`
    });

    return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
  } catch (error) {
    return dispatch({type: "ERROR", payload: error});
  }
}