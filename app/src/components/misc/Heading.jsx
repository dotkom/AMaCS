import React from "react";
import { Link } from "react-router-dom";
import Button from "components/misc/Button"
import Login from "components/misc/Login";

import _s from 'assets/css/Heading.scss';

import onlineLogoWhiteGuacamole from 'assets/images/online-logo-white.png';
import onlineIcon from 'assets/images/online-icon.png'
import onlineIconWhite from 'assets/images/online-icon-white.png'

class Heading extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <header className={_s.heading}>
        <div className={_s.logo} >
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
