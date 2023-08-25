"use client"

import { usePokemonContext } from '@/context/PokemonContext';
import { Combobox } from '@headlessui/react';
import Pokedex from 'pokedex-promise-v2';
import { useEffect, useMemo, useState } from 'react';

const PokemonCombo = () => {
    const P = useMemo(() => new Pokedex(), []);
    const [pokemonList, setPokemonList] = useState(['']);
    const { selectedPokemon, setSelectedPokemon } = usePokemonContext();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchPokemonList = async () => {
          try {
            const list = await P.getPokemonsList();
            const names = list.results.map(item => item.name);
            setPokemonList(names);
            setSelectedPokemon(names[0]);
          } catch (error) {
            console.error('Error fetching Pokémon list:', error);
          }
        };
        fetchPokemonList();
      }, []);
  
    const filteredPokemon =
    query === ''
      ? pokemonList
      : pokemonList.filter((pokemon) => 
            pokemon.toLowerCase().startsWith(query.toLowerCase())
        );
    
    return (
        <>
        <Combobox value={selectedPokemon} onChange={setSelectedPokemon}>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)} className="capitalize" />
        <Combobox.Options className="max-h-40 overflow-y-auto">
          {filteredPokemon.map((pokemon) => (
            <Combobox.Option key={pokemon} value={pokemon} className="capitalize">
              {pokemon}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
        </>
    )
}

export default PokemonCombo;