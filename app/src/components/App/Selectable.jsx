import React from "react";
import PropTypes from 'prop-types';

import _s from "assets/css/Selectable.css";
import classNames from "classnames";


function Selectable({ committee, onClick, small, selected }) {
  const Icon = committee.icon;
  return(
    <div className={classNames(_s.container, { [_s.small]: small, [_s.selected]: selected })} onClick={onClick}>
      <Icon width={64} height={64} />
      <h2 className={classNames(_s.name)}>{committee.name}</h2>
    </div>
  )
}

Selectable.defaultProps = {
  small: false,
  onClick: null,
  selected: false
}

Selectable.propTypes = {
  committee: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    name: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
  small: PropTypes.bool,
  selected: PropTypes.bool
}

export default Selectable;
