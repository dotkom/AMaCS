
import React from "react";
import { render } from "react-dom";

import Routes from "./Routes.jsx"

const style = {
  top: {
    backgroundColor: "F2F2F2",
  }
};

function App(){
  return (
    <h1>Initial setup</h1>
  )
}

class Root extends React.Component{
  render() {
    return (
      <div style={style.top}>
        <Routes />
      </div>
    );
  }
}


render(
  <Root />,
  document.getElementById("app")
);