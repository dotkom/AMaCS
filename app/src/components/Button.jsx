import React from "react";

import _s from 'assets/css/Button.css';

function Button({ children, onClick }) {
    return(
        <button className={_s.button} onClick={onClick}>
          {children}
        </button>
    )
}

export default Button;