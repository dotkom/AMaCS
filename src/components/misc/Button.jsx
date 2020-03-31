import React, { useState, useLayoutEffect, useCallback } from 'react';

import _s from 'assets/css/Button.module.scss';

const Button = ({ text, iconLeft, iconRight, hoverIconLeft, hoverIconRight, onMouseEnter, onMouseLeave, ...props }) => {
  const [hover, setHover] = useState(false);

  const preloadIcons = useCallback(() => {
    if (hoverIconLeft) {
      new Image().src = hoverIconLeft;
    }
    if (hoverIconRight) {
      new Image().src = hoverIconRight;
    }
  }, [hoverIconLeft, hoverIconRight]);

  const HandleMouseEnter = (...a) => {
    setHover(true);
    if (onMouseEnter) {
      onMouseEnter(...a);
    }
  };

  const handleMouseLeave = (...a) => {
    setHover(false);
    if (onMouseLeave) {
      onMouseLeave(...a);
    }
  };

  useLayoutEffect(() => {
    preloadIcons();
  }, [preloadIcons]);

  const icLeft = hover ? hoverIconLeft || iconLeft : iconLeft || hoverIconLeft;
  const icRight = hover ? hoverIconRight || iconRight : iconRight || hoverIconRight;

  return (
    <button {...props} className={_s.button} onMouseEnter={HandleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={_s.buttonContent}>
        {icLeft && <img className={_s.iconLeft} src={icLeft} alt="Ikon" />}
        {text}
        {icRight && <img className={_s.iconRight} src={icRight} alt="Ikon" />}
      </div>
    </button>
  );
};

export default Button;
