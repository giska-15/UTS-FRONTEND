export const BiodataPage = () => {
  const studentData = {
    nim: "24090055",
    nama: "Giska Aura Muhamad Prasetyo",
    prodi: "D4 Teknik Informatika",
    semester: "4",
    kelas: "4B",
    dosen: "Jamal Apridi, S.Kom.",
    mataKuliah: "Pemrograman Web 2",
    jenisTes: "Project",
    tahunAkademik: "2025/2026"
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Biodata Mahasiswa</h1>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 border-b pb-3">
            <label className="text-gray-500 text-sm">NIM</label>
            <p className="text-lg font-semibold text-gray-800 col-span-2">{studentData.nim}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b pb-3">
            <label className="text-gray-500 text-sm">Nama Lengkap</label>
            <p className="text-lg font-semibold text-gray-800 col-span-2">{studentData.nama}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b pb-3">
            <label className="text-gray-500 text-sm">Program Studi</label>
            <p className="text-lg font-semibold text-gray-800 col-span-2">{studentData.prodi}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b pb-3">
            <label className="text-gray-500 text-sm">Semester / Kelas</label>
            <p className="text-lg font-semibold text-gray-800 col-span-2">{studentData.semester} / {studentData.kelas}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b pb-3">
            <label className="text-gray-500 text-sm">Dosen Pengampu</label>
            <p className="text-lg font-semibold text-gray-800 col-span-2">{studentData.dosen}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b pb-3">
            <label className="text-gray-500 text-sm">Mata Kuliah</label>
            <p className="text-lg font-semibold text-gray-800 col-span-2">{studentData.mataKuliah}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-b pb-3">
            <label className="text-gray-500 text-sm">Jenis Tes</label>
            <p className="text-lg font-semibold text-gray-800 col-span-2">{studentData.jenisTes}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label className="text-gray-500 text-sm">Tahun Akademik</label>
            <p className="text-lg font-semibold text-gray-800 col-span-2">{studentData.tahunAkademik}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataPage;