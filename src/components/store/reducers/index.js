import { combineReducers } from "redux";
import { ProductState } from "./Products";
import { Cart } from "./Cart"

export default combineReducers({
    ProductState,
    Cart
})