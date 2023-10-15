"use client";

import { createContext, useContext, useMemo } from "react";
import Pokedex from "pokedex-promise-v2";

const PokedexContext = createContext<Pokedex | undefined>(undefined);

export function usePokedex() {
  const context = useContext(PokedexContext);
  if (!context) {
    throw new Error("usePokedex must be used within a PokedexProvider");
  }
  return context;
}

type PokedexProviderProps = {
  children: React.ReactNode;
};

export function PokedexProvider({ children }: PokedexProviderProps) {
  const pokedexInstance = useMemo(() => new Pokedex(), []);

  return (
    <PokedexContext.Provider value={pokedexInstance}>
      {children}
    </PokedexContext.Provider>
  );
}
