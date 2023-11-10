// import React,{useState} from "react";
// const App = () => {
// const [name,setName] = useState("")
//   return <h1>fdf {name}</h1>
// }
// export default App

import React from "react";
import { Button, Card } from "./component";
class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "iHunar 123", show: false };
  }
  UpdatValue = () => {
    this.setState({ name: "iHunar" })
  }
  render() {
    let { name, show } = this.state
    return (
      <div>
        {this.state.show &&
          <h2>{this.state.name === "" ? "iSKillers" : this.state.name}</h2>}
        <button onClick={() => this.setState({ show: !this.state.show })}>Show</button>
        <input
          type="text"
          value={this.state.name}
          onChange={(value) => this.setState({ name: value.target.value })}
          placeholder="Name"
        />

        <hr />
        {/* {show &&
          <h2>{name === "" ? "iSKillers" : name}</h2>}
        <button onClick={()=> this.setState({show:!show})}>Show</button>
        <input
          type="text"
          value={name}
          onChange={(value) => this.setState({ name: value.target.value })}
          placeholder="Name"
        /> */}

        <button onClick={this.UpdatValue}>Update</button>
        <Button title="Log Out" onClick={() => alert("Log Out")} />

        <hr />
        <Card bgColor="blue" />
      </div>
    );
  }
}
export default App;
