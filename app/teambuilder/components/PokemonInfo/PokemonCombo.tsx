"use client"

import { usePokedex } from '@/context/PokedexContext';
import { usePokemonContext } from '@/context/PokemonContext';
import { Combobox } from '@headlessui/react';
import { useEffect, useMemo, useState } from 'react';
import { MdCatchingPokemon } from "react-icons/md"

const PokemonCombo = () => {
    const P = usePokedex();
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
          <Combobox value={selectedPokemon} onChange={setSelectedPokemon}>
            <div className="relative w-full px-20">
              <Combobox.Input
                onChange={event => setQuery(event.target.value)}
                className="w-full p-2 pl-4 pr-10 capitalize rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:shadow-lg"
              />
              <Combobox.Button className="absolute inset-y-0 right-0 mr-[5.75rem] flex items-center">
                <MdCatchingPokemon className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"/>
              </Combobox.Button>
            </div>
            <Combobox.Options
              className="mt-2 max-h-40 w-auto bg-white dark:bg-gray-950 capitalize border border-gray-300 dark:border-gray-700 rounded-md shadow-lg overflow-y-auto z-10"
            >
              {filteredPokemon.map(pokemon => (
                <Combobox.Option
                  key={pokemon}
                  value={pokemon}
                  className= "px-10 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
                >
                  {pokemon}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        );
      };

export default PokemonCombo;