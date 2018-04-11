import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { Card } from 'components/misc/Card';

import _s from 'assets/css/Home2.scss';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let cards = [];
    for (var i = 0; i < 3; i++) {
      cards.push(
        <Card
          title = "Tittel"
          key = { i }
          disabled = { i % 2 == 0 }
        >
          <p>Dette er en søknad</p>
        </Card>
      );
    }
    return <div className={_s.content}>{ cards }</div>
  }
}

export default Home;
