import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as TodoProvider } from "react-redux";
import { store } from "./Redux/Store";
ReactDOM.render(
  <React.StrictMode>
    <TodoProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
