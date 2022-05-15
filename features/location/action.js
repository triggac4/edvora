export const SET_ALL_STATE = "SET_ALL_STATE";
export const SET_ALL_CITY = "SET_ALL_CITY";
export const SET_SELECTED_STATE = "SET_SELECTED_STATE";
export const SET_SELECTED_CITY = "SET_SELECTED_CITY";

export const setAllLocation = (state, city) => (dispatch) => {
  const ogState = new Set([...state]);
  const ogCity = new Set([...city]);
  dispatch({
    type: SET_ALL_STATE,
    payload: [...ogState],
  });
  dispatch({
    type: SET_ALL_CITY,
    payload: [...ogCity],
  });
};

export const setState = (data) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_STATE,
    payload: data,
  });
};

export const setCity = (data) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_CITY,
    payload: data,
  });
};
