import React, { useState } from "react";
// @ts-ignore
import { loadCountries } from "@wazooie/api";

export const CountryLoader = () => {
  const [countries, setCountries] = useState(null);

  const getCountries = async () => {
    try {
      const countries = await loadCountries();
      console.log(countries);

      setCountries(countries);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div style={{ backgroundColor: "#e2e2e2" }}>
      <button onClick={getCountries}>Load Countries</button>
      {countries &&
        countries.map((c) => {
          return <li key={c.name}>{c.name}</li>;
        })}
    </div>
  );
};
