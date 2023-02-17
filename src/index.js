import App from "./App";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import { store } from "./store";

import { terminalsApi } from "./features/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApiProvider api={terminalsApi}>
          <App />
        </ApiProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
