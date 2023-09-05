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
  const { selectedPokemon, pokemonData } = usePokemonContext();
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonAbilities = async () => {
      setIsLoading(true);
      const fetchedAbilities = await Promise.all(
        pokemonData!.abilities.map(async (item: PokeAPI.AbilityElement) => ({
          ability: item.ability.name,
          abilityDescription: await fetchAbilityDescription(item.ability.name, P),
          isHidden: item.is_hidden,
        }))
      );
      setAbilities(fetchedAbilities);
      setIsLoading(false);
    };
    if (pokemonData) {
      fetchPokemonAbilities();
    }
  }, [pokemonData, P]);

  return (
    <div className="flex flex-col gap-4 cool-box p-6 w-full">
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
