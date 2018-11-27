import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import App from "./App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

import ScrollToTop from "./Components/ScrollToTop";

const store = createStore(rootReducer);
store.subscribe(() => console.log("store", store.getState()));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
