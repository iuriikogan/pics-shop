import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
      <h2 className="nav-title">
        <Link to="/">
          <img src="../../public/assets/pics-logo.png" alt="picshop logo" />
        </Link>
      </h2>
      <header className="nav-items">
        <Link to="/cart">
          <i className="ri-shopping-cart-line">Cart</i>
        </Link>
        <Link to="/profile">
          <i className="ri-profile-line ">Profile</i>
        </Link>
        {/* if Is Authenticated render logout, if not render login */}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </header>
    </div>
  );
}

export default Header;
