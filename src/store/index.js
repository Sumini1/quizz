import { configureStore } from "@reduxjs/toolkit";
// import categoryReducer from "../reducer/categorySlice";
// import categoryIdReducer from "../reducer/categoryIdSlice";
import tooltipsReducer from "../reducer/tooltipsSlice";
import modalReducer from "../reducer/modalSlice";
import registerReducer from "../Features/Auth/Reducer/registerSlice";
import loginReducer from "../Features/Auth/Reducer/loginSlice";
import difficultiesReducer from "../Features/Difficulties/Reducer/difficultiesSlice";
import usersReducer from "../reducer/usersSlice";
// import listCategoriesReducer from "../Features/Subcategory/Users/Components/ListCategories";
import themesOrLevelsReducer from "../Features/ThemesOrLevels/Reducer/themesOrLevelsSlice";
import unitsReducer from "../Features/Units/Reducer/unitsSlice";
import readingsReducer from "../Features/Units/Reducer/readingsSlice";
import quizzesReducer from "../Features/Units/Reducer/quizzesSlice";
import quizQuestionsReducer from "../Features/Units/Reducer/quizQuestionsSlice";
import forgotPasswordReducer from "../Features/Auth/Reducer/forgotPasswordSlice";
// import googleReducer from "../pages/Features/Auth/Reducer/googleSlice";
import evaluationReducer from "../Features/Units/Reducer/evaluationsSlice";
// import userQuizzesReducer from "../Features/QuizQuestions/Pemula/SirrahNabawiyyah/User/Reducer/userQuizzesSlice";
import saveUserQuizProgressReducer from "../Features/QuizQuestions/Pemula/SirrahNabawiyyah/User/Reducer/userQuizzesSave";
import evaluationQuestionsReducer from "../Features/Evaluations/Reducer/evaluationsQuestion";
import examsReducer from "../Features/Units/Reducer/examSlice";
import saveUserEvaluationProgressReducer, { saveUserEvaluationProgress } from "../Features/Evaluations/Reducer/userEvaluations";
import examQuestionsReducer from "../Features/Exams/Reducer/examQuestions"
import saveUserExamProgressReducer, { saveUserExamProgress } from "../Features/Exams/Reducer/userExams"
import subcategoryReducer from "../Features/Subcategory/Reducer/subcategory"
import userUnitsReducer from "../Features/Units/Reducer/userUnitsSlice"
import allQuestionReducer from "../Features/AllQuestions/Questions"
import userQuizzesReducer from "../Features/AllQuestions/userQuizzes"
import userEvaluationsReducer from "../Features/AllQuestions/userEvaluations"
import userExamsReducer from "../Features/AllQuestions/userExams"
import userPointReducer from "../Features/Progress/Reducer/userPoints"
import userProfileReducer from "../Features/Settings/Reducer/userProfile"


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
    // listCategories: listCategoriesReducer,
    themesOrLevels: themesOrLevelsReducer,
    units: unitsReducer,
    readings: readingsReducer,
    quizzes: quizzesReducer,
    quizQuestions: quizQuestionsReducer,
    forgotPassword: forgotPasswordReducer,
    // google: googleReducer,
    evaluations: evaluationReducer,
    // userQuizzes: userQuizzesReducer,
    saveUserQuizProgress: saveUserQuizProgressReducer,
    evaluationQuestions: evaluationQuestionsReducer,
    exams: examsReducer,
    saveUserEvaluationProgress: saveUserEvaluationProgressReducer,
    examQuestions: examQuestionsReducer,
    saveUserExamProgress: saveUserExamProgressReducer,
    subcategory: subcategoryReducer,
    userUnits : userUnitsReducer,
   allQuestion: allQuestionReducer,
   userQuizzes: userQuizzesReducer,
   userEvaluations: userEvaluationsReducer,
   userExams: userExamsReducer,
   userPoint : userPointReducer,
   userProfile : userProfileReducer
  },
});

export default store;
