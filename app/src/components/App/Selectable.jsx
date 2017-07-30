import React from "react";

const style = {
  selectable: {
    margin: "1rem",
  },
  img: {
    height: 60,
    width: 60,
  },
  text: {
    display: "inline-block",
  }
};

function Selectable({ committee, onClick }) {
  return(
    <div style={style.selectable} onClick={onClick}>
      <img style={style.img} src={committee.icon} />
      <p style={style.text} >{committee.name}</p>
    </div>
  )
}

export default Selectable;