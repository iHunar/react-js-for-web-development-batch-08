import React from "react";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};
export default App;
