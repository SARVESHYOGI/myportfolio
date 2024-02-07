
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom"; // Import HashRouter instead of BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className="w-full">
        <App />
      </div>
    </HashRouter>
  </React.StrictMode>
);

