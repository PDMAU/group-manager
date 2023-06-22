import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="login" element={<Login setLogin={setLogin} />} />
          <Route path="home" element={<Home login={login} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
