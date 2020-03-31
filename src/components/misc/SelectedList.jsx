import React from 'react';
import Selectable from './Selectable';

import _s from 'assets/css/SelectedList.module.scss';

const SelectedList = ({ committees, ordered, totalChoices, onChange }) => {
  return (
    <div className={_s.container}>
      {[...Array(totalChoices)].map((_, i) => {
        const committee = committees && committees.length > i ? committees[i] : null;
        const key = committee ? committee.id : `empty${i}`;
        return (
          <div key={key} className={_s.committee}>
            {ordered && <div className={_s.number}>{i + 1}</div>}
            {committee && <Selectable onClick={() => onChange(committee.id)} small committee={committee} />}
          </div>
        );
      })}
    </div>
  );
};

export default SelectedList;
