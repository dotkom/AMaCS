import React from "react";
import { Link } from "react-router-dom";

const style = {
  heading: {
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.1)",
    background:"#0060A3"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "64rem",
    margin: "0 auto",
    padding: "1rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "64rem",
    margin: "0 auto",
    paddingBottom: "1rem",
  },
  text: {
    color: "white",
    margin: "0 auto",
    alignItems: "center",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
  }

};

const onlineLogoWhite = "/static/online-logo-white.png"
const onlineLogoWhiteGuacamole = "/static/online-logo-white-guacamole.png"

class Heading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render () {
    return (
      <header style={style.heading}>
        <div style={style.logo}>
          <Link to="/"><img src="https://online.ntnu.no/static/img/online_logo.svg" /></Link>
        </div>
        <div style={style.header}>
          <p style={style.text} >Komitésøknadssystemet Supreme-Guacamole</p>
        </div>
      </header>
    )
  }
}

export default Heading;