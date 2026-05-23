import { Calendar, Users, FolderOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const invofestStats = [
  {
    label: "IT Seminar",
    value: "1 Event",
    description: "Seminar nasional \"Human-AI Integration\"",
    icon: Calendar,
  },
  {
    label: "IT Workshop", 
    value: "1 Event",
    description: "Workshop \"AI for a Sustainable Future\"",
    icon: Users,
  },
  {
    label: "IT Talkshow",
    value: "1 Event", 
    description: "Talkshow \"Humanizing Technology\"",
    icon: FolderOpen,
  },
  {
    label: "IT Competition",
    value: "1 Event",
    description: "Kompetisi \"From Creation to Innovation\"",
    icon: TrendingUp,
  },
];

const eventDetails = [
  {
    category: "IT Seminar",
    title: "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif",
    date: "15 November 2024",
    location: "Jakarta Convention Center (JCC)",
    speaker: "Dery Agung Triyadi - AWS Indonesia",
  },
  {
    category: "IT Workshop",
    title: "AI for a Sustainable Future: The Role of Z Generation in the Digital Era",
    date: "16 November 2024",
    location: "Jakarta Convention Center (JCC)",
    speaker: "Lhuqita Fazry - Rumah Coding Indonesia",
  },
  {
    category: "IT Talkshow",
    title: "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan",
    date: "17 November 2024",
    location: "Jakarta Convention Center (JCC)",
    speaker: "Sowam Habibi - Google Indonesia",
  },
  {
    category: "IT Competition",
    title: "From Creation to Innovation",
    date: "15-17 November 2024",
    location: "Jakarta Convention Center (JCC)",
    speaker: "Tim Peserta competition",
  },
];

export const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard INVOFEST</h1>

      <div className="mb-8 p-6 bg-red-900 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">UTS Pemrograman Web 2</h2>
        <p className="text-red-100">
          NIM: 24090055 | Nama: Giska Aura Muhamad Prasetyo | Kelas: 4B
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {invofestStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.description}</p>
              </div>
              <stat.icon className="text-red-900" size={36} />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-4">Detail Events INVOFEST 2024</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventDetails.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <span className="bg-red-900 text-white text-xs px-3 py-1 rounded-full">
              {event.category}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mt-3 mb-2">{event.title}</h3>
            <div className="text-sm text-gray-500 space-y-1">
              <p>📅 {event.date}</p>
              <p>📍 {event.location}</p>
              <p>🎤 {event.speaker}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/admin/kategori"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-900"
        >
          <h3 className="text-lg font-semibold text-red-900 mb-2">Kelola Kategori</h3>
          <p className="text-gray-500 text-sm">Tambah, edit, hapus kategori event</p>
        </Link>

        <Link
          to="/admin/pembicara"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-900"
        >
          <h3 className="text-lg font-semibold text-red-900 mb-2">Kelola Narasumber</h3>
          <p className="text-gray-500 text-sm">Kelola data narasumber</p>
        </Link>

        <Link
          to="/admin/event"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-900"
        >
          <h3 className="text-lg font-semibold text-red-900 mb-2">Kelola Event</h3>
          <p className="text-gray-500 text-sm">Kelola semua event</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;