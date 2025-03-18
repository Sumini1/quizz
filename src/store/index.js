import { configureStore } from "@reduxjs/toolkit";
// import categoryReducer from "../reducer/categorySlice";
// import categoryIdReducer from "../reducer/categoryIdSlice";
import tooltipsReducer from "../reducer/tooltipsSlice";
import modalReducer from "../reducer/modalSlice";
import registerReducer from "../pages/Features/Auth/Reducer/registerSlice";
import loginReducer from "../pages/Features/Auth/Reducer/loginSlice";
import difficultiesReducer from "../pages/Features/Difficulties/Reducer/difficultiesSlice";
import usersReducer from "../reducer/usersSlice";
import listCategoriesReducer from "../pages/Features/ListCategories/Reducer/listCategories";
import themesOrLevelsReducer from "../pages/Features/ThemesOrLevels/Reducer/themesOrLevelsSlice";
import unitsReducer from "../pages/Features/Units/Reducer/unitsSlice";
import readingsReducer from "../reducer/readingsSlice";
import quizzesReducer from "../pages/Features/Units/Reducer/quizzesSlice";
import quizQuestionsReducer from "../pages/Features/Units/Reducer/quizQuestionsSlice";
import forgotPasswordReducer from "../pages/Features/Auth/Reducer/forgotPasswordSlice";

const store = configureStore({
  reducer: {
    // category: categoryReducer,
    // categoryId: categoryIdReducer,
    tooltips: tooltipsReducer,
    modal: modalReducer,
    register: registerReducer,
    login: loginReducer,
    difficulties: difficultiesReducer,
    users: usersReducer,
    listCategories: listCategoriesReducer,
    themesOrLevels: themesOrLevelsReducer,
    units: unitsReducer,
    readings: readingsReducer,
    quizzes: quizzesReducer,
    quizQuestions: quizQuestionsReducer,
    forgotPassword: forgotPasswordReducer,
  },
});

export default store;
