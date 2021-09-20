import React, { useState } from "react";
import MoveOdds from "./MoveOdds";
import "./App.scss";
import Chessboard from "./Chessboard";
import { Chess } from "@lubert/chess.ts";

export default function App() {
  const [chess, setChess] = useState(new Chess());
  const [fen, setFen] = useState(chess.fen());

  const reset = () => {
    chess.reset();
    setFen(chess.fen());
  };

  const removePieceOnSquare = (sq: string) => {
    chess.remove(sq);
    setFen(chess.fen());
  };

  return (
    <div className="App">
      <div className="AppMain">
        <p>Upgrades here</p>
        <Chessboard fen={fen} />
        <MoveOdds />
      </div>
    </div>
  );
}
