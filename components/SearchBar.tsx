"use client"

import React from 'react'
import Image from 'next/image'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import fetchFood from '@/utils'
import MealList  from './MealList'

const SearchBar = ( { setManufacturer, setCalories }:any ) => {

  const [searchManufacturer, setSearchManufacturer] = useState('')
  const [searchCalories, setSearchCalories] = useState('')
  
  const handleChange = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  
    if (searchManufacturer === '') {
      return alert('Please fill in the search bar');
    }
  
    setCalories(searchCalories)
    setManufacturer(searchManufacturer);
  }

  const SearchButton = ({ otherClasses } : { otherClasses: string }) => (
    <button type="submit" className={`ml-[-80px] z-10 ${otherClasses}`}>
        <Image
          src='/search.png'
          alt='search'
          width={70}
          height={70}
          className='object-contain'
        />
    </button>
  )

  return (
    <form
      className="mt-4 flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleChange}
    >
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
          <SearchManufacturer
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}
          />  
        <SearchButton otherClasses="sm:hidden" />
        </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <input
          type="number"
          name="calories"
          value={searchCalories}
          onChange={(e) => setSearchCalories(e.target.value)}
          placeholder="Calories..."
          className="w-full text-white placeholder:text-white placeholder:text-base h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm bg-orange-400"
        />

        <SearchButton otherClasses="sm:hidden" />

      </div>
      <SearchButton otherClasses="max-sm:hidden" />

    </form>
  )
}

export default SearchBar