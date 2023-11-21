import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "../contact";
import { setFullName, setIsDark } from "../../redux/action";
const Home = () => {
  const dispatch = useDispatch();
  const { fullName, isDark } = useSelector((state) => state.useReducer);
  return (
    <div>
      <h1
        style={{
          backgroundColor: isDark ? "black" : "gray",
          color: isDark ? "white" : "black",
        }}
      >
        Home:- {fullName}
      </h1>
      <input
        type="text"
        value={fullName}
        onChange={(val) => dispatch(setFullName(val.target.value))}
      />
      <Contact />

      <button onClick={() => dispatch(setIsDark(!isDark))}>
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
};
export default Home;
