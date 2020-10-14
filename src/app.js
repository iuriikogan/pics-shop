import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/cart">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
