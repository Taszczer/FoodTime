"use client"

import { Footer, Hero, SearchBar, RecipeCard } from '@/components'
import { useState, useEffect } from 'react'
import { fetchFood } from '@/utils'


export default function Home() {
  
  const [recipes, setAllRecipes] = useState([])
  const [query, setQuery] = useState("")
  const [limit, setLimit] = useState(12)
  const [loading, setLoading] = useState(false)

  const fetchRecipes = async () => { 
    try {
      const recipes = await fetchFood({ query: query || "", limit })
      setAllRecipes(recipes)
    } catch (error) { 
      console.log(error)
    }
  }

  useEffect(() => { 
    fetchRecipes()
    console.log(query, limit)
  }, [query, limit])

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
          setManufacturer={setQuery}
        />

        {recipes.length > 0 ? (
          <>
            <div className='w-full flex-wrap flex gap-12 py-10'>
              {recipes?.map((item, index) => (
                <div className='mt-10'><RecipeCard recipe={item} key={index} isOdd={index % 2 === 0} /></div>
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
