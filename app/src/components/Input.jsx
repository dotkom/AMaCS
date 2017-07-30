import React from "react";

const style = {
  input: {
    background: "#F4F4F4",
    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    lineWeight: "normal",
    width: "24em",
    height: "3em",
  },
  label: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "normal",
    fontSize: "20px",
    textTransform: "uppercase",
    color: "#909090",
  }
};

function Input({ children, type, placeholder, label, name, id, value}) {
  return(
    <span>
      <br />
      <label style={style.label} htmlFor={name}>{label}</label>
      <br />
      <input
        style={style.input}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        name={name}
      />
    </span>
  )
}

export default Input;