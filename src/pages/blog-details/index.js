import React from "react";
import { useLocation } from "react-router-dom";
const BlogDetails = () => {
  const location = useLocation();
  console.log("location", location);
//   const item = location.state.data;
  return (
    <div>
      <h1>Blog Details</h1>
      <p>{location.pathname.slice(14)}</p>
      {/* <div className="card">
        <h3>{item.title}</h3>
        <img src={item.image} style={{ width: "100%" }} />
        <p>{item.des} ...</p>
      
      </div> */}
    </div>
  );
};
export default BlogDetails;
