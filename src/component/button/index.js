import React from "react";
class Button extends React.Component {
    render() {
        let { onClick } = this.props
        console.log("button comp", this.props)
        return (
            <button onClick={onClick}>{this.props.title}</button>
        )
    }
}
export default Button