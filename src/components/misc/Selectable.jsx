import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import _s from 'assets/css/Selectable.module.scss';
import { API_SETTINGS } from 'common/constants';

function Selectable({ committee, onClick, small, selected }) {
  return (
    <div className={classNames(_s.container, { [_s.small]: small, [_s.selected]: selected })} onClick={onClick}>
      <img className={_s.img} src={`${API_SETTINGS.host}${committee.image.md}`} alt={committee.name_long} />
      <h2 className={classNames(_s.name)}>{committee.name_short}</h2>
    </div>
  );
}

Selectable.defaultProps = {
  small: false,
  onClick: null,
  selected: false,
};

Selectable.propTypes = {
  committee: PropTypes.shape({
    name_short: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
  small: PropTypes.bool,
  selected: PropTypes.bool,
};

export default Selectable;
