
import React from "react";
import { render } from "react-dom";

import Routes from "./Routes.jsx"

function App(){
  return (
    <h1>Initial setup</h1>
  )
}

class Root extends React.Component{
  render() {
    return (
      <Routes />
    );
  }
}


render(
  <Root />,
  document.getElementById("app")
);