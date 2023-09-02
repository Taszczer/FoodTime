"use client"

import React from 'react'
import Image from 'next/image'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import { useRouter } from 'next/router'

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
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleChange}
    >
      <div className='z-50 flex-1 max-sm:w-full flex justify-start items-center'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <button type="submit" className="absolute left-[70%] top-2">
          <Image
            src='/search.svg'
            alt='search'
            width={80}
            height={80}
            className='object-contain'
          />
        </button>
      </div>
    </form>
  )
}

export default SearchBar