import { configureStore } from "@reduxjs/toolkit";
import focusReducer from "./TargetSlice";

const store = configureStore({
  reducer: {
    focus: focusReducer,
  },
});

export default store;
