import React from "react";
const Button = ({ title, border }) => {
    return <button style={{ backgroundColor: border ? "white" : "gray", borderWidth: border ? 1 : 0, borderRadius: border ? "100px" : "5px" }}>{title === "" ? "Add" : title}</button>
}
export default Button