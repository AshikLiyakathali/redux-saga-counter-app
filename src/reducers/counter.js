const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_ASYNC":
      return state + 1;
    case "DECREMENT_ASYNC":
      return state - 1;
    case "RESET_ASYNC":
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
