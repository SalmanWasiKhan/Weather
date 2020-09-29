import React, { useRef } from "react";
import { ReactSVG } from "react-svg";
import infoIcon from "./info.svg";
import Styles from "./style.module.css";

function Info() {
  const infoRef = useRef(0);

  const fadeIn = () => {
    infoRef.current.classList.add(Styles.fadeIn);
  };

  const fadeOut = () => {
    infoRef.current.classList.remove(Styles.fadeIn);
  };

  return (
    <div
      className={Styles.container}
      onMouseLeave={fadeOut}
      onMouseOver={fadeIn}
    >
      <button className={Styles.btn}>
        <ReactSVG src={infoIcon} className={Styles.icon} />
      </button>
      <div className={`${Styles.info}`} ref={infoRef}>
        <p>App by Salman Wasi</p>
        <p>Powered by Open Weather Map API</p>
      </div>
    </div>
  );
}

export default Info;
