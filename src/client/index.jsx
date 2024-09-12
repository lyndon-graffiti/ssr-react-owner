import React from "react";
import { createRoot } from "react-dom";
import App from "./app.jsx";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
