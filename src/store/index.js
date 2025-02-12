import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../reducer/categorySlice";
// import categoryIdReducer from "../reducer/categoryIdSlice";
import tooltipsReducer from "../reducer/tooltipsSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    // categoryId: categoryIdReducer,
    tooltips: tooltipsReducer,
  },
});

export default store;
