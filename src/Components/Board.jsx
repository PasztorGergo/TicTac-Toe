import React, { useState } from "react";
import { Button } from "./Button";
import { Square } from "./Square";

export function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((x, i) => (
        <Square key={i} value={x} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}
