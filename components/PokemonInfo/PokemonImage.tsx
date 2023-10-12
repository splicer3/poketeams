"use client"

import React, { useEffect, useState } from 'react';
import { usePokemon } from '@/context/usePokemon';
import Image from 'next/image';
import { Dna } from 'react-loader-spinner';

const PokemonImage = () => {
  const { pokemonSpecies, pokemonData, isLoading } = usePokemon();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (pokemonData && pokemonData.sprites.other['official-artwork'].front_default) {
      setImageUrl(pokemonData.sprites.other['official-artwork'].front_default);
    }
  }, [pokemonData]);

  return (
    <div className="flex flex-col items-center gap-4">
      {!isLoading && pokemonData ? (
        <Image
        //@ts-ignore
          src={imageUrl || pokemonData.sprites.other['official-artwork'].front_default}
          alt={`Artwork of ${pokemonData.name}`}
          width={256}
          height={256}
          className="hover:scale-105 transition"
          priority
        />
      ) : (
        <Dna width={256} height={256} />
      )}
    </div>
  );
};

export default PokemonImage;
