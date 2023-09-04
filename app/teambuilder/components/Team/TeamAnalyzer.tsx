"use client"
import { usePokedex } from '@/context/PokedexContext';
import React, { useCallback, useEffect, useState } from 'react';
import MultiplierList from './MultiplierList';
import { Pokemon } from 'pokedex-promise-v2';

interface TeamAnalyzerProps {
  team: Pokemon[];
}

const TeamAnalyzer: React.FC<TeamAnalyzerProps> = ({ team }) => {
  const P = usePokedex();
  const [multipliers, setMultipliers] = useState<Record<string, number>>({});

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
    setMultipliers({});  // Reset multipliers when team changes

    team.forEach(async pokemonData => {
      const pokemon = pokemonData;

      // Analyze each type of the Pokemon
      for (const typeObj of pokemon.types) {
        await analyzeType(typeObj.type.name);
      }
    });
  }, [team, P, analyzeType]);

  return (
    <div className="flex flex-col gap-8">
      <div className="font-medium">Team Analysis:</div>
      <MultiplierList multipliers={multipliers} team={team} />
    </div>
  );
};

export default TeamAnalyzer;