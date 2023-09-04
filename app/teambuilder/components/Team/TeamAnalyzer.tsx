"use client"
import { usePokedex } from '@/context/PokedexContext';
import React, { useCallback, useEffect, useState } from 'react';
import MultiplierList from './MultiplierList';
import { AbilityElement, Pokemon } from 'pokedex-promise-v2';
import { pokemonTypes } from '@/lib/utils';

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
    console.log("This is " + type + " multiplier: " + multiplier)
    if (multiplier > 1 && multiplier <= 2) {
      return <span className="font-semibold text-yellow-500">{`Weak to ${type}`}</span>;
    } else if (multiplier > 2) {
      return <span className="font-bold text-red-500">{`Very weak to ${type}`}</span>;
    }
      else if (multiplier == 0) {
      return <span className="font-bold text-green-500">{`Immune to ${type}`}</span>;
    }
    return null;
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="font-medium">Team Analysis:</div>
      <button
        className="px-4 py-2 mb-4 text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onClick={() => setShowMultipliers(!showMultipliers)}
      >
        {showMultipliers ? 'Hide Multipliers' : 'Show Multipliers'}
      </button>
      {showMultipliers && <MultiplierList multipliers={multipliers} team={team} />}
      <div className="font-medium">Weaknesses:</div>
      {Object.entries(multipliers)
        .filter(([_, multiplier]) => multiplier > 1)
        .map(([type, multiplier]) => (
          <div key={type}>{generateWeaknessText(multiplier, type)}</div>
        ))}
    </div>
  );
};

export default TeamAnalyzer;