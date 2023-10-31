import React from "react";
import ReactDOM from "react-dom/client";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./assets/styles/custom.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routes";
import history from "./managers/history";
import { store } from "./store";

const WebApp = () => {
  return (
    <HistoryRouter history={history}>
      <Provider store={store}>
        <Routes />
        <ToastContainer />
      </Provider>
    </HistoryRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WebApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
