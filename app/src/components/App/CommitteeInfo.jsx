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
    const Icon = committee.icon;

    return(
      <section className={classNames(_s.component, { [_s.open]: showInfo})}>
        <header 
          onClick={() => this.handleClick()} 
          className={_s.header}
        >
          <Icon className={_s.img} />
          <h2 className={_s.name}>{ committee.name }</h2>
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
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    info: PropTypes.string,
  }),
};

export default CommitteeInfo;
