"use client"

import { usePokemonContext } from '@/context/PokemonContext';
import { typeColors } from '@/lib/utils';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { usePokedex } from '@/context/PokedexContext';

const PokemonType = () => {
    const { selectedPokemon, setSelectedPokemon } = usePokemonContext();
    const [types, setTypes] = useState([""]);
    const [isLoading, setIsLoading] = useState(true);
    const P = usePokedex();

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      const fetchPokemonTypes = async () => {
        setIsLoading(true);
            
        const pokemon = await P.getPokemonByName(selectedPokemon);
        const types = pokemon.types.map(item => item.type.name);
        setTypes(types);
        setIsLoading(false);
    }
        fetchPokemonTypes();
    }, [selectedPokemon, P]);

    return (
        <div className="capitalize">
            {!isLoading ? 
            types.map((item, i) => (
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