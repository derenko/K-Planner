import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StateProvider } from "./context";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
