import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./Store/Answer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserStore>
      <App />
    </UserStore>
  </React.StrictMode>
);
