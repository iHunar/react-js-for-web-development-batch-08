import React, { useEffect } from "react";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
const App = () => {
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("isDark"));
    console.log(">>>>>>getData app.js",getData)
    if (getData === null) {
      localStorage.setItem("isDark", JSON.stringify(true));
    }
    //  else {
    //   const getData = JSON.parse(localStorage.getItem("isDark"));
    //   if (getData) {
    //     dispatch(setIsDark(true));
    //   } else {
    //     dispatch(setIsDark(false));
    //   }
    // }
  }, []);
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};
export default App;
