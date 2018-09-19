import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import Button from 'components/misc/Button';
import { Link } from 'react-router-dom';

import _s from 'assets/css/Card.scss';

class Card extends React.Component {

  constructor(props){
    super(props);
    this.state = {}

  }

  showIngress() {
    this.setState({ingress: true});
  }

  hideIngress() {
    this.setState({ingress: false});
  }

  render() {
      const cardBody = (
        <div>
        <div className={_s.top}>
          <img src="../app/src/assets/images/online-icon-white.png"/>
          <span>{this.props.title}</span>
        </div>
        <p className={_s.short}>{this.props.short}</p>
        </div>
      );

      return(
        <div className={_s.front} >
          <div className={classnames(_s.card, {[_s.disabled]: this.props.disabled})}>
            {this.props.disabled ? cardBody :
            <Link className={_s.link} to={`./ingress/${this.props.id}`} disabled={this.props.disabled}>
              {cardBody}
            </Link>
            }
            <Link className={_s.link} to="#">
              <Button
                text = "Til søknad"
                className = {_s.cardButton}
                disabled = { this.props.disabled }
              >
              </Button>
            </Link>
          </div>
        </div>
      )
  }
}
export default Card;
