"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

type PokemonContextType = {
  selectedPokemon: string;
  setSelectedPokemon: (pokemon: string) => void;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function usePokemonContext(): PokemonContextType {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
}

type PokemonProviderProps = {
  children: ReactNode;
};

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [selectedPokemon, setSelectedPokemon] = useState('');

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
