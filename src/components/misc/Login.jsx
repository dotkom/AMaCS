import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button';
import Input from './Input';
import ToggleSwitch from './ToggleSwitch';

import _s from 'assets/css/Login.module.scss';

import onlineIconWhite from 'assets/images/online-icon-white.png';
import onlineIcon from 'assets/images/online-icon.png';
import { logout, login } from 'common/auth';
import { selectIsLoggedIn } from 'common/features/auth';
import {
  setName,
  setEmail,
  toggleInputEnabled,
  selectName,
  selectEmail,
  selectAreInputsEnabled,
} from 'common/features/application';

const Login = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const inputEnabled = useSelector(selectAreInputsEnabled);
  const [showExternalLoginHelp, setShowExternalLoginHelp] = useState(false);

  const handleLoginClick = async () => {
    if (loggedIn) {
      await logout();
      setShowExternalLoginHelp(false);
    } else {
      await login();
      setShowExternalLoginHelp(true);
    }
  };

  const dispatchSetName = (event) => {
    dispatch(setName(event.target.value));
  };

  const dispatchSetEmail = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const dispatchToggleInputEnabled = () => {
    dispatch(toggleInputEnabled());
  };

  const buttonText = loggedIn ? 'ut' : 'inn';
  const checked = inputEnabled && !loggedIn;

  return (
    <div className={_s.container}>
      <div className={_s.box}>
        <label className={_s.label}>Hent brukerinfo</label>
        <Button
          onClick={handleLoginClick}
          iconLeft={onlineIconWhite}
          hoverIconLeft={onlineIcon}
          text={'Logg ' + buttonText}
        />
        {!loggedIn && showExternalLoginHelp ? <p className={_s.helptext}>Innlogging skjer i eget vindu.</p> : null}
        <label className={_s.label}>Ingen online.ntnu.no-bruker?</label>
        <div className={_s.userinfoSwitch}>
          <ToggleSwitch disabled={loggedIn} checked={checked} onChange={dispatchToggleInputEnabled} />
          <span>Fyll inn brukerinfo selv</span>
        </div>
      </div>
      <div className={_s.box}>
        <Input
          type="text"
          placeholder="Navn"
          name="name"
          label="Navn"
          value={name}
          onChange={dispatchSetName}
          disabled={!inputEnabled || loggedIn}
        />
        <Input
          type="email"
          placeholder="Mailadresse"
          name="email"
          label="E-Postadresse"
          onChange={dispatchSetEmail}
          disabled={!inputEnabled || loggedIn}
          value={email}
        />
      </div>
    </div>
  );
};

export default Login;
