import React from "react";
import "./App.css";
import { Counter, AButton, App as Apps } from "./package/src/index";
function onButtonClick(e, text) {
  e.preventDefault();
  alert(`text from the button ${text}`);
}
function App() {
  return (
    <div className="App">
      <Counter />
      <Apps />
      <AButton onClick={onButtonClick} />
      <h2>Hello</h2>
    </div>
  );
}

export default App;
