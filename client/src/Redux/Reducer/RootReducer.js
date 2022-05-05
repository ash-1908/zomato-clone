import {combineReducers} from "redux"

import restaurant from "./Restaurant/Restaurant.reducer"
import image from "./Image/Image.Reducer"

const rootReducer = combineReducers({restaurant, image});

export default rootReducer;