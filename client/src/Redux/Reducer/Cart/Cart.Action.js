import { ADD_CART, DECREASE_QNT, DELETE_CART, GET_CART, INCREASE_QNT } from "./Cart.Type";

export const getCart = () => async (dispatch) => {
  try {
    let cartData = { cart: [] }
    if (localStorage.getItem("zomatoCart")) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart;
    }
    return dispatch({ type: GET_CART, payload: cartData.cart });
  }
  catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
}

export const addCart = (newFood) => async (dispatch) => {
  try {
    let cartData = { cart: [] };
    if (localStorage.getItem("zomatoCart")) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart;
    }
    cartData.cart.push(newFood);
    localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));
    return dispatch({ type: ADD_CART, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
}

export const deleteCart = (foodId) => async (dispatch) => {
  try {
    let cartData = { cart: [] };
    if (localStorage.getItem("zomatoCart")) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart;
    }
    if (!cartData.cart.length)
      return dispatch({ type: "ERROR", payload: "Cart is empty." });
    cartData.cart = cartData.cart.filter(({ _id }) => _id !== foodId);
    localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));
    return dispatch({ type: DELETE_CART, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
}

export const incQnt = (foodId) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.getItem("zomatoCart")) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart;
    }

    cartData.cart = cartData.cart.filter((food) => food._id === foodId ? { ...food, quantity: food.quantity + 1, totalPrice: food.price * (food.quantity + 1) } : food);

    localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

    return dispatch({ type: INCREASE_QNT, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
}
export const decQnt = (foodId) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.getItem("zomatoCart")) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart;
    }

    cartData.cart = cartData.cart.filter((food) => food._id === foodId ? { ...food, quantity: food.quantity - 1, totalPrice: food.price * (food.quantity - 1) } : food);

    localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

    return dispatch({ type: DECREASE_QNT, payload: cartData.cart });
  } catch (error) {

    return dispatch({ type: "ERROR", payload: error });
  }
}