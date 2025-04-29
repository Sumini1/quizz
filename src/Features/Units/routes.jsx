import AppearanceKotak from "./Users/Components/AppearanceKotak";
import Readings from "./Users/Components/Readings";
import TemaBelajar from "./Users/Components/TemaBelajar";
import ReadingDetail from "./Users/Components/ReadingDetail";

export const unitsRoutes = [
  {
    path: "/themes-or-levels/:id",
    element: <AppearanceKotak />,
  },
  {
    path: "/readings/:id",
    element: <Readings />,
  },
  {
    path: "/tema-belajar/:themeId",
    element: <TemaBelajar />,
  },
  {
    path: "/reading-detail/:id",
    element: <ReadingDetail />,
  },
];
