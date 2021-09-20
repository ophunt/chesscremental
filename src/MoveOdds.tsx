import React from "react";
import "./MoveOdds.scss";

const odds = {
  Brilliant: [1, 1],
  Best: [39, 39],
  Good: [30, 30],
  Innacuracy: [15, 15],
  Mistake: [10, 10],
  Blunder: [5, 5],
};

export default function MoveOdds() {
  return (
    <div className="MoveOdds">
      <div>
        <p>Your Odds</p>
        <p>Move Type</p>
        <p>Opp Odds</p>
      </div>
      {Object.entries(odds).map(([name, oddNums]) => (
        <div>
          <p>{oddNums[0]}%</p>
          <p>{name}</p>
          <p>{oddNums[1]}%</p>
        </div>
      ))}
    </div>
  );
}
