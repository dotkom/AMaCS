import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import Button from 'components/misc/Button';

import _s from 'assets/css/Card.scss';
console.log(_s);
export function Card({title, children, disabled}) {
  return(
    <div className={classnames(_s.card, {[_s.disabled]: disabled})}>
      <div className={_s.top}>
        <img src="../app/src/assets/images/online-icon-white.png"/>
        <span>{title}</span>
      </div>
      {children}
      <Button
        text = "Til søknad"
        className = {_s.cardButton}
        disabled = { disabled }
      >
      </Button>
    </div>
  )
}
