import React, { useEffect, useState } from "react";
import { Board } from "./Board";
import { Button } from "./Button";

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [XisNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = XisNext ? "X" : "O";
    setHistory((prev) => prev.concat([squares]));
    setXisNext((prev) => !prev);
    setStepNumber(history.length);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const winner = calculateWinner(history[history.length - 1]);
  return (
    <div className="game">
      <div>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div>
          {winner
            ? `The winner is ${winner}`
            : `${XisNext ? "X" : "O"} is the next`}
        </div>
        <Button
          onClick={() => {
            setHistory([Array(9).fill(null)]);
            setXisNext(true);
            setStepNumber(0);
          }}
          colorScheme="green"
        >
          Restart
        </Button>
      </div>
      <div className="game-info">
        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {history.map((step, move) => {
            const desc = move ? "Go to move #" + move : "Go to game start";
            return (
              <li key={move}>
                <Button colorScheme="red" onClick={() => jumpTo(move)}>
                  {desc}
                </Button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
