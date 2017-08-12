import React from 'react';
import classNames from 'classnames';
import Selectable from "./Selectable.jsx"


import _s from 'assets/css/SelectedList.css';

function SelectedList({ committees, totalChoices }) {
  return (
    <div className={_s.container}>
      {
        [...Array(totalChoices)].map((_, i) => {
          const committee = committees[i];
          const key = committee  ? committee.name : `empty${i}`;
          return (
            <div key={key} className={_s.committee}>
              <div className={_s.number}>{ i + 1 }</div>
              { committee && <Selectable small committee={committee} /> }
            </div>
          );
        })
      }
    </div>
  );
}

export default SelectedList;
