import React, { useEffect, useState } from 'react';
import Bar from './Bar';
import PokeAPI from 'pokedex-promise-v2';

interface MultiplierListProps {
  multipliers: Record<string, number>;
  team: PokeAPI.Pokemon[];
}

const MultiplierList: React.FC<MultiplierListProps> = ({ multipliers, team }) => {
  const [groundMultiplier, setGroundMultiplier] = useState(multipliers['ground']);

  useEffect(() => {
    const hasLevitate = team.some(pokemon => 
      pokemon.abilities.some((ability: PokeAPI.AbilityElement) => ability.ability.name === 'levitate')
    );

    setGroundMultiplier(hasLevitate ? 0 : multipliers['ground']);
  }, [team, multipliers]);

  return (
    <ul className="flex flex-col gap-2">
      {Object.entries(multipliers).map(([type, multiplier]) => {
        if (type === 'ground') {
          multiplier = groundMultiplier;
        }

        return (
          <li key={type}>
            <div className='capitalize font-semibold'>{
                multiplier == 0 ? 
                `${type}: Immune` 
                : 
                `${type}: ${multiplier}x`
            }</div>
            <Bar multiplier={multiplier} />
          </li>
        );
      })}
    </ul>
  );
};

export default MultiplierList;