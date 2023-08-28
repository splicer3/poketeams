"use client"
import React, { useState } from 'react';
import { TbPokeballOff } from "react-icons/tb"

import { usePokemonContext } from '@/context/PokemonContext';

const PokemonTeamBuilder = () => {
  const { selectedPokemon, setSelectedPokemon } = usePokemonContext();
  const [selectedTeam, setSelectedTeam] = useState<string[]>([]);

  const handleAddToTeam = () => {
    if (selectedTeam.length < 6 && selectedPokemon && !selectedTeam.includes(selectedPokemon)) {
      setSelectedTeam(prevTeam => [...prevTeam, selectedPokemon]);
    }
  };

  const handleRemoveFromTeam = (pokemon: string) => {
    setSelectedTeam(prevTeam => prevTeam.filter(item => item !== pokemon));
  };

  const handleSubmitTeam = () => {
    // Here you can implement the logic to store the selected team in a database or any other desired action
    console.log('Selected Team:', selectedTeam);
  };

  return (
    <div>
      <h2 className="font-medium">Team Management</h2>
      <button
        onClick={handleAddToTeam}
        disabled={!selectedPokemon || selectedTeam.length >= 6 || selectedTeam.includes(selectedPokemon)}
        className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Add to Team
      </button>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {selectedTeam.map(pokemon => (
          <div key={pokemon} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
            <span
              onClick={() => setSelectedPokemon(pokemon)}
              className="capitalize pr-3">
                {pokemon}
            </span>
            <button
              onClick={() => handleRemoveFromTeam(pokemon)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
            >
              <TbPokeballOff/>
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmitTeam}
        disabled={selectedTeam.length < 1}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Submit Team
      </button>
    </div>
  );
};

export default PokemonTeamBuilder;

