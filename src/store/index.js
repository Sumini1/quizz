import { configureStore } from "@reduxjs/toolkit";
// import categoryReducer from "../reducer/categorySlice";
// import categoryIdReducer from "../reducer/categoryIdSlice";
import tooltipsReducer from "../reducer/tooltipsSlice";
import modalReducer from "../reducer/modalSlice";
import registerReducer from "../reducer/registerSlice";
import loginReducer from "../reducer/loginSlice";
import categoryDifficultiesReducer from "../reducer/categoryDifficultiesSlice";
import usersReducer from "../reducer/usersSlice"
import listCategoryReducer from "../reducer/listCategorySlice";
import themesOrLevelsReducer from "../reducer/themesOrLevelsSlice";

const store = configureStore({
  reducer: {
    // category: categoryReducer,
    // categoryId: categoryIdReducer,
    tooltips: tooltipsReducer,
    modal: modalReducer,
    register: registerReducer,
    login: loginReducer,
    categoryDifficulties : categoryDifficultiesReducer,
    users : usersReducer,
    listCategory : listCategoryReducer,
    themesOrLevels : themesOrLevelsReducer
  },
});

export default store;
