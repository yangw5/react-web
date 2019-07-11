import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.less";
import Page from "./Page";
import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
ReactDOM.render(
  <Provider store={store}>
    <Page store={store} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
