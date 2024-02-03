// import React from "react";
// import { createRoot } from "react-router-dom/client";

// import App from "./components/App/App";

// createRoot(document.getElementById("root")).render(<App />);

import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "./styles/index.css";

import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
