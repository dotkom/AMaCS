import React from "react";

import _s from 'assets/css/ToggleSwitch.css';

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
      <span className={_s.text}>
        <label className={_s.switch}>
          <input type="checkbox" onChange={this.handleToggle} />
          <span className={_s.slider}></span>
        </label>
        { text }
      </span>
    )
  }
}

export default ToggleSwitch;