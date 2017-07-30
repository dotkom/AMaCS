import React from "react"

const style = {
  login: {
    width: "64rem"
  }
}

function Login({ loggedIn }) {
  return(
    <div>
      <a href={loggedIn ? '/logout' : '/login'}>
        <button>Logg {loggedIn ? 'ut' : 'inn'}</button>
      </a>
      <p>&emsp;eller navn og mail::&emsp;</p>
      <input type="text" placeholder="Navn"></input>
      <input type="email" placeholder="Mailadresse"></input>
    </div>
  )
}

Login.defaultProps = {
  loggedIn: false
}

export default Login;