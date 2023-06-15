import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLoginButtonClick = () => {
    loginWithRedirect();
  };

  return (
    <button onClick={handleLoginButtonClick}>
      <i
        className="fa fa-user icon-circle"
        onClick={handleLoginButtonClick}
      ></i>
    </button>
  );
};
