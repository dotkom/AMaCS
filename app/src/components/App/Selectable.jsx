

import React from 'react';

import _ from 'lodash';

function Selectable(props){
  const {committee, selected} = props;
  const rest = _.omit(props,["committee","selected","children"])
  return (
    <li {...rest} style={{backgroundColor: selected ? "red" : "inherit" }}>
      {committee.name}
    </li>
  );
}

export default Selectable;