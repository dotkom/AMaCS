import React from "react";

import _s from 'assets/css/Button.css';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }

  _mouseEnter(...a){
    this.setState({hover: true});
    if(this.props.onMouseEnter)
      this.props.onMouseEnter(...a);
  }

  _mouseLeave(...a){
    this.setState({hover: false});
    if(this.props.onMouseLeave)
      this.props.onMouseLeave(...a);
  }

  render(){
    const { children, text, iconLeft, iconRight, hoverIconLeft, hoverIconRight } = this.props;
    
    const icLeft = this.state.hover ? hoverIconLeft || iconLeft : iconLeft || hoverIconLeft;
    const icRight = this.state.hover ? hoverIconRight || iconRight : iconRight || hoverIconRight;
    
    return (
      <button 
        {...this.props} 
        className={_s.button} 
        onMouseEnter={(...a) => this._mouseEnter(...a)}
        onMouseLeave={(...a) => this._mouseLeave(...a)}
      >
        <div className={_s.buttonContent}>
          { icLeft && <img className={_s.iconLeft} src={icLeft} /> }
          { text }
          { icRight && <img className={_s.iconRight} src={icRight} /> }
        </div>
      </button>
    );
  }
}

export default Button;
