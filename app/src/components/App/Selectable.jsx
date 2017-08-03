import React from "react";

import _s from "assets/css/Selectable.css";
import classNames from "classnames";


function Selectable({ committee, onClick }) {
  return(
    <div className={classNames(_s.container)} onClick={onClick}>
      <img className={classNames(_s.img)} src={committee.icon} />
      <h2 className={classNames(_s.name)}>{committee.name}</h2>
    </div>
  )
}

export default Selectable;
