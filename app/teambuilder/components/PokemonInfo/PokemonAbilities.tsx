"use client"
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { usePokedex } from '@/context/PokedexContext';
import { usePokemonContext } from '@/context/PokemonContext';
import PokeAPI from 'pokedex-promise-v2';
import { Ability } from '@/types/types';
import { clsx } from 'clsx';
import { fetchAbilityDescription } from '@/lib/utils';

const PokemonAbilities = () => {
  const P = usePokedex();
  const { selectedPokemon } = usePokemonContext();
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const fetchPokemonAbilities = async () => {
      setIsLoading(true);
      const pokemon = await P.getPokemonByName(selectedPokemon);
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
    fetchPokemonAbilities();
  }, [selectedPokemon, P]);

  return (
    <div className="flex flex-col gap-4 bg-white bg-opacity-30 dark:bg-gray-800 p-6 rounded-xl w-full">
      <h2 className="font-medium text-center sm:text-start">
        {abilities[1] ? "Abilities" : "Ability"}
      </h2>
    { !isLoading ? 
    <>
      {abilities.map((item, i) => (
        <div key={i} className="w-64">
          <h2
            className={clsx('text-gray-800', 'dark:text-gray-400', 'capitalize', item.isHidden && 'underline')}
          >
            {item.ability}
          </h2>
          <p className="text-gray-600 dark:text-gray-500">{item.abilityDescription}</p>
        </div>
      ))}
      </>
      :
      <span className="placeholder w-64 h-64 rounded-2xl"></span>
    }
    </div>
  );
};

export default PokemonAbilities;
