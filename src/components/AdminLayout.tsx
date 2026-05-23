import type { ReactNode } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Home, Users, Calendar, FolderOpen, LogOut } from "lucide-react";

interface AdminLayoutProps {
  children?: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { nim, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { label: "Dashboard", href: "/admin", icon: <Home size={18} /> },
    { label: "Kategori", href: "/admin/kategori", icon: <FolderOpen size={18} /> },
    { label: "Narasumber", href: "/admin/pembicara", icon: <Users size={18} /> },
    { label: "Event", href: "/admin/event", icon: <Calendar size={18} /> },
    { label: "Biodata", href: "/admin/biodata", icon: <Users size={18} /> },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-red-900 text-white flex flex-col">
        <div className="p-6 border-b border-red-800">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <p className="text-sm text-red-200 mt-1">NIM: {nim}</p>
        </div>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-red-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800 transition-colors w-full"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default AdminLayout;