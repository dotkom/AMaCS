import React from "react";

import Selectable from "./Selectable.jsx"
import SelectedList from "./SelectedList.jsx"
import _s from 'assets/css/SelectContainer.css';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);

    this.choiceCount = 3;

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
    } else if(selected.length < this.choiceCount) {
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
          { Object.keys(committees).map((key) => {
            const committee = committees[key];
            const { name } = committee;
            return <Selectable
              key={key}
              onClick={() => this.handleSelect(key)}
              committee={committee}
            />
          })}
        </div>
        <div className={_s.selectedList}>
          <SelectedList
            committees={selected.map(committeeName => committees[committeeName])}
            totalChoices={this.choiceCount}
          />
        </div>
      </div>
    );
  }
}

export default SelectContainer;
