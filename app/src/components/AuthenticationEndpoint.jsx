import React from "react";

import _s from "assets/css/AuthenticationEndpoint.css";

class Auth extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.close();
    }, 3000);
  }

  render() {
    return (
        <div className={_s.container}>
        <h2>Denne siden lukkes automatisk</h2>
        <p className={_s.text}>
            Denne siden skal lukkes automatisk. Dersom den ikke gjør det, så kan du lukke den selv.
        </p>
        </div>
    );
  }
}

export default Auth;
