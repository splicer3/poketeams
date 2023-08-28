"use client"
import React, { useEffect, useState } from 'react';
import { usePokedex } from '@/context/PokedexContext';
import { usePokemonContext } from '@/context/PokemonContext';
import Image from 'next/image';
import { Dna } from 'react-loader-spinner';

const PokemonSprite = () => {
  const P = usePokedex();
  const { selectedPokemon } = usePokemonContext();
  const [isLoading, setIsLoading] = useState(true);
  const [artworkURL, setArtworkURL] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonArtwork = async () => {
      try {
        setIsLoading(true);
        const pokemon = await P.getPokemonByName(selectedPokemon);
        setArtworkURL(pokemon.sprites.other['official-artwork'].front_default);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon artwork:', error);
        setArtworkURL(null);
      }
    };

    fetchPokemonArtwork();
  }, [selectedPokemon, P]);

  return (
    <div className="flex flex-col items-center gap-4">
      {!isLoading && artworkURL ? (
        <Image src={artworkURL} alt={`Artwork of ${selectedPokemon}`} width={256} height={256}/>
      ) : (
        <Dna width={256} height={256} />
      )}
    </div>
  );
};

export default PokemonSprite;
