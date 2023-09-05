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
    const [ firstColor, setFirstColor ] = useState("");
    const [ secondColor, setSecondColor ] = useState("");

    useEffect(() => {
        if (pokemonData) {
            setFirstColor(typeColors[pokemonData.types[0].type.name] + "80");
            setSecondColor(pokemonData.types[1] ? typeColors[pokemonData.types[1].type.name] + "80" : "#fff");
        }
        else {
            setFirstColor("#fff");
            setSecondColor("#fff");
        }
    }, [pokemonData]);

  return (
    <main className={`bg-gradient-to-b from-[${firstColor}] to-[${secondColor}] py-10 flex flex-col justify-center items-stretch gap-10 w-full`}>
        {children}
    </main>
  )
}

export default TypeColor;