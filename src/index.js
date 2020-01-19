import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import allReducers from "./reducers/reducer";

//import Home from "./Home";
//import allReducers from "./reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchIncrement, watchDecrement, watchReset } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchIncrement);
sagaMiddleware.run(watchDecrement);
sagaMiddleware.run(watchReset);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
