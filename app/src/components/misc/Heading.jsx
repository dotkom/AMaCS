import React from "react";
import { Link } from "react-router-dom";
import Button from "components/misc/Button"

import _s from 'assets/css/Heading.scss';

import onlineLogoWhiteGuacamole from 'assets/images/online-logo-white.png';
import onlineIcon from 'assets/images/online-icon.png'

class Heading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render () {
    return (
      <header className={_s.heading}>
        <Button
          className={_s.login}
          text="Logg Inn"
          iconLeft={onlineIcon}
        >
        </Button>
        <div className={_s.logo}>
          <Link to="/"><img src={onlineLogoWhiteGuacamole} alt="Online logo" /></Link>
        </div>
        <div className={_s.header}>
          <h1 className={_s.text} >Komitésøknadssystemet</h1>
        </div>
      </header>
    )
  }
}

export default Heading;
