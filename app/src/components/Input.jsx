import React from "react";

import _s from 'assets/css/Input.css';

function Input({ children, type, placeholder, label, name, id, value}) {
  return(
    <div className={_s.container}>
      <label className={_s.label} htmlFor={name}>{label}</label>
      <br />
      <input
        className={_s.input}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        name={name}
      />
    </div>
  )
}

export default Input;