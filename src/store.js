import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/dataSlice";
const store = configureStore({
  reducer: {
    data: dataReducer
  },
})
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('datas', JSON.stringify(state.data.list));
});
export default store;