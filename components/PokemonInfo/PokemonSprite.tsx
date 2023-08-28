"use client"
import React, { useEffect, useState } from 'react';
import { usePokedex } from '@/context/PokedexContext';
import { usePokemonContext } from '@/context/PokemonContext';
import PokeAPI from 'pokedex-promise-v2';
import { clsx } from 'clsx';

const PokemonSprite = () => {
  const P = usePokedex();
  const { selectedPokemon } = usePokemonContext();
  const [artworkURL, setArtworkURL] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonArtwork = async () => {
      try {
        const pokemon = await P.getPokemonByName(selectedPokemon);
        setArtworkURL(pokemon.sprites.other['official-artwork'].front_default);
      } catch (error) {
        console.error('Error fetching Pokémon artwork:', error);
        setArtworkURL(null);
      }
    };

    fetchPokemonArtwork();
  }, [selectedPokemon, P]);

  return (
    <div className="flex flex-col items-center gap-4">
      {artworkURL ? (
        <img src={artworkURL} alt={`Artwork of ${selectedPokemon}`} className="w-64 h-64" />
      ) : (
        <p>Loading artwork...</p>
      )}
    </div>
  );
};

export default PokemonSprite;
