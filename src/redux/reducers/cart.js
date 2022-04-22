import { ADD_TO_CART } from "../actions/action-type";

const initialState = {
  total: 0,
  items: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // check if the item existis in the cart already
      if (!existingItem) {
        newItem.quantity = 1;
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + newItem.price,
        };
      } else {
        newItem.quantity += 1;
        return {
          ...state,
          total: state.total + newItem.price,
        };
      }
    default:
      return state;
  }
};

export default cart;
