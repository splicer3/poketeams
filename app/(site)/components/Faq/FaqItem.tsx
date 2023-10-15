import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { TbPokeball } from 'react-icons/tb'

interface FaqItemProps{
    title: string;
    paragraph: string;
}

const FaqItem: React.FC<FaqItemProps> = ({
    title,
    paragraph
}) => {
  return (
    <Disclosure as="div" className="pt-2">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-teal-100 dark:bg-amber-100 px-4 py-2 text-left text-sm font-medium text-teal-900 dark:text-amber-900 hover:bg-teal-200 dark:hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-teal-500 dark:focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
          <span>{title}</span>
          <TbPokeball
            className={`${
              open ? "rotate-180 transform text-teal-600 dark:text-amber-600" : ""
            } h-5 w-5 transition text-teal-500 dark:text-amber-500`}
          />
        </Disclosure.Button>
        <Transition
          enter="transition duration-500 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-300">
            {paragraph}
          </Disclosure.Panel>
        </Transition>
      </>
    )}
  </Disclosure>
  )
}

export default FaqItem