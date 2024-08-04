import { createSlice } from "@reduxjs/toolkit";

const formslice = createSlice({
  name: "form",
  initialState: {
    id: "",
    date: "",
  },
  reducers: {
    updateId: (state, action) => {
      state.id = action.payload;
    },
    updateDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { updateId, updateDate } = formslice.actions;
export default formslice.reducer;
