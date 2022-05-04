import React, { useEffect, useState } from "react";

export function Button({ disabled, onClick, colorScheme, children }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    switch (colorScheme) {
      case "green":
        setTheme("#13d03e");
        break;
      case "red":
        setTheme("#d24545");
        break;
    }
  });

  return (
    <button
      style={{
        backgroundColor: theme,
        border: "none",
        borderRadius: "0.5rem",
        outline: "none",
        padding: "0.5rem .25rem",
        color: "#efefef",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
