import { useState } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";

const invofestPembicara = [
  {
    id: 1,
    nama: "Dery Agung Triyadi",
    role: "AWS Indonesia",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    bio: "Narasumber untuk IT Seminar dengan topik \"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif\"",
  },
  {
    id: 2,
    nama: "Sowam Habibi",
    role: "Google Indonesia",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    bio: "Narasumber untuk IT Talkshow dengan topik \"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan\"",
  },
  {
    id: 3,
    nama: "Lhuqita Fazry",
    role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    bio: "Narasumber untuk IT Workshop dengan topik \"AI for a Sustainable Future: The Role of Z Generation in the Digital Era\"",
  },
];

export const PembicaraManagement = () => {
  const [pembicara] = useState(invofestPembicara);
  const [showModal, setShowModal] = useState(false);
  const [editingPembicara, setEditingPembicara] = useState<typeof invofestPembicara[0] | null>(null);
  const [formData, setFormData] = useState({ nama: "", role: "", imageUrl: "", bio: "" });

  const handleEdit = (p: typeof invofestPembicara[0]) => {
    setEditingPembicara(p);
    setFormData({ nama: p.nama, role: p.role, imageUrl: p.imageUrl, bio: p.bio });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus narasumber ini?")) {
      console.log("Delete pembicara:", id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save pembicara:", formData);
    setShowModal(false);
    setFormData({ nama: "", role: "", imageUrl: "", bio: "" });
    setEditingPembicara(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Kelola Narasumber</h1>
        <button
          onClick={() => { setShowModal(true); setEditingPembicara(null); setFormData({ nama: "", role: "", imageUrl: "", bio: "" }); }}
          className="flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
        >
          <Plus size={18} />
          Tambah Narasumber
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pembicara.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img src={p.imageUrl} alt={p.nama} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{p.nama}</h3>
              <p className="text-red-900 font-semibold text-sm">{p.role}</p>
              <p className="text-gray-500 text-sm mt-2 line-clamp-3">{p.bio}</p>
              <div className="flex gap-2 mt-4">
                <button onClick={() => handleEdit(p)} className="flex-1 flex items-center justify-center gap-1 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                  <Edit2 size={16} />
                  Edit
                </button>
                <button onClick={() => handleDelete(p.id)} className="flex items-center justify-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 size={16} />
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
                {editingPembicara ? "Edit Narasumber" : "Tambah Narasumber Baru"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role / Jabatan</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Foto</label>
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
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

export default PembicaraManagement;