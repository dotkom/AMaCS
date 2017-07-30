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
    height: "3.5em",
  },
  label: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "normal",
    fontSize: "20px",
    textTransform: "uppercase",
    color: "#909090",
  },
  container: {
    marginBottom: "0.50em",
  }
};

function Input({ children, type, placeholder, label, name, id, value}) {
  return(
    <div style={style.container}>
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
    </div>
  )
}

export default Input;