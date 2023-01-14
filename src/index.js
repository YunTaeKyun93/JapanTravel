import 'react-multi-carousel/lib/styles.css';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";

const rootElemId = "root";
Modal.setAppElement(`#${rootElemId}`);
const root = ReactDOM.createRoot(document.getElementById(rootElemId));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
