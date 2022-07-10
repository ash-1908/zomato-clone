import {combineReducers} from "redux"

import restaurant from "./Restaurant/Restaurant.reducer"
import image from "./Image/Image.Reducer"
import reviews from "./Reviews/Reviews.reducer"
import user from "./User/User.reducer"
import food from "./Food/Food.Reducer"
import cart from "./Cart/Cart.Reducer"

const rootReducer = combineReducers({restaurant, image, reviews, user, food, cart});

export default rootReducer;