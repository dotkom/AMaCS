import React from "react"

const style = {
  login: {
    width: "64rem"
  }
}

function Login({ loggedIn, serviceProvider }) {
  const clickHandler = () => {
    if(loggedIn)
      serviceProvider.getService("auth").logout();
    else
      serviceProvider.getService("auth").login();
  }
  
  
  return(
    <div>
      <button onClick={clickHandler}>Logg {loggedIn ? 'ut' : 'inn'}</button>
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