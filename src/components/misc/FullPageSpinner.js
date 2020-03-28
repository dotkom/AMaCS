import React from 'react';
import { SpinnerLogo } from '@dotkomonline/design-system';

import _s from 'assets/css/FullPageSpinner.module.scss';

const FullPageSpinner = () => {
  return (
    <div className={_s.container}>
      <SpinnerLogo />
    </div>
  );
};

export default FullPageSpinner;
