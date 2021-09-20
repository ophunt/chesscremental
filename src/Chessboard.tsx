import React from "react";
import Chessground from "react-chessground";
import "react-chessground/dist/styles/chessground.css";
import "./Chessboard.scss";

export default function Chessboard({ fen }: { fen: string }) {
  return (
    <div className="Chessboard">
      <Chessground fen={fen} movable={false} />
    </div>
  );
}
