import LaporanDukungan from  "./LaporanDukungan";
import LaporanDukunganMaret from "./LaporanDukunganPerBulan";
import MateriTerbaru from "./MateriTerbaru";
import DasarIslamKeimanan from "./MateriTerbaruPage/DasarIslamKeimanan";
import AiChatBox from "./AiChatBox";
import SedangDipelajari from "./SedangDipelajari";
import JelajahiAplikasi from "./JelajahiAplikasi";
import ModeUtama from "./ModeBelajarPage/ModeUtama";


export const berandaPageRoutes = [
    {
        path: "/laporan-dukungan",
        element: <LaporanDukungan />,
    },
    {
        path: "/laporan-dukungan-maret",
        element: <LaporanDukunganMaret />,
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
        path: "/ai-chatbox",
        element: <AiChatBox />,
    },
    {
        path: "/sedang-dipelajari",
        element: <SedangDipelajari />,
    },
    {
        path: "/jelajahi-aplikasi",
        element: <JelajahiAplikasi />,
    },
    {
        path: "/mode-utama",
        element: <ModeUtama />,
    }
];