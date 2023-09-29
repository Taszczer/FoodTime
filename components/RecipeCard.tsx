'use client'

import { RecipeCardProps } from '@/types';
import Image from 'next/image';

interface ForRecipeCardProps {
  isOdd: boolean;
  recipe: RecipeCardProps;
}

const RecipeCard = ({ recipe, isOdd }: ForRecipeCardProps) => {
  const { label, image, ingredients, instructions, calories } = recipe?.recipe;

  const cardBackgroundColor = isOdd ? 'bg-orange-300' : 'bg-orange-400';
  const smallCardBackgroundColor = isOdd ? 'bg-orange-400' : 'bg-orange-300';

  return (
    <>
      <div className='w-[280px] h-[350px]'>
        <div className=''>
          <img src={image} alt={label} className='rounded-t-2xl object-contain min-w-full min-h-full w-full h-[60%]' />
        </div>
        <div className={` ${cardBackgroundColor} h-[120px] rounded-b-2xl mt-2 flex flex-col justify-between`}>
          <p className='text-white font-croissant-one text-center text-base px-6 mt-2 pt-2'>
            {label}
          </p>
          <div className='ml-5 items-center rounded-lg mb-2'>
            <h3 className='text-white text-22px font-croissant-one'>Calories:</h3>
            <p className={`text-white flex justify-center rounded-lg items-center w-[100px] font-bold ml-2 ${smallCardBackgroundColor}`}>
              {calories.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;