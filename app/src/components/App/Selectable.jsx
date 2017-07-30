import React from "react";

import _s from "assets/css/Selectable.css";
import classNames from "classnames";


function Selectable({ committee, onClick, small, selected }) {
  return(
    <div className={classNames(_s.container, { [_s.small]: small, [_s.selected]: selected })} onClick={onClick}>
      <img className={classNames(_s.img)} src={committee.icon} />
      <h2 className={classNames(_s.name)}>{committee.name}</h2>
    </div>
  )
}

Selectable.defaultProps = {
  small: false
}

export default Selectable;
