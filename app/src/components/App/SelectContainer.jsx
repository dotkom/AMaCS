import React from "react";
import _ from "lodash";

import Selectable from "./Selectable"
import SelectedList from "./SelectedList"

import committeesMap from 'common/committees';
import _s from 'assets/css/SelectContainer.css';

export function updateSelection(selected, committeeName, maxSelected) {
  const selectedIndex = selected.indexOf(committeeName)
  const alreadySelected = selectedIndex !== -1;
  if(alreadySelected) {
    selected = [
      ...selected.slice(0, selectedIndex),
      ...selected.slice(selectedIndex + 1)
    ];
  } else if(selected.length < maxSelected) {
    selected = [...selected, committeeName];
  }
  return selected;
}

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);

    this.maxSelected = 3;
  }

  handleSelect(committeeName) {
    const { selected, onChange } = this.props;
    const newSelection = updateSelection(selected, committeeName, this.maxSelected);
    this.props.onChange(newSelection);
  }

  render() {
    const { selected } = this.props;
    const committees = this.props.committees || committeesMap;
    return (
      <div className={_s.container}>
        <div className={_s.selectables}>
          { Array.from(committees).map(([key, committee]) => (
            <Selectable
              key={key}
              onClick={() => this.handleSelect(key)}
              committee={committee}
            />
          ))}
        </div>
        <div className={_s.selectedList}>
          <SelectedList
            committees={selected.map(committeeName => committees.get(committeeName))}
            totalChoices={this.maxSelected}
          />
        </div>
      </div>
    );
  }
}

export default SelectContainer;
