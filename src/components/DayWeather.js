import React from "react";
import TimeCard from "./TimeCard";

function DayWeather({ data }) {
  return (
    <div className="day-weather">
      {data.map((details) => (
        <TimeCard key={details.temprature} data={details} />
      ))}
    </div>
  );
}

export default DayWeather;
