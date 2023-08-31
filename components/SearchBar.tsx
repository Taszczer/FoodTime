"use client"

import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'

const SearchBar = () => {

  const [searchManufacturer, setSearchManufacturer] = useState('')

  return (
    <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl">
      <div className='z-100'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar