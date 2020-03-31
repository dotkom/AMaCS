import React, { useCallback, useEffect } from 'react';

import _s from 'assets/css/AuthenticationEndpoint.module.scss';

const Auth = () => {
  const initCloseTimeout = useCallback(() => {
    setTimeout(() => {
      window.close();
    }, 3000);
  }, []);

  useEffect(() => {
    initCloseTimeout();
  }, [initCloseTimeout]);

  return (
    <div className={_s.container}>
      <h2>Denne siden lukkes automatisk</h2>
      <p className={_s.text}>Denne siden skal lukkes automatisk. Dersom den ikke gjør det, så kan du lukke den selv.</p>
    </div>
  );
};

export default Auth;
