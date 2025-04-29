import EvaluationSatu from "./Users/Pemula/EvaluationSatu";
import FinalScoredEvaluationSatu from "./Users/Pemula/FinalScoredEvaluationSatu";

export const evaluationRoutes = [
    {
        path: "/pemula/evaluations-satu/:id",
        element: <EvaluationSatu />,
    },
    {
        path: "/pemula/evaluations-satu/final-scored",
        element: <FinalScoredEvaluationSatu />,
    },
];