import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const style = {
  heading: {
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.1)",
    background:"#0060A3"
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "1rem",
    margin: "0 auto",
    maxWidth: "64rem"
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
          <Link to="/"><h1 style={style.header}>"OnlineLogo"</h1></Link>
        </div>
      </header>
    )
  }
}

export default Heading;