"use client"

import { usePokemonContext } from '@/context/PokemonContext';
import { typeColors } from '@/lib/utils';

import React, { useEffect, useMemo, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import Image from 'next/image';

const PokemonType = () => {
    const { selectedPokemon, setSelectedPokemon } = usePokemonContext();
    const [types, setTypes] = useState([""])
    const P = useMemo(() => new Pokedex(), []);

    useEffect (() => {
        const fetchPokemonTypes = async () => {
            const pokemon = await P.getPokemonByName(selectedPokemon);
            const types = pokemon.types.map(item => item.type.name);
            setTypes(types);
        }
        fetchPokemonTypes();
    }, [selectedPokemon, P])

    return (
        <div className="capitalize">
            {types.map((item, i) => (
                        <div
                        key={i}
                        style={{
                          backgroundColor: typeColors[item] || 'gray', // Use the color from the mapping, or gray if not found
                          display: 'inline-block',
                          padding: '8px',
                          borderRadius: '4px',
                          margin: '4px',
                        }}
                      >
                <Image src={`/TypeIcons/${item}.svg`} alt={item} width={50} height={50}/>
                </div>
            ))}
        </div>
    )
}

export default PokemonType