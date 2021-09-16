import React from "react";

const Stat = ({ stats }) => {
  return (
    <div>
      {stats.map((stat, index) => (
        <div key={`${stat.country}-${index}`}>
          <br />
          <b>{stat.country}</b>
          <br />
          Cases: {stat.cases} | Today: {stat.todayCases} | Active: {stat.active}{" "}
          <br />
          Deaths: {stat.deaths} | Recovered: {stat.recovered} | Critical:{" "}
          {stat.critical}
        </div>
      ))}
    </div>
  );
};

export default Stat;
