import React from 'react';

import _s from 'assets/css/Input.module.scss';

const Input = ({ label, name, ...rest }) => {
  return (
    <div className={_s.container}>
      <label className={_s.label} htmlFor={name}>
        {label}
      </label>
      <input className={_s.input} name={name} {...rest} />
    </div>
  );
};

export default Input;
