import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Selectable from './Selectable';
import SelectedList from './SelectedList';
import ToggleSwitch from './ToggleSwitch';

import _s from 'assets/css/SelectContainer.module.scss';
import { selectOnlineGroupsByIds } from 'common/features/onlineGroup';
import { selectOnlineGroupIds } from 'common/features/applicationPeriods';

const updateSelection = (selected, committeeName, maxSelected) => {
  const selectedIndex = selected.indexOf(committeeName);
  const alreadySelected = selectedIndex !== -1;
  if (alreadySelected) {
    selected = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)];
  } else if (selected.length < maxSelected) {
    selected = [...selected, committeeName];
  }
  return selected;
};

const selectCurrentOrLatestCommittees = (state) => {
  const committeeIds = selectOnlineGroupIds(state);
  const committees = selectOnlineGroupsByIds(committeeIds)(state);
  return committees;
};

const MAX_SELECTED = 3;

const SelectContainer = ({ selected, ordered = false, onOrderedChange, onChange }) => {
  const committees = useSelector(selectCurrentOrLatestCommittees);

  const handleSelect = (committeeName) => {
    const newSelection = updateSelection(selected, committeeName, MAX_SELECTED);
    onChange(newSelection);
  };

  return (
    <div className={_s.component}>
      <p>
        Velg komiteene du ønsker å søke ved å klikke på dem
        {ordered && ' i prioritert rekkefølge'}.
      </p>
      <div className={_s.selectables}>
        {committees.map((committee) => (
          <Selectable
            key={committee.id}
            onClick={() => handleSelect(committee.id)}
            committee={committee}
            selected={selected.some((id) => id === committee.id)}
          />
        ))}
      </div>
      <div className={_s.prioritizedSwitch}>
        <ToggleSwitch checked={ordered} onChange={onOrderedChange} />
        <span>Prioritert rekkefølge?</span>
      </div>
      <div className={_s.selectedList}>
        <SelectedList
          ordered={ordered}
          committees={selected.map((id) => committees.find((committee) => committee.id === id))}
          totalChoices={MAX_SELECTED}
          onChange={handleSelect}
        />
      </div>
    </div>
  );
};

SelectContainer.propTypes = {
  prioritized: PropTypes.bool,
  selected: PropTypes.array.isRequired,
};

export default SelectContainer;
