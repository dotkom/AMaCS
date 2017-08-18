import React from "react";
import classNames from 'classnames';

import Check from 'assets/images/check.svg';
import Cross from 'assets/images/cross.svg';
import _s from 'assets/css/ToggleSwitch.css';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked != null ? props.checked : false,
    };
  }

  componentWillReceiveProps(props){
    this.setState({
      checked: props.checked != null ? props.checked : this.state.checked,
    });
  }

  handleToggle(e, a) {
    this.setState({
      checked: !this.state.checked,
    }, () => {
      if(this.props.onChange){
        this.props.onChange(this.state.checked);
      }
    });
    
  }

  render() {
    const { checked } = this.state;
    const SvgIcon = checked ? Check : Cross;
    return(
      <button
        disabled={this.props.disabled}
        onClick={() => this.handleToggle()}
        className={_s.container}
      >
        <div className={classNames(_s.slider, { [_s.checked]: checked })}>
          <span className={_s.icon}>
            <SvgIcon width={12} />
          </span>
        </div>
      </button>
    )
  }
}

export default ToggleSwitch;
