import React from "react"

import Button from "./Button.jsx"
import Input from "./Input.jsx"

const style = {
  login: {
    width: "60rem",
    backgroundColor: "white",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
    fontSize: "24px",
    textTransform: "uppercase",
    color: "#E9E9E9",
    borderRadius: "2px",
    padding: "1em",
    margin: "2em",
  }
}

function Login({ loggedIn }) {
  return(
    <div style={style.login}>
      <a href={loggedIn ? '/logout' : '/login'}>
        <Button>Logg {loggedIn ? 'ut' : 'inn'}</Button>
      </a>
      <Input type="text" placeholder="Navn" name="name" label="navn"></Input>
      <Input type="email" placeholder="Mailadresse" name="email" label="E-Postadresse"></Input>
    </div>
  )
}

Login.defaultProps = {
  loggedIn: false
}

export default Login;