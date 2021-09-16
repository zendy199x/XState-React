import { useMachine } from "@xstate/react";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import CountrySearch from "../components/CountrySearch";
import CountrySelector from "../components/CountrySelector";
import Stat from "../components/Stat";
import { statsMachine } from "../xstore/startsMachine";

const App = () => {
  const [current, send] = useMachine(statsMachine);

  return (
    <>
      <Link href="/toggle" passHref>
        <Button variant="primary">Toggle Example</Button>
      </Link>
      <h1>Covid-19 Information</h1>
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
