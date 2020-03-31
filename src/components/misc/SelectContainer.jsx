import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import Selectable from './Selectable';
import SelectedList from './SelectedList';
import ToggleSwitch from './ToggleSwitch';

import _s from 'assets/css/SelectContainer.module.scss';
import { selectOnlineGroupsByIds } from 'common/features/onlineGroup';
import { selectOnlineGroupIds } from 'common/features/applicationPeriods';
import {
  toggleCommitteeById,
  toggleOrdered,
  selectIsOrdered,
  selectSelectedCommittees,
} from 'common/features/application';

const selectCurrentOrLatestCommittees = (state) => {
  const committeeIds = selectOnlineGroupIds(state);
  const committees = selectOnlineGroupsByIds(committeeIds)(state);
  return committees;
};

const MAX_SELECTED = 3;

const SelectContainer = () => {
  const dispatch = useDispatch();
  const committees = useSelector(selectCurrentOrLatestCommittees);
  const ordered = useSelector(selectIsOrdered);
  const selectedComittees = useSelector(selectSelectedCommittees, shallowEqual);

  const disptachToggleCommitteeById = (committeeId) => {
    dispatch(toggleCommitteeById(committeeId));
  };

  const dispatchToggleOrdered = () => {
    dispatch(toggleOrdered());
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
            onClick={() => disptachToggleCommitteeById(committee.id)}
            committee={committee}
            selected={selectedComittees.some((id) => id === committee.id)}
          />
        ))}
      </div>
      <div className={_s.prioritizedSwitch}>
        <ToggleSwitch checked={ordered} onChange={dispatchToggleOrdered} />
        <span>Prioritert rekkefølge?</span>
      </div>
      <div className={_s.selectedList}>
        <SelectedList
          ordered={ordered}
          committees={selectedComittees.map((id) => committees.find((committee) => committee.id === id))}
          totalChoices={MAX_SELECTED}
          onChange={disptachToggleCommitteeById}
        />
      </div>
    </div>
  );
};

export default SelectContainer;
