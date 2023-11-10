import React from "react";
class Card extends React.Component {
    constructor() {
        super();
        this.state = { bgColor: "red" };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ bgColor: this.props.bgColor })
        }, 2000);
    }
    render() {
        let { bgColor } = this.state;
        // let { bgColor } = this.props
        return (
            <div>
                {/* <h1 style={{backgroundColor:this.state.bgColor}}>Card</h1> */}
                <h1 style={{ backgroundColor: bgColor }}>Card</h1>
                {/* <h1 style={{ backgroundColor: this.props.bgColor }}>Card</h1> */}
                {/* <button onClick={() => this.setState({ bgColor: "gray" })}> */}
                <button onClick={() => this.setState({ bgColor: "gray" })}>
                    Update Color
                </button>
            </div>
        );
    }
}
export default Card;
