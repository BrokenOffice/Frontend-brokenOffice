import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTitle = createAction("SET_NEW_REPORT_TITLE");
export const setDescription = createAction("SET_NEW_REPORT_DESCRIPTION");
export const setOffice = createAction("SET_NEW_REPORT_OFFICE");
export const clearReport = createAction("SET_REPORT");


const initialState = {
  title: "",
  description: "",
  office: {},
};

const reducer = createReducer(initialState, {
  [setTitle]: (state, action) => {
    state.title = action.payload;
  },
  [setDescription]: (state, action) => {
  state.description = action.payload;
  },
  [setOffice]: (state, action) => {
    state.office = action.payload;
  },
  [clearReport]: (state, action) => {
    state = initialState
  },
});

export default reducer;