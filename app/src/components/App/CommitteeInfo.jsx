import React from "react"
import PropTypes from 'prop-types';

class CommitteeInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showInfo: false,
    };
  }

  render() {
    const { committee } = this.props

    return(
      <div>
        <img src={ committee.icon } />
        <p>{ committee.name }</p>
        <p> 

        { showInfo ? committee.info : undefined }
        </p>
      </div>
    )
  }
}

/*
CommitteeInfo.propTypes = {
  showInfo: PropTypes.bool,
  committee: {
    name: PropTypes.string,
    info: PropTypes.string,
    icon: PropTypes.string,
  }
}

CommitteeInfo.defaultProps = {
  showInfo: false,
  committee: {
    name: "Komitenavn",
    info: "--&$-Svada-$&--",
    icon: "https://avatars0.githubusercontent.com/u/693951?v=4&s=400",
  }
}
*/

export default CommitteeInfo;
