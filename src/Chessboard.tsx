import React, { useState } from "react";
import { Chess } from "@lubert/chess.ts";
import Chessground from "react-chessground";
import "react-chessground/dist/styles/chessground.css";
import "./Chessboard.scss";

export default function Chessboard() {
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
    <div className="Chessboard">
      <Chessground fen={fen} />
      <button onClick={() => removePieceOnSquare("e1")}>Remove King</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
