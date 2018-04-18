import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import Button from 'components/misc/Button';

import _s from 'assets/css/Ingress.scss';

class Ingress extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div onClick={() =>this.hideIngress()} className={classnames(_s.ingress, {[_s.enabled]: this.props.ingress})}>
        <h1>{this.props.title}</h1>
        <p>{this.props.children}</p>
        <Button
          text = "Til søknad"
          className = {_s.ingressButton}
        >
        </Button>
      </div>
    )
  }
}
export default Ingress;
