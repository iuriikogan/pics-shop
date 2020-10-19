import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <i className="ri-login-box-line " onClick={() => loginWithRedirect()}>
      Login / Signup
    </i>
  );
};

export default LoginButton;
