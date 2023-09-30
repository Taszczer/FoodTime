"use client"

import React from 'react'
import Image from 'next/image'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import { fetchFood } from '@/utils'

const SearchBar = ({ setManufacturer, setCaloriesManufacturer }:any) => {

  const [query, setQuery] = useState("")
  const [calories, setCalories] = useState("") 
  const [limit, setLimit] = useState(10)
  
  const caloriesNumber = parseInt(calories, 10);

  const changedCalories = caloriesNumber <= 1500 ? 1500 : caloriesNumber <= 5000 ? 5000 : 0;

  const handleChange = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (query === "") {
      return alert("Please fill in the search bar")
    }

    setManufacturer(query)
    setCaloriesManufacturer(changedCalories)
  }

  const SearchButton = ({ otherClasses } : { otherClasses: string }) => (
    <button type="submit" className={`max-sm:ml-[-80px] sm:ml-[-20px] z-10 ${otherClasses}`}>
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
          selected={query}
          setSelected={setQuery}
        />  
        <SearchButton otherClasses="sm:hidden"/>
        </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
      <SearchButton otherClasses="max-sm:hidden " />
      </div>
    </form>
  )
}

export default SearchBar