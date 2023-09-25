'use client'

import { RecipeCardProps } from '@/types'
import Image from 'next/image'

interface ForRecipeCardProps{
  recipe: RecipeCardProps
}

const RecipeCard = ({ recipe }: ForRecipeCardProps) => {
  
  const { label, image, ingredients, instructions, calories } = recipe?.recipe

  return (
    <>
      <div className=''>
        <div className='w-[270px] h-[300px] bg-orange-300 rounded-2xl'>
          <img src={image} alt={label} className='rounded-t-2xl object-cover w-full h-[60%]'/>
          <p className='text-white text-center text-base font-bold p-7'>
            {label}
          </p>
         {calories < 1000 ? 'malo' : 'duzo'}
        </div>
      </div>
    </>
    
  )
}

export default RecipeCard