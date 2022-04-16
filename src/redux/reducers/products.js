import { FETCH_PRODUCTS } from "../actions/action-type";

const initialState = {
  products: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default products;
