import React from "react";
const Button = ({ title, border,onClick }) => {
    // const addData = () => {
    //     //
    //     console.log("addData")
    // }
    // const updateData = () => {
    //     alert("updateData")
    // }
    // return <button onClick={()=> title === "Add" ? addData() : updateData()} style={{ backgroundColor: border ? "white" : "gray", borderWidth: border ? 1 : 0, borderRadius: border ? "100px" : "5px" }}>{title === "" ? "Add" : title}</button>
    return <button onClick={onClick}  style={{ backgroundColor: border ? "white" : "gray", borderWidth: border ? 1 : 0, borderRadius: border ? "100px" : "5px" }}>{title === "" ? "Add" : title}</button>
}
export default Button