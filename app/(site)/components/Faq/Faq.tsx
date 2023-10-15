"use client"
import { Disclosure, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { TbPokeball } from 'react-icons/tb'
import FaqItem from './FaqItem'
import { faqData } from '@/lib/data'

const Faq = () => {
  return (
    <motion.div 
        className="mx-auto w-full max-w-md rounded-2xl cool-box px-10 py-6"
        initial={{ opacity: 0, y: 50, }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        viewport={{ once: true }}
    >
    <h3 className='text-center text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:to-gray-400 from-gray-800 to-gray-600 pb-2'>
        FAQ
    </h3>
    {faqData.map((question, i) => (
      <FaqItem key={i} title={question.title} paragraph={question.paragraph}/>
    ))}
  </motion.div>
  )
}

export default Faq