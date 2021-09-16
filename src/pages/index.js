import { useMachine } from "@xstate/react";
import React from "react";
import CountrySearch from "../components/CountrySearch";
import CountrySelector from "../components/CountrySelector";
import Stat from "../components/Stat";
import { statsMachine } from "../xstore/startsMachine";

const App = () => {
  const [current, send] = useMachine(statsMachine);

  return (
    <>
      <div>CoronaVirus Information</div>
      {current.matches("fetchStats") && <div>Loading Stats…</div>}
      {current.matches("error") && <div>Error fetching stats…</div>}
      {current.matches("ready") && (
        <>
          <CountrySelector
            stats={current.context.stats}
            handleChange={(country) => send("COUNTRY_SELECTED", { country })}
          />

          <CountrySearch
            handleChange={(country) => send("COUNTRY_SELECTED", { country })}
          />
        </>
      )}

      {console.log(current.context.countriesSelected)}

      {current.context.countriesSelected.length > 0 && (
        <Stat stats={current.context.countriesSelected} />
      )}
    </>
  );
};

export default App;
