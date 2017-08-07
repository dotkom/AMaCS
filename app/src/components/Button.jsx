import React from "react";

import _s from 'assets/css/Button.css';


function Button({ children, onClick, text, iconLeft, iconRight }) {
  return(
    <button className={_s.button} onClick={onClick}>
      { iconLeft && <img className={_s.iconLeft} src={iconLeft} /> }
      { text }
      { iconRight && <img className={_s.iconRight} src={iconRight} /> }
    </button>
  )
}

export default Button;
