import { combineReducers } from "redux";

import notification from "./notification";
import products from "./products";

const reducers = combineReducers({ products, notification });

export default reducers;
