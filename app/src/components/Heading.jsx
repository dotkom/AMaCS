import React from "react";
import { Link } from "react-router-dom";

import _s from 'assets/css/Heading.css';

const onlineLogoWhite = "/static/online-logo-white.png"
const onlineLogoWhiteGuacamole = "/static/online-logo-white-guacamole.png"

class Heading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render () {
    return (
      <header className={_s.heading}>
        <div className={_s.logo}>
          <Link to="/"><img src="https://online.ntnu.no/static/img/online_logo.svg" /></Link>
        </div>
        <div className={_s.header}>
          <p className={_s.text} >Komitésøknadssystemet Supreme-Guacamole</p>
        </div>
      </header>
    )
  }
}

export default Heading;