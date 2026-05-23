import { useState } from "react";
import { Calendar, MapPin, User, Plus, Edit2, Trash2, X } from "lucide-react";

const invofestEvents = [
  {
    id: 1,
    nama: "IT Seminar",
    tanggal: "15 November 2024",
    lokasi: "Jakarta Convention Center (JCC)",
    deskripsi: "Seminar nasional \"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif\" untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    kategori: "IT Seminar",
    pembicara: "Dery Agung Triyadi",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png",
  },
  {
    id: 2,
    nama: "IT Workshop",
    tanggal: "16 November 2024",
    lokasi: "Jakarta Convention Center (JCC)",
    deskripsi: "Workshop \"AI for a Sustainable Future: The Role of Z Generation in the Digital Era\" membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    kategori: "IT Workshop",
    pembicara: "Lhuqita Fazry",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png",
  },
  {
    id: 3,
    nama: "IT Talkshow",
    tanggal: "17 November 2024",
    lokasi: "Jakarta Convention Center (JCC)",
    deskripsi: "Talkshow \"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan\" membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan.",
    kategori: "IT Talkshow",
    pembicara: "Sowam Habibi",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png",
  },
  {
    id: 4,
    nama: "IT Competition",
    tanggal: "15-17 November 2024",
    lokasi: "Jakarta Convention Center (JCC)",
    deskripsi: "Kompetisi \"From Creation to Innovation\" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa.",
    kategori: "IT Competition",
    pembicara: "Tim Peserta",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
  },
];

const kategoris = ["IT Seminar", "IT Workshop", "IT Talkshow", "IT Competition"];
const pembicaras = ["Dery Agung Triyadi", "Sowam Habibi", "Lhuqita Fazry", "Tim Peserta"];

export const EventManagement = () => {
  const [events] = useState(invofestEvents);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<typeof invofestEvents[0] | null>(null);
  const [formData, setFormData] = useState({ nama: "", tanggal: "", lokasi: "", deskripsi: "", kategori: "", pembicara: "", imageUrl: "" });

  const handleEdit = (e: typeof invofestEvents[0]) => {
    setEditingEvent(e);
    setFormData({ nama: e.nama, tanggal: e.tanggal, lokasi: e.lokasi, deskripsi: e.deskripsi, kategori: e.kategori, pembicara: e.pembicara, imageUrl: e.imageUrl });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus event ini?")) {
      console.log("Delete event:", id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save event:", formData);
    setShowModal(false);
    setFormData({ nama: "", tanggal: "", lokasi: "", deskripsi: "", kategori: "", pembicara: "", imageUrl: "" });
    setEditingEvent(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Kelola Event</h1>
        <button
          onClick={() => { setShowModal(true); setEditingEvent(null); setFormData({ nama: "", tanggal: "", lokasi: "", deskripsi: "", kategori: "", pembicara: "", imageUrl: "" }); }}
          className="flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
        >
          <Plus size={18} />
          Tambah Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img src={event.imageUrl} alt={event.nama} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-red-900 text-white text-xs px-3 py-1 rounded-full">
                {event.kategori}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{event.nama}</h3>
              <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                <span className="flex items-center gap-1"><Calendar size={14} /> {event.tanggal}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {event.lokasi}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                <User size={14} />
                <span>{event.pembicara}</span>
              </div>
              <p className="text-gray-500 text-sm mt-3 line-clamp-2">{event.deskripsi}</p>
              <div className="flex gap-2 mt-4">
                <button onClick={() => handleEdit(event)} className="flex-1 flex items-center justify-center gap-1 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                  <Edit2 size={16} />
                  Edit
                </button>
                <button onClick={() => handleDelete(event.id)} className="flex items-center justify-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {editingEvent ? "Edit Event" : "Tambah Event Baru"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Event</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                  <input
                    type="text"
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                  <input
                    type="text"
                    value={formData.lokasi}
                    onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                <select
                  value={formData.kategori}
                  onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  required
                >
                  <option value="">Pilih Kategori</option>
                  {kategoris.map((k) => <option key={k} value={k}>{k}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Narasumber</label>
                <select
                  value={formData.pembicara}
                  onChange={(e) => setFormData({ ...formData, pembicara: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  required
                >
                  <option value="">Pilih Narasumber</option>
                  {pembicaras.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 h-24 resize-none"
                  required
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Batal
                </button>
                <button type="submit" className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventManagement;