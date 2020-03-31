import React from 'react';
import classNames from 'classnames';

import _s from 'assets/css/Selectable.module.scss';
import { API_SETTINGS } from 'common/constants';

const Selectable = ({ committee, onClick = null, small = false, selected = false }) => {
  return (
    <div className={classNames(_s.container, { [_s.small]: small, [_s.selected]: selected })} onClick={onClick}>
      <img className={_s.img} src={`${API_SETTINGS.host}${committee.image.md}`} alt={committee.name_long} />
      <h2 className={classNames(_s.name)}>{committee.name_short}</h2>
    </div>
  );
};

export default Selectable;
