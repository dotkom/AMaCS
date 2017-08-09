import React from "react";

import Selectable from "./Selectable.jsx"
import SelectedList from "./SelectedList.jsx"
import _s from 'assets/css/SelectContainer.css';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: []
    }
  }

  handleSelect(committeeName) {
    let { selected } = this.state;
    const selectedIndex = selected.indexOf(committeeName)
    const alreadySelected = selectedIndex !== -1;
    if(alreadySelected) {
      selected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1)
      ];
    } else if(selected.length < 3) {
      selected = [...selected, committeeName];
    }
    this.setState({
      selected
    });
  }

  render() {
    const { committees } = this.props;
    const { selected } = this.state;
    return (
      <div className={_s.container}>
        <div className={_s.selectables}>
          { committees.map((committee, index) => {
            const { name } = committee;
            return <Selectable
              key={name}
              onClick={() => this.handleSelect(index)}
              committee={committee}
            />
          })}
        </div>
        <div className={_s.selectedList}>
          <SelectedList
            committees={selected.map(committeeName => committees[committeeName])}
          />
        </div>
      </div>
    );
  }
}

export default SelectContainer;
