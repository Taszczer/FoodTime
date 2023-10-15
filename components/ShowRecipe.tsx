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
    
    const { label, calories, image } = recipe.recipe

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
                              <Dialog.Panel className='w-full flex flex-row items-center justify-between bg-white px-10 min-h-screen'>
                                  <div className=''>
                                        <Image
                                          src={image}
                                          alt='image z-20'
                                          width={600}
                                          height={600}
                                        />
                                  </div>
                                  <div className=''>
                                    <button
                                        type='button'
                                        className='flex justify-end'
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src='/cancel.png'
                                            alt='close'
                                            width={50}
                                            height={50}
                                        />
                                      </button>
                                      <p>kadfklajk</p>
                                      <h1>ajdkfjafjlka</h1>
                                  </div>
                                  {/* <button
                                      type='button'
                                      className='flex items-center justify-end'
                                      onClick={closeModal}
                                  >
                                      <Image
                                          src='/cancel.png'
                                          alt='close'
                                          width={50}
                                          height={50}
                                      />
                                  </button>
                                  
                                  <div className="">
                                    <h2 className="">
                                        {label} 
                                    </h2>
                                    <div className="">
                                        <div className="">
                                            <h4 className="">Calories</h4>
                                            <p className="">{calories.toFixed(2)}</p>
                                        </div>
                                    </div>
                                  </div> */}
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