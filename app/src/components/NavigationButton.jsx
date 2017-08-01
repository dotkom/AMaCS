import React from "react";
import { Link } from "react-router-dom";
import _s  from 'assets/css/NavigationButton.css';

function NavigationButton({ children, link }) {
  return(
    <div className={_s.container}>
    <Link to={link}>
        { children }
    </Link>
    </div>
  )
}

export default NavigationButton;
