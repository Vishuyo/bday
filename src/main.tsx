import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PassProtect from "./Password";
import App from "./App";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-blue-600 flex flex-col items-center justify-center w-full min-h-screen">
      <PassProtect password="90">
        <App />
      </PassProtect>
    </div>
  </StrictMode>
);
