import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../reducer/categorySlice";
// import categoryIdReducer from "../reducer/categoryIdSlice";
import tooltipsReducer from "../reducer/tooltipsSlice";
import modalReducer from "../reducer/modalSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    // categoryId: categoryIdReducer,
    tooltips: tooltipsReducer,
    modal: modalReducer,
  },
});

export default store;
