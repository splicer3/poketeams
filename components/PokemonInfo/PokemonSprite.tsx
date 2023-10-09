import { usePokemon } from '@/context/usePokemon'
import Image from 'next/image'
import { Pokemon } from 'pokedex-promise-v2';
import React from 'react'

interface PokemonSpriteProps {
    height: number;
    width: number;
    pokemon?: Pokemon;
}

const PokemonSprite: React.FC<PokemonSpriteProps> = ({
    height,
    width,
    pokemon
}) => {
    const { pokemonData } = usePokemon();
  return (
    <>
    { (pokemonData || pokemon) &&
        <Image src={pokemon ? pokemon.sprites.front_default! : pokemonData!.sprites.front_default!} alt='pokemon sprite' width={width} height={height}/>
    }
    </>
  )
}

export default PokemonSprite