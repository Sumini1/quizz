import AppearanceKotak from "./Components/AppearanceKotak";
import Readings from "./Components/Readings";   

export const unitsRoutes = [
    {
        path: "/themes-or-levels/:id",
        element: <AppearanceKotak />,
    },
    {
        path: "/readings/:id",
        element: <Readings />,
    },
];