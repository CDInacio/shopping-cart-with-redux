import { CLEAR, FETCH_PRODUCT, FETCH_PRODUCTS } from "../actions/action-type";

const initialState = {
  products: [],
  product: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT:
      return { product: action.payload };
    case CLEAR: {
      return { product: [] };
    }
    default:
      return state;
  }
};

export default products;
