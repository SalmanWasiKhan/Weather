import React from "react";
import Text from "./styled/Text";
import "../weather-icons/css/weather-icons.css";
import useIcon from "../hooks/useIcon";

function TimeCard({ data }) {
  const { time, temprature, iconId, iconw } = data;

  const iconClasses = useIcon(iconId, iconw);

  return (
    <div className="time-card">
      <Text size="sm">{time}</Text>
      <i className={iconClasses}></i>
      <Text size="sm">{temprature}&#176;</Text>
    </div>
  );
}

export default TimeCard;
