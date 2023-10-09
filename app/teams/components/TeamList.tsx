"use client"

import Button from '@/components/Button'
import useTeamsByUser from '@/hooks/useTeamsByUser'
import { useUser } from '@/hooks/useUser'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import TeamItem from './TeamItem'

const TeamList = () => {
  const { user } = useUser();
  const { teams, loading, error } = useTeamsByUser(user!.id);

  useEffect(() => {
    console.log(teams)
  }, [teams])
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <motion.section
    className='flex-col cool-box justify-between px-6 items-center self-center w-[70%]'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeInOut", duration: 2}}
>
  <h1 className='text-center text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:to-gray-400 from-gray-800 to-gray-600 py-6'>
    Your teams
  </h1>
  <div className='flex flex-col lg:flex-row w-full justify-around items-center'>
    <div className='flex-col space-y-10'>
    <div>
      {teams!.map((team, index) => (
      <TeamItem key={index} team={team} />
      ))}
    </div>
    </div>
  </div>
</motion.section>
  )
}

export default TeamList