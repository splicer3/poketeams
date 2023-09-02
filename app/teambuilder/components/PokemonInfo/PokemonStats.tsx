"use client"
import React, { useEffect, useState } from 'react';
import { usePokedex } from '@/context/PokedexContext';
import { usePokemonContext } from '@/context/PokemonContext';
import PokeAPI from 'pokedex-promise-v2';
import { Statistics } from '@/lib/utils';

const PokemonStats = () => {
  const P = usePokedex();
  const { selectedPokemon } = usePokemonContext();
  const [stats, setStats] = useState<PokeAPI.StatElement[] | null>(null);

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        const pokemon = await P.getPokemonByName(selectedPokemon);
        setStats(pokemon.stats);
      } catch (error) {
        console.error('Error fetching Pokémon stats:', error);
        setStats(null);
      }
    };

    fetchPokemonStats();
  }, [selectedPokemon, P]);

  const calculateColor = (value: number) => {
    // Calculate a color gradient from red to green based on value
    const red = Math.round((255 * (70 - value*0.6)) / 50);
    const green = Math.round((255 * value*0.6) / 100);
    return `rgb(${red},${green},0)`;
  };

  const renderStatPills = () => {
    return Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className={`
          text-white
          p-2
          my-2
          rounded-full
          flex
          justify-center
          items-center
          w-40
          bg-gray-500
        `}
      >
        <div className="flex justify-between w-full">
        <span>{Statistics[i]}</span>
        <span>0</span>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {stats ? (
        <div>
        <h2 className="font-medium text-center sm:text-start">
            Stats
        </h2>
          <div>
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`
                text-white
                p-2
                my-2
                rounded-3xl
                flex
                justify-between
                w-40
              `}
                style={{
                    backgroundColor: calculateColor(stat.base_stat)
                }}
              >
                <div className="flex justify-between w-full">
                <span>{Statistics[i]}</span>
                <span>{stat.base_stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
      <div className="">
        {renderStatPills()}
      </div>
      )}
    </div>
  );
};

export default PokemonStats;