import React from "react";

const style = {
  switch: {
    position: "relative",
    display: "inline-block",
    width: "60px",
    height: "34px"
  },
  switch_input: {
    display: "none"
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#ccc",
    WebkitTransition: ".4s",
    transition: ".4s",
    borderRadius: "34px",
  },
  slider_before: {
    position: "absolute",
    content: "\"\"",
    height: "26px",
    width: "26px",
    left: "4px",
    bottom: "4px",
    backgroundColor: "white",
    WebkitTransition: ".4s",
    transition: ".4s",
    borderRadius: "50%",
  },
  input_checked____slider: {
    backgroundColor: "#2196F3"
  },
  input_focus____slider: {
    boxShadow: "0 0 1px #2196F3"
  },
  input_checked____slider_before: {
    WebkitTransform: "translateX(26px)",
    MsTransform: "translateX(26px)",
    transform: "translateX(26px)"
  },
  text: {
    color: "#333333",
    fontFamily: "Open Sans",
  }
}
class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e, a) {
    console.log("[ToggleSwitch](handleToggle) A: " + a)
  }

  render() {
    const { text } = this.props;
    return(
      <span style={style.text}>
        <label style={style.switch}>
          <input type="checkbox" onChange={this.handleToggle} />
          <span style={style.slider}></span>
        </label>
        { text }
      </span>
    )
  }
}

export default ToggleSwitch;