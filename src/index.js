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

const CLIENT_ID =
  "667400231441-lbr2v79la1ieijrjmv0brf8hglh2kufn.apps.googleusercontent.com";

ReactDOM.render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
