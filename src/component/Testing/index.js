import React from "react";
class Testing extends React.Component {
  componentWillUnmount() {
    alert("component deleted");
  }
  render() {
    return (
      <div>
        <h1>Testing</h1>
      </div>
    );
  }
}
export default Testing;
