"use client"
import { usePokemonContext } from '@/context/PokemonContext'
import { typeColors } from '@/lib/utils';
import React, { useEffect, useState } from 'react'

interface typeColorProps {
    children: React.ReactNode;
}

const TypeColor: React.FC<typeColorProps> = ({
    children
}) => {
    const { pokemonData } = usePokemonContext();
    const [ color, setColor ] = useState("");

    useEffect(() => {
        if (!pokemonData) {
            setColor("#fff")
        }
        else {
        setColor(typeColors[pokemonData.types[0].type.name])
        }
    }, [pokemonData]);

  return (
    <main className={`bg-gradient-to-b from-[${color}] to-gray-100 py-10 flex flex-col sm:flex-row justify-center items-stretch gap-16 w-full`}>
        {children}
    </main>
  )
}

export default TypeColor;