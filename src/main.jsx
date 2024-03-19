import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { PasswordProvider } from "./context/Password.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordProvider>
    <App />
  </PasswordProvider>
);
