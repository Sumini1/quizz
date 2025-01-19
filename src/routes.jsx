import { ProtectedRouteAdmin, ProtectedRouteUser } from "./hoc/ProtectedRoutes";
import Home from "./pages/Home";
import SurveiSatu from "./pages/Survei/SurveiSatu";
import SurveiDua from "./pages/Survei/SurverDua";
import SurveiTiga from "./pages/Survei/SurveiTiga";
import PageSatu from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSatu";
import PageDua from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageDua";
import PilihCategory from "./pages/Category/PilihCategory";
import PageTiga from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageTiga";
import PageEmpat from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageEmpat";
import PageLima from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageLima";
import ErrorPage from "./pages/ErrorPage";
import PageEnam from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageEnam";
import PageTujuh from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageTujuh";
import PageDelapan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageDelapan";
import PageSembilan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSembilan";
import PageSepuluh from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSepuluh";
import Screen2 from "./pages/onBoarding/Screen2";
import Screen3 from "./pages/onBoarding/Screen3";
import LoginRegister from "./pages/Auth/LoginRegister";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RegisterEmail  from "./pages/Auth/RegisterEmail";
import RegisterGmail  from "./pages/Auth/RegisterGmail";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import VerifikasiEmail from "./pages/Auth/VerifikasiEmail";
import NewPassword from "./pages/Auth/NewPassword";
import TestIlmuIslam from "./pages/Test/TestIlmuIslam";
import IntroTestDua from "./pages/Test/IntroTestDua";
import ListCategoryPemula from "./pages/Category/ListCategoryPemula";
import ListLevelKeimanan from "./pages/Category/ListLevelKeimanan";
import PageSatuKeimanan from "./pages/Ujian/Pemula/Keimanan/Level2-keimanan/PageSatuKeimanan";
import ChooseThemeQuiz from "./pages/Category/ChooseThemeQuiz";
import AppearanceKotak from "./pages/AppearancePage/Kotak";
import Settings from "./pages/ButtonMobile/Settings";
import Profil from "./pages/Settings/Profil"; 
import Beranda from "./pages/ButtonMobile/Beranda";
import Pembelajaran from "./pages/ButtonMobile/Pembelajaran";
import Progress from "./pages/ButtonMobile/Progress";
import Accordion from "./pages/Test/Accordion";
import AccordionTingkatBelajar from "./components/ModalAccordion/AccordionTingkatBelajar";
import AccordionDasarIslam from "./components/ModalAccordion/AccordionDasarIslam";
import DonaturPage from "./components/Appearance/DonaturPage";
import Notifikasi from "./pages/Settings/Notifikasi";
import SaranMasukan from "./pages/Settings/SaranMasukan";
import Sertifikat from "./pages/Settings/Sertifikat";
import Pengingat from "./pages/Settings/NotifElement/Pengingat";
import SertifikatDasarIslam from "./pages/Settings/SertifikatCategory/SertifikatDasarIslam";
import KumpulanUjianDasarIslam from "./pages/Settings/SertifikatCategory/KumpulanUjianDasarIslam";
import TanyaJawab from "./pages/Settings/TanyaJawab";
import Tampilan from "./pages/Settings/Tampilan";
import Kontributor from "./pages/Settings/Kontribusi/Kontributor";
import ProfilPengguna from "./pages/Settings/ProfilPengguna";
import RiwayatDonasi from "./pages/Settings/ProfilKontributor/RiwayatDonasi";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/screen2",
    element: <Screen2 />,
  },
  {
    path: "/screen3",
    element: <Screen3 />,
  },
  {
    path: "/login-register",
    element: <LoginRegister />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register-email",
    element: <RegisterEmail />,
  },
  {
    path: "/register-gmail",
    element: <RegisterGmail />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verifikasi-email",
    element: <VerifikasiEmail />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/survei",
    element: <SurveiSatu />,
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
    path: "/test-ilmu-islam",
    element: <TestIlmuIslam />,
  },
  {
    path: "/intro-test-dua",
    element: <IntroTestDua />,
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
    path: "/list-category-pemula",
    element: <ListCategoryPemula />,
  },
  {
    path: "/list-level-keimanan",
    element: <ListLevelKeimanan />,
  },

  {
    path: "/page-tiga",
    element: <PageTiga />,
  },
  {
    path: "/page-empat",
    element: <PageEmpat />,
  },
  {
    path: "/page-lima",
    element: <PageLima />,
  },
  {
    path: "/page-enam",
    element: <PageEnam />,
  },
  {
    path: "/page-tujuh",
    element: <PageTujuh />,
  },
  {
    path: "/page-delapan",
    element: <PageDelapan />,
  },
  {
    path: "/page-sembilan",
    element: <PageSembilan />,
  },
  {
    path: "/page-sepuluh",
    element: <PageSepuluh />,
  },
  {
    path: "/page-satu-keimanan",
    element: <PageSatuKeimanan />,
  },
  {
    path: "/choose-theme-quiz",
    element: <ChooseThemeQuiz />,
  },
  {
    path: "/appearance-kotak",
    element: <AppearanceKotak />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/beranda",
    element: <Beranda />,
  },
  {
    path: "/pembelajaran",
    element: <Pembelajaran />,
  },
  {
    path: "/progress",
    element: <Progress />,
  },
  {
    path: "/accordion",
    element: <Accordion />,
  },
{
path : "/accordion-tingkat-belajar",
element : <AccordionTingkatBelajar />
},
{
  path : "/accordion-dasar-islam",
  element : <AccordionDasarIslam />
  },
  {
    path: "/donatur-page",
    element: <DonaturPage />,
  },
  {
    path: "/notifikasi",
    element: <Notifikasi />,
  },
  {
    path: "/saran-masukan",
    element: <SaranMasukan />,
  },
  {
    path: "/sertifikat",
    element: <Sertifikat />,
  },
  {
    path: "/pengingat",
    element: <Pengingat />,
  },
  {
    path: "/sertifikat-dasar-islam",
    element: <SertifikatDasarIslam />,
  },
  {
    path: "/tanya-jawab",
    element: <TanyaJawab />,
  },
  {
    path: "/tampilan",
    element: <Tampilan />,
  },
  {
    path: "/kontributor",
    element: <Kontributor />,
  },
  {
    path: "/profil-pengguna",
    element: <ProfilPengguna />,
  },
  {
    path: "/riwayat-donasi",
    element: <RiwayatDonasi />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/kumpulan-ujian-dasar-islam",
    element: <KumpulanUjianDasarIslam />,
  }
];

export default routes;
