import Progress from "./Components/Home/Progress";
import UserPointsDashboard from "./Components/UserPointsDashboard";

export const progressRoutes = [
  {
    path: "/progress",
    element: <Progress />,
  },
  {
    path: "/user-points-dashboard",
    element: <UserPointsDashboard />,
  },
];
