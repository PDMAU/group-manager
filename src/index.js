import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = "785518143067-agqh37g10jmpi5c6c30cp23rd6odt67g.apps.googleusercontent.com";

ReactDOM.render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
