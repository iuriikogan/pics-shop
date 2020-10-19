import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Profile from "./pages/Profile";
import LoginPrompt from "./auth/LoginPrompt";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Header />
      <Switch>
        {isAuthenticated ? (
          <Route exact path="/">
            <Photos />
          </Route>
        ) : (
          <LoginPrompt />
        )}
        {isAuthenticated ? (
          <Route path="/cart">
            <Cart />
          </Route>
        ) : (
          <LoginPrompt />
        )}
        {isAuthenticated ? (
          <Route path="/profile">
            <Profile />
          </Route>
        ) : (
          <LoginPrompt />
        )}
      </Switch>
    </div>
  );
}

export default App;
