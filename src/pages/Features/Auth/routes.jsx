import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import LoginRegister from "./Components/LoginRegister";
import NewPassword from "./Components/NewPassword";
import PertanyaanKeamanan from "./Components/PertanyaanKeamanan";
import RegisterEmail from "./Components/RegisterEmail";
import SecurityQuestion from "./Components/SecurityQuestion";

export const authRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/login-register",
        element: <LoginRegister />,
    },
    {
        path: "/new-password",
        element: <NewPassword />,
    },
    {
        path: "/pertanyaan-keamanan",
        element: <PertanyaanKeamanan />,
    },
    {
        path: "/register-email",
        element: <RegisterEmail />,
    },
  

    {
        path: "/security-question",
        element: <SecurityQuestion />,
    },

];