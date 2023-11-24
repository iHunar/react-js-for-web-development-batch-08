import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "../contact";
import { setFullName, setIsDark } from "../../redux/action";
const Home = () => {
  const dispatch = useDispatch();
  const { fullName, isDark, users } = useSelector((state) => state.useReducer);
  const getData = JSON.parse(localStorage.getItem("isDark"));
  useEffect(() => {
    if (getData) {
      dispatch(setIsDark(true));
    } else {
      dispatch(setIsDark(false));
    }
    // if (!getData) {
    //   localStorage.setItem("isDark", JSON.stringify(true));
    // }
  }, []);
  // const addDataHandler = () => {
  // var user = {
  //   name: "iHunar",
  //   email: "info@gamil.com",
  // };
  // localStorage.setItem("testing", "User 1");
  // JSON.stringify();  || add
  // JSON.parse()  || get
  // localStorage.setItem("users", JSON.stringify(user));
  // const getData = localStorage.getItem("users");
  // const getData = JSON.parse(localStorage.getItem("users"));
  // console.log(">>>>>> getData", getData);
  // };

  const updateDarkMode = () => {
    if (getData) {
      localStorage.setItem("isDark", JSON.stringify(false));
      dispatch(setIsDark(false));
    } else {
      localStorage.setItem("isDark", JSON.stringify(true));
      dispatch(setIsDark(true));
    }
  };
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

      <button onClick={updateDarkMode}>{isDark ? "Light" : "Dark"}</button>

      {/* <button onClick={addDataHandler}>add data</button> */}
    </div>
  );
};
export default Home;
