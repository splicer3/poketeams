"use client"
import React, { useState } from 'react';
import { TbPokeballOff } from 'react-icons/tb';
import { usePokemonContext } from '@/context/PokemonContext';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';

const PokemonTeamBuilder = () => {
  const { selectedPokemon, setSelectedPokemon } = usePokemonContext();
  const [selectedTeam, setSelectedTeam] = useState<string[]>([]);
  const authModal = useAuthModal();
  const { user } = useUser();

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
    if (!user) {
      return authModal.onOpen();
    }
    console.log('Selected Team:', selectedTeam);
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white p-4 rounded-md">
      <h2 className="font-medium">Team Management</h2>
      <button
        onClick={handleAddToTeam}
        disabled={!selectedPokemon || selectedTeam.length >= 6 || selectedTeam.includes(selectedPokemon)}
        className={`px-4 py-2 mt-2 ${
          !selectedPokemon || selectedTeam.length >= 6 || selectedTeam.includes(selectedPokemon)
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white rounded-md`}
      >
        Add to Team
      </button>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {selectedTeam.map(pokemon => (
          <div key={pokemon} className="flex justify-between items-center bg-gray-200 dark:bg-gray-600 p-2 rounded-md">
            <span
              onClick={() => setSelectedPokemon(pokemon)}
              className="capitalize pr-3 cursor-pointer"
            >
              {pokemon}
            </span>
            <button
              onClick={() => handleRemoveFromTeam(pokemon)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
            >
              <TbPokeballOff />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmitTeam}
        disabled={selectedTeam.length < 1}
        className={`mt-4 px-4 py-2 ${
          selectedTeam.length < 1
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600'
        } text-white rounded-md`}
      >
        Submit Team
      </button>
    </div>
  );
};

export default PokemonTeamBuilder;


