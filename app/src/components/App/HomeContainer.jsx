import React from "react";

class HomeContainer extends React.Component {
  render() {
    const { loggedIn } = this.props
    return(
      <div>
        <a href={loggedIn ? '/logout' : '/login'}>
          <button>Logg {loggedIn ? 'ut' : 'inn'}</button>
        </a>
        <p>"HomeContainer"</p>
      </div>
    )
  }
}

HomeContainer.defaultProps = {
  loggedIn: false
}

export default HomeContainer;