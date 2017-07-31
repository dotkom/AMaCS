import React from "react";

import _s from 'assets/css/CommitteeInfo.css';

class CommitteeInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { showInfo } = this.state;
    this.setState({ showInfo: !showInfo })
  }

  render() {
    const { committee } = this.props
    const { showInfo } = this.state

    return(
      <div onClick={this.handleClick} className={_s.card}>
        <section>
          <img className={_s.img} height={60} width={60} src={ committee.icon } />
          <h3 className={_s.name}>{ committee.name }</h3>
        </section>
        <p className={_s.info}> 
          <br />
          { showInfo ? committee.info : undefined }
        </p>
      </div>
    )
  }
}

export default CommitteeInfo;
