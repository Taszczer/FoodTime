"use client"

import { CustomFilterProps } from '@/types'
import React, { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'

const CustomFilter = ({title, options, setFilter}: CustomFilterProps) => {
    const [selected, setSelected] = useState(options[0])
  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => { 
          setSelected(e)
          setFilter(e.value)
        }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className="flex p-3 items-center justify-center w-[190px] h-[48px] mt-6  bg-orange-300 text-white font-croissant-one rounded-2xl">
            <span className='block truncate'>{selected.title}</span>
            <Image
              src='/chevron-up-down.png'
              width={30}
              height={30}
              alt='chevron up down'
              className='ml-4 object-contain'
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white 
              py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) => `relative cursor-default select-none py-3 px-4 ${
                    active ? 'bg-orange-300 text-white' : 'text-black'
                  }`}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
          </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter