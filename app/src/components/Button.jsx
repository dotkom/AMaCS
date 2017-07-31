import React from "react";

const style = {
  button: {
    background: "#0060A3",
    border: "3px solid #0060A3",
    boxSizing: "border-box",
    boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "2px",
    width: "24em",
    height: "3.5em",
    marginBottom: "1rem",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
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
  },
  iconLeft: {
    width: "2rem",
    marginRight: "8px"
  },
  iconRight: {
    width: "2rem",
    marginLeft: "8px"
  },
  text: {
    fontSize: "1.5rem",
    display: "inline-block",
    margin: 0
  }
}

function Button({ children, onClick, text, iconLeft, iconRight }) {
    return(
        <button style={style.button} onClick={onClick}>
          { iconLeft ?
            <img style={style.iconLeft} src={iconLeft} /> : undefined
          }
          <p style={style.text}>{ text }</p>
          { iconRight ?
            <img style={style.iconRight} src={iconRight} /> : undefined
          }
        </button>
    )
}

export default Button;