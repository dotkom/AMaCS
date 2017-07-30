import React from "react";

const style = {
  button: {
    background: "#0060A3",
    border: "3px solid #0060A3",
    boxSizing: "border-box",
    boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "2px",
    width: "24em",
    height: "3em",
    color: "white",
    textTransform: "uppercase",
    ontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
  },
  button_active: {
    background: "#F2F2F2",
    border: "4px solid #0060A3",
    boxSizing: "border-box",
    boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "2px",
  }
}

function Button({ children, onClick }) {
    return(
        <button style={style.button} onClick={onClick}>
          {children}
        </button>
    )
}

export default Button;