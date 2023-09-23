"use client"

import React from 'react'
import Image from 'next/image'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import { fetchFood } from '@/utils'

const SearchBar = () => {

  const [calories, setCalories] = useState("")
  const [query, setQuery] = useState("")
  const [limit, setLimit] = useState(10)
  
  const handleChange = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

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
          />  
        <SearchButton otherClasses="sm:hidden"/>
        </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
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