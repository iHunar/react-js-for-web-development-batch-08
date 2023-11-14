import React from "react";
import { CircularProgress } from "@mui/material";
const Button = ({ title, border, onClick, loading }) => {
  // const addData = () => {
  //     //
  //     console.log("addData")
  // }
  // const updateData = () => {
  //     alert("updateData")
  // }
  // return <button onClick={()=> title === "Add" ? addData() : updateData()} style={{ backgroundColor: border ? "white" : "gray", borderWidth: border ? 1 : 0, borderRadius: border ? "100px" : "5px" }}>{title === "" ? "Add" : title}</button>
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: border ? "white" : "gray",
        borderWidth: border ? 1 : 0,
        borderRadius: border ? "100px" : "5px",
      }}
    >
      {loading ? <CircularProgress size={10} /> : title}
    </button>
  );
};
export default Button;
