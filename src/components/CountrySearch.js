import React from "react";

const CountrySearch = ({ handleChange }) => {
  return (
    <div>
      <input
        onChange={handleChange}
        placeholder="Search for a country"
        type="search"
      />
    </div>
  );
};

export default CountrySearch;
