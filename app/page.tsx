"use client"

import { Footer, Hero, SearchBar, RecipeCard, ShowMore, CustomFilter } from '@/components'
import { useState, useEffect } from 'react'
import { fetchFood } from '@/utils'
import {Tilt} from 'react-tilt'
import Image from 'next/image'
import { forButtonDiet } from '@/constants'



export default function Home() {
  
  const [recipes, setAllRecipes] = useState([])
  const [query, setQuery] = useState("")
  const [diet, setDiet] = useState("")
  const [limit, setLimit] = useState(12)
  const [hasMoreRecipes, setHasMoreRecipes] = useState(true)
  const [loading, setLoading] = useState(false)

  const fetchRecipes = async () => { 
    setLoading(true)
    try {
      const recipes = await fetchFood({
        query: query || "",
        limit,
        diet: diet || ""
      })
      
      setHasMoreRecipes(recipes.length === limit)
      setAllRecipes(recipes)
    } catch (error) { 
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { 
    fetchRecipes()
    console.log(query, limit, diet)
  }, [query, limit, diet])

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
        <div className='flex justify-between'>
          <SearchBar
            setManufacturer={setQuery}
          />
          <div className=''>
            <CustomFilter
                title='diet'
                options={forButtonDiet.map(option => ({ title: option.title, value: option.value }))}
                setFilter={setDiet}
            />
          </div>
        </div>  
        {recipes.length > 0 ? (
          <>
            <div className='w-full flex-wrap flex sm:items-center max-md:justify-center gap-12 py-10 max-sm:items-center max-sm:justify-center'>
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

            {loading && (
              <div className='w-full flex justify-center items-center mt-20 '>
                <h1 className='text-orange-300 font-croissant-one text-[44px]'>Wait a second</h1>
              </div>
            )}

            <br />
            {hasMoreRecipes && (
              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > recipes.length}
                setLimit={setLimit}
              />
            )}
          </>
        ) : (<>
            <h3 className='flex justify-center items-center text-[40px] text-orange-400 font-croissant-one'>
              Write what you are looking for
            </h3>
        </>)}
      </div>
    </main>
  )
}
