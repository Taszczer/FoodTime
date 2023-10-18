'use client'

import { RecipeCardProps } from '@/types'
import Image from 'next/image'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'

interface RecipeDetailsProps {
    isOpen: boolean
    closeModal: () => void
    recipe:RecipeCardProps
}

const ShowRecipe = ({isOpen, closeModal, recipe}:RecipeDetailsProps) => {
    
  const { label, calories, image, ingredients, dietLabels, cautions, cuisineType } = recipe.recipe
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  }

  const secondfadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.1, ease: easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  }

  const fadeInLeft = {
    initial: {
      x: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  }

  return (
      <>
          <Transition
              appear
              show={isOpen}
              as={Fragment}
          >
              <Dialog
                  as='div'
                  className='relative z-50'
                  onClose={closeModal}
              >
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                  </Transition.Child>
                  
                  <div className='fixed inset-0 h-screen'>
                      <div className=''>
                          <Transition.Child
                              as={Fragment}
                              enter='easy-out duration-300'
                              enterFrom='opacity-0 scale-95'
                              enterTo='opacity-100 scale-100'
                              leave='easy-in duration-200'
                              leaveFrom='opacity-100 scale-100'
                              leaveTo='opacity-0 scale-95'
                          >
                              <Dialog.Panel className='flex xl:flex-row flex-col relative z-0 w-full bg-white min-h-screen'>
                                <div className=''>
                                    <Image
                                      src={image}
                                      alt='image'
                                      width={1200}
                                      height={800}
                                      className='h-screen rounded-r-full'
                                    />
                                   </div>{/* without this div it's all crushing xd */}
                                  <div className='w-full mt-8 pr-8'>
                                      <motion.button
                                          variants={fadeInLeft}
                                          initial='initial'
                                          animate='animate'
                                          type='button'
                                          className='xl:flex-[1.5] flex justify-end w-full '
                                          onClick={closeModal}
                                      >
                                        <Image
                                            src='/cancel.png'
                                            alt='close'
                                            width={50}
                                            height={50}
                                        />
                                      </motion.button>
                                      <motion.div
                                        className='flex justify-end pt-12 pr-[80px]'
                                        variants={fadeInUp}
                                        initial='initial'
                                        animate='animate'
                                      >
                                        <div className='text-right w-full'>
                                          <h1 className='font-croissant-one text-3xl text-orange-400'>{label}</h1>
                                          <p className='text-orange-300 text-2xl mt-3 text-right font-bold mr-5'>Ingradients:</p>
                                            <ul className=' font-montserrat text-base text-orange-300 mt-6 max-h-[250px] overflow-y-auto'>
                                                {ingredients.map((ingredient, index) => (
                                                    <li key={index} className='mr-5'>{ingredient.text + " - "}</li>
                                                ))}
                                            </ul>
                                            <div className='flex items-center flex-row'>
                                              <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9}}
                                                className='items-center w-[250px] h-[50px] bg-orange-400 text-white font-bold text-2xl rounded-2xl mt-6 ml-10'
                                                onClick={() => alert("Sorry this function dont work")}
                                              >
                                                  Buy it now
                                              </motion.button>
                                              <motion.div variants={secondfadeInUp} className='grid grid-rows-2 justify-end grid-flow-col items-center w-full gap-5 mt-5'>
                                                  <div className='bg-orange-300 h-[35px] px-7 w-fit p-1 rounded-2xl mt-3'>
                                                    <p className='text-white text-center text-base font-montserrat'>{dietLabels.join(', ')}</p>
                                                  </div>
                                                  {Array.isArray(cautions) && cautions.length === 0 ?
                                                      <div className='bg-orange-500 h-[35px] px-7 w-fit p-1 rounded-2xl mt-3'>
                                                        <p className='text-white text-center text-base font-montserrat'>There are no sulfites</p>
                                                      </div>
                                                      :
                                                      <div className='bg-orange-500 h-[35px] px-7 w-fit p-1 rounded-2xl mt-3'>
                                                        <p className='text-white text-center text-base font-montserrat'>There are sulfites</p>
                                                      </div>
                                                  }
                                                  <div className='bg-orange-400 h-[35px] px-7 w-fit p-1 rounded-2xl mt-3'>
                                                    <p className='text-white text-center text-base font-montserrat'>{cuisineType}</p>
                                                  </div>
                                                  <div className='bg-orange-300 h-[35px] px-7 w-fit p-1 rounded-2xl mt-3'>
                                                    <p className='text-white text-center text-base font-montserrat'>{calories.toFixed(2)+ " cal"}</p>
                                                  </div>
                                            </motion.div>
                                          </div>
                                        </div>
                                      </motion.div>
                                  </div>    
                              </Dialog.Panel>
                          </Transition.Child>
                      </div>
                  </div>
              </Dialog>
          </Transition>
      </>
  )
}

export default ShowRecipe