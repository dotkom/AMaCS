import React from "react"

import Button from "./Button.jsx"
import Input from "./Input.jsx"

const style = {
  login: {
    maxWidth: "60rem",
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
  },
  left: {
    float: "left",
    maxWidth: "20rem",
  }
}

function Login({ loggedIn }) {
  return(
    <div style={style.login}>
      <h2>Brukerinfo</h2>
      <div style={style.left}>
        <a href={loggedIn ? '/logout' : '/login'}>
          <Button>Logg {loggedIn ? 'ut' : 'inn'}</Button>
        </a>
      </div>
      <div style={style.right}>
        <Input type="text" placeholder="Navn" name="name" label="navn"></Input>
        <Input type="email" placeholder="Mailadresse" name="email" label="E-Postadresse"></Input>
      </div>
    </div>
  )
}

Login.defaultProps = {
  loggedIn: false
}

export default Login;