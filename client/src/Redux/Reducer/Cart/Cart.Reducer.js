import { ADD_CART, DECREASE_QNT, DELETE_CART, GET_CART, INCREASE_QNT, UPDATE_CART } from "./Cart.Type"

const INITIAL_STATE = {
  cart: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state, cart: action.payload,
      }

    case GET_CART:
      return {
        ...state, cart: action.payload
      }

    case UPDATE_CART:
      return {
        ...state, cart: action.payload
      }

    case DELETE_CART:
      return {
        ...state, cart: action.payload
      }

    case INCREASE_QNT:
      return {
        ...state, cart: action.payload
      }

    case DECREASE_QNT:
      return {
        ...state, cart: action.payload
      }

    default:
      return {
        ...state
      }
  }
}

export default cartReducer;