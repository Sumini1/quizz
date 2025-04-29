import ExamSatu from "./User/Pemula/ExamSatu";
import FinalScoredExamSatu from "./User/Pemula/FinalScoredExamSatu";

export const examRoutes = [
    {
        path: "/pemula/exam-satu/:id",
        element: <ExamSatu />,
    },
    {
        path: "/pemula/exam-satu/final-scored",
        element: <FinalScoredExamSatu />,
    },
];