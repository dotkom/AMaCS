import React from "react";
import { Link } from "react-router-dom";

const style = {
  heading: {
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.1)",
    background:"#0060A3"
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "64rem",
    border: "1px black",
    margin: "0 auto",
    padding: "1rem",
  },
  header: {
    color: "white",
    fontSize: "2rem",
    margin: "0",
    transition: "all 0.3s"
  },

};

class Heading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render () {
    return (
      <header style={style.heading}>
        <div style={style.content}>
          <Link to="/"><img src="https://online.ntnu.no/static/img/online_logo.svg" /></Link>
        </div>
      </header>
    )
  }
}

export default Heading;