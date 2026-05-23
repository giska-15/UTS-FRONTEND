# 🎨 UTS-WEB Frontend

Event Management System Dashboard menggunakan React.js, TypeScript, dan Tailwind CSS.

---

## 📋 Overview

Frontend dashboard untuk aplikasi Event Management INVOFEST - sistem manajemen acara festival tahunan teknologi informasi dari Universitas Harkat Negeri.

**Fitur:**
- 🔐 Login dengan Captcha (Karakter + Matematika)
- 📊 Dashboard Admin dengan statistik
- 📁 CRUD Management (Kategori, Narasumber, Event)
- 👤 Halaman Biodata Mahasiswa
- 🌐 Halaman Public INVOFEST

**Tech Stack:**
- **Framework:** React 19.2.4
- **Language:** TypeScript
- **Build Tool:** Vite 8.0.5
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM 7.15.1
- **State Management:** Zustand 5.0.13
- **Icons:** Lucide React

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/giska-15/uts-web-frontend.git
cd uts-web-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5175`

### Production Build

```bash
npm run build
npm run preview
```

---

## 🔐 Login Credentials

| Field | Value |
|-------|-------|
| **NIM** | `24090055` |
| **Password** | `@Giska12345` |

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Collapse.tsx
│   │   │   ├── NavLink.tsx
│   │   │   └── SpeakerCard.tsx
│   │   ├── AdminLayout.tsx
│   │   ├── Header.tsx
│   │   └── ProtectedRoute.tsx
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── BiodataPage.tsx
│   │   ├── CategoryManagement.tsx
│   │   ├── PembicaraManagement.tsx
│   │   └── EventManagement.tsx
│   ├── store/
│   │   ├── authStore.ts      # Authentication state
│   │   └── eventStore.ts     # API data state
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎯 Features

### Admin Dashboard
- Statistik total Events, Narasumber, Kategori
- Detail events INVOFEST 2024
- Info mahasiswa (NIM, Nama, Kelas)

### CRUD Management
| Menu | Fitur |
|------|-------|
| **Kategori** | List, Tambah, Edit, Hapus kategori event |
| **Narasumber** | List dengan foto, bio, Edit, Hapus |
| **Event** | Full CRUD dengan dropdown relasi |

### Biodata Page
- NIM: 24090055
- Nama: Giska Aura Muhamad Prasetyo
- Prodi: D4 Teknik Informatika
- Semester: 4 / Kelas: 4B

### Keamanan Login
- **Captcha Karakter:** 6 karakter acak (huruf besar/kecil)
- **Captcha Matematika:** Operasi +, -, ×
- Toggle show/hide password
- Session persistence dengan localStorage

---

## 🌐 API Integration

Frontend connects to backend API at:

```
http://localhost:3001/api
```

**Endpoints used:**
- `GET /api/categories` - Fetch categories
- `GET /api/pembicara` - Fetch speakers
- `GET /api/events` - Fetch events with relations

---

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#991b1b` | Red-900, buttons, headers |
| Secondary | `#dc2626` | Red-600, accents |
| Background | `#f9fafb` | Gray-50, main bg |
| Text | `#111827` | Gray-800, headings |
| Muted | `#6b7280` | Gray-500, descriptions |

### Typography
- **Headings:** font-bold text-gray-800
- **Body:** text-gray-600
- **Captions:** text-sm text-gray-500

---

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 👨‍💻 Author

**Giska Aura Muhamad Prasetyo**
- NIM: 24090055
- Prodi: D4 Teknik Informatika
- Semester: 4 / Kelas: 4B
- Mata Kuliah: Pemrograman Web 2

---

## 📄 License

Copyright © 2025 INVOFEST. All Rights Reserved.