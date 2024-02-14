import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./index.css";

//main solamente lanza el componente App que tiene todo el contenido de la pagina.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);