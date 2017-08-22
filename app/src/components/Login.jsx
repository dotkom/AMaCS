import React from "react";

import Button from "./Button";
import Input from "./Input";
import ToggleSwitch from "./ToggleSwitch";


import _s from "assets/css/Login.css";
import { connectServices } from 'services';

import onlineIconWhite from 'assets/images/online-icon-white.png';
import onlineIcon from 'assets/images/online-icon.png';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showExternalLoginHelp: false,
    };
  }

  handleLoginClick() {
    if(this.props.loggedIn) {
      this.props.authService.logout();
      this.setState({ showExternalLoginHelp: false });
    }
    else {
      this.props.authService.login();
      this.setState({ showExternalLoginHelp: true });
    }
  }

  handleInputChange(field, value) {
    if(this.props.onChange){
      this.props.onChange(Object.assign({}, this.props.info, {
        [field]: value
      }));
    }
  }

  render() {
    const {info, loggedIn, authService, onChange} = this.props;
    const buttonText = loggedIn ? 'ut' : 'inn'
    const checked = info.inputEnabled && !loggedIn;
    return(
      <div className={_s.container}>
        <div className={_s.box}>
          <label className={_s.label}>Hent brukerinfo</label>
          <Button
            onClick={() => this.handleLoginClick()}
            iconLeft={onlineIconWhite}
            hoverIconLeft={onlineIcon}
            text={"Logg " + buttonText}
          />
          { (!loggedIn && this.state.showExternalLoginHelp)  ? <p className={_s.helptext}>Innlogging skjer i eget vindu.</p> : null}
          <label className={_s.label}>Ingen online.ntnu.no-bruker?</label>
          <div className={_s.userinfoSwitch}>
            <ToggleSwitch
              disabled={loggedIn}
              checked={checked}
              onChange={() => this.handleInputChange("inputEnabled", !checked)}
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
            value={info.name || ""}
            onChange={(r) => this.handleInputChange("name", r.target.value)}
            disabled={!info.inputEnabled || loggedIn}
          />
          <Input
            type="email"
            placeholder="Mailadresse"
            name="email"
            label="E-Postadresse"
            onChange={(r) => this.handleInputChange("email", r.target.value)}
            disabled={!info.inputEnabled || loggedIn}
            value={info.email || ""}
          />
        </div>
      </div>
    )
  }
}

Login.defaultProps = {
  loggedIn: false,
  info: {}
}

const mapServicesToProps = (serviceManager) => ({
  authService: serviceManager.getService("auth")
})

export default connectServices(mapServicesToProps)(Login);
