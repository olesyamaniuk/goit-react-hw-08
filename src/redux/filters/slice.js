import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    changeNumberFilter: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filter.name;
export const selectNumberFilter = (state) => state.filter.number;
export const filterReducer = filterSlice.reducer;