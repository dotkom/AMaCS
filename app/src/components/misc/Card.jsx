import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import Button from 'components/misc/Button';

import _s from 'assets/css/Card.scss';

class Card extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      short: props.short,
      children: props.children,
      disabled: props.disabled,
      ingress: false
    }

    this.showIngress = this.showIngress.bind(this);
    this.hideIngress = this.hideIngress.bind(this);
  }

  showIngress() {
    this.setState({ingress: true});
  }

  hideIngress() {
    this.setState({ingress: false});
  }

  render() {
    if(!this.state.disabled){
      return(
        <div className={_s.front}>
          <div className={classnames(_s.card, {[_s.disabled]: this.state.disabled})}>
            <div onClick={this.showIngress}>
              <div className={_s.top}>
                <img src="../app/src/assets/images/online-icon-white.png"/>
                <span>{this.state.title}</span>
              </div>
              <p>{this.state.short}</p>
            </div>
            <Button
              text = "Til søknad"
              className = {_s.cardButton}
              disabled = { this.state.disabled }
            >
            </Button>
          </div>
          <div onClick={this.hideIngress} className={classnames(_s.ingress, {[_s.enabled]: this.state.ingress})}>
            <h1>{this.state.title}</h1>
            <p>{this.state.children}</p>
            <Button
              text = "Til søknad"
              className = {_s.ingressButton}
              disabled = { this.state.disabled }
            >
            </Button>
          </div>
        </div>
      )
    }else{
      return(
        <div className={_s.front}>
          <div className={classnames(_s.card, {[_s.disabled]: this.state.disabled})}>
              <div className={_s.top}>
                <img src="../app/src/assets/images/online-icon-white.png"/>
                <span>{this.state.title}</span>
              </div>
              <p>{this.state.short}</p>
            <Button
              text = "Til søknad"
              className = {_s.cardButton}
              disabled = { this.state.disabled }
            >
            </Button>
          </div>
        </div>
      )
    }
  }
}

export default Card;
//Latest change added ingress
// TODO:
// Better way to send the ingress from home to cards?
