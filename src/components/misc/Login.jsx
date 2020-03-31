import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from './Button';
import Input from './Input';
import ToggleSwitch from './ToggleSwitch';

import _s from 'assets/css/Login.module.scss';

import onlineIconWhite from 'assets/images/online-icon-white.png';
import onlineIcon from 'assets/images/online-icon.png';
import { logout, login } from 'common/auth';
import { selectIsLoggedIn } from 'common/features/auth';

const Login = ({ info = {}, onChange }) => {
  const loggedIn = useSelector(selectIsLoggedIn);
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

  const handleInputChange = (field, value) => {
    if (onChange) {
      onChange({ ...info, [field]: value });
    }
  };

  const buttonText = loggedIn ? 'ut' : 'inn';
  const checked = info.inputEnabled && !loggedIn;

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
          <ToggleSwitch
            disabled={loggedIn}
            checked={checked}
            onChange={() => handleInputChange('inputEnabled', !checked)}
          />
          <span>Fyll inn brukerinfo selv</span>
        </div>
      </div>
      <div className={_s.box}>
        <Input
          type="text"
          placeholder="Navn"
          name="name"
          label="Navn"
          value={info.name || ''}
          onChange={(r) => handleInputChange('name', r.target.value)}
          disabled={!info.inputEnabled || loggedIn}
        />
        <Input
          type="email"
          placeholder="Mailadresse"
          name="email"
          label="E-Postadresse"
          onChange={(r) => handleInputChange('email', r.target.value)}
          disabled={!info.inputEnabled || loggedIn}
          value={info.email || ''}
        />
      </div>
    </div>
  );
};

export default Login;
