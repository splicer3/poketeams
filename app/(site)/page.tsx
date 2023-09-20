import { motion } from 'framer-motion'
import React from 'react'
import Hero from './components/Hero'

const page = () => {
  return (
    <main className="pb-10 pt-40 flex flex-col justify-center items-stretch gap-10 w-full">
    <Hero/>
</main>
  )
}

export default page