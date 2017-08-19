import React from "react";
import classNames from 'classnames';

import Cross from 'assets/images/cross.svg';
import Check from 'assets/images/check.svg';
import _s from 'assets/css/ToggleSwitch.css';

function ToggleSwitch({ checked, disabled, onChange }) {
  const SvgIcon = checked ? Check : Cross;
  return(
    <button
      disabled={disabled}
      onClick={onChange}
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


ToggleSwitch.defaultProps = {
  checked: false
}

export default ToggleSwitch;
