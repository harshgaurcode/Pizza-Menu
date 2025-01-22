import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

function App() {
  return <h1>Helllo</h1>;
}
const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
