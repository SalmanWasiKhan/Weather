import React from "react";
import Detail from "./Detail";

function Details({ data }) {
  return (
    <div className="details">
      {data.map((details) => (
        <Detail key={details.name} name={details.name} value={details.value} />
      ))}
    </div>
  );
}

export default Details;
