import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo mx-auto" alt="react logo" />
        </a>
        <h1 className="text-7xl">ToTick</h1>
      </div>
      <Box />
    </div>
  );
}

export default App;
