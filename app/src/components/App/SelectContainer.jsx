import React from "react";

import Selectable from "./Selectable.jsx"
import SelectedList from "./SelectedList.jsx"

import _ from "lodash";

function SelectContainer({ committees, selected, onChange, ordered }) {
  const selectedMap = {};
  const comitteeMap = {};
  for(let i of selected)
    selectedMap[i] = true;

  for(let i of committees)
    comitteeMap[i.name] = i;

  const _handleChange = (name) => {
    const newSelected = _.clone(selected);
    let inList = false;
    for(let i in newSelected){
      if(newSelected[i] == name){
        newSelected.splice(i,1);
        inList = true;
        break;
      }
    }
    if(!inList)
      newSelected.push(name);
    if(onChange)
      onChange(newSelected);
  }

  let selectedElements = selected.map((name) => {
    let committee = comitteeMap[name];
    return <Selectable key={name} onClick={() => _handleChange(committee.name)} key={committee.name} committee={committee} selected={false} />
  });
  
  return(
    <div>
      <ul>
        { committees.map((committee) => (
          <Selectable onClick={() => _handleChange(committee.name)} key={committee.name} committee={committee} selected={committee.name in selectedMap} />
        ))}
      </ul>
      <span>---Selected:---</span>
      {ordered ? 
        <ol>
          {selectedElements}
        </ol> : 
        <ul>
          {selectedElements}
        </ul>
      }
    </div>
  )
}

export default SelectContainer;
