import React from "react";
const List = ({ list, children }) => {
  return (
    <div>
      <p>List</p>
      <ul>
        {list?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <div style={{ border: "1px solid red", margin: "5px" }}>{children} </div>
    </div>
  );
};
export default List;
