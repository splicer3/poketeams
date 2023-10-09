import { DBTeam } from '@/hooks/useTeamsByUser'
import React from 'react'
import PokemonItem from './PokemonItem'

interface TeamItemProps {
    team: DBTeam
}

const TeamItem: React.FC<TeamItemProps> = ({ team }) => {
  return (
    <div>
    {team.pokemon.map((pokemon, index) => (
        <PokemonItem key={index} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default TeamItem