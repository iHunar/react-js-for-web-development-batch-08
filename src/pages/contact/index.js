import React from "react";
import { useSelector } from "react-redux";
import List from "../../components/List";
const Contact = () => {
  const { fullName,isDark } = useSelector((state) => state.useReducer);
  return (
    <div>
      <h1  style={{
          backgroundColor: isDark ? "black" : "gray",
          color: isDark ? "white" : "black",
        }}>Contact:- {fullName}</h1>
      <List />
    </div>
  );
};
export default Contact;
