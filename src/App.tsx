import React from "react";
import MoveOdds from "./MoveOdds";
import "./App.scss";
import Chessboard from "./Chessboard";

export default function App() {
  return (
    <div className="App">
      <div className="AppMain">
        <p>Upgrades here</p>
        <Chessboard />
        <MoveOdds />
      </div>
    </div>
  );
}
