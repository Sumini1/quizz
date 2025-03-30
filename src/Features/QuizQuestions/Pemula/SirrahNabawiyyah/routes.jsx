import PageSatuSirrah from "../../Pemula/SirrahNabawiyyah/User/Component/PageSatuSirrah";
import FinalScored from "../../Pemula/SirrahNabawiyyah/User/Component/FinalScored";
import UserQuizzes from "./User/Component/UserQuuzzesById";

export const sirrahRoutes = [
    {
        path: "/pemula/sirrah-nabawiyyah",
        element: <PageSatuSirrah />,
    },
    {
        path: "/pemula/sirrah-nabawiyyah/final-scored",
        element: <FinalScored />,
    },
    {
        path: "/pemula/sirrah-nabawiyyah/user-quizzes",
        element: <UserQuizzes />,
    },
];