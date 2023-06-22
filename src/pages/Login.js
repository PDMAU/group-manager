import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = ({ setLogin }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (cred) => {
    setLogin({ login: cred });
    navigate("/home");
  };

  const handleLoginFailed = () => {
    console.log("Login error");
  };

  return (
    <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailed} />
  );
};

export default Login;
