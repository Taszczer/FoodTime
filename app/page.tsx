"use client"

import { Footer, Hero, Navbar, Carousel, SearchBar, RecipeCard } from '@/components'
import Image from 'next/image'
import { useState } from 'react'
import { fetchFood } from '@/utils'


export default function Home() {
  
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => { 
    const recipes = await fetchFood({query, limit})
    setRecipes(recipes)
  }

  return (
    <main className=""> 
      <Hero />
      <div className='mt-12 px-6 sm:px-16 py-4 max-w-[1440px] mx-auto' id='discover'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
            <h1 className='text-orange-400 text-4xl font-extrabold'>Food catalog</h1>
            <p className='font-bold text-orange-300 text-2xl'>Order and enjoy</p>
          </div>
        </div>
        <SearchBar
        />

        {recipes?.length > 0 ? (
          <>
            <div className='w-full flex-wrap flex gap-10 px-0 lg:px-10 py-10'>
              {recipes?.map((item, index) => (
                <RecipeCard recipes={recipes} key={index} />
              ))}
            </div>
          </>
        ) : <div className='text-center text-2xl text-orange-600'>
              <p>No results found</p>
            </div>}
      </div>
    </main>
  )
}
