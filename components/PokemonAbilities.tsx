// PokemonAbilities.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { usePokedex } from '@/context/PokedexContext';
import { usePokemonContext } from '@/context/PokemonContext';
import PokeAPI from 'pokedex-promise-v2';
import { Ability } from '@/lib/types';
import { clsx } from 'clsx';

const PokemonAbilities = () => {
  const P = usePokedex();
  const { selectedPokemon } = usePokemonContext();
  const [abilities, setAbilities] = useState<Ability[]>([]);

  useMemo(() => {
    const fetchAbilityDescription = async (abilityName: string) => {
      try {
        const ability = await P.getAbilityByName(abilityName);
        if (ability.name === 'overgrow') {
          return ability.effect_entries[0].effect;
        }
        return ability.effect_entries[1].effect;
      } catch (error) {
        console.error(`Error fetching ability description for ${abilityName}:`, error);
        return '';
      }
    };

    const fetchPokemonAbilities = async () => {
      const pokemon = await P.getPokemonByName(selectedPokemon);
      const fetchedAbilities = await Promise.all(
        pokemon.abilities.map(async (item: PokeAPI.AbilityElement) => ({
          ability: item.ability.name,
          abilityDescription: await fetchAbilityDescription(item.ability.name),
          isHidden: item.is_hidden,
        }))
      );
      setAbilities(fetchedAbilities);
    };
    fetchPokemonAbilities();
  }, [selectedPokemon, P]);

  return (
    <div>
      {abilities.map((item, i) => (
        <div key={i} className="w-32 h-32 sm:w-64 sm:h-64">
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
