import { FETCH_PRODUCTS } from "./actions-type";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    console.log(data);
  };
};
