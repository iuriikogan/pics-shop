import React from "react";
import { Switch } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Profile from "./pages/Profile";
import AuthenticatedRoute from "./auth/AuthenticatedRoute";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <AuthenticatedRoute exact path="/">
          <Photos />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/cart">
          <Cart />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/Profile">
          <Profile />
        </AuthenticatedRoute>
      </Switch>
    </div>
  );
}

export default App;
