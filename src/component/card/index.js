import React from "react";
class Card extends React.Component {
  constructor() {
    super();
    this.state = { bgColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ bgColor: this.props.bgColor });
    }, 2000);
  }

  //   static getDerivedStateFromProps(props, state) {
  //     return { bgColor: props.bgColor};
  //   }

  //   shouldComponentUpdate() {
  //     return false;
  //   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//       "Before the update, the color was " + prevState.bgColor;
//   }
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =   "After the update, the color was " + this.state.bgColor;;
//   }

  render() {
    let { bgColor } = this.state;
    // let { bgColor } = this.props
    return (
      <div>
        {/* <h1 style={{backgroundColor:this.state.bgColor}}>Card</h1> */}
        <h1 style={{ backgroundColor: bgColor }}>Card</h1>
        {/* <h1 style={{ backgroundColor: this.props.bgColor }}>Card</h1> */}
        {/* <button onClick={() => this.setState({ bgColor: "gray" })}> */}
        <div id="div1"></div>
        <div id="div2"></div>
        <button onClick={() => this.setState({ bgColor: "gray" })}>
          Update Color
        </button>


      </div>
    );
  }
}
export default Card;
