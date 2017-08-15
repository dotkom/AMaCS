import React from "react";
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import _s from 'assets/css/CommitteeInfo.css';

class CommitteeInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false,
    };

  }

  handleClick() {
    const { showInfo } = this.state;
    this.setState({ showInfo: !showInfo })
  }

  render() {
    const { committee } = this.props
    const { showInfo } = this.state

    return(
      <section onClick={() => this.handleClick()} className={classNames(_s.container, { [_s.open]: showInfo})}>
        <header className={_s.header}>
          <img className={_s.img} src={ committee.icon } />
          <h3 className={_s.name}>{ committee.name }</h3>
        </header>
        <div className={_s.info}>
          { committee.info }
        </div>
      </section>
    )
  }
}

CommitteeInfo.propTypes = {
  committee: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    info: PropTypes.string,
  }),
};

export default CommitteeInfo;
