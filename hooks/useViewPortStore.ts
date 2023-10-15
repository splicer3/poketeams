import { create } from "zustand";

interface ViewportStore {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
  showTeam: boolean;
  setShowTeam: (value: boolean) => void;
}

const useViewportStore = create<ViewportStore>((set) => ({
  isMobile: false,
  setIsMobile: (value: boolean) => set({ isMobile: value }),
  showTeam: true,
  setShowTeam: (value: boolean) => set({ showTeam: value }),
}));

export default useViewportStore;
