import React from "react";
import Text from "./styled/Text";
import "../weather-icons/css/weather-icons.css";
import useIcon from "../hooks/useIcon";

function Temprature({ data }) {
  const { temp, weather, iconId, iconw } = data;

  const iconClasses = useIcon(iconId, iconw);

  return (
    <div className="temprature">
      <i className={iconClasses}></i>

      <div>
        <Text size="xl">{temp}&#176;</Text>
        <Text capitalize>{weather}</Text>
      </div>
    </div>
  );
}

export default Temprature;
