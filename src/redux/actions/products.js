import { FETCH_PRODUCTS, LOADING } from "./action-type";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING, payload: true });
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
