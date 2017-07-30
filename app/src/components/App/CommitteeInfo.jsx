import React from "react";

const style = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    width: "24rem",
    borderStyle: "solid",
    border: "2px",
    padding: "0.5rem",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    margin: "1.5rem"
  },
  info: {
    display: "block"
  },
  name: {
    paddingLeft: "1rem",
    float: "right"
  },
  img: {
    float: "left"
  }
}

class CommitteeInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { showInfo } = this.state;
    this.setState({ showInfo: !showInfo })
  }

  render() {
    const { committee } = this.props
    const { showInfo } = this.state

    return(
      <div onClick={this.handleClick} style={style.card}>
        <section>
          <img style={style.img} height={60} width={60} src={ committee.icon } />
          <h3 style={style.name}>{ committee.name }</h3>
        </section>
        <p style={style.info}> 
          <br />
          { showInfo ? committee.info : undefined }
        </p>
      </div>
    )
  }
}

export default CommitteeInfo;
