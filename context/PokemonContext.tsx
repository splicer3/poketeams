"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import PokeAPI from 'pokedex-promise-v2';
import { Ability } from '@/types/types';
import { fetchAbilityDescription } from '@/lib/utils';

type PokemonContextType = {
  selectedPokemon: string;
  setSelectedPokemon: (pokemon: string) => void;
  pokemonData: PokeAPI.Pokemon | null;
  abilities: Ability[];
  isLoading: boolean;
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
  P: PokeAPI;
};

export function PokemonProvider({ children, P }: PokemonProviderProps) {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState<PokeAPI.Pokemon | null>(null);
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setIsLoading(true);
      const pokemon = await P.getPokemonByName(selectedPokemon);
      setPokemonData(pokemon);
      const fetchedAbilities = await Promise.all(
        pokemon.abilities.map(async (item: PokeAPI.AbilityElement) => ({
          ability: item.ability.name,
          abilityDescription: await fetchAbilityDescription(item.ability.name, P),
          isHidden: item.is_hidden,
        }))
      );
      setAbilities(fetchedAbilities);
      setIsLoading(false);
    };

    if (selectedPokemon) {
      fetchPokemonData();
    }
  }, [selectedPokemon, P]);

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon, pokemonData, abilities, isLoading }}>
      {children}
    </PokemonContext.Provider>
  );
}
