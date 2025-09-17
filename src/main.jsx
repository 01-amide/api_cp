// App entry: mounts React app with global styles
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // StrictMode helps identify side-effects in development
  <StrictMode>
    <App />
  </StrictMode>
);
