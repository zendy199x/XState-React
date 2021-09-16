import { useMachine } from "@xstate/react";
import React from "react";
import { statsMachine } from "../xstore/startsMachine";

const App = () => {
  const [current, send] = useMachine(statsMachine);

  return (
    <>
      <div>CoronaVirus Information</div>
      {current.matches("fetchStats") && <div>Loading Stats…</div>}
      {current.matches("error") && <div>Error fetching stats…</div>}
      {current.matches("ready") && <div>Stats loaded!</div>}
    </>
  );
};

export default App;
