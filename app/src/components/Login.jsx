import React from "react";

import Button from "./Button.jsx";
import Input from "./Input.jsx";
import ToggleSwitch from "./ToggleSwitch.jsx";

import _s from "assets/css/Login.css";

function Login({ loggedIn }) {
  return(
    <div className={_s.login}>
      <h2 className={_s.header}>Brukerinfo</h2>
      <div className={_s.left}>
        <label className={_s.label}>Hent Brukerinfo</label>
        <a href={loggedIn ? '/logout' : '/login'}>
          <Button>Logg {loggedIn ? 'ut' : 'inn'}</Button>
        </a>
        <label className={_s.label}>Ingen Online bruker?</label>
        <br />
        <ToggleSwitch text="Fyll inn rukerinfo selv"/>
      </div>
      <div className={_s.right}>
        <Input type="text" placeholder="Navn" name="name" label="navn"></Input>
        <br />
        <Input type="email" placeholder="Mailadresse" name="email" label="E-Postadresse"></Input>
      </div>
    </div>
  )
}

Login.defaultProps = {
  loggedIn: false
}

export default Login;