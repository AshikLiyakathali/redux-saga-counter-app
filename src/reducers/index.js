import counterReducer from "./counter";
import reducer from "./reducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  reducer: reducer
});

export default allReducer;
