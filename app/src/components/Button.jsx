import React from "react";

import _s from 'assets/css/Button.css';


function Button({ children, onClick, text, iconLeft, iconRight, disabled }) {
  return(
    <button className={_s.button} onClick={onClick} disabled={disabled}>
      <div className={_s.buttonContent}>
      { iconLeft && <img className={_s.iconLeft} src={iconLeft} /> }
      { text }
      { iconRight && <img className={_s.iconRight} src={iconRight} /> }
      </div>
    </button>
  )
}

export default Button;
