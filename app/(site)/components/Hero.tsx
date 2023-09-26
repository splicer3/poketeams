"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Porygon from './Porygon'
import Button from '@/components/Button'

const Hero = () => {
  return (
    <motion.section
        className='flex-col cool-box justify-between px-6 items-center self-center w-[70%]'
    >
      <h1 className='text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:to-gray-400 from-gray-800 to-gray-600 py-6'>
        Supercharge your team making abilities
      </h1>
      <div className='flex flex-col lg:flex-row w-full justify-around items-center'>
        <div className='flex-col space-y-10'>
          <p className="text-center font-medium text-xl sm:text-2xl max-w-lg">
            PokeTeams is a website that allows you to create, save and edit your Pokemon teams while checking for potential weak points in them.
          </p>
          <div className='flex flex-col justify-center sm:flex-row gap-2 sm:gap-0'>
            <Button big>
              Log In
            </Button>
            <Button secondary>
              Start building
            </Button>
          </div>
        </div>
        <div className='flex justify-center py-5'>
        <Porygon/>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero