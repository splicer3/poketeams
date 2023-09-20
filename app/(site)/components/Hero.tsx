"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <motion.section
        className='flex cool-box justify-around self-center h-96 w-[70%]'
    >
      <div className='flex-col w-[40%] gap-10'>
        <h2 className='text-center font-bold text-3xl whitespace-normal'>
          Empowering your team making abilities
        </h2>
        <p>
          PokeTeams is a website that allows you to create, save and edit your Pokemon teams while checking for potential weak points in them.
        </p>
      </div>
      <div>
        <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} alt='Ditto' width={256} height={256} priority/>
      </div>
    </motion.section>
  )
}

export default Hero