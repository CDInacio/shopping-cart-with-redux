import { ERROR, LOADING, SUCCESS } from "../actions/action-type";

const initialState = {
  message: "",
  error: false,
  loading: false,
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { loading: false, error: true, message: action.payload };
    case SUCCESS:
      return { loading: false, error: false, message: action.payload };
    default:
      return state;
  }
};

export default notification;
