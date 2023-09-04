"use client"

import React from 'react';
import { usePokemonContext } from '@/context/PokemonContext';
import Image from 'next/image';
import { Dna } from 'react-loader-spinner';

const PokemonSprite = () => {
  const { pokemonData, isLoading } = usePokemonContext();

  return (
    <div className="flex flex-col items-center gap-4">
      {!isLoading && pokemonData ? (
        //@ts-ignore
        <Image src={pokemonData.sprites.other['official-artwork'].front_default} alt={`Artwork of ${pokemonData.name}`} width={256} height={256} priority/>
      ) : (
        <Dna width={256} height={256} />
      )}
    </div>
  );
};

export default PokemonSprite;
