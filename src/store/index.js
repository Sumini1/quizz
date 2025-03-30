import { configureStore } from "@reduxjs/toolkit";
// import categoryReducer from "../reducer/categorySlice";
// import categoryIdReducer from "../reducer/categoryIdSlice";
import tooltipsReducer from "../reducer/tooltipsSlice";
import modalReducer from "../reducer/modalSlice";
import registerReducer from "../Features/Auth/Reducer/registerSlice";
import loginReducer from "../Features/Auth/Reducer/loginSlice";
import difficultiesReducer from "../Features/Difficulties/Reducer/difficultiesSlice";
import usersReducer from "../reducer/usersSlice";
import listCategoriesReducer from "../Features/ListCategories/Reducer/listCategories";
import themesOrLevelsReducer from "../Features/ThemesOrLevels/Reducer/themesOrLevelsSlice";
import unitsReducer from "../Features/Units/Reducer/unitsSlice";
import readingsReducer from "../Features/Units/Reducer/readingsSlice";
import quizzesReducer from "../Features/Units/Reducer/quizzesSlice";
import quizQuestionsReducer from "../Features/Units/Reducer/quizQuestionsSlice";
import forgotPasswordReducer from "../Features/Auth/Reducer/forgotPasswordSlice";
// import googleReducer from "../pages/Features/Auth/Reducer/googleSlice";
import evaluationsReducer from "../Features/Units/Reducer/evaluationsSlice";
import userQuizzesReducer from "../Features/QuizQuestions/Pemula/SirrahNabawiyyah/User/Reducer/userQuizzesSlice";
import saveUserQuizProgressReducer from "../Features/QuizQuestions/Pemula/SirrahNabawiyyah/User/Reducer/userQuizzesSave";

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
    // google: googleReducer,
    evaluations: evaluationsReducer,
    userQuizzes: userQuizzesReducer,
    saveUserQuizProgress: saveUserQuizProgressReducer,
  },
});

export default store;
