import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="292853785250-d3ea32j358jodccnruehgb8g1tc39hec.apps.googleusercontent.com">
    <Provider store={Store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
