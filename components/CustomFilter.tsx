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
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              width={20}
              height={20}
              alt='chevron up down'
              className='ml-4 object-contain'
            />
          </Listbox.Button>
          <Transition
              
          >

          </Transition>
          </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter