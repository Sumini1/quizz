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
import RegisterEmail from "./pages/Auth/RegisterEmail";
import RegisterGmail from "./pages/Auth/RegisterGmail";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import VerifikasiEmail from "./pages/Auth/VerifikasiEmail";
import NewPassword from "./pages/Auth/NewPassword";
import TestIlmuIslam from "./pages/Test/TestIlmuIslam";
import IntroTestDua from "./pages/Test/IntroTestDua";
import ListCategoryPemula from "./pages/Category/ListCategoryPemula";
import ListLevelKeimanan from "./pages/Category/ListLevelKeimanan";
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
import Pangkat from "./pages/Settings/ProgressPage/Penghargaan/Pangkat";
import PangkatSebelumnya from "./pages/Settings/ProgressPage/Penghargaan/PangkatSebelumnya";
import SeluruhPangkat from "./pages/Settings/ProgressPage/Penghargaan/SeluruhPangkat";
import TokoBerlian from "./pages/Settings/ProgressPage/Statistik/TokoBerlian";
import DonasiSekarang from "./pages/Settings/ProgressPage/Statistik/DonasiSekarang";
import Lencana from "./pages/Settings/ProgressPage/LencanaBelajar/Lencana";
import HadiahPencapaian from "./pages/Settings/ProgressPage/HadiahPencapaianPage/HadiahPencapaian";
import Warna from "./pages/Settings/ProgressPage/TampilanPage/Warna";
import KhususDonatur from "./pages/Settings/ProgressPage/TampilanPage/KhususDonatur";
import Arsip from "./pages/PembelajaranPage/Arsip";
import KeteranganArtikel from "./components/Appearance/KeteranganArtikel";
import LaporanDukungan from "./pages/BerandaPage/LaporanDukungan";
import SedangDipelajari from "./pages/BerandaPage/SedangDipelajari";
import MateriTerbaru from "./pages/BerandaPage/MateriTerbaru";
import DasarIslamKeimanan from "./pages/BerandaPage/MateriTerbaruPage/DasarIslamKeimanan";
import JelajahiAplikasi from "./pages/BerandaPage/JelajahiAplikasi";
import AiChatBox from "./pages/BerandaPage/AiChatBox";
import LaporanDukunganMaret from "./pages/BerandaPage/LaporanDukunganPerBulan";
import DukungKami from "./pages/Settings/DukungKami";
import Informasi from "./pages/Settings/ProgressPage/DukungKamiPage/Informasi";
import Donatur from "./pages/Settings/ProgressPage/DukungKamiPage/Donatur";
import LatarBelakang from "./pages/Settings/ProgressPage/DukungKamiPage/LatarBelakang";
import Tujuan from "./pages/Settings/ProgressPage/DukungKamiPage/Tujuan";
import VisiMisi from "./pages/Settings/ProgressPage/DukungKamiPage/VisiMisi";
import Berita from "./pages/Settings/ProgressPage/DukungKamiPage/Berita";
import BeritaTerbaru from "./pages/Settings/ProgressPage/DukungKamiPage/BeritaTerbaru";
import RiwayatDana from "./pages/Settings/ProgressPage/DukungKamiPage/RiwayatDana";
import PencairanDana from "./pages/Settings/ProgressPage/DukungKamiPage/PencairanDana";
import PencairanDanaEmpat from "./pages/Settings/ProgressPage/DukungKamiPage/PencairanDanaPage/PencairanDanaEmpat";
import CategoryId from "./pages/Category/CategoryId";
import StatisticDetail from "./pages/Settings/ProgressPage/Statistik/StatisticDetail";
import LevelDonatur from "./pages/Settings/ProgressPage/Statistik/LevelDonatur";
import LevelDonaturSebelumnya from "./pages/Settings/ProgressPage/Statistik/LevelDonaturSebelumnya";
import SeluruhLevelDonatur from "./pages/Settings/ProgressPage/Statistik/SeluruhLevelDonatur";
import PangkatPemula from "./pages/Settings/ProgressPage/Penghargaan/PangkatPemula";
import ProfilSaya from "./pages/ButtonMobile/ProfilSaya";
import PapanPeringkat from "./pages/ButtonMobile/PapanPeringkat";
import Tooltips from "./pages/Category/Tooltips";
import DonasiPembayaran from "./pages/Settings/ProgressPage/Statistik/DonasiPembayaran";
import DataDiriLanjutan from "./pages/Test/DataDiriLanjutan";
import SertifikatKelulusan from "./pages/Test/SertifikatKelulusan";
import TranskipNilai from "./pages/Test/TranskipNilai";
import TranskipNilaiLanjutan from "./pages/Test/TranskipNilaiLanjutan";
import PageSebelas from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSebelas"
import PageSatuKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSatuKeimanan"


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
    path: "/accordion-tingkat-belajar",
    element: <AccordionTingkatBelajar />,
  },
  {
    path: "/accordion-dasar-islam",
    element: <AccordionDasarIslam />,
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
    path: "/pangkat",
    element: <Pangkat />,
  },
  {
    path: "/pangkat-sebelumnya",
    element: <PangkatSebelumnya />,
  },
  {
    path: "/seluruh-pangkat",
    element: <SeluruhPangkat />,
  },
  {
    path: "/toko-berlian",
    element: <TokoBerlian />,
  },
  {
    path: "/donasi-sekarang",
    element: <DonasiSekarang />,
  },
  {
    path: "/lencana-belajar",
    element: <Lencana />,
  },
  {
    path: "/hadiah-pencapaian",
    element: <HadiahPencapaian />,
  },
  {
    path: "/warna",
    element: <Warna />,
  },
  {
    path: "/khusus-donatur",
    element: <KhususDonatur />,
  },
  {
    path: "/arsip",
    element: <Arsip />,
  },
  {
    path: "/keterangan-artikel",
    element: <KeteranganArtikel />,
  },
  {
    path: "/laporan-dukungan",
    element: <LaporanDukungan />,
  },
  {
    path: "/sedang-dipelajari",
    element: <SedangDipelajari />,
  },
  {
    path: "/materi-terbaru",
    element: <MateriTerbaru />,
  },
  {
    path: "/dasar-islam-keimanan",
    element: <DasarIslamKeimanan />,
  },
  {
    path: "/jelajahi-aplikasi",
    element: <JelajahiAplikasi />,
  },
  {
    path: "/ai-chat-box",
    element: <AiChatBox />,
  },
  {
    path: "/laporan-dukungan-maret",
    element: <LaporanDukunganMaret />,
  },
  {
    path: "/dukung-kami",
    element: <DukungKami />,
  },
  {
    path: "/dukung-kami/informasi",
    element: <Informasi />,
  },
  {
    path: "/dukung-kami/informasi/donatur",
    element: <Donatur />,
  },
  {
    path: "/dukung-kami/riwayat-dana",
    element: <RiwayatDana />,
  },
  {
    path: "/dukung-kami/latar-belakang",
    element: <LatarBelakang />,
  },
  {
    path: "/dukung-kami/latar-belakang/tujuan",
    element: <Tujuan />,
  },
  {
    path: "/dukung-kami/latar-belakang/visi-dan-misi",
    element: <VisiMisi />,
  },
  {
    path: "/dukung-kami/berita",
    element: <Berita />,
  },

  {
    path: "/dukung-kami/berita/terbaru",
    element: <BeritaTerbaru />,
  },
  {
    path: "/dukung-kami/riwayat-dana/pencairan-dana",
    element: <PencairanDana />,
  },
  {
    path: "/dukung-kami/riwayat-dana/pencairan-dana-empat",
    element: <PencairanDanaEmpat />,
  },
  {
    path: "/category/:id",
    element: <CategoryId />,
  },
  {
    path: "/progress-statistic/detail",
    element: <StatisticDetail />,
  },
  {
    path: "/progress/level-donatur",
    element: <LevelDonatur />,
  },
  {
    path: "/progress/level-donatur-sebelumnya",
    element: <LevelDonaturSebelumnya />,
  },
  {
    path: "/progress/seluruh-level",
    element: <SeluruhLevelDonatur />,
  },
  {
    path: "/pangkat/pangkat-pemula",
    element: <PangkatPemula />,
  },

  {
    path: "/papan-peringkat/profil-saya",
    element: <ProfilSaya />,
  },
  {
    path: "/papan-peringkat",
    element: <PapanPeringkat />,
  },
  {
    path: "/tooltips",
    element: <Tooltips />,
  },
  {
    path: "/donasi-pembayaran",
    element: <DonasiPembayaran />,
  },
  {
    path: "/test/data-diri-lanjutan",
    element: <DataDiriLanjutan />,
  },
  {
    path: "/test/sertifikat-kelulusan",
    element: <SertifikatKelulusan />,
  },
  {
    path: "/test/transkip-nilai",
    element: <TranskipNilai />,
  },
  {
    path: "/test/transkip-nilai-lanjutan",
    element: <TranskipNilaiLanjutan />,
  },
  {
    path: "/page-sebelas",
    element: <PageSebelas />,
  },
  {
    path: "/page-satu-keimanan",
    element: <PageSatuKeimanan />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/kumpulan-ujian-dasar-islam",
    element: <KumpulanUjianDasarIslam />,
  },
];

export default routes;
