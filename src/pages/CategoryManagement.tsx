import { useState } from "react";
import { FolderOpen, Plus, Edit2, Trash2, X } from "lucide-react";

const invofestCategories = [
  {
    id: 1,
    nama: "IT Seminar",
    deskripsi: "Seminar nasional \"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif\" untuk mengembangkan potensi diri dan pengetahuan teknologi.",
    jumlahEvent: 1,
  },
  {
    id: 2,
    nama: "IT Workshop",
    deskripsi: "Workshop \"AI for a Sustainable Future: The Role of Z Generation in the Digital Era\" membekali Gen Z dengan keterampilan praktis AI.",
    jumlahEvent: 1,
  },
  {
    id: 3,
    nama: "IT Talkshow",
    deskripsi: "Talkshow \"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan\" membahas peran manusia dalam memanfaatkan AI.",
    jumlahEvent: 1,
  },
  {
    id: 4,
    nama: "IT Competition",
    deskripsi: "Kompetisi \"From Creation to Innovation\" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas.",
    jumlahEvent: 1,
  },
];

export const CategoryManagement = () => {
  const [categories] = useState(invofestCategories);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<typeof invofestCategories[0] | null>(null);
  const [formData, setFormData] = useState({ nama: "", deskripsi: "" });

  const handleEdit = (category: typeof invofestCategories[0]) => {
    setEditingCategory(category);
    setFormData({ nama: category.nama, deskripsi: category.deskripsi });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus kategori ini?")) {
      // In real app, call API
      console.log("Delete category:", id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save category:", formData);
    setShowModal(false);
    setFormData({ nama: "", deskripsi: "" });
    setEditingCategory(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Kelola Kategori</h1>
        <button
          onClick={() => { setShowModal(true); setEditingCategory(null); setFormData({ nama: "", deskripsi: "" }); }}
          className="flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
        >
          <Plus size={18} />
          Tambah Kategori
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-900">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <FolderOpen className="text-red-900" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{category.nama}</h3>
                  <p className="text-gray-500 text-sm mt-1">{category.deskripsi}</p>
                  <p className="text-red-900 text-sm font-semibold mt-2">{category.jumlahEvent} Event</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(category)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit2 size={18} />
                </button>
                <button onClick={() => handleDelete(category.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {editingCategory ? "Edit Kategori" : "Tambah Kategori Baru"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kategori</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 h-32 resize-none"
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

export default CategoryManagement;