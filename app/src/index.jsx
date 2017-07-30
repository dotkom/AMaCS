
import React from "react";
import { render } from "react-dom";

import Routes from "./Routes.jsx"

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