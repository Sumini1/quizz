import AppearanceKotak from "./Users/Components/AppearanceKotak";
import Readings from "./Users/Components/Readings";

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
