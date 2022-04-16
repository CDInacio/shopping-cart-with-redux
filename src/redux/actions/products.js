import { LOADING } from "./action-type";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: LOADING, payload: false });
    console.log(data);
  };
};
