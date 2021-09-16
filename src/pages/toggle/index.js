import { useMachine } from "@xstate/react";
import React from "react";
import { toggleMachine } from "../../xstore/toggleMachine";

const Toggle = () => {
  const [current, send] = useMachine(toggleMachine);
  const active = current.matches("active");
  const { count } = current.context;

  return (
    <div>
      <h1>Toggle XState</h1>
      <button  onClick={() => send("TOGGLE")}>
        Click me ({active ? "✅" : "❌"})
      </button>{" "}
      <code>
        Toggled <strong>{count}</strong> times
      </code>
    </div>
  );
};

export default Toggle;
