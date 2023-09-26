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
      <div className='w-[280px] h-[350px]'>
        <div className=' rounded-2xl '>
          <img src={image} alt={label} className='rounded-t-2xl object-cover w-full h-[60%]'/>
        </div>
        <div className=' bg-orange-300 h-[120px]'>
          <p className='text-white text-center text-base font-bold px-6 mt-2'>
            {label}
          </p>
          {calories < 1000 ? 'malo' : 'duzo'}
        </div>
      </div>
    </>
    
  )
}

export default RecipeCard