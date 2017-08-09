import React from 'react';
import classNames from 'classnames';
import Selectable from "./Selectable.jsx"


import _s from 'assets/css/SelectedList.css';

function SelectedList({ committees }) {
  return (
    <div>
      {
        committees.map(committee => (
          <Selectable key={committee.name} committee={committee} />
        ))
      }
    </div>
  );
}

export default SelectedList;
