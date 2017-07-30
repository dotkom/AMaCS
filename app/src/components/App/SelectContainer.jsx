import React from "react";
import _ from "lodash";

import Selectable from "./Selectable.jsx"
import SelectedList from "./SelectedList.jsx"

import _s from 'assets/css/SelectContainer.css';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);

    this.choiceCount = 3;
  }

  handleSelect(committeeName) {
    let { selected, onChange } = this.props;
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
    this.props.onChange(selected);
  }

  render() {
    const { committees, selected } = this.props;
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
