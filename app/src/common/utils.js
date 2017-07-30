import React from "react";
import _ from "lodash";



export function RenderComponent(component,...a){
  const combined = _.assign({},...a);
  const props = _.omit(combined,["children"]);
  const children = combined.children;
  return React.createElement(component,props,children);
}