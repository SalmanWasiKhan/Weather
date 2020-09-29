import React from "react";
import Temprature from "./Temprature";
import Details from "./Details";

function Updates({ data }) {
  const { temprature, details } = data;

  return (
    <div className="updates">
      <div className="portion">
        <Temprature data={temprature} />
      </div>
      <div className="portion">
        <Details data={details} />
      </div>
    </div>
  );
}

export default Updates;
