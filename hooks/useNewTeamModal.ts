import { create } from "zustand";

interface NewTeamModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNewTeamModal = create<NewTeamModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNewTeamModal;
