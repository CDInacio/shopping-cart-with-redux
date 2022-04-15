import productsReducer from "./products";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(productsReducer, applyMiddleware(thunk));
