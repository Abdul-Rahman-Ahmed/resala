import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import link from "../env";

export const getVolunteers = createAsyncThunk(
  "volunteers",
  async (param, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch(`${link()}/allVolunteers`);
      const data = await res.json();
      return data.volunteers;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const edit = createAsyncThunk("edit", async (param, thankapi) => {
  const { rejectWithValue } = thankapi;
  const { id, date } = param;
  try {
    const res = await fetch(`${link()}/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, date }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    rejectWithValue(err);
  }
});

const volunteers = createSlice({
  name: "volunteers",
  initialState: {
    volunteers: [],
    edit: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getVolunteers.fulfilled, (state, action) => {
      state.volunteers = action.payload;
    });
    builder.addCase(edit.fulfilled, (state, action) => {
      console.log(action.payload);
      state.edit = action.payload;
    });
  },
});

export default volunteers.reducer;
