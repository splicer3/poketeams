"use client"
import React from 'react';
import { usePokemon } from '@/context/usePokemon';
import { Statistics } from '@/lib/utils';

const PokemonStats = () => {
  const { pokemonData, isLoading } = usePokemon();

  const calculateColor = (value: number) => {
    value = Math.min(value, 180);  // Treat any value above 180 as 180
    let red = 255;
    let green = 0;
  
    if (value <= 50) {
      // The color is mostly red
      red = 255;
      green = Math.round((value / 50) * 85);
    } else if (value <= 85) {
      // The color is getting greener
      red = Math.round(255 - ((value - 50) / 60) * 255);
      green = 50 + Math.round(((value - 50) / 35) * 170);
    } else if (value <= 180) {
      // The color is deep green and increasing brightness
      red = 0;
      green = 100 + Math.round(((value - 85) / 95) * 255);
      if (green > 210) green = 210;  // Ensure green does not exceed 255
    }
  
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
<div className="flex flex-col items-center justify-center w-full">
      {!isLoading && pokemonData ? (
        <div className="flex  flex-col items-center justify-center gap-4 px-4 py-6 w-full cool-box">
        <h2 className="font-medium text-center sm:text-start">
            Stats
        </h2>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 px-2 place-items-center w-full">
            {pokemonData.stats.map((stat, i) => (
              <div
                key={i}
                className={`
                text-white
                p-2
                my-2
                rounded-3xl
                flex
                justify-between
                flex-shrink-0
                w-40
                max-w-full
                shadow-lg
                hover:shadow-xl
                hover:scale-105
                transition
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
      <div className="grid grid-cols-2 grid-rows-3 gap-4 place-items-center w-full">
        {renderStatPills()}
      </div>
      )}
    </div>
  );
};

export default PokemonStats;