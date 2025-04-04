import { ProtectedRouteAdmin, ProtectedRouteUser } from "./hoc/ProtectedRoutes";
import Home from "./pages/Home";
import SurveiSatu from "./pages/Survei/SurveiSatu";
import SurveiDua from "./pages/Survei/SurverDua";
import SurveiTiga from "./pages/Survei/SurveiTiga";
import PageSatu from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSatu";
import PageDua from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageDua";
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
import { authRoutes } from "./Features/Auth/routes";
import ListLevels from "./pages/Test/ListLevels";
// import FinalScored from "./Features/QuizQuestions/Pemula/SirrahNabawiyyah/FinalScored";
import { listCategoriesRoutes } from "./Features/ListCategories/routes";
// import ListLevelKeimanan from "./pages/Category/ListLevelKeimanan";
import ChooseThemeQuiz from "./pages/Category/ChooseThemeQuiz";
// import AppearanceKotak from "./pages/Features/Units/Components/AppearanceKotak";
import Settings from "./pages/ButtonMobile/Settings";
import Profil from "./pages/Settings/SettingsPage/Profil";
import Beranda from "./pages/ButtonMobile/Beranda";
import Pembelajaran from "./pages/ButtonMobile/Pembelajaran";
import Progress from "./pages/ButtonMobile/Progress";
import UlasanSoal from "./pages/Test/UlasanSoal";
import AccordionTingkatBelajar from "./components/ModalAccordion/AccordionTingkatBelajar";
import AccordionDasarIslam from "./components/ModalAccordion/AccordionDasarIslam";
import DonaturPage from "./Features/Units/Users/Modal/DonaturPage";
import Notifikasi from "./pages/Settings/SettingsPage/Notifikasi";
import SaranMasukan from "./pages/Settings/SettingsPage/SaranMasukan";
import Sertifikat from "./pages/Settings/SettingsPage/Sertifikat";
import Pengingat from "./pages/Settings/NotifElement/Pengingat";
import SertifikatDasarIslam from "./pages/Settings/SertifikatCategory/SertifikatDasarIslam";
import KumpulanUjianDasarIslam from "./pages/Settings/SertifikatCategory/KumpulanUjianDasarIslam";
import TanyaJawab from "./pages/Settings/SettingsPage/TanyaJawab";
import Tampilan from "./pages/Settings/SettingsPage/Tampilan";
import Kontributor from "./pages/Settings/Kontribusi/Kontributor";
import ProfilPengguna from "./pages/Settings/SettingsPage/ProfilPengguna";
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
// import KeteranganArtikel from "./pages/Features/Units/Components/Readings";
import LaporanDukungan from "./pages/BerandaPage/LaporanDukungan";
import SedangDipelajari from "./pages/BerandaPage/SedangDipelajari";
import MateriTerbaru from "./pages/BerandaPage/MateriTerbaru";
import DasarIslamKeimanan from "./pages/BerandaPage/MateriTerbaruPage/DasarIslamKeimanan";
import JelajahiAplikasi from "./pages/BerandaPage/JelajahiAplikasi";
import AiChatBox from "./pages/BerandaPage/AiChatBox";
import LaporanDukunganMaret from "./pages/BerandaPage/LaporanDukunganPerBulan";
import DukungKami from "./pages/Settings/SettingsPage/DukungKami";
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
// import CategoryId from "./pages/Category/CategoryId";
import StatisticDetail from "./pages/Settings/ProgressPage/Statistik/StatisticDetail";
import LevelDonatur from "./pages/Settings/ProgressPage/Statistik/LevelDonatur";
import LevelDonaturSebelumnya from "./pages/Settings/ProgressPage/Statistik/LevelDonaturSebelumnya";
import SeluruhLevelDonatur from "./pages/Settings/ProgressPage/Statistik/SeluruhLevelDonatur";
import PangkatPemula from "./pages/Settings/ProgressPage/Penghargaan/PangkatPemula";
import ProfilSaya from "./pages/ButtonMobile/ProfilSaya";
import PapanPeringkat from "./pages/ButtonMobile/PapanPeringkat";
import Tooltips from "./pages/Category/Tooltips";
import DonasiPembayaran from "./pages/Settings/ProgressPage/Statistik/DonasiPembayaran";
import DataDiriLanjutan from "./pages/Certificate/DataDiriLanjutan";
import SertifikatKelulusan from "./pages/Certificate/SertifikatKelulusan";
import TranskipNilai from "./pages/Certificate/TranskipNilai";
import TranskipNilaiLanjutan from "./pages/Certificate/TranskipNilaiLanjutan";
import PageSebelas from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSebelas";
import PageSatuKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSatuKeimanan";
import PageDuaKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageDuaKeimanan";
import PageTigaKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageTigaKeimanan";
import PageEmpatKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageEmpatKeimanan";
import PageLimaKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageLimaKeimanan";
import PageEnamKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageEnamKeimanan";
import PageTujuhKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageTujuhKeimanan";
import PageDelapanKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageDelapanKeimanan";
import PageSembilanKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSembilanKeimanan";
import PageSepuluhKeimanan from "./pages/Ujian/Pemula/Keimanan/Level1-keimanan/PageSepuluhKeimanan";
import PapanPeringkatPrestasi from "./components/ModalTutorialPengguna/PapanPeringkatPrestasi";
import PapanPeringkatNamaPrestasi from "./components/ModalTutorialPengguna/PapanPringkatNamaPrestasi";
import PapanPeringkatDonatur from "./components/ModalTutorialDonatur/PapanPeringkatDonatur";
import PapanPeringkatNamaDonatur from "./components/ModalTutorialDonatur/PapanPeringkatNamaDonatur";
import Users from "./pages/Category/Users";
import DifficultiesPageAdmin from "./Features/Difficulties/Admin/Pages/DifficultiesPageAdmin";
// import PageSatuSirrah from "./Features/QuizQuestions/Pemula/SirrahNabawiyyah/PageSatuSirrah";
import { sirrahRoutes } from "./Features/QuizQuestions/Pemula/SirrahNabawiyyah/routes";
import LaporanMateri from "./pages/Settings/ModalSettingsPage/LaporanMateri";
// import ButtonMobileKotak from "./components/ListButton/ButtonMobileKotak";
import { difficultiesRoutes } from "./Features/Difficulties/routes";
import { themesOrLevelsRoutes } from "./Features/ThemesOrLevels/routes";
import { unitsRoutes } from "./Features/Units/routes";

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
  ...difficultiesRoutes,
  ...unitsRoutes,
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
    path: "/list-levels",
    element: <ListLevels />,
  },
 
  {
    path: "/page-satu",
    element: <PageSatu />,
  },
  {
    path: "/page-dua",
    element: <PageDua />,
  },
  // {
  //   path: "/list-level-keimanan",
  //   element: <ListLevelKeimanan />,
  // },

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
  // {
  //   path: "/themes-or-levels/:id",
  //   element: <AppearanceKotak />,
  // },
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
    path: "/ulasan-soal",
    element: <UlasanSoal />,
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
  // {
  //   path: "/keterangan-artikel/:id",
  //   element: <KeteranganArtikel />,
  // },
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
    path: "/laporan",
    element: <LaporanMateri />,
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
  // {
  //   path: "/category/:id",
  //   element: <CategoryId />,
  // },
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
    path: "/page-dua-keimanan",
    element: <PageDuaKeimanan />,
  },
  {
    path: "/page-tiga-keimanan",
    element: <PageTigaKeimanan />,
  },
  {
    path: "/page-empat-keimanan",
    element: <PageEmpatKeimanan />,
  },
  {
    path: "/page-lima-keimanan",
    element: <PageLimaKeimanan />,
  },
  {
    path: "/page-enam-keimanan",
    element: <PageEnamKeimanan />,
  },
  {
    path: "/page-tujuh-keimanan",
    element: <PageTujuhKeimanan />,
  },
  {
    path: "/page-delapan-keimanan",
    element: <PageDelapanKeimanan />,
  },
  {
    path: "/page-sembilan-keimanan",
    element: <PageSembilanKeimanan />,
  },
  {
    path: "/page-sepuluh-keimanan",
    element: <PageSepuluhKeimanan />,
  },
  {
    path: "/papan-peringkat-prestasi",
    element: <PapanPeringkatPrestasi />,
  },
  {
    path: "/papan-peringkat-nama-prestasi",
    element: <PapanPeringkatNamaPrestasi />,
  },
  {
    path: "/papan-peringkat-donatur",
    element: <PapanPeringkatDonatur />,
  },
  {
    path: "/papan-peringkat-nama-donatur",
    element: <PapanPeringkatNamaDonatur />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/difficulties-page-admin",
    element: <DifficultiesPageAdmin />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },

  {
    path: "/kumpulan-ujian-dasar-islam",
    element: <KumpulanUjianDasarIslam />,
  },
  ...authRoutes,
  ...listCategoriesRoutes,
  ...themesOrLevelsRoutes,
  ...sirrahRoutes,
];

export default routes;
