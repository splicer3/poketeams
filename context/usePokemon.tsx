"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import PokeAPI, { Pokemon, PokemonSpecies } from 'pokedex-promise-v2';
import { Ability } from '@/types/types';
import { fetchAbilityDescription } from '@/lib/utils';
import { parseAsInteger, useQueryState } from "next-usequerystate"

type PokemonContextType = {
  selectedPokemon: string;
  setSelectedPokemon: (pokemon: string) => void;
  pokemonData: Pokemon | null;
  abilities: Ability[];
  isLoading: boolean;
  variety: number;
  setVariety: (variety: number) => void;
  pokemonSpecies?: PokemonSpecies;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function usePokemon(): PokemonContextType {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
}

type PokemonProviderProps = {
  children: ReactNode;
  P: PokeAPI;
};

export function PokemonProvider({ children, P }: PokemonProviderProps) {
  const [variety, setVariety] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useQueryState("species", { defaultValue: "bulbasaur" });
  const [pokemonData, setPokemonData] = useState<PokeAPI.Pokemon | null>(null);
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>()

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      setIsLoading(true);
      setPokemonData(null);
      const pokemonSpecies = await P.getPokemonSpeciesByName(selectedPokemon);
      setPokemonSpecies(pokemonSpecies);
      setIsLoading(false);
    };

    if (selectedPokemon) {
      fetchPokemonSpecies();
    }
  }, [selectedPokemon, P]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setIsLoading(true);
      if (pokemonSpecies) {
        const pokemon = await P.getResource(pokemonSpecies.varieties[variety].pokemon.url);
        setPokemonData(pokemon);
        const fetchedAbilities = await Promise.all(
          pokemon.abilities.map(async (item: PokeAPI.AbilityElement) => ({
            ability: item.ability.name,
            abilityDescription: await fetchAbilityDescription(item.ability.name, P),
            isHidden: item.is_hidden,
          }))
        );
        setAbilities(fetchedAbilities);
      }
      setIsLoading(false);
    };

      fetchPokemonData();

  }, [pokemonSpecies, P, variety]);

  useEffect(() => {
    setVariety(0);
  }, [selectedPokemon, setVariety]);

  return (
    <PokemonContext.Provider value={{ pokemonSpecies, selectedPokemon, setSelectedPokemon, pokemonData, abilities, isLoading, variety, setVariety }}>
      {children}
    </PokemonContext.Provider>
  );
}
