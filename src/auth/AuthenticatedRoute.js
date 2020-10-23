import React from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPrompt from "./LoginPrompt";

// Take isAuthenticated boolean from useAuth0 Hook and render Route if authenticated user 

const AuthenticatedRoute = ({ children, path }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <Route path={path}>{children}</Route>
  ) : (
    <LoginPrompt />
  );
};

export default AuthenticatedRoute;
