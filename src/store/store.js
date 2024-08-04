import { configureStore } from "@reduxjs/toolkit";
import volunteers from "./volunteers.slice";
import form from "./form";

const store = configureStore({
  reducer: {
    volunteers,
    form,
  },
});

export default store;
