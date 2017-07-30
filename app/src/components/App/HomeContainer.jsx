import React from "react";

const style = {
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "64rem",
    border: "1px black",
    margin: "0 auto",
    padding: "1rem",
  }
}

class HomeContainer extends React.Component {
  render() {
    const { loggedIn } = this.props
    return(
      <div style={style.main}>
        <a href={loggedIn ? '/logout' : '/login'}>
          <button>Logg {loggedIn ? 'ut' : 'inn'}</button>
        </a>
        <p>&emsp;eller mail:&emsp;</p>
        <input type="email"></input>
      </div>
    )
  }
}

HomeContainer.defaultProps = {
  loggedIn: false
}

export default HomeContainer;