import { FULL_NAME, IS_DARK } from "./action";
const INITIAL_STATE = {
  fullName: "iSkillers",
  isDark: true,
  users: [],
};

function useReducer(state = INITIAL_STATE, actoin) {
  switch (actoin.type) {
    case FULL_NAME:
      return { ...state, fullName: actoin.payload };
    case IS_DARK:
      return { ...state, isDark: actoin.payload };
    default:
      return state;
  }
}
export default useReducer;
