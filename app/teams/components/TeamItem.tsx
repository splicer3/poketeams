import { DBTeam } from '@/hooks/useTeamsByUser'
import React from 'react'
import PokemonItem from './PokemonItem'
import useTeamModal from '@/hooks/useTeamModal'
import TeamModal from '@/components/Modals/TeamModal'

interface TeamItemProps {
    team: DBTeam
}

const TeamItem: React.FC<TeamItemProps> = ({ team }) => {
  const teamModal = useTeamModal();

  const handleClick = () => {
    teamModal.setSelectedTeam(team);
    teamModal.onOpen();
  }
  
  return (
    <>
    <button className='flex flex-col 2xl:flex-row items-center justify-between 2xl:w-full 2xl:mx-6 py-4 px-6 mb-8 cool-box hover:scale-105 hover:bg-gray-200/60 dark:hover:bg-gray-700/10 active:scale-100 transition'
            onClick={handleClick}
    >
      <h3 className='text-center font-bold text-lg 2xl:text-xl'>
        {team.name}
      </h3>
      <div className="flex flex-col 2xl:flex-row 2xl:gap-4 gap-2">
        {team.pokemon.map((pokemon, index) => (
            <PokemonItem key={index} pokemon={pokemon} />
          ))}
      </div>
    </button>
    </>
  )
}

export default TeamItem