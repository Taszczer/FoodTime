'use client'

import { RecipeCardProps } from '@/types'
import Image from 'next/image'

interface ForRecipeCardProps{
  isOdd:boolean
  recipe: RecipeCardProps
}

const RecipeCard = ({ recipe, isOdd }: ForRecipeCardProps) => {
  const { label, image, ingredients, instructions, calories } = recipe?.recipe;

  const cardBackgroundColor = isOdd ? "bg-orange-300" : "bg-orange-400"

  return (
    <>
      <div className='w-[280px] h-[350px]'>
        <div className=''>
          <img src={image} alt={label} className='rounded-t-2xl object-contain min-w-full min-h-full w-full h-[60%]'/>
        </div>
        <div className={` ${cardBackgroundColor} h-[120px] rounded-b-2xl`}>
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