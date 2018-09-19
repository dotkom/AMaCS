import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Card from 'components/misc/Card';
import Button from 'components/misc/Button';
import onlineIcon from '../../assets/images/online-icon.png';
import onlineIconWhite from '../../assets/images/online-icon-white.png';

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
          title = "Søknadsnavn"
          key = { i }
          id = { i }
          disabled = { (i + 1) % 2 == 0 }
          short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ex aliquet"
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ex aliquet, congue dolor ut, maximus lorem. Pellentesque id massa laoreet, hendrerit purus non, posuere dolor. Proin diam velit, posuere et felis et, dapibus laoreet nunc. Sed ultricies laoreet ante ac feugiat. Nam ac laoreet sem. Nulla nec lectus nec lectus cursus ullamcorper. Maecenas erat enim, accumsan sit amet maximus vel, pellentesque sed neque. Maecenas nec dolor feugiat, rutrum risus sit amet, mattis lectus. Vestibulum bibendum ipsum vitae libero efficitur, a sollicitudin metus consectetur. Aliquam aliquam tellus eget purus facilisis hendrerit. Aenean eu ullamcorper nulla. Nunc semper arcu nibh, non tempor augue sagittis eget. Sed eu quam eu odio viverra consequat.

        Morbi eu tortor id orci placerat ultrices ac id ante. Nam iaculis nec odio vel pellentesque. Nunc ullamcorper mi sit amet nisl vulputate pulvinar. Vivamus turpis urna, mattis vitae massa vitae, varius fringilla orci. Aliquam quis orci eu urna euismod consectetur eget cursus nulla. In id eros est. Aenean pulvinar condimentum diam ac bibendum. Aliquam imperdiet feugiat nisi, at elementum mi eleifend et. In diam ligula, accumsan in nisi eu, pharetra finibus sapien. Maecenas lacinia velit sapien, eget tristique ante vulputate a. Donec vitae magna quis quam congue cursus eget vel nibh. Vestibulum dapibus, ex a tristique tincidunt, nisi tortor varius dolor, vehicula mollis dui velit at est. Praesent dictum ipsum a tellus congue, dapibus elementum nisl tristique. Suspendisse pellentesque iaculis lobortis.
        </Card>
      );
    }
    return (
      <div>
        <Button
          text="Logg inn"
          iconLeft={onlineIconWhite}
          hoverIconLeft={onlineIcon}
          className={_s.loggInnButton}
         />
        <div className={_s.content}>{ cards }</div>
      </div>
    )
  }
}

export default Home;
