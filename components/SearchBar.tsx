"use client"

import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'

const SearchBar = ( { setManufacturer }:any ) => {

  const [searchManufacturer, setSearchManufacturer] = useState('')

  const handleChange = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  
    if (searchManufacturer === '') {
      return alert('Please fill in the search bar');
    }
  
    setManufacturer(searchManufacturer);
  }

  return (
    <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl" onSubmit={handleChange}>
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