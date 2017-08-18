import React from "react";

import Button from "./Button";
import Input from "./Input";
import ToggleSwitch from "./ToggleSwitch";


import _s from "assets/css/Login.css";
import { connectServices } from 'services';

const onlineIconWhite = "/static/online-icon-white.png"

export function Login({info, loggedIn, authService, onChange}) {

  const handleLoginClick = () => {
    if(loggedIn)
      authService.logout();
    else
      authService.login();
  }

  const handleInputChange = (field, value) => {
    if(onChange){
      onChange(Object.assign({}, info, {
        [field]: value
      }));
    }
  }

  const buttonText = loggedIn ? 'ut' : 'inn'

  return(
    <div className={_s.container}>
      <div className={_s.box}>
        <label className={_s.label}>Hent Brukerinfo</label>
        <Button
          onClick={handleLoginClick}
          iconLeft={onlineIconWhite}
          text={"Logg " + buttonText}
        />
        <label className={_s.label}>Ingen Online bruker?</label>
        <ToggleSwitch 
          text="Fyll inn rukerinfo selv" 
          disabled={loggedIn} 
          checked={info.inputEnabled && !loggedIn}
          onChange={(...a) => handleInputChange("inputEnabled",...a)}
        />
      </div>
      <div className={_s.box}>
        <Input
          type="text"
          placeholder="Navn"
          name="name"
          label="Navn"
          value={info.name || ""}
          onChange={(r) => handleInputChange("name", r.target.value)}
          disabled={!info.inputEnabled || loggedIn}
        />
        <Input
          type="email"
          placeholder="Mailadresse"
          name="email"
          label="E-Postadresse"
          onChange={(r) => handleInputChange("email", r.target.value)}
          disabled={!info.inputEnabled || loggedIn}
          value={info.email || ""}
        />
      </div>
    </div>
  )
}

Login.defaultProps = {
  loggedIn: false,
  info: {}
}

const mapServicesToProps = (serviceManager) => ({
  authService: serviceManager.getService("auth")
})

export default connectServices(mapServicesToProps)(Login);
