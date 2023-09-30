'use client'

import { RecipeCardProps } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ForRecipeCardProps {
  isOdd: boolean
  recipe: RecipeCardProps
  skey:number
}

const RecipeCard = ({ recipe, skey, isOdd }: ForRecipeCardProps) => {
  const { label, image, calories } = recipe?.recipe;

  const cardBackgroundColor = isOdd ? 'bg-orange-300' : 'bg-orange-400'
  const smallCardBackgroundColor = isOdd ? 'bg-orange-400' : 'bg-orange-300'

  const animationVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  }

  const animationTransition = {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: skey * 0.1,  
  }

  return (
    <>
      <motion.div
        initial='initial'
        animate='animate'
        variants={animationVariants}
        transition={animationTransition}
        viewport={{ once: true  }}
        className='w-[290px] h-[350px]' 
      >
        <div className=''>
          <Image src={image} alt={label} width={200} height={450} className='rounded-t-2xl object-contain min-w-full min-h-full w-full h-[60%]' />
        </div>
        <div className={` ${cardBackgroundColor} h-[120px] rounded-b-2xl mt-2 max-mt-2 flex flex-col justify-between`}>
          <p className='text-white font-croissant-one text-center text-base px-6 mt-2 pt-2 max-h-[83px] overflow-y-hidden'>
            {label}
          </p>
          <div className='flex justify-between ml-5 mr-5 mb-3'>
            <div className='flex flex-col'>
              <h3 className='text-white text-22px font-croissant-one'>Calories:</h3>
              <p className={`text-white flex justify-center rounded-lg items-center w-[100px] font-bold ml-2 ${smallCardBackgroundColor}`}>
                {calories.toFixed(2)}
              </p>
            </div>
            <button className='flex'>
              <h3 className='text-white flex justify-center items-center text-20px font-croissant-one'>Clik me:)</h3>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RecipeCard;
   