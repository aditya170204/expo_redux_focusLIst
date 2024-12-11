import { createSlice } from "@reduxjs/toolkit";

import React from "react";
// const initialState = {
//   Targets: [],
// };
const TargetSlice = createSlice({
  initialState: {
    Targets: [],
  },
  name: "Targets",
  reducers: {
    addTarget: (state, action) => {
      state.Targets.push({ id: Date.now(), text: action.payload });
    },
    editTarget: (state, action) => {
      const { id, text } = action.payload;
      const aim = state.Targets.find((aim) => aim.id === id);
      if (aim) aim.text = text;
    },
    deleteTarget: (state, action) => {
      state.Targets = state.Targets.filter((aim) => aim.id !== action.payload);
    },
  },
});

export const { addTarget, editTarget, deleteTarget } = TargetSlice.actions;
export default TargetSlice.reducer;
