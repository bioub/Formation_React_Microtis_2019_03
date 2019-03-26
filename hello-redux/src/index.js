import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// FSA : Flux Standard Action
// {type: '', payload: {}, meta: {error: true}}
// function rootReducer(previousState = { x: 0, prenom: 'Romain' }, { type, payload }) {
//   switch (type) {
//     case "PRENOM_SELECT":
//       return {...previousState, prenom: payload };
//     case "COUNTER_INCREMENT":
//       return {...previousState, x: previousState.x + 1 };
//     default:
//       return previousState;
//   }
// }

function counterReducer(previousState = 0, { type, payload }) {
  switch (type) {
    case "COUNTER_INCREMENT":
      return previousState + 1;
    default:
      return previousState;
  }
}

function prenomReducer(previousState = "", { type, payload }) {
  switch (type) {
    case "PRENOM_SELECT":
      return payload;
    default:
      return previousState;
  }
}

const rootReducer = combineReducers({
  x: counterReducer,
  prenom: prenomReducer
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
