"use client"

import { Footer, Hero, SearchBar, RecipeCard, ShowMore } from '@/components'
import { useState, useEffect } from 'react'
import { fetchFood } from '@/utils'
import {Tilt} from 'react-tilt'



export default function Home() {
  
  const [recipes, setAllRecipes] = useState([])
  const [query, setQuery] = useState("")
  const [limit, setLimit] = useState(12)
  const [hasMoreRecipes, setHasMoreRecipes] = useState(true)
  const [loading, setLoading] = useState(false)

  const fetchRecipes = async () => { 
    try {
      const recipes = await fetchFood({ query: query || "", limit })
      
      setHasMoreRecipes(recipes.length === limit)
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
            <div className='w-full flex-wrap flex gap-12 py-10 max-sm:items-center max-sm:justify-center'>
              {recipes?.map((item, index) => (
                <>
                  <Tilt>
                    <div className='mt-16 cursor-pointer'>
                      <RecipeCard recipe={item} skey={index} isOdd={index % 2 === 0} />
                    </div>
                  </Tilt>
                </>
              ))}
            </div>
            <br />
            {hasMoreRecipes && (
              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > recipes.length}
                setLimit={setLimit}
              />
            )}
          </>
        ): ""}
      </div>
    </main>
  )
}
