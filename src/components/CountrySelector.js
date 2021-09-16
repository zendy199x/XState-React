import React from "react";
import styled from "styled-components";

const CountrySelector = ({ handleChange, stats }) => {
  return (
    <div>
      <Selector onChange={handleChange}>
        <option>Select a country</option>
        {stats.map((stat, index) => (
          <option key={`${stat.country}-${index}`}>{stat.country}</option>
        ))}
      </Selector>
    </div>
  );
};

const Selector = styled.select`
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  min-height: 38px;
  position: relative;
  box-sizing: border-box;
  border-color: rgb(204, 204, 204);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  transition: all 100ms ease 0s;
  outline: 0px !important;
  font-size: 15px;
  margin-bottom: 10px;
`;

export default CountrySelector;
