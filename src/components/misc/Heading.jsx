import React from 'react';
import { Link } from 'react-router-dom';

import _s from 'assets/css/Heading.module.scss';

import onlineLogo from 'assets/images/online-logo-white.png';
import { getBaseUrl } from 'common/urls';

class Heading extends React.Component {
  render() {
    return (
      <header className={_s.heading}>
        <div className={_s.logo}>
          <Link to={getBaseUrl()}>
            <img src={onlineLogo} alt="Online logo" />
          </Link>
        </div>
        <div className={_s.header}>
          <h1 className={_s.text}>Komitésøknadssystemet</h1>
        </div>
      </header>
    );
  }
}

export default Heading;
