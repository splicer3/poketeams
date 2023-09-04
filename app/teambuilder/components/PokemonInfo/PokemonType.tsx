"use client"

import { usePokemonContext } from '@/context/PokemonContext';
import { typeColors } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const PokemonType = () => {
    const { pokemonData, isLoading } = usePokemonContext();

    return (
        <div className="capitalize">
            {!isLoading && pokemonData ? 
            pokemonData.types.map((type, i) => (
                <div
                key={i}
                style={{
                  backgroundColor: typeColors[type.type.name] || 'gray', // Use the color from the mapping, or gray if not found
                  display: 'inline-block',
                  padding: '8px',
                  borderRadius: '4px',
                  margin: '4px',
                }}
                >
                <Image src={`/TypeIcons/${type.type.name}.svg`} alt={type.type.name} width={50} height={50}/>
                </div>
            )) : 
            <div
            style={{
              backgroundColor: 'gray',
              display: 'inline-block',
              padding: '8px',
              borderRadius: '4px',
              margin: '4px',
            }}
            >
            <Image src={`/TypeIcons/normal.svg`} alt="Normal" width={50} height={50}/>
            </div>
            }
        </div>
    )
}

export default PokemonType