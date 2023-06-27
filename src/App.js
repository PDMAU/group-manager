import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logout = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    if (profile) {
      localStorage.setItem("profile", JSON.stringify(profile));
      navigate("/home");
    }
  }, [profile]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (user) {
      setUser(user);
    }
    if (profile) {
      setProfile(user);
    }
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login login={login} profile={profile} />} />
      <Route path="home" element={<Home logout={logout} profile={profile} />} />
    </Routes>
  );
};

export default App;
