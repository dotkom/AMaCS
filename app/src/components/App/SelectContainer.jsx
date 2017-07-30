import React from "react";

//import Selectable from "./Selectable.jsx"
//import SelectedList from "./SelectedList.jsx"

function SelectContainer({ committees }) {
  return(
    <div>
      { committees.map((committee) => (
        <Selectable key={committee.name} committee={committee} />
      ))}
    </div>
  )
}

export default SelectContainer;
