import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const appName = "GroupManager";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (resp) => handleSuccessLogin(resp),
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleSuccessLogin = (resp) => {
    setToken(resp.access_token);
    localStorage.setItem(`@${appName}:token`, resp.access_token);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${resp.access_token}`;
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${resp.access_token}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setUser(res.data);
        localStorage.setItem(`@${appName}:user`, JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    googleLogout();
    setToken(null);
    setUser(null);
    localStorage.removeItem(`@${appName}:user`);
    localStorage.removeItem(`@${appName}:token`);
  };

  useEffect(() => {
    const storagedUser = localStorage.getItem(`@${appName}:user`);
    const storagedToken = localStorage.getItem(`@${appName}:token`);

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storagedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
