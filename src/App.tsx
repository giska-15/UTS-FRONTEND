import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import CategoryManagement from "./pages/CategoryManagement";
import PembicaraManagement from "./pages/PembicaraManagement";
import EventManagement from "./pages/EventManagement";
import BiodataPage from "./pages/BiodataPage";
import InvofestPage from "./InvofestPage";

function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema \u201cBeyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow \u201d.",
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description:
        "Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta Convention Center (JCC), Jakarta, Indonesia.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description:
        "Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi dan inovasi. Acara ini dirancang untuk memberikan inspirasi dan pengetahuan kepada semua peserta, tanpa memandang latar belakang atau tingkat keahlian.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        "Seminar nasional ini membahas \u201cHuman-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif\u201d untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      title: "IT Talkshow",
      description:
        "Talkshow \u201cHumanizing Technology: Kolaborasi Manusia dan AI di Masa Depan\u201d membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description:
        "Kompetisi \u201cFrom Creation to Innovation\u201d mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description:
        "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<><Header /><InvofestPage speakers={speakers} cardItems={cardItems} collapseItems={collapseItems} /></>} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="kategori" element={<CategoryManagement />} />
        <Route path="pembicara" element={<PembicaraManagement />} />
        <Route path="event" element={<EventManagement />} />
        <Route path="biodata" element={<BiodataPage />} />
      </Route>
    </Routes>
  );
}

export default App;