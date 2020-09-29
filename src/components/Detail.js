import React from "react";
import Text from "./styled/Text";

function Detail(props) {
  return (
    <div className="detail">
      <Text>
        {props.value}
        {props.name === "High" || props.name === "Low"
          ? String.fromCharCode(176)
          : null}
      </Text>
      <Text size="sm" sub>
        {props.name}
      </Text>
    </div>
  );
}

export default Detail;
