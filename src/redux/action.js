export const FULL_NAME = "FULL_NAME";
export const IS_DARK = "IS_DARK";
export const setFullName = (fullName) => (dispatch) => {
  dispatch({
    type: FULL_NAME,
    payload: fullName,
  });
};
export const setIsDark = (isDark) => (dispatch) => {
  dispatch({
    type: IS_DARK,
    payload: isDark,
  });
};
