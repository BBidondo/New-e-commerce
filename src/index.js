import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import {store} from "../src/common/redux/store.js";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h52e0eleej3xtusc.us.auth0.com"
      clientId="SnXwvq0jpYv8jSpMwHf20zDpgDD6pWOz"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
