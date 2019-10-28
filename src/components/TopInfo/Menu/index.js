import React from "react";
// get our fontawesome imports
import { faMedal, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.css";
const Menu = props => {
  return (
    <div>
      <div className={style.topbar}>
        <div className={style.pointercurserLeft}>
          <FontAwesomeIcon icon={faMedal} className={style.TopAnimate} />
        </div>
        <div className={style.pointercurserLeft}>{props.name}</div>
        {/* <div className={style.pointercurserRight}>
          <FontAwesomeIcon icon={faUserTie} />
        </div> */}
        <div className={style.clear} />
      </div>
      <div className={style.topblock} />
    </div>
  );
};
export default Menu;
