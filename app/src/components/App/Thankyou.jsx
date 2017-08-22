import React from "react";

import _s from "assets/css/Thankyou.css";

function Thankyou() {
  return (
    <div className={_s.container}>
      <h1>
        Takk for søknaden!
      </h1>
      <p className={_s.text}>
        Søknadene vil bli behandlet fortløpende og du vil bli innkalt til intervju på e-postadressen du oppga.
      </p>
    </div>
  );
}

export default Thankyou;
