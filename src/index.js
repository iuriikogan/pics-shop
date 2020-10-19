import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./utils/Context";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <Auth0Provider
      domain="iuriikogan.eu.auth0.com"
      clientId="2LVOTwi3qoKEOYfdJKxGsqVx2euGt21B"
      redirectUri={window.location.origin}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </ContextProvider>,
  document.getElementById("root")
);
