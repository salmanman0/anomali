import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    list: []
  },
  reducers: {
    tambahNama: (state, action) => {
      state.list.push(action.payload);
    },
    hapusSemua: (state) => {
      state.list = [];
    } 
  }
});

export const { tambahNama, hapusSemua } = dataSlice.actions;
export default dataSlice.reducer;