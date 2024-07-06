// src/globalStore.ts
import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
}

interface GlobalState {
  sidebar: SidebarState;
}

const useGlobalStore = create<GlobalState>((set) => ({
  sidebar: {
    isOpen: false,
    toggleSidebar: () =>
      set((state) => ({
        sidebar: { ...state.sidebar, isOpen: !state.sidebar.isOpen },
      })),
    setSidebarOpen: (isOpen: boolean) =>
      set((state) => ({
        sidebar: { ...state.sidebar, isOpen },
      })),
  },
}));

export default useGlobalStore;
