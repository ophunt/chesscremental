import React, { useState } from "react";
import MoveOdds from "./MoveOdds";
import "./App.scss";
import Chessboard from "./Chessboard";
import { Chess } from "@lubert/chess.ts";
import { Dictionary } from "./Utils";

const odds = {
  Brilliant: [1, 1],
  Best: [19, 19],
  Excellent: [20, 20],
  Good: [30, 30],
  Inaccuracy: [15, 15],
  Mistake: [10, 10],
  Blunder: [5, 5],
} as Dictionary<number[]>;

export default function App() {
  const [chess, setChess] = useState(new Chess());
  const [fen, setFen] = useState(chess.fen());
  const [evaluation, setEvaluation] = useState(0);

  const resetBoard = () => {
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
        <div className="EvalOddsPanel">
          <p>
            {evaluation < 0 ? "" : "+"}
            {evaluation.toFixed(2)}
          </p>
          <MoveOdds odds={odds} />
        </div>
      </div>
    </div>
  );
}
