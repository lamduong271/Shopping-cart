import {combineReducers} from "redux";
import products from "./products";
import cart from "./Cart";
import Message from "./Message";

const reducer=combineReducers({
    products,
    cart,
    Message
})
export default reducer;