import { configureStore } from "@reduxjs/toolkit";
import soalReducer from "../reducer/SoalSlice";

const store = configureStore({
  reducer: {
    soal: soalReducer,
  },
});

export default store;
