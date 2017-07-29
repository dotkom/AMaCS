
import React from "react";
import { render } from "react-dom";


function App(){
  return (
    <h1>Initial setup</h1>
  )
}

class Root extends React.Component{
  render() {
    return (
      <App/>
    );
  }
}


render(
  <Root />,
  document.getElementById("app")
);