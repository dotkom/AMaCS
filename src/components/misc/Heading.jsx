import React from 'react';
import { Link } from 'react-router-dom';

import _s from 'assets/css/Heading.module.scss';

import { getBaseUrl } from 'common/urls';
import { colors, Logo } from '@dotkomonline/design-system';

const Heading = () => {
  return (
    <header className={_s.heading}>
      <div className={_s.logo}>
        <Link to={getBaseUrl()}>
          <Logo primaryColor={colors.white} />
        </Link>
      </div>
      <div className={_s.header}>
        <h1 className={_s.text}>Komitésøknadssystemet</h1>
      </div>
    </header>
  );
};

export default Heading;
