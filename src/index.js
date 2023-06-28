import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./App.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
// Importing the Bootstrap CSS
import { GoogleOAuthProvider } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

const CLIENT_ID =
  "785518143067-agqh37g10jmpi5c6c30cp23rd6odt67g.apps.googleusercontent.com";

root.render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals(sendToVercelAnalytics);
