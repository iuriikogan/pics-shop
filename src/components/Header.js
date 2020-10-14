import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      <h2 className="nav-title">
        <Link to="/">Pics Shop</Link>
      </h2>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
      <Link to="/profile">Profile</Link>
    </header>
  );
}

export default Header;
