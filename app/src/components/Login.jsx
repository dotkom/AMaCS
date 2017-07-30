import React from "react"

import Button from "./Button.jsx"
import Input from "./Input.jsx"
import ToggleSwitch from "./ToggleSwitch.jsx"

const style = {
  login: {
    maxWidth: "64rem",
    backgroundColor: "white",
    textTransform: "uppercase",
    color: "#E9E9E9",
    borderRadius: "2px",
    padding: "1em",
    margin: "2em",
  },
  right: {
    float: "right",
    maxWidth: "20rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  left: {
    float: "left",
    maxWidth: "20rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  header: {
    color: "#636363",
    fontFamily: "Open Sans",
  },
  label: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "normal",
    fontSize: "20px",
    textTransform: "uppercase",
    color: "#909090",
  },
}

function Login({ loggedIn }) {
  return(
    <div style={style.login}>
      <h2 style={style.header}>Brukerinfo</h2>
      <div style={style.left}>
        <label style={style.label}>Hent Brukerinfo</label>
        <a href={loggedIn ? '/logout' : '/login'}>
          <Button>Logg {loggedIn ? 'ut' : 'inn'}</Button>
        </a>
        <label style={style.label}>Ingen Online bruker?</label>
        <br />
        <ToggleSwitch text="Fyll inn rukerinfo selv"/>
      </div>
      <div style={style.right}>
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