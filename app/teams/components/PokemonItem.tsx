import { usePokedex } from '@/context/usePokedex';
import useTeamPokemonPreview from '@/hooks/useTeamPokemonPreview';
import { DBTeamPokemon } from '@/context/useTeamsByUser';
import { processName } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

interface PokemonItemProps {
    pokemon: DBTeamPokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
    const P = usePokedex();
    const { sprite, name, isLoading } = useTeamPokemonPreview(P, pokemon.pokemon_name, pokemon.variety);

    if (isLoading) {
        return (
            <div>
                {pokemon.pokemon_name}
            </div>
        )
    }

    return (
        <div className='flex gap-2 items-center justify-center'>
            <Image src={sprite} alt='Pokemon sprite' width={50} height={50}/>
            <p className='capitalize'>
                {processName(name)}
            </p>
        </div>
    )
    }

    export default PokemonItem