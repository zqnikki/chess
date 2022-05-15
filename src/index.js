import React from "react";
import ReactDOM from "react-dom/client";
import Chess from "./components/chess";
import Checkerboard from "./components/chess/Checkerboard";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <div>
      <Checkerboard />
      {/* <Chess /> */}
    </div>
  </div>
);
