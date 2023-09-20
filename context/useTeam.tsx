import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Pokemon } from 'pokedex-promise-v2';

interface TeamPokemon {
  pokemon: Pokemon;
  variety: number;
}

interface TeamContextProps {
  selectedTeam: TeamPokemon[];
  setSelectedTeam: React.Dispatch<React.SetStateAction<TeamPokemon[]>>;
}

const TeamContext = createContext<TeamContextProps | undefined>(undefined);

type TeamProviderProps = {
    children: ReactNode;
  };

export const TeamProvider: React.FC<TeamProviderProps> = ({ children }) => {
  const [selectedTeam, setSelectedTeam] = useState<TeamPokemon[]>([]);

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