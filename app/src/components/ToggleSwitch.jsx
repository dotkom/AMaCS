import React from "react";
import classNames from 'classnames';

import _s from 'assets/css/ToggleSwitch.css';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked || false,
    };
  }

  handleToggle(e, a) {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const { checked } = this.state;
    return(
      <button
        onClick={() => this.handleToggle()}
        className={_s.container}
      >
        <div className={classNames(_s.slider, { [_s.checked]: checked })}></div>
      </button>
    )
  }
}

export default ToggleSwitch;
