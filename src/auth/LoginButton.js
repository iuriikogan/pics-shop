import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <i className="ri-login-box-line" onClick={() => loginWithPopup()}>
      Login
    </i>
  );
};

export default LoginButton;
