

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Provider } from "react-redux";


import { SoftUIControllerProvider } from "context";
import store from "redux/configureStore";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
    </Provider>

  </BrowserRouter>,
  document.getElementById("root")
);
