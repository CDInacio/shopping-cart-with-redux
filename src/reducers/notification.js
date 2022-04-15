const initialState = {
  message: "",
  error: false,
  loading: false,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { loading: false, error: true, message: action.message };
    case SUCCESS:
      return { loading: false, error: false, message: action.messagew };
  }
};
