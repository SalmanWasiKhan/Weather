import React from "react";
import Text from "./styled/Text";

function Location({ data }) {
  const { city, country, date } = data;
  return (
    <div>
      <Text size="lg">
        {city}, {country}
      </Text>
      <Text size="sm">{date}</Text>
    </div>
  );
}

export default Location;
