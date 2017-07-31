import React from "react";

import _s from "assets/css/Selectable.css";
import classNames from "classnames";


function Selectable({ committee, onClick }) {
  return(
    <div className={classNames(_s.body)} onClick={onClick}>
      <img className={classNames(_s.img)} src={committee.icon} />
      <p className={classNames(_s.text)}>{committee.name}</p>
    </div>
  )
}

export default Selectable;