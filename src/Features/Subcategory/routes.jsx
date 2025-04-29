// import ListCategories from "./Users/Components/Subcategory";
import Subcategory from "./Users/Components/Subcategory";
import Category from "./Users/Components/Category";
import Aqidah from "./Users/Components/Aqidah";
import ThemesOrLevelsDetails from './Users/Components/ThemesOrLevelsDetail';


export const listCategoriesRoutes = [
  // {
  //   path: "/categories/:id",
  //   element: <ListCategories />,
  // },
  {
    path: "/subcategory/:difficultyId",
    element: <Subcategory />,

  },
  {
    path: "/categories",
    element: <Category />,
  },
  {
    path: "/category/:id",
    element: <Aqidah />,
  },
  {
    path: "/theme-detail/:id",
    element: <ThemesOrLevelsDetails />,
  },
  
];
