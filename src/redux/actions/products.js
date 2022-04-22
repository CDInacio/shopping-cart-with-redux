import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  LOADING,
  CLEAR,
  ADD_TO_CART,
} from "./action-type";

const BASE_URL = "https://fakestoreapi.com";

// PRODUCT ACTIONS

export const fetchAllProducts = () => {
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

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      const data = await response.json();
      console.log(id);
      dispatch({ type: FETCH_PRODUCT, payload: data });
    } catch (error) {}
  };
};

export const clear = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR });
  };
};

// CART ACTIONS

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };
};
