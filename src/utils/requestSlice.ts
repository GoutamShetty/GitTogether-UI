import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequests: (__, action) => {
      return action.payload;
    },
    removeRequest: (state: any, action) => {
      return state.filter((request: any) => request._id !== action.payload);
    },
  },
});

export const { addRequests, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
