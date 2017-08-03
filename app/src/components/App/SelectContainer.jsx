import React from "react";

import Selectable from "./Selectable.jsx"
//import SelectedList from "./SelectedList.jsx"
import _s from 'assets/css/SelectContainer.css';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: []
    }
  }

  handleSelect(e, committeeName) {
    console.log(committeeName)
  }

  render() {
    const { committees } = this.props;
    return(
      <div className={_s.container}>
        { committees.map((committee) => (
          <Selectable key={committee.name} committee={committee} />
        ))}
      </div>
    )
  }
}

export default SelectContainer;
