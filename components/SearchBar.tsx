import React from 'react'
import { Combobox } from '@headlessui/react'

const SearchBar = () => {
  return (
    <form action="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl">
          <input
            className='w-full h-[48px] pl-12 p-4 text-sm cursor-pointer outline-none rounded-r-full max-sm:rounded-ful bg-slate-400'
            type="text"
            name="model"
            placeholder="Hamburger..."
        />
    </form>
  )
}

export default SearchBar