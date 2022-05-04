import React from "react";

export function Square({ value, onClick }) {
  return (
    <button
      className="square"
      onClick={onClick}
      style={{
        backgroundColor: value && (value == "X" ? "#3456d0" : "#a23412"),
        borderRadius: "0px",
        outline: "none",
        borderWidth: "1px",
      }}
    >
      {value}
    </button>
  );
}
