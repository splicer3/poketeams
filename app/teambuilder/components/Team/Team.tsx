"use client"
import React, { useState } from 'react';
import { TbPokeballOff } from 'react-icons/tb';
import { usePokemonContext } from '@/context/PokemonContext';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import TeamAnalyzer from './TeamAnalyzer';
import { Pokemon } from 'pokedex-promise-v2';

const PokemonTeamBuilder = () => {
  const { selectedPokemon, setSelectedPokemon, pokemonData } = usePokemonContext();
  const [selectedTeam, setSelectedTeam] = useState<Pokemon[]>([]);
  const authModal = useAuthModal();
  const { user } = useUser();

  const handleAddToTeam = () => {
    if (selectedTeam.length < 6 && selectedPokemon && !selectedTeam.includes(pokemonData!)) {
      setSelectedTeam(prevTeam => [...prevTeam, pokemonData!]);
    }
  };

  const handleRemoveFromTeam = (pokemon: Pokemon) => {
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
    <div className="flex flex-col gap-20 bg-white bg-opacity-30 dark:bg-gray-800 dark:text-white p-6 w-full rounded-xl">
      <div>
        <h2 className="font-medium">Current Team</h2>
        <button
          onClick={handleAddToTeam}
          disabled={!selectedPokemon || selectedTeam.length >= 6 || selectedTeam.includes(pokemonData!)}
          className={`px-4 py-2 mt-2 ${
            !selectedPokemon || selectedTeam.length >= 6 || selectedTeam.includes(pokemonData!)
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white rounded-xl`}
        >
          Add to Team
        </button>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {selectedTeam.map(pokemon => (
            <div key={pokemon.id} className="flex justify-between items-center bg-gray-200 dark:bg-gray-600 p-2 rounded-xl">
              <span
                onClick={() => setSelectedPokemon(pokemonData!.name)}
                className="capitalize pr-3 cursor-pointer"
              >
                {pokemon.name}
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
          } text-white rounded-xl`}
        >
          Submit Team
        </button>
      </div>
      <TeamAnalyzer team={selectedTeam}/>
    </div>
  );
};

export default PokemonTeamBuilder;


