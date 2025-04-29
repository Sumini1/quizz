import QuizQuestions1 from "./Components/User/Pemula/QuizQuestions1";
import FinalScoredQuizQuestions from "./Components/User/Pemula/FinalScoredQuizQuestions";
export const quizzesRoutes = [
    {
        path: "/pemula/quiz-questions-1",
        element: <QuizQuestions1 />,
    },
    {
        path: "/pemula/quiz-questions-1/final-scored",
        element: <FinalScoredQuizQuestions />,
    },
];

