import { create } from 'zustand';

interface Event {
  id: number;
  nama: string;
  tanggal: string;
  lokasi: string;
  deskripsi: string;
  idKategori: number;
  kategori?: { nama: string };
  idPembicara: number;
  pembicara?: { nama: string };
}

interface Pembicara {
  id: number;
  nama: string;
  role: string;
  imageUrl: string;
}

interface Kategori {
  id: number;
  nama: string;
}

interface EventState {
  events: Event[];
  pembicara: Pembicara[];
  kategori: Kategori[];
  loading: boolean;
  error: string | null;
  fetchEvents: () => Promise<void>;
  fetchPembicara: () => Promise<void>;
  fetchKategori: () => Promise<void>;
  addEvent: (event: Omit<Event, 'id'>) => Promise<void>;
  updateEvent: (id: number, event: Partial<Event>) => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
  addPembicara: (pembicara: Omit<Pembicara, 'id'>) => Promise<void>;
  updatePembicara: (id: number, pembicara: Partial<Pembicara>) => Promise<void>;
  deletePembicara: (id: number) => Promise<void>;
  addKategori: (kategori: Omit<Kategori, 'id'>) => Promise<void>;
  updateKategori: (id: number, kategori: Partial<Kategori>) => Promise<void>;
  deleteKategori: (id: number) => Promise<void>;
}

const API = 'http://localhost:3001/api';

export const useEventStore = create<EventState>((set, get) => ({
  events: [],
  pembicara: [],
  kategori: [],
  loading: false,
  error: null,

  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API}/events`);
      const data = await res.json();
      set({ events: data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch events', loading: false });
    }
  },

  fetchPembicara: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API}/pembicara`);
      const data = await res.json();
      set({ pembicara: data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch pembicara', loading: false });
    }
  },

  fetchKategori: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API}/categories`);
      const data = await res.json();
      set({ kategori: data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch kategori', loading: false });
    }
  },

  addEvent: async (event) => {
    await fetch(`${API}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
    get().fetchEvents();
  },

  updateEvent: async (id, event) => {
    await fetch(`${API}/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
    get().fetchEvents();
  },

  deleteEvent: async (id) => {
    await fetch(`${API}/events/${id}`, { method: 'DELETE' });
    get().fetchEvents();
  },

  addPembicara: async (pembicara) => {
    await fetch(`${API}/pembicara`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pembicara),
    });
    get().fetchPembicara();
  },

  updatePembicara: async (id, pembicara) => {
    await fetch(`${API}/pembicara/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pembicara),
    });
    get().fetchPembicara();
  },

  deletePembicara: async (id) => {
    await fetch(`${API}/pembicara/${id}`, { method: 'DELETE' });
    get().fetchPembicara();
  },

  addKategori: async (kategori) => {
    await fetch(`${API}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(kategori),
    });
    get().fetchKategori();
  },

  updateKategori: async (id, kategori) => {
    await fetch(`${API}/categories/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(kategori),
    });
    get().fetchKategori();
  },

  deleteKategori: async (id) => {
    await fetch(`${API}/categories/${id}`, { method: 'DELETE' });
    get().fetchKategori();
  },
}));