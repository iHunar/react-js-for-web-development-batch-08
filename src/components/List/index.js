import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFullName } from "../../redux/action";
const List = () => {
  const dispatch = useDispatch();
  const [phone,setPhone] = useState("Fsdfs")
  const { fullName, isDark } = useSelector((state) => state.useReducer);
  return (
    <div>
      <h1
        style={{
          backgroundColor: isDark ? "black" : "gray",
          color: isDark ? "white" : "black",
        }}
      >
        List:- {fullName}
      </h1>
      <button onClick={() => dispatch(setFullName("info"))}>Update</button>
    </div>
  );
};
export default List;
