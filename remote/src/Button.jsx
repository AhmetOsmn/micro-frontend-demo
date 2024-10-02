import React from "react";
import useCount from "./store";

const Button = () => {
  const [state, setState] = useCount();
  return (
    <div>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => setState((s) => s + 1)}
      >
        Remote Button: click me: {state}
      </button>
    </div>
  );
};

export default Button;
