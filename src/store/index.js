import { configureStore } from "@reduxjs/toolkit";
import soalReducer from "../reducer/SoalSlice";
import quizReducer from "../reducer/quizSlice";

const store = configureStore({
  reducer: {
    soal: soalReducer,
    quiz: quizReducer,
  },
});

export default store;
