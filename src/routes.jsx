import { ProtectedRouteAdmin, ProtectedRouteUser } from "./hoc/ProtectedRoutes";
import Home from "./pages/Home";
import SurveiSatu from "./pages/Survei/SurveiSatu";
import SurveiDua from "./pages/Survei/SurverDua";
import SurveiTiga from "./pages/Survei/SurveiTiga"; 
import IntroTestSatu from "./pages/Test/IntroTestSatu";
import IntroTestDua from "./pages/Test/IntroTestDua";
import TestIlmuIslamIntroPage from "./pages/Test/TestIlmuIslamIntroPage";
import PageSatu from "./pages/Ujian/Pemula/PageSatu";
import PageDua from "./pages/Ujian/Pemula/PageDua";
import PilihCategory from "./pages/Category/PilihCategory";
import MenuCategory from "./pages/Category/MenuCategory";




export const routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/survei-satu",
    element: <SurveiSatu />,
  },
  {
    path: "/survei-dua",
    element: <SurveiDua />,
  },
  {
    path: "/survei-tiga",
    element: <SurveiTiga />,
  },
  {
    path: "/intro-test-satu",
    element: <IntroTestSatu />,
  },
  {
    path: "/intro-test-dua",
    element: <IntroTestDua />,
  },
  {
    path: "/test-ilmu-islam-intro-page",
    element: <TestIlmuIslamIntroPage />,
  },
  {
    path: "/page-satu",
    element: <PageSatu />,
  },
  {
    path: "/page-dua",
    element: <PageDua />,
  },
  {
    path: "/pilih-category",
    element: <PilihCategory />,
  },
  {
    path: "/menu-category",
    element: <MenuCategory />,
  },
];