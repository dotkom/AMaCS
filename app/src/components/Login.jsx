import React from "react"

const style = {
  login: {
    width: "64rem"
  }
}


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.user ? props.user.fullname : "",
      email: props.user ? props.user.email : ""
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      name: props.user ? props.user.fullname : "",
      email: props.user ? props.user.email : ""
    });
  }

  _handleLoginClick(){
    if(!!this.props.user)
      this.props.serviceProvider.getService("auth").logout();
    else
      this.props.serviceProvider.getService("auth").login();
  }

  _onNameChange(name){
    this.setState({
      name: name
    });
  }

  _onEmailChange(email){
    this.setState({
      email: email
    });
  }
  
  render(){
    return (
      <div>
        <button onClick={() => this._handleLoginClick()}>Logg {!!this.props.user ? 'ut' : 'inn'}</button>
        <p>&emsp;eller navn og mail::&emsp;</p>
        <input onChange={(r) => this._onNameChange(r.value) } disabled={!!this.props.user} value={this.state.name} type="text" placeholder="Navn" />
        <input onChange={(r) => this._onEmailChange(r.value)} disabled={!!this.props.user} type="email" value={this.state.email} placeholder="Mailadresse" />
      </div>
    );
  }
}


Login.defaultProps = {
  user: null
}

export default Login;