import React, { useState } from "react";
import { Square } from "./Square";

export function Board() {
  const [array, setArray] = useState(Array(9).fill(null));
  const handleClick = (i) => {
    const squares = array.slice();
    squares[i] = "X";
    setArray(squares);
  };
  return (
    <div className="board">
      {array.map((x, i) => (
        <Square key={i} value={x} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}
