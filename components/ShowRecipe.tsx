'use client'

import { RecipeCardProps } from '@/types'
import Image from 'next/image'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface RecipeDetailsProps {
    isOpen: boolean
    closeModal: () => void
    recipe:RecipeCardProps
}

const ShowRecipe = ({isOpen, closeModal, recipe}:RecipeDetailsProps) => {
    
    const { label, calories, image, ingredients, dietLabels, cautions} = recipe.recipe

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
                              <Dialog.Panel className='flex xl:flex-row flex-col gap-5 relative z-0 w-full bg-white px-10 py-8 min-h-screen'>
                                  <div className='flex items-center justify-end'>
                                        <Image
                                          src={image}
                                          alt='image'
                                          width={800}
                                          height={800}
                                        />
                                  </div>
                                  <div className='w-full '>
                                  <button
                                        type='button'
                                        className='xl:flex-[1.5] flex justify-end w-full'
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src='/cancel.png'
                                            alt='close'
                                            width={50}
                                            height={50}
                                        />
                                      </button>
                                      <div className='flex justify-end pt-12 pr-[80px]'>
                                        <div className='text-right w-full'>
                                            <h1 className='font-croissant-one text-3xl text-orange-400'>{label}</h1>
                                            <ul className=' font-montserrat text-base text-orange-300 mt-6'>
                                                {ingredients.map((ingredient, index) => (
                                                    <li key={index}>{ingredient.text }</li>
                                                ))}
                                              </ul>
                                              <div className='flex justify-end items-center w-full gap-5 mt-5'>
                                                  <div className='bg-orange-300 h-[35px] px-7 w-fit p-1 rounded-2xl mt-3'>
                                                    <p className='text-white text-center text-base font-montserrat'>{dietLabels.join(' and ')}</p>
                                                  </div>
                                                  <div className='bg-orange-400 h-[35px] px-7 w-fit p-1 rounded-2xl mt-3'>
                                                    <p className='text-white text-center text-base font-montserrat'>{calories.toFixed(2)}</p>
                                                  </div>
                                                  {Array.isArray(cautions) && cautions.length === 0 ?
                                                        ""
                                                      :
                                                      <div className='bg-orange-500 h-[35px] px-7 w-fit p-1 rounded-2xl mt-3'>
                                                        <p className='text-white text-center text-base font-montserrat'>{cautions}</p>
                                                      </div>
                                                  }
                                              </div>    
                                        </div>
                                      </div>
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