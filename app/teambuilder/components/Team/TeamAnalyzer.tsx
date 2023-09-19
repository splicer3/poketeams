"use client"
import { usePokedex } from '@/context/PokedexContext';
import React, { useCallback, useEffect, useState } from 'react';
import MultiplierList from './MultiplierList';
import { AbilityElement, Pokemon } from 'pokedex-promise-v2';
import { pokemonTypes } from '@/lib/utils';
import Button from '@/components/Button';

interface TeamAnalyzerProps {
  team: Pokemon[];
}

const TeamAnalyzer: React.FC<TeamAnalyzerProps> = ({ team }) => {
  const P = usePokedex();
  const [multipliers, setMultipliers] = useState<Record<string, number>>({});
  const [showMultipliers, setShowMultipliers] = useState(false);
  
  const analyzeType = useCallback(async (typeName: string) => {
    const type = await P.getTypeByName(typeName);
    const { double_damage_from, half_damage_from, no_damage_from } = type.damage_relations;
  
    // Update multipliers
    setMultipliers(prev => {
      let newMultipliers = { ...prev };
  
      for (const type of double_damage_from) {
        if (newMultipliers[type.name] !== 0) {  // Add this check
          newMultipliers[type.name] = (newMultipliers[type.name] || 1) * 2;
        }
      }
  
      for (const type of half_damage_from) {
        if (newMultipliers[type.name] !== 0) {  // Add this check
          newMultipliers[type.name] = (newMultipliers[type.name] || 1) / 2;
        }
      }
  
      for (const type of no_damage_from) {
        newMultipliers[type.name] = 0;
      }
  
      return newMultipliers;
    });
  }, [P]);
  
  useEffect(() => {
    // Reset and initialize multipliers when team changes
    const initialMultipliers = pokemonTypes.reduce((acc, curr) => ({ ...acc, [curr]: 1 }), {});
    setMultipliers(initialMultipliers);
  
    team.forEach(async pokemonData => {
      const pokemon = pokemonData;
  
      // Analyze each type of the Pokemon
      for (const typeObj of pokemon.types) {
        await analyzeType(typeObj.type.name);
      }
    });
  }, [team, P, analyzeType]);

  useEffect(() => {
    const hasLevitate = team.some(pokemon => 
      pokemon.abilities.some((ability: AbilityElement) => ability.ability.name === 'levitate')
    );

    if (hasLevitate) {
      setMultipliers(prevMultipliers => ({
        ...prevMultipliers,
        ground: 0
      }));
    }
  }, [team]);


  const generateWeaknessText = useCallback((multiplier: number, type: string) => {
    if (multiplier > 1 && multiplier <= 2) {
      return <span className="bg-orange-100/70 dark:bg-yellow-500/40 rounded-xl whit px-4 py-2 font-semibold text-yellow-500 dark:text-yellow-300 whitespace-nowrap">{`Weak to ${type.toUpperCase()}`}</span>;
    } else if (multiplier > 2) {
      return <span className="bg-red-100/70 dark:bg-red-500/40 rounded-xl px-4 py-2 font-bold text-red-500 dark:text-red-300 whitespace-nowrap">{`Very weak to ${type.toUpperCase()}`}</span>;
    }
    return null;
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="font-semibold">Team Analysis</div>
        <div className="flex gap-10">
        <div className="flex flex-col 2xl:w-96 gap-4">
          <div className="flex flex-wrap gap-4">
            {Object.entries(multipliers)
              .filter(([_, multiplier]) => multiplier > 1)
              .map(([type, multiplier]) => (
                <div 
                className="flex justify-center my-1"
                key={type}>
                  {generateWeaknessText(multiplier, type)}
                </div>
              ))}
        </div>
          <Button
          onClick={() => setShowMultipliers(!showMultipliers)}
          secondary
          >
          {showMultipliers ? 'Hide Multipliers' : 'Show Multipliers'}
          </Button>
          {showMultipliers && <MultiplierList multipliers={multipliers} team={team} />}
        </div>
      </div>
    </div>
  );
};

export default TeamAnalyzer;