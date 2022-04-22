import { combineReducers } from "redux";

import notification from "./notification";
import products from "./products";
import cart from "./cart";

const reducers = combineReducers({ products, notification, cart });

export default reducers;
