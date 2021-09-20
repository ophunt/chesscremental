import React from "react";
import { Dictionary } from "./Utils";
import "./MoveOdds.scss";

const colors = {
  Brilliant: "rgb(27, 172, 166)",
  Best: "rgb(149, 187, 74)",
  Excellent: "rgb(150, 188, 75)",
  Good: "rgb(150, 175, 139)",
  Inaccuracy: "rgb(240, 193, 92)",
  Mistake: "rgb(230, 145, 44)",
  Blunder: "rgb(202, 52, 49)",
} as Dictionary<string>;

export default function MoveOdds({ odds }: { odds: Dictionary<number[]> }) {
  return (
    <div className="MoveOdds">
      <div>
        <p>Your Odds</p>
        <p>Move Type</p>
        <p>Opp. Odds</p>
      </div>
      {Object.entries(odds).map(([name, oddNums]) => (
        <div>
          <p>{oddNums[0]}%</p>
          <p style={{ color: colors[name] }}>{name}</p>
          <p>{oddNums[1]}%</p>
        </div>
      ))}
    </div>
  );
}
