import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnections: (__, action) => {
      return action.payload;
    },
    removeConnections: () => null,
  },
});

export const { addConnections } = connectionSlice.actions;
export default connectionSlice.reducer;
