import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Selectable from "./Selectable"

import _s from 'assets/css/SelectedList.scss';

const SortableSelectable = SortableElement(Selectable);

function SelectedList({ committees, disabled, totalChoices }) {
  return (
    <div className={_s.container}>
      {
        [...Array(totalChoices)].map((_, i) => {
          const committee = (committees && committees.length > i)  ? committees[i] : null;
          const key = committee  ? committee.key : `empty${i}`;
          return (
            <div key={key} className={_s.committee}>
              { !disabled && <div className={_s.number}>{ i + 1 }</div> }

              { committee && (
                <SortableSelectable
                  index={i}
                  committee={committee}
                  disabled={disabled}
                  draggable={!disabled} // Need this prop twice, as the HOC does not pass on disabled.
                  small
                />
              )}
            </div>
          );
        })
      }
    </div>
  );
}

export default SortableContainer(SelectedList);
