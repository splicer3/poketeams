import MissingNo from '@/public/MissingNo.svg'

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
  return (
    <>
    { pokemon &&
        <Image src={pokemon?.sprites.front_default ? pokemon.sprites.front_default : MissingNo} alt={`Sprite of ${pokemon.name}`} width={width} height={height} className='object-contain'/>
    }
    </>
  )
}

export default PokemonSprite