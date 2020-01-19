const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "INCREMENT_ASYNC":
      newState.count += 1;
      break;

    case "DECREMENT_ASYNC":
      newState.count -= 1;
      break;

    case "RESET_ASYNC":
      newState.count = 0;
      break;
  }
  return newState;
};

export default reducer;
