// reducers/snackbarReducer.js

const initialState = {
  isOpen: false,
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SNACKBAR":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE_SNACKBAR":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
