import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Pokemon } from 'pokedex-promise-v2';

interface TeamContextProps {
  selectedTeam: Pokemon[];
  setSelectedTeam: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

const TeamContext = createContext<TeamContextProps | undefined>(undefined);

type TeamProviderProps = {
    children: ReactNode;
  };

export const TeamProvider: React.FC<TeamProviderProps> = ({ children }) => {
  const [selectedTeam, setSelectedTeam] = useState<Pokemon[]>([]);

  return (
    <TeamContext.Provider value={{ selectedTeam, setSelectedTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
};