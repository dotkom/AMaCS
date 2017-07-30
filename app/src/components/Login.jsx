import React from "react"

import _ from 'lodash';

const style = {
  login: {
    width: "64rem"
  }
}


function Login({info,loggedIn,serviceProvider,onChange}){
  const _handleLoginClick = () => {
    if(loggedIn)
      serviceProvider.getService("auth").logout();
    else
      serviceProvider.getService("auth").login();
  }

  const _handleChange = (field,value) => {
    let newState = _.pick(_.assign({},info,{
      [field]: value
    }),["name","email"]);
    if(onChange){
      onChange(newState);
    }
  }
  
  return (
    <div>
      <button onClick={_handleLoginClick}>Logg {loggedIn ? 'ut' : 'inn'}</button>
      <p>&emsp;eller navn og mail::&emsp;</p>
      <input onChange={(r) => _handleChange("name",r.target.value)} disabled={loggedIn} value={info.name || ""} type="text" placeholder="Navn" />
      <input onChange={(r) => _handleChange("email",r.target.value)} disabled={loggedIn} value={info.email || ""} type="email" placeholder="Mailadresse" />
    </div>
  );
}


Login.defaultProps = {
  user: null
}

export default Login;