import { create } from "zustand";
import { DBTeam } from "./useTeamsByUser";

interface TeamModalStore {
    isOpen: boolean;
    selectedTeam: DBTeam | null;
    setSelectedTeam: (team: DBTeam) => void;
    onOpen: () => void;
    onClose: () => void;
};

const useTeamModal = create<TeamModalStore>((set) => ({
    isOpen: false,
    selectedTeam: null,
    setSelectedTeam: (team) => set({ selectedTeam:team }),
    onOpen: () => set({ isOpen:true }),
    onClose: () => set({ isOpen:false })
}));

export default useTeamModal;