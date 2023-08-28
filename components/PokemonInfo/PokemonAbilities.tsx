"use client"
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { usePokedex } from '@/context/PokedexContext';
import { usePokemonContext } from '@/context/PokemonContext';
import PokeAPI from 'pokedex-promise-v2';
import { Ability } from '@/lib/types';
import { clsx } from 'clsx';
import { fetchAbilityDescription } from '@/lib/utils';

const PokemonAbilities = () => {
  const P = usePokedex();
  const { selectedPokemon } = usePokemonContext();
  const [abilities, setAbilities] = useState<Ability[]>([]);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const fetchPokemonAbilities = async () => {
      const pokemon = await P.getPokemonByName(selectedPokemon);
      const fetchedAbilities = await Promise.all(
        pokemon.abilities.map(async (item: PokeAPI.AbilityElement) => ({
          ability: item.ability.name,
          abilityDescription: await fetchAbilityDescription(item.ability.name, P),
          isHidden: item.is_hidden,
        }))
      );
      setAbilities(fetchedAbilities);
    };
    fetchPokemonAbilities();
  }, [selectedPokemon, P]);

  return (
    <div className="flex flex-col gap-4">
      {abilities.map((item, i) => (
        <div key={i} className="w-64">
          <h2
            className={clsx('text-gray-800', 'capitalize', item.isHidden && 'font-bold')}
          >
            {item.ability}
          </h2>
          <p className="text-gray-600">{item.abilityDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonAbilities;
